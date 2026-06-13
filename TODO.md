# TODO, open items before going live

Mirrors spec §15. Each item lists the **single file** to edit.

## Must do

1. **LINE Official Account URL**, `src/lib/site.ts` → `SITE.lineUrl`
   Replace `https://line.me/R/ti/p/~` with the real LINE deep link
   (`https://lin.ee/<id>` or `https://line.me/R/ti/p/@<id>`). Used in
   Header, MobileNav, StickyMobileCTA, Hero, CTABand, Contact page,
   and every product page.

2. **Production domain**, `src/lib/site.ts` → `SITE.url`
   Defaults to `https://pscmceramic.com`. Affects canonical URLs,
   sitemap, JSON-LD, and the root `index.html` redirect.

3. **Machine statuses**, `src/data/machines.ts`
   Confirm each machine's `status` is one of `available` | `made_to_order`
   | `on_request` and matches what you actually build today. Status
   drives the badge colour and the product-page CTA wording.

4. **Registered Thai spelling**, confirm "ซีรามิค" vs "เซรามิค"
   across `messages/th.json`, `src/lib/site.ts`, `src/data/machines.ts`.
   Currently uses **ซีรามิค** to match the spec / company filings.

## Should do

5. **Logo / wordmark**, `src/components/Header.tsx`, `src/components/Footer.tsx`
   Currently a typographic "P" tile + "Petkasem Ceramic Machine" wordmark.
   Drop a real logo into `public/` and replace the `<span>` in Header.

6. **Photos (optional, ready when you are)**
   The catalogue is designed to work *without* photos: each card uses a
   per-stage gradient + large stage icon + model code as the visual. If
   you ever want to add real photos, the swap is one line per machine:

   - Drop a file under `public/machines/`, e.g. `public/machines/ball-mill.jpg`
   - Open `src/data/machines.ts`, find that machine's `images: []`
   - Change to `images: ["/machines/ball-mill.jpg"]`

   That's it. `MachineImage` detects `images[0]` and bypasses the
   gradient automatically. Aspect ratio is locked to 4:3, so use photos
   shot landscape and roughly that crop. `next/image` handles sizing.

   For multiple angles per machine, append additional paths
   (`["/machines/ball-mill.jpg", "/machines/ball-mill-2.jpg"]`); the
   component currently shows `images[0]` only — extend later if you want
   a gallery.

7. ~~Inquiry form endpoint~~ — REMOVED. The contact form was a
   `mailto:` form that fails on most mobile devices and produces
   unreadable output on desktop. The contact page now surfaces LINE +
   phone as the primary channels with email as quiet fallback, which
   is how Thai B2B actually contacts industrial suppliers. If you
   ever want a form back, wire Web3Forms / Formspree / FormSubmit
   into a new ContactForm component — env var pattern would be
   `process.env.NEXT_PUBLIC_FORM_ENDPOINT`. Not recommended unless
   you have specific lead-tracking needs LINE can't satisfy.

8. **Google Maps embed**, `src/lib/site.ts` → `SITE.mapEmbedSrc`
   Currently a generic Sam Phran search. Replace with a real "share →
   embed map" URL pointing at the factory address.

9. **Specs / dimensions per machine**, `src/data/machines.ts` and
   `src/components/SpecsTable.tsx` (not yet built, `Machine` type has no
   `specs[]` field). If you want real dimensions/tonnage shown on product
   pages: add `specs?: { label: Bi; value: Bi }[]` to the `Machine` type,
   build the component, render inside an accordion below Features.

## Already done from §15

- Default accent = industrial amber (per spec §3 + §15.8). One change in
  `src/app/globals.css` → `--amber` if you ever swap palettes.
- Both locales scaffolded with full UI strings (`messages/th.json`,
  `messages/en.json`), fluent native copy, not machine-translated.
- All 20 machines from §7.4 with Thai/English short, process, features,
  and SEO keywords.
- Static export builds clean (`bun run build`) → 58 routes under `out/`.
- Sitemap, robots, JSON-LD (Organization sitewide, Product per machine,
  LocalBusiness on Contact, BreadcrumbList on product pages) emitted.

## Notes

- Routing: `localePrefix: 'always'`. Root `/` redirects to `/th/` via
  `out/index.html` written by `scripts/postbuild.mjs`. The spec's
  `as-needed` variant doesn't work under static export (it would need
  middleware which export disables); this is the advisor-sanctioned
  fallback.
- Phone numbers: displayed as local (`02-431-2100`) and dialled as
  international (`+6624312100`) per spec §14.
- `useSearchParams` on Contact is Suspense-wrapped (required for export).
