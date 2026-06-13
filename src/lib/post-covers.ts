// Blog cover images, keyed by post slug. Centralized here (rather than in
// each post's frontmatter) so a slug maps to the same cover across locales
// and so adding/retuning covers is one edit, not N markdown files.
//
// `src` is a path under /public; `altKey` is a key in the `images` i18n
// namespace (so alt text is localized + honest — these are illustrative
// material/workshop photos, not claims about a specific batch).
//
// Every post gets a cover so the blog list reads as finished, not half-empty.
// Images are reused across posts where a clay-stage shot doesn't fit (e.g.
// the maintenance + purchase-order posts use a workshop photo).
export type PostCover = { src: string; altKey: string };

export const POST_COVERS: Record<string, PostCover> = {
  "iron-specks-in-slip": {
    src: "/assets/material/clay-slip.webp",
    altKey: "claySlipAlt",
  },
  "filter-press-sizing": {
    src: "/assets/material/filter-cake.webp",
    altKey: "filterCakeAlt",
  },
  "pug-mill-why": {
    src: "/assets/material/pugged-clay.webp",
    altKey: "puggedClayAlt",
  },
  "ball-mill-variants": {
    src: "/assets/material/ground-powder.webp",
    altKey: "groundPowderAlt",
  },
  "jaw-vs-hammer-crusher": {
    src: "/assets/material/ground-powder.webp",
    altKey: "groundPowderAlt",
  },
  "hydraulic-press-cross-industry": {
    src: "/assets/material/greenware-tiles.webp",
    altKey: "greenwareTilesAlt",
  },
  "maintenance-checklist": {
    src: "/assets/soldering.webp",
    altKey: "solderingAlt",
  },
  "industry-purchase-order": {
    src: "/assets/installed.webp",
    altKey: "installedAlt",
  },
};

export function postCover(slug: string): PostCover | undefined {
  return POST_COVERS[slug];
}
