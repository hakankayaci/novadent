/**
 * Builds the 1200x630 Novadent Open Graph / Twitter preview from the supplied
 * official clinic artwork. The near-identical source aspect ratio avoids
 * stretching the logo and keeps this output deterministic and offline.
 *
 * Run: npm run assets:og
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const source = path.join(ROOT, "assets", "source", "novadent", "hero-brand.png");
const outputDirectory = path.join(ROOT, "public", "images", "og");
const output = path.join(outputDirectory, "novadent-og.jpg");

if (!fs.existsSync(source)) {
  throw new Error("Missing assets/source/novadent/hero-brand.png");
}

fs.mkdirSync(outputDirectory, { recursive: true });

await sharp(source)
  .rotate()
  .resize(1200, 630, {
    fit: "cover",
    position: "centre",
    kernel: sharp.kernel.lanczos3,
  })
  .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: "4:4:4" })
  .toFile(output);

const metadata = await sharp(output).metadata();
console.log(
  `wrote ${path.relative(ROOT, output).replaceAll("\\", "/")} ` +
    `(${metadata.width}x${metadata.height}, ${(fs.statSync(output).size / 1024).toFixed(0)} KB)`,
);
