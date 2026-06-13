// convert-machine-images.mjs — convert source machine photos (PNG/JPG) into
// optimized webp under public/machines/<slug>.webp.
//
// Static export (`images: { unoptimized: true }`) serves files as-is, so the
// source resolution IS what ships. Machine images render in a 4:3 box — a
// card thumbnail (~400px) up to the product hero (~700px). 1200px wide is a
// safe ceiling with DPR headroom; the 2400px PNG sources are ~9MB and would
// otherwise ship whole.
//
// Convention: name each source file by its machine slug (e.g. ram-press.png),
// so the slug is just the filename minus extension. The slug is validated
// against machines.ts — a misnamed file fails loudly instead of writing a
// dead webp the site never references. Only webp lands in public/machines;
// sources stay in SRC_DIR.
//
// Usage:  node scripts/convert-machine-images.mjs "/abs/path/to/source/folder"

import sharp from "sharp";
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, basename, extname } from "node:path";

const SRC_DIR = process.argv[2];
if (!SRC_DIR) {
  console.error('Pass the source folder: node scripts/convert-machine-images.mjs "<dir>"');
  process.exit(1);
}

const DEST = join(process.cwd(), "public", "machines");
const MAX_W = 1200;
const QUALITY = 80;

// Valid slugs, read straight from machines.ts so this never drifts.
const machinesSrc = await readFile(
  join(process.cwd(), "src", "data", "machines.ts"),
  "utf8",
);
const validSlugs = new Set(
  [...machinesSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]),
);

const files = (await readdir(SRC_DIR)).filter((f) =>
  /\.(png|jpe?g)$/i.test(f),
);

let failed = false;
for (const file of files) {
  const slug = basename(file, extname(file));
  if (!validSlugs.has(slug)) {
    console.error(
      `  ✗ ${file} — "${slug}" is not a machine slug in machines.ts. Rename the file to a valid slug.`,
    );
    failed = true;
    continue;
  }

  const input = await readFile(join(SRC_DIR, file));
  const meta = await sharp(input).metadata();
  const output = await sharp(input)
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer();

  await writeFile(join(DEST, `${slug}.webp`), output);
  console.log(
    `  ✓ ${file} → machines/${slug}.webp  ${meta.width}px→${Math.min(meta.width, MAX_W)}px  (${(input.length / 1024).toFixed(0)}KB → ${(output.length / 1024).toFixed(0)}KB)`,
  );
}

console.log("done.");
if (failed) process.exit(1);
