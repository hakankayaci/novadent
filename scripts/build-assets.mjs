import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'resimler');
const PUB = path.join(ROOT, 'public');

const src = (f) => path.join(SRC, f);
const pub = (...p) => path.join(PUB, ...p);

for (const dir of ['images/brand', 'images/clinic', 'images/social', 'images/og']) {
  fs.mkdirSync(pub(...dir.split('/')), { recursive: true });
}

const PHOTO = { quality: 90, effort: 6, smartSubsample: true };
const written = [];

async function report(file) {
  const meta = await sharp(file).metadata();
  written.push(
    `${path.relative(PUB, file).replace(/\\/g, '/')}  ${meta.width}x${meta.height}  ` +
      `${(fs.statSync(file).size / 1024).toFixed(0)} KB`,
  );
}

async function buildBrand() {
  const logoSrc = src('_source-logo.png');

  // Copy full high-res official logo card
  await sharp(logoSrc).webp(PHOTO).toFile(pub('images/brand/novadent-logo.webp'));
  await sharp(logoSrc).png({ compressionLevel: 9 }).toFile(pub('images/brand/novadent-logo.png'));
  await report(pub('images/brand/novadent-logo.png'));

  // Extract emblem (the stylized 'A' smile mark on the right side of NOVA)
  // In the 1024x528 logo image, 'A' is roughly around x: 550 to 900, y: 150 to 450
  const emblemCrop = await sharp(logoSrc)
    .extract({ left: 550, top: 160, width: 340, height: 260 })
    .toBuffer();

  const iconBase = async (size) => {
    return sharp(emblemCrop)
      .resize(size, size, { fit: 'contain', background: '#021D45' })
      .png({ compressionLevel: 9 })
      .toBuffer();
  };

  fs.writeFileSync(pub('icon-512.png'), await iconBase(512));
  fs.writeFileSync(pub('icon-192.png'), await iconBase(192));
  fs.writeFileSync(pub('apple-touch-icon.png'), await iconBase(180));
  fs.writeFileSync(pub('images/brand/canbazvet-icon.png'), await iconBase(512));
  fs.writeFileSync(pub('images/brand/novadent-icon.png'), await iconBase(512));
  fs.writeFileSync(pub('favicon.ico'), await iconBase(32));
  await report(pub('icon-512.png'));
}

async function buildClinic() {
  const reception = src('novadent-reception.png');
  const treatment = src('novadent-treatment.jpg');

  if (fs.existsSync(reception)) {
    await sharp(reception).webp(PHOTO).toFile(pub('images/clinic/novadent-reception.webp'));
    await sharp(reception).webp(PHOTO).toFile(pub('images/clinic/novadent-clinic.webp'));
    await report(pub('images/clinic/novadent-reception.webp'));
    await report(pub('images/clinic/novadent-clinic.webp'));
  }

  if (fs.existsSync(treatment)) {
    await sharp(treatment).webp(PHOTO).toFile(pub('images/clinic/novadent-treatment.webp'));
    await sharp(treatment).webp(PHOTO).toFile(pub('images/clinic/novadent-equipment.webp'));
    await report(pub('images/clinic/novadent-treatment.webp'));
    await report(pub('images/clinic/novadent-equipment.webp'));
  }
}

async function buildSocial() {
  const reception = src('novadent-reception.png');
  const treatment = src('novadent-treatment.jpg');

  if (fs.existsSync(reception)) {
    await sharp(reception)
      .resize(900, 900, { fit: 'cover', kernel: 'lanczos3' })
      .webp(PHOTO)
      .toFile(pub('images/social/novadent-reception.webp'));
    await sharp(reception)
      .resize(900, 900, { fit: 'cover', kernel: 'lanczos3' })
      .webp(PHOTO)
      .toFile(pub('images/social/novadent-clinic.webp'));
    await report(pub('images/social/novadent-reception.webp'));
  }

  if (fs.existsSync(treatment)) {
    await sharp(treatment)
      .resize(900, 900, { fit: 'cover', kernel: 'lanczos3' })
      .webp(PHOTO)
      .toFile(pub('images/social/novadent-treatment.webp'));
    await sharp(treatment)
      .resize(900, 900, { fit: 'cover', kernel: 'lanczos3' })
      .webp(PHOTO)
      .toFile(pub('images/social/novadent-equipment.webp'));
    await report(pub('images/social/novadent-treatment.webp'));
  }
}

await buildBrand();
await buildClinic();
await buildSocial();

console.log('Wrote:\n' + written.map((l) => '  ' + l).join('\n'));
