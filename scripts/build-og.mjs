/**
 * Renders public/images/og/canbazvet-og.jpg (1200x630).
 *
 * Uses a real headless browser rather than compositing text with sharp, so the Turkish
 * diacritics and the brand webfont come out exactly as they do on the site. No dev server
 * needed: the template is a self-contained data-URI page.
 *
 * Run: npm run assets:og
 */
import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const pub = (...p) => path.join(ROOT, 'public', ...p);

const asDataUri = (file, mime) =>
  `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`;

const logo = asDataUri(pub('images/brand/canbazvet-logo.png'), 'image/png');
const portrait = asDataUri(pub('images/team/berk-canbaz.webp'), 'image/webp');

const html = `<!doctype html>
<html lang="tr"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;display:flex;font-family:'Fira Sans',system-ui,sans-serif;
       background:#04231A;color:#fff;overflow:hidden}
  .copy{flex:1 1 0;padding:56px 24px 56px 60px;display:flex;flex-direction:column;justify-content:space-between}
  /* inline-block, not an inline span: an inline box would let the logo spill past the plate */
  .plate{display:inline-block;background:#fff;border-radius:18px;padding:16px 24px;
         box-shadow:0 20px 50px -20px rgba(0,0,0,.5)}
  .plate img{display:block;height:50px;width:auto}
  h1{font-size:56px;line-height:1.06;font-weight:700;letter-spacing:-.03em;margin-top:26px}
  h1 em{font-style:normal;color:#BCEA30}
  .who{margin-top:18px;font-size:23px;color:rgba(220,239,232,.82)}
  .meta{display:flex;flex-direction:column;gap:11px;font-size:19px;color:rgba(220,239,232,.72)}
  .tel{display:inline-flex;align-items:center;gap:11px;background:#C10E1F;color:#fff;
       font-size:23px;font-weight:700;padding:13px 22px;border-radius:14px;align-self:flex-start}
  .shot{position:relative;width:452px;flex:none}
  .shot img{width:100%;height:100%;object-fit:cover;object-position:center 16%}
  .shot::after{content:"";position:absolute;inset:0;
    background:linear-gradient(90deg,#04231A 0%,rgba(4,35,26,.35) 34%,rgba(4,35,26,0) 68%)}
</style></head>
<body>
  <div class="copy">
    <div>
      <span class="plate"><img src="${logo}" alt=""></span>
      <h1>Dostunuzun sağlığı,<br><em>güvenilir ellerde.</em></h1>
      <p class="who">Veteriner Hekim Berk Canbaz · Edirne Şükrüpaşa</p>
    </div>
    <div class="meta">
      <span>Pzt–Cmt 09:30–19:30 · Pazar 12:00–17:00</span>
      <span class="tel">7/24 ACİL HAT · 0541 325 76 82</span>
    </div>
  </div>
  <div class="shot"><img src="${portrait}" alt=""></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
const png = await page.screenshot({ type: 'png' });
await browser.close();

const out = pub('images/og/canbazvet-og.jpg');
await sharp(png).resize(1200, 630).jpeg({ quality: 88, mozjpeg: true }).toFile(out);
console.log(`wrote ${path.relative(ROOT, out)} (${(fs.statSync(out).size / 1024).toFixed(0)} KB)`);
