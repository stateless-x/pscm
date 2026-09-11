# Petkasem Ceramic Machine, website

Marketing + lead-generation site for **บริษัท เพชรเกษมจักรกลซีรามิค จำกัด**
(Petkasem Ceramic Machine Co., Ltd.). Bilingual Thai-first / English,
statically generated, no backend.

## Stack

- **Next.js 16** (App Router, `output: 'export'`, Turbopack)
- **React 19**
- **Tailwind CSS 4** (CSS-first `@theme` tokens)
- **next-intl 4** for locale routing + messages
- **lucide-react** icons, **motion** for animation, **Radix UI** for the
  mobile-nav Sheet

## Develop

```bash
bun install
bun run dev
# http://localhost:3000, redirects to /th/
```

## Build

```bash
bun run build
# Outputs static site to ./out/
# A postbuild step writes out/index.html → redirects to /th/
```

Deploy `out/` to any static host (Vercel, Netlify, Cloudflare Pages, S3+CF,
or a plain Nginx box).

## Project layout

```
src/
  app/
    layout.tsx                  # root passthrough
    [locale]/                   # all pages live here (th, en)
      layout.tsx                # html lang, fonts, Header/Footer
      page.tsx                  # Home
      about/page.tsx
      products/page.tsx         # catalogue + filter
      products/[slug]/page.tsx  # 20 machine detail pages
      solutions/page.tsx        # need → machine map
      custom/page.tsx           # OEM
      service/page.tsx          # repair (highest-intent page)
      contact/page.tsx          # phone + LINE + map
    llms.txt/route.ts           # generated machine-readable company reference
    sitemap.ts
    robots.ts
  components/                   # Hero, Nameplate, MachineCard, etc.
  data/machines.ts              # one object per machine
  i18n/                         # next-intl routing + request config
  lib/                          # site constants, utilities
messages/                       # th.json + en.json UI strings
public/                         # static assets
scripts/postbuild.mjs           # writes out/index.html root-redirect
```

## Product and design context

- [`PRODUCT.md`](./PRODUCT.md) records the audience, conversion goal, proof boundaries, and durable product constraints.
- [`DESIGN.md`](./DESIGN.md) is the source of truth for the visual system, reusable patterns, and interface guardrails.

## Adding a machine

Append one object to `machines` in `src/data/machines.ts`. Set `status`
(`available` | `made_to_order` | `on_request`) to control the badge + CTA
wording. When you have a photo, drop it under `public/machines/` and add
its path to that machine's `images: []` array. `MachineImage` swaps the
placeholder for the real image automatically.

## SEO content sources of truth

- Company identity, contact details, market, repair boundary, spare-parts
  policy, and international coordination live in `src/lib/site.ts`.
- Product facts and product-page SEO content live in `src/data/machines.ts`.
- Thai and English page copy lives in `messages/th.json` and
  `messages/en.json`.
- `src/app/llms.txt/route.ts`, JSON-LD, and product FAQ output read those
  sources. Do not add a hand-written `public/llms.txt`.
- Add a machine once in `src/data/machines.ts`; the product route, sitemap,
  and llms.txt include it automatically. After changing an entity-level
  policy, run `npm run build` and spot-check `out/th/service/index.html`, one
  product page, `out/llms.txt`, and `out/sitemap.xml`.

For production indexing and local-search setup, follow
[`docs/seo-setup-checklist.md`](./docs/seo-setup-checklist.md).

## Open items

See [TODO.md](./TODO.md), items to confirm or replace before going live
(LINE URL, photos, logo, etc.).
