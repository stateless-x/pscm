// resize-assets.mjs — downscale the brand/lifestyle webp images in
// public/assets to a sensible display ceiling and re-encode as webp.
//
// Why this exists: the source images ship at 2816×1536. The site is a
// static export (`output: "export"`, `images: { unoptimized: true }`), so
// next/image serves files AS-IS — no runtime resize, no srcset. The browser
// downloads the full-resolution file regardless of how small it renders.
// The only real byte win is shrinking the source to the actual display
// ceiling. We size to MAX_W (≈ widest slot any image lands in × DPR headroom)
// and let CSS scale the rest.
//
// og-card is special: social scrapers expect ~1200×630. We size it to a
// 1200-wide ceiling separately.
//
// Idempotent and safe to re-run: reads each file into memory first, then
// overwrites. Skips files already at or below the ceiling.
//
// Usage:  node scripts/resize-assets.mjs

import sharp from "sharp";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ASSETS = join(process.cwd(), "public", "assets");

// Widest a content image is displayed (full-bleed-ish hero/strip) is ~1400px
// CSS. 1600 leaves a little headroom for high-DPR without paying for 2816.
const MAX_W = 1600;
const OG_MAX_W = 1200; // social card convention
const QUALITY = 80;

const files = (await readdir(ASSETS)).filter((f) => f.endsWith(".webp"));

for (const file of files) {
  const path = join(ASSETS, file);
  const input = await readFile(path);
  const meta = await sharp(input).metadata();
  const ceiling = file.startsWith("og-card") ? OG_MAX_W : MAX_W;

  if (meta.width <= ceiling) {
    console.log(`  · ${file} already ${meta.width}px — skipped`);
    continue;
  }

  const output = await sharp(input)
    .resize({ width: ceiling, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer();

  await writeFile(path, output);
  const beforeKb = (input.length / 1024).toFixed(0);
  const afterKb = (output.length / 1024).toFixed(0);
  console.log(
    `  ✓ ${file}  ${meta.width}px → ${ceiling}px  (${beforeKb}KB → ${afterKb}KB)`,
  );
}

console.log("done.");
