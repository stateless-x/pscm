// One-off: reorder the `order` field on each machine in machines.ts
// to match a new ranking. Idempotent: re-running with the file already
// in the target order is a no-op.

import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const FILE = join(process.cwd(), "src/data/machines.ts");

// New ranking, by slug. First = most popular = order 1.
// Reasoning: featured + available + cross-industry pull + alias volume
// (signals search interest), with the on_request specialty cluster at
// the bottom. See conversation for rationale per machine.
const NEW_ORDER = [
  "ball-mill",
  "filter-press",
  "hydraulic-press",
  "magnetic-sieve",
  "grinder",
  "pug-mill",
  "mixer",
  "jaw-crusher",
  "vibrating-screen",
  "hammer-mill",
  "blunger",
  "conveyor",
  "ram-press",
  "jigger-roller",
  "glaze-spray-booth",
  "dust-press",
  "spray-dryer",
  "dryer-chamber",
  "kiln",
  "potters-wheel",
];

let src = await readFile(FILE, "utf8");
let updated = 0;
let unchanged = 0;

for (const [i, slug] of NEW_ORDER.entries()) {
  const newOrder = i + 1;
  // Match a machine block by its slug. The `slug: "<slug>"` line is
  // unique per machine, and `order:` is always within ~6 lines after it.
  const re = new RegExp(
    `(slug:\\s*"${slug}",[\\s\\S]{0,400}?order:\\s*)(\\d+)(,)`,
  );
  const match = src.match(re);
  if (!match) {
    console.error(`✗ couldn't match ${slug}`);
    continue;
  }
  const oldOrder = Number(match[2]);
  if (oldOrder === newOrder) {
    unchanged++;
    continue;
  }
  src = src.replace(re, `$1${newOrder}$3`);
  updated++;
  console.log(`  ${slug}: ${oldOrder} → ${newOrder}`);
}

await writeFile(FILE, src);
console.log(`\n✓ reordered: ${updated} changed, ${unchanged} unchanged`);
