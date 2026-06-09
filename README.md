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
      contact/page.tsx          # phone + LINE + form + map
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

## Adding a machine

Append one object to `machines` in `src/data/machines.ts`. Set `status`
(`available` | `made_to_order` | `on_request`) to control the badge + CTA
wording. When you have a photo, drop it under `public/machines/` and add
its path to that machine's `images: []` array. `MachineImage` swaps the
placeholder for the real image automatically.

## Open items

See [TODO.md](./TODO.md), items to confirm or replace before going live
(LINE URL, photos, logo, etc.).
