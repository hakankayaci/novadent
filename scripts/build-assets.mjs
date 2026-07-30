import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_ROOT = path.join(ROOT, "assets", "source", "novadent");
const PUBLIC_ROOT = path.join(ROOT, "public");

const source = (file) => path.join(SOURCE_ROOT, file);
const output = (...segments) => path.join(PUBLIC_ROOT, ...segments);

const requiredSources = [
  "brand-wave.jpg",
  "hero-brand.png",
  "hero-smile-4k.webp",
  "clinic-chair.png",
  "clinic-logo-wall.png",
  "clinic-scanner.png",
  "clinic-room-a.png",
  "clinic-room-b.png",
  "clinic-lounge.png",
  "clinic-dental-unit.png",
];

for (const file of requiredSources) {
  if (!fs.existsSync(source(file))) {
    throw new Error(`Missing Novadent source asset: assets/source/novadent/${file}`);
  }
}

for (const directory of [
  "images/novadent/brand",
  "images/novadent/hero",
  "images/novadent/clinic",
  "images/novadent/social",
]) {
  fs.mkdirSync(output(...directory.split("/")), { recursive: true });
}

const AVIF = { quality: 58, effort: 7, chromaSubsampling: "4:2:0" };
const WEBP = { quality: 78, alphaQuality: 100, effort: 6, smartSubsample: true };
const written = [];

async function report(file) {
  if (path.extname(file).toLowerCase() === ".ico") {
    const relative = path.relative(PUBLIC_ROOT, file).replaceAll("\\", "/");
    written.push(
      `${relative}  16x16 + 32x32 + 48x48  ` +
        `${(fs.statSync(file).size / 1024).toFixed(0)} KB  ico`,
    );
    return;
  }

  const metadata = await sharp(file).metadata();
  const relative = path.relative(PUBLIC_ROOT, file).replaceAll("\\", "/");
  written.push(
    `${relative}  ${metadata.width}x${metadata.height}  ` +
      `${(fs.statSync(file).size / 1024).toFixed(0)} KB  ${metadata.format}`,
  );
}

async function writeImage(image, file, format) {
  const pipeline = image.clone();

  if (format === "avif") {
    await pipeline.avif(AVIF).toFile(file);
  } else if (format === "webp") {
    await pipeline.webp(WEBP).toFile(file);
  } else if (format === "png") {
    await pipeline.png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(file);
  } else {
    throw new Error(`Unsupported output format: ${format}`);
  }

  await report(file);
}

async function writeAvifAndWebp(image, directory, name) {
  await writeImage(image, output("images", "novadent", directory, `${name}.avif`), "avif");
  await writeImage(image, output("images", "novadent", directory, `${name}.webp`), "webp");
}

async function buildHero() {
  const hero = sharp(source("hero-brand.png")).rotate();
  const smile = sharp(source("hero-smile-4k.webp")).rotate();

  await writeAvifAndWebp(
    hero.resize(1728, 910, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: true,
    }),
    "hero",
    "hero-desktop",
  );

  await writeAvifAndWebp(
    hero.resize(960, 720, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: true,
    }),
    "hero",
    "hero-mobile",
  );

  await writeAvifAndWebp(
    smile.resize(1920, 1080, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    }),
    "hero",
    "hero-smile-desktop",
  );

  await writeAvifAndWebp(
    smile.resize(960, 540, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    }),
    "hero",
    "hero-smile-mobile",
  );
}

const clinicImages = [
  ["clinic-chair.png", "chair", 1020],
  ["clinic-logo-wall.png", "logo-wall", 1020],
  ["clinic-scanner.png", "scanner", 1020],
  ["clinic-room-a.png", "room-a", 512],
  ["clinic-room-b.png", "room-b", 512],
  ["clinic-lounge.png", "lounge", 1020],
  ["clinic-dental-unit.png", "dental-unit", 1020],
];

async function buildClinic() {
  for (const [file, name, width] of clinicImages) {
    const image = sharp(source(file))
      .rotate()
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 });
    await writeAvifAndWebp(image, "clinic", name);
  }
}

const socialImages = [
  ["clinic-chair.png", "chair", 720],
  ["clinic-logo-wall.png", "logo-wall", 720],
  ["clinic-scanner.png", "scanner", 720],
  ["clinic-lounge.png", "lounge", 720],
  ["clinic-dental-unit.png", "dental-unit", 720],
  // The source is only 512x384, so this stays a deliberately small tile.
  ["clinic-room-a.png", "room-a", 384],
];

async function buildSocial() {
  for (const [file, name, size] of socialImages) {
    const image = sharp(source(file))
      .rotate()
      .resize(size, size, {
        fit: "cover",
        position: "centre",
        kernel: sharp.kernel.lanczos3,
        withoutEnlargement: true,
      });
    await writeAvifAndWebp(image, "social", name);
  }
}

function alphaFromOfficialWhite(red) {
  return Math.max(0, Math.min(255, Math.round((red - 48) * 1.42)));
}

async function extractOfficialLockup({ red, green, blue }) {
  const crop = await sharp(source("brand-wave.jpg"))
    .extract({ left: 119, top: 397, width: 838, height: 284 })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = crop.info;
  const rgba = Buffer.alloc(width * height * 4);

  for (let index = 0; index < width * height; index += 1) {
    const sourceOffset = index * channels;
    const targetOffset = index * 4;

    rgba[targetOffset] = red;
    rgba[targetOffset + 1] = green;
    rgba[targetOffset + 2] = blue;
    rgba[targetOffset + 3] = alphaFromOfficialWhite(crop.data[sourceOffset]);
  }

  return sharp(rgba, { raw: { width, height, channels: 4 } });
}

async function extractOfficialAMark() {
  const crop = await sharp(source("brand-wave.jpg"))
    .extract({ left: 620, top: 365, width: 390, height: 350 })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = crop.info;
  const rgba = Buffer.alloc(width * height * 4);
  const active = new Uint8Array(width * height);

  for (let index = 0; index < width * height; index += 1) {
    const sourceOffset = index * channels;
    const targetOffset = index * 4;
    const alpha = alphaFromOfficialWhite(crop.data[sourceOffset]);

    rgba[targetOffset] = 255;
    rgba[targetOffset + 1] = 255;
    rgba[targetOffset + 2] = 255;
    rgba[targetOffset + 3] = alpha;
    active[index] = alpha >= 56 ? 1 : 0;
  }

  // Keep only the largest connected white component. This removes the nearby
  // "DENTAL CLINIC" letters while preserving the official A/floss silhouette.
  const visited = new Uint8Array(active.length);
  let largest = [];

  for (let seed = 0; seed < active.length; seed += 1) {
    if (!active[seed] || visited[seed]) continue;

    const component = [];
    const queue = [seed];
    visited[seed] = 1;

    for (let cursor = 0; cursor < queue.length; cursor += 1) {
      const index = queue[cursor];
      component.push(index);
      const x = index % width;
      const y = Math.floor(index / width);
      const neighbours = [
        x > 0 ? index - 1 : -1,
        x + 1 < width ? index + 1 : -1,
        y > 0 ? index - width : -1,
        y + 1 < height ? index + width : -1,
      ];

      for (const neighbour of neighbours) {
        if (neighbour >= 0 && active[neighbour] && !visited[neighbour]) {
          visited[neighbour] = 1;
          queue.push(neighbour);
        }
      }
    }

    if (component.length > largest.length) largest = component;
  }

  const keep = new Uint8Array(active.length);
  for (const index of largest) keep[index] = 1;
  for (let index = 0; index < keep.length; index += 1) {
    if (!keep[index]) rgba[index * 4 + 3] = 0;
  }

  return sharp(rgba, { raw: { width, height, channels: 4 } })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

async function iconPng(mark, size) {
  const markSize = Math.round(size * 0.7);
  const markBuffer = await sharp(mark)
    .resize(markSize, markSize, {
      fit: "contain",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const background = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#031B45"/>
          <stop offset=".62" stop-color="#07547B"/>
          <stop offset="1" stop-color="#08A8C8"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" fill="url(#bg)"/>
      <path d="M-${size * 0.08} ${size * 0.72} Q${size * 0.35} ${size * 0.48} ${size * 1.08} ${size * 0.74} V${size} H-${size * 0.08}Z"
            fill="#032B64" fill-opacity=".72"/>
    </svg>`,
  );

  return sharp(background)
    .composite([{ input: markBuffer, gravity: "centre" }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
}

function pngBuffersToIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const directory = Buffer.alloc(images.length * 16);
  let offset = 6 + directory.length;

  images.forEach(({ size, buffer }, index) => {
    const entry = index * 16;
    directory.writeUInt8(size >= 256 ? 0 : size, entry);
    directory.writeUInt8(size >= 256 ? 0 : size, entry + 1);
    directory.writeUInt8(0, entry + 2);
    directory.writeUInt8(0, entry + 3);
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(buffer.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += buffer.length;
  });

  return Buffer.concat([header, directory, ...images.map(({ buffer }) => buffer)]);
}

async function buildBrand() {
  const brandSource = () => sharp(source("brand-wave.jpg")).rotate();
  const lockupSource = () =>
    sharp(source("brand-wave.jpg")).rotate().extract({
      left: 119,
      top: 397,
      width: 838,
      height: 284,
    });

  await writeImage(
    brandSource().resize(1080, 1080, { fit: "cover", position: "centre" }),
    output("images", "novadent", "brand", "logo-square.webp"),
    "webp",
  );
  await writeImage(
    lockupSource(),
    output("images", "novadent", "brand", "logo-lockup.webp"),
    "webp",
  );
  await writeImage(
    lockupSource(),
    output("images", "novadent", "brand", "logo-lockup.png"),
    "png",
  );
  await writeImage(
    await extractOfficialLockup({ red: 255, green: 255, blue: 255 }),
    output("images", "novadent", "brand", "logo-lockup-white.webp"),
    "webp",
  );
  await writeImage(
    await extractOfficialLockup({ red: 255, green: 255, blue: 255 }),
    output("images", "novadent", "brand", "logo-lockup-white.png"),
    "png",
  );
  await writeImage(
    await extractOfficialLockup({ red: 3, green: 27, blue: 69 }),
    output("images", "novadent", "brand", "logo-lockup-navy.webp"),
    "webp",
  );
  await writeImage(
    await extractOfficialLockup({ red: 3, green: 27, blue: 69 }),
    output("images", "novadent", "brand", "logo-lockup-navy.png"),
    "png",
  );

  const mark = await extractOfficialAMark();
  await sharp(mark)
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output("images", "novadent", "brand", "mark.png"));
  await report(output("images", "novadent", "brand", "mark.png"));
  await sharp(mark)
    .webp({ quality: 95, alphaQuality: 100, effort: 6 })
    .toFile(output("images", "novadent", "brand", "mark.webp"));
  await report(output("images", "novadent", "brand", "mark.webp"));

  const icons = new Map();
  for (const size of [16, 32, 48, 180, 192, 512]) {
    icons.set(size, await iconPng(mark, size));
  }

  fs.writeFileSync(output("apple-touch-icon.png"), icons.get(180));
  fs.writeFileSync(output("icon-192.png"), icons.get(192));
  fs.writeFileSync(output("icon-512.png"), icons.get(512));
  fs.writeFileSync(
    output("favicon.ico"),
    pngBuffersToIco([16, 32, 48].map((size) => ({ size, buffer: icons.get(size) }))),
  );

  for (const file of [
    output("favicon.ico"),
    output("apple-touch-icon.png"),
    output("icon-192.png"),
    output("icon-512.png"),
  ]) {
    await report(file);
  }
}

await buildBrand();
await buildHero();
await buildClinic();
await buildSocial();

console.log(`Wrote:\n${written.map((line) => `  ${line}`).join("\n")}`);
