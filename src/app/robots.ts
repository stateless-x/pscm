import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// Policy: "cite yes, train no".
// - Default (`*`): allow everything — classic search engines (Googlebot,
//   Bingbot) index us normally.
// - Answer/search AI bots: explicitly allowed so LLM tools can fetch a page
//   on demand and CITE us in answers. These are low-volume, per-query.
// - Training scrapers: blocked so our content stays out of model training
//   sets. Blocking these does NOT remove us from AI answers — that's the
//   search bots above.
// robots.txt is allow/disallow only; it does not throttle request volume.
// On a static CDN-served export, crawler volume is a non-issue regardless.
const ALLOW_CITE = ["OAI-SearchBot", "PerplexityBot", "Google-Extended"];
const BLOCK_TRAIN = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "CCBot",
  "Bytespider",
  "Applebot-Extended",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...ALLOW_CITE.map((userAgent) => ({ userAgent, allow: "/" })),
      ...BLOCK_TRAIN.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
