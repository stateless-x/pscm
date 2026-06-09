import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

// Build canonical + hreflang for a specific path under the configured
// routing scheme. Centralised so every page agrees with sitemap.ts.
// Paths should NOT include the locale segment or leading/trailing slashes —
// pass "" for the locale root, "products" for /<locale>/products/, etc.
export function buildAlternates(
  locale: string,
  path: string = "",
): Metadata["alternates"] {
  const segment = path ? `/${path}` : "";
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `/${loc}${segment}/`;
  }
  languages["x-default"] = `/${routing.defaultLocale}${segment}/`;
  return {
    canonical: `/${locale}${segment}/`,
    languages,
  };
}
