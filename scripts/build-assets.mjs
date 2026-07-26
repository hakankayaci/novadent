/**
 * Regenerates derived images in public/ from resimler/.
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

const CLINIC = [
  ['novadent_hero_clinic.jpg', 'novadent-clinic'],
  ['novadent_reception_lounge.jpg', 'novadent-reception'],
  ['novadent_treatment_room.jpg', 'novadent-treatment'],
  ['novadent_equipment_suite.jpg', 'novadent-equipment'],
];

async function buildClinic() {
  for (const [file, slug] of CLINIC) {
    const out = pub('images/clinic', `${slug}.webp`);
    if (fs.existsSync(src(file))) {
      await sharp(src(file)).webp(PHOTO).toFile(out);
      await report(out);
    }
  }
}

async function buildSocial() {
  for (const [file, slug] of CLINIC) {
    const out = pub('images/social', `${slug}.webp`);
    if (fs.existsSync(src(file))) {
      await sharp(src(file))
        .resize(900, 900, { fit: 'cover', kernel: 'lanczos3' })
        .webp(PHOTO)
        .toFile(out);
      await report(out);
    }
  }
}

await buildClinic();
await buildSocial();

console.log('Wrote:\n' + written.map((l) => '  ' + l).join('\n'));
