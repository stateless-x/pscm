// After `next build`, place a root redirect at out/index.html that sends
// visitors to the Thai (default) locale. Static export needs this because
// next-intl's `as-needed` rewrite relies on middleware that we don't run.

import { copyFile, rm } from "node:fs/promises";
import { join } from "node:path";

const OUT = join(process.cwd(), "out");
const SRC = join(OUT, "index-redirect.html");
const DEST = join(OUT, "index.html");

try {
  await copyFile(SRC, DEST);
  await rm(SRC);
  console.log("✓ postbuild: wrote out/index.html (→ /th/)");
} catch (err) {
  console.error("postbuild failed:", err);
  process.exit(1);
}
