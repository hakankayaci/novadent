/**
 * Regenerates every derived image in public/ from the untouched originals in resimler/.
 *
 * Everything here reads the ORIGINAL file exactly once and encodes once. The previous
 * generation re-encoded already-lossy WebP copies, which stacked compression artefacts
 * on top of each other and is why the clinic photos looked soft.
 *
 * Run: npm run assets
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'resimler');
const PUB = path.join(ROOT, 'public');

const src = (f) => path.join(SRC, f);
const pub = (...p) => path.join(PUB, ...p);

for (const dir of ['images/brand', 'images/clinic', 'images/team', 'images/social', 'images/og']) {
  fs.mkdirSync(pub(...dir.split('/')), { recursive: true });
}

/** WebP settings used for every photograph: high quality, slowest/best encoder effort. */
const PHOTO = { quality: 90, effort: 6, smartSubsample: true };

const written = [];
async function report(file) {
  const meta = await sharp(file).metadata();
  written.push(
    `${path.relative(PUB, file).replace(/\\/g, '/')}  ${meta.width}x${meta.height}  ` +
      `${(fs.statSync(file).size / 1024).toFixed(0)} KB`,
  );
}

/* ------------------------------------------------------------------ *
 * 1. Brand marks, traced out of the real signboard logo
 * ------------------------------------------------------------------ */

/** Tight bounding box of everything non-transparent, so the lockup has no dead margin. */
async function opaqueBounds(file, alphaFloor = 24) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let minX = info.width, minY = info.height, maxX = -1, maxY = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * 4 + 3] > alphaFloor) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

async function buildBrand() {
  const logoSrc = src('_source-logo.png');
  const box = await opaqueBounds(logoSrc);

  // Full horizontal lockup (emblem + CanbazVet + VETERİNER KLİNİĞİ).
  // Flat vector-style art, so a quantised palette is visually lossless and ~10x smaller.
  const MARK_PNG = { compressionLevel: 9, palette: true, quality: 100, effort: 10 };
  const lockup = await sharp(logoSrc).extract(box).png(MARK_PNG).toBuffer();
  fs.writeFileSync(pub('images/brand/canbazvet-logo.png'), lockup);
  await sharp(logoSrc).extract(box).webp({ quality: 95, effort: 6 }).toFile(pub('images/brand/canbazvet-logo.webp'));
  await report(pub('images/brand/canbazvet-logo.png'));

  // The emblem alone. The heart mark is roughly square and sits at the left edge.
  const emblemW = Math.round(box.height * 1.06);
  const emblemRaw = await sharp(logoSrc)
    .extract({ left: box.left, top: box.top, width: emblemW, height: box.height })
    .png()
    .toBuffer();
  const emblem = await sharp(emblemRaw).trim({ threshold: 8 }).png(MARK_PNG).toBuffer();
  fs.writeFileSync(pub('images/brand/canbazvet-emblem.png'), emblem);
  await sharp(emblem).webp({ quality: 95, effort: 6 }).toFile(pub('images/brand/canbazvet-emblem.webp'));
  await report(pub('images/brand/canbazvet-emblem.png'));

  // Favicons / PWA icons: emblem centred on white, since the mark relies on light
  // negative space to read (the cat and the cross are cut out of the heart).
  const iconBase = async (size) => {
    const inner = Math.round(size * 0.78);
    const art = await sharp(emblem).resize(inner, inner, { fit: 'contain', background: '#ffffff00', kernel: 'lanczos3' }).toBuffer();
    return sharp({ create: { width: size, height: size, channels: 4, background: '#ffffff' } })
      .composite([{ input: art, gravity: 'center' }])
      .png({ compressionLevel: 9 })
      .toBuffer();
  };
  fs.writeFileSync(pub('icon-512.png'), await iconBase(512));
  fs.writeFileSync(pub('icon-192.png'), await iconBase(192));
  fs.writeFileSync(pub('apple-touch-icon.png'), await iconBase(180));
  fs.writeFileSync(pub('images/brand/canbazvet-icon.png'), await iconBase(512));
  // .ico consumers want a small raster; a 32px PNG payload is valid for modern browsers,
  // and Next also serves app/icon for anything that asks.
  fs.writeFileSync(pub('favicon.ico'), await iconBase(32));
  await report(pub('icon-512.png'));
}

/* ------------------------------------------------------------------ *
 * 2. Veteriner Hekim Berk Canbaz
 * ------------------------------------------------------------------ */

async function buildTeam() {
  const portrait = src('_source-berk-canbaz.png');
  const { width, height } = await sharp(portrait).metadata();

  // Source is already 4:5, so the hero portrait needs no crop at all.
  await sharp(portrait).webp(PHOTO).toFile(pub('images/team/berk-canbaz.webp'));
  await report(pub('images/team/berk-canbaz.webp'));

  // Landscape crop for the About section: keep the head high in frame.
  const wideH = Math.round(width / 1.5);
  await sharp(portrait)
    .extract({ left: 0, top: 0, width, height: Math.min(height, wideH) })
    .webp(PHOTO)
    .toFile(pub('images/team/berk-canbaz-wide.webp'));
  await report(pub('images/team/berk-canbaz-wide.webp'));

  // Square avatar centred on the face for the circular treatment.
  const side = Math.round(width * 0.56);
  await sharp(portrait)
    .extract({
      left: Math.round(width * 0.49 - side / 2),
      top: Math.round(height * 0.30 - side / 2),
      width: side,
      height: side,
    })
    .resize(800, 800, { kernel: 'lanczos3' })
    .webp(PHOTO)
    .toFile(pub('images/team/berk-canbaz-avatar.webp'));
  await report(pub('images/team/berk-canbaz-avatar.webp'));
}

/* ------------------------------------------------------------------ *
 * 3. Clinic photography
 * ------------------------------------------------------------------ */

/**
 * Ordered the way the gallery tells the story: arrive at the door, step into the
 * waiting room, then consultation, then diagnostics, then surgery, then recovery.
 */
const CLINIC = [
  ['unnamed.webp', 'dis-cephe-tabela'],
  ['unnamed (7).webp', 'bekleme-alani-ve-resepsiyon'],
  ['unnamed (6).webp', 'mama-ve-urun-reyonu'],
  ['unnamed (1).webp', 'muayene-odasi'],
  ['unnamed (4).webp', 'muayene-odasi-dikey'],
  ['unnamed (3).webp', 'muayene-masasi-ve-ekipmanlar'],
  ['unnamed (5).webp', 'ameliyathane'],
  ['unnamed (8).webp', 'operasyon-masasi-detay'],
  ['unnamed (2).webp', 'yatakli-hasta-unitesi'],
];

async function buildClinic() {
  for (const f of fs.readdirSync(pub('images/clinic'))) fs.rmSync(pub('images/clinic', f));
  for (const [file, slug] of CLINIC) {
    const out = pub('images/clinic', `canbazvet-${slug}.webp`);
    await sharp(src(file)).webp(PHOTO).toFile(out);
    await report(out);
  }
}

/* ------------------------------------------------------------------ *
 * 4. Square crops for the Instagram strip
 * ------------------------------------------------------------------ */

const SOCIAL = [
  ['_source-berk-canbaz.png', 'hekim-ve-klinik', { gravity: 'north' }],
  ['unnamed (1).webp', 'muayene-odasi', {}],
  ['unnamed (5).webp', 'ameliyathane', {}],
  ['unnamed (2).webp', 'yatakli-hasta-unitesi', {}],
  ['unnamed (7).webp', 'bekleme-alani', {}],
  ['unnamed.webp', 'klinik-girisi', {}],
];

async function buildSocial() {
  for (const f of fs.readdirSync(pub('images/social'))) fs.rmSync(pub('images/social', f));
  for (const [file, slug, opts] of SOCIAL) {
    const out = pub('images/social', `canbazvet-${slug}.webp`);
    await sharp(src(file))
      .resize(900, 900, { fit: 'cover', position: opts.gravity || 'centre', kernel: 'lanczos3' })
      .webp(PHOTO)
      .toFile(out);
    await report(out);
  }
}

/* ------------------------------------------------------------------ */

await buildBrand();
await buildTeam();
await buildClinic();
await buildSocial();

console.log('Wrote:\n' + written.map((l) => '  ' + l).join('\n'));
console.log('\nOG image is built separately by `npm run assets:og` (needs the dev server).');
