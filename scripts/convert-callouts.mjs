// One-off: convert lines that start with `**กับดักที่ N: …**` to
// `> [!กับดัก] **…**` blockquote-callout syntax so the renderer styles
// them as amber-rule callout boxes. Idempotent.

import { readFile, writeFile } from "node:fs/promises";

const FILES = [
  "/Users/purin/dev/pscm/docs/blog/iron-specks-in-slip.md",
  "/Users/purin/dev/pscm/docs/blog/ball-mill-variants.md",
  "/Users/purin/dev/pscm/docs/blog/industry-purchase-order.md",
];

let total = 0;

for (const file of FILES) {
  const src = await readFile(file, "utf8");
  const lines = src.split("\n");
  const out = [];
  let converted = 0;

  for (const line of lines) {
    // Match a paragraph that starts with `**กับดักที่ N: …**` (the format
    // already in the posts). Skip if it's already a callout (starts with >).
    if (
      line.startsWith("**กับดักที่") &&
      !line.startsWith("> [!")
    ) {
      out.push(`> [!กับดัก] ${line}`);
      converted++;
    } else {
      out.push(line);
    }
  }

  if (converted > 0) {
    await writeFile(file, out.join("\n"));
    console.log(`  ${file.split("/").pop()}: converted ${converted} traps`);
    total += converted;
  } else {
    console.log(`  ${file.split("/").pop()}: no changes`);
  }
}

console.log(`\n✓ converted ${total} trap callouts total`);
