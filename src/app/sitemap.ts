import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { machines } from "@/data/machines";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "",
  "/products",
  "/solutions",
  "/custom",
  "/service",
  "/about",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Build a sitemap entry per route × locale, with hreflang alternates.
  for (const path of STATIC_ROUTES) {
    const alternates: Record<string, string> = {};
    for (const loc of routing.locales) {
      alternates[loc] = `${SITE.url}/${loc}${path}/`;
    }
    alternates["x-default"] = `${SITE.url}/${routing.defaultLocale}${path}/`;

    for (const loc of routing.locales) {
      entries.push({
        url: `${SITE.url}/${loc}${path}/`,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/products" ? 0.9 : 0.7,
        alternates: { languages: alternates },
      });
    }
  }

  // Machine detail pages
  for (const m of machines) {
    const path = `/products/${m.slug}`;
    const alternates: Record<string, string> = {};
    for (const loc of routing.locales) {
      alternates[loc] = `${SITE.url}/${loc}${path}/`;
    }
    alternates["x-default"] = `${SITE.url}/${routing.defaultLocale}${path}/`;

    for (const loc of routing.locales) {
      entries.push({
        url: `${SITE.url}/${loc}${path}/`,
        changeFrequency: "monthly",
        priority: m.featured ? 0.8 : 0.6,
        alternates: { languages: alternates },
      });
    }
  }

  return entries;
}
