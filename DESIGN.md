---
name: Petkasem Ceramic Machine
description: A glaze-lab job traveller for a Thai ceramic-machinery workshop built to keep its own equipment running.
colors:
  blueprint-ink: "#102a3b"
  blueprint-surface: "#17394d"
  blueprint-surface-raised: "#245064"
  near-black-ink: "#111d24"
  ceramic-paper: "#f5efe3"
  ceramic-paper-aged: "#e9dfcd"
  paper-rule: "#cbbda7"
  blueprint-rule: "#416071"
  body-ink: "#17242b"
  body-ink-muted: "#526169"
  warm-white: "#fff9ed"
  cool-white-muted: "#b9cad1"
  kiln-coral: "#ff7148"
  kiln-red: "#b83920"
  kiln-wash: "#f6d2c3"
  blueprint-cobalt: "#146b94"
  cobalt-wash: "#d1e3e8"
  fired-clay: "#b96f50"
  available-green: "#27775d"
  order-orange: "#ee5b32"
  request-grey: "#617078"
  line-green: "#06c755"
  line-green-hover: "#05b94e"
  line-green-ink: "#062b16"
typography:
  display:
    fontFamily: "IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7.4vw, 6.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.08em"
  code:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.18em"
rounded:
  sharp: "0"
  focus: "2px"
  segment: "3px"
  badge: "4px"
  round: "9999px"
spacing:
  hairline: "1px"
  compact: "8px"
  control-gap: "12px"
  component: "16px"
  page-gutter-mobile: "20px"
  card: "20px"
  page-gutter-desktop: "32px"
  section-mobile: "64px"
  section-tablet: "112px"
  section-desktop: "128px"
components:
  button-primary:
    backgroundColor: "{colors.kiln-coral}"
    textColor: "{colors.near-black-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.kiln-red}"
    textColor: "{colors.warm-white}"
  button-secondary:
    backgroundColor: "{colors.blueprint-surface}"
    textColor: "{colors.warm-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 20px"
    height: "44px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.body-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 20px"
    height: "44px"
  button-line:
    backgroundColor: "{colors.line-green}"
    textColor: "{colors.line-green-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 20px"
    height: "44px"
  filter-chip:
    backgroundColor: "{colors.ceramic-paper}"
    textColor: "{colors.body-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 16px"
    height: "44px"
  filter-chip-selected:
    backgroundColor: "{colors.blueprint-cobalt}"
    textColor: "{colors.warm-white}"
  job-sheet-card:
    backgroundColor: "rgba(255, 249, 237, 0.66)"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.sharp}"
    padding: "20px"
---

# Design System: Petkasem Ceramic Machine

Updated: 2026-09-11 · Verified against `src/app/globals.css`, `src/app/[locale]/layout.tsx`, and the shared components in `src/components/`. The shipped source is authoritative when implementation and this guide diverge; update both in the same change.

## Overview

**Creative North Star: "The Glaze-Lab Job Traveller"**

This interface feels like the paperwork, test marks, machine plates, and blueprints of an established ceramic-machinery workshop. Warm ceramic stock carries the reading experience; blueprint ink creates large structural fields; kiln coral behaves like an inspection stamp. The result is capable and specific rather than sleek, luxurious, or software-like.

The system is deliberately square, ruled, and information-forward. Oversized Thai-safe headlines make confident claims, while mono codes, numbered sections, internal rules, rivets, and workshop photography supply the evidence. Density is moderate: generous section spacing separates stages of the story, but components remain compact enough for engineers and factory owners to scan.

Motion is a light finishing layer, never a prerequisite. The static HTML remains complete and legible, imagery is treated as documentary evidence, and every conversion path stays direct and thumb-reachable.

**Key Characteristics:**

- Warm ceramic paper against deep blueprint fields.
- Kiln-coral stamps and rules used as operational signals.
- Square job-sheet cards with inset construction lines and offset shadows.
- Thai-first IBM Plex Sans Thai paired with IBM Plex Mono for codes and figures.
- Honest workshop photography with restrained saturation and contrast.
- Strong hierarchy, visible focus, and mobile contact actions within reach.

## Colors

The palette combines fired ceramic warmth with technical blueprint blues and one high-energy kiln mark.

### Primary

- **Kiln Coral:** The dominant action, section-stamp, selection, and focus color; use it where the workshop is asking the visitor to act or notice a proof point.
- **Kiln Red:** The stronger coral state for links on paper and primary-button hover, preserving legibility where the brighter coral would be too weak.
- **Kiln Wash:** A quiet inspection-note tint for acknowledged context and warm editorial callouts.

### Secondary

- **Blueprint Cobalt:** Navigation and card-link interaction, active filters, process icons, and technical identity.
- **Cobalt Wash:** A pale technical tint available for low-emphasis informational surfaces.

### Tertiary

- **Fired Clay:** A restrained material accent tied to the ceramic process; it is supporting color, not a competing call to action.
- **LINE Green:** Reserved for the external LINE contact channel, with its own dark green ink and darker hover state.

### Neutral

- **Blueprint Ink:** Primary dark field for heroes, calls to action, mobile navigation, and the footer.
- **Blueprint Surface / Raised Surface:** Incremental dark tonal layers for equipment plates, secondary controls, and hover states.
- **Near-Black Ink:** High-contrast text placed on kiln coral.
- **Ceramic Paper / Aged Ceramic Paper:** Main page ground and alternating section or control surface.
- **Paper Rule / Blueprint Rule:** Hairlines that structure light and dark fields respectively.
- **Body Ink / Muted Body Ink:** Reading text and supporting copy on paper.
- **Warm White / Muted Cool White:** Primary and secondary text on blueprint fields.
- **Available Green / Order Orange / Request Grey:** Semantic machine-status colors only.

### Named Rules

**The Kiln-Mark Rule.** Kiln coral denotes action, inspection, or structural emphasis; it is not ambient decoration.

**The Two-Stock Rule.** Build light sections from ceramic paper and aged paper, and dark sections from blueprint ink and its surface steps; do not introduce unrelated neutral greys.

**The Channel-Color Rule.** LINE green appears only on LINE actions and identity details.

## Typography

**Display Font:** IBM Plex Sans Thai (with system-ui and sans-serif fallback)

**Body Font:** IBM Plex Sans Thai (with system-ui and sans-serif fallback)

**Label/Mono Font:** IBM Plex Mono (with ui-monospace and monospace fallback)

**Character:** IBM Plex Sans Thai gives Thai and English one sturdy industrial voice without treating Thai as a fallback. IBM Plex Mono turns dates, model codes, phone numbers, counts, and section indices into equipment data without taking over prose.

### Hierarchy

- **Display:** Bold, fluid, and Thai-safe; reserved for the primary hero claim, balanced to a short measure of about 15 characters.
- **Headline:** Bold fluid section title used for major narrative spreads and CTA bands.
- **Title:** Semibold compact heading for cards, detail groups, and secondary page hierarchy.
- **Body:** Regular text with generous leading for Thai legibility; editorial articles rise to 1.125rem with 1.85 leading and use a 42rem reading column.
- **Label:** Small semibold tracked Sans for bilingual eyebrows and UI labels. Do not uppercase Thai.
- **Code:** Small tracked Mono for Latin letters, digits, model numbers, dates, phone numbers, and numbered section stamps; use tabular numerals where values align.

### Named Rules

**The Thai-First Type Rule.** Thai labels stay in IBM Plex Sans Thai; never force Thai through the mono stack or rely on uppercase for hierarchy.

**The Marks-Need-Air Rule.** Large Thai display copy keeps at least 1.08–1.1 line-height so vowels and tone marks cannot clip.

**The Mono-Is-Data Rule.** IBM Plex Mono is for codes, numerals, dates, and terse Latin metadata—not paragraphs or Thai copy.

## Layout

The main content container is centered at 1200px with 20px mobile gutters and 32px gutters from the medium breakpoint. The header may widen to 1440px so the full desktop navigation fits. Editorial pages tighten to 42rem or 48rem; major headings stop around 56rem–64rem, and hero copy is capped to a short readable measure.

Sections use 64px vertical padding on small screens, 112px from 768px, and 128px from 1024px. Repeated card grids begin as one column, become two at 768px, and three at 1024px; compact audience tiles begin at two columns and become four at 1024px. Split narratives and CTA bands generally become two columns at 768px, while product-detail layouts wait until 1024px before splitting.

Controls and CTAs stack full-width on narrow screens, then wrap into natural-width rows from 640px. The fixed two-column call/LINE bar appears only below 768px and respects the bottom safe area. Desktop navigation appears at 1024px; below that, a full-height right-side drawer takes over.

The spacing rhythm is based on compact 8–12px internal gaps, 16–24px component spacing, 32–64px group separation, and generous 64–128px section separation. Hairline dividers and asymmetric rules organize related items before additional boxes are introduced.

**The Traveller-Grid Rule.** Responsive changes simplify the same ordered job sheet; they do not reorder proof, machinery, and contact into a different story.

## Elevation & Depth

This is a flat, paper-and-ink system with a few structural offsets. Tonal layering, 1px rules, photo overlays, inset lines, and literal offset shadows create depth; soft floating card shadows are not the default. The mobile navigation drawer is the one conventional overlay and may use a large ambient shadow against its dimmed backdrop.

### Shadow Vocabulary

- **Job-Sheet Offset** (`6px 6px 0 rgba(16, 42, 59, 0.08)`): Gives paper cards the slight registration offset of stacked stock.
- **Kiln Stamp** (`2px 2px 0 currentColor`): Makes primary stamps and buttons feel pressed and physical.
- **Selected Filter Mark** (`3px 3px 0 var(--amber)`): Indicates the current production-stage filter without rounding or glow.
- **Drawer Ambient** (`shadow-xl` in the shipped Tailwind theme): Separates the mobile menu from its 60% black overlay.

### Named Rules

**The Flat-By-Default Rule.** Surfaces remain flat at rest; offset shadows belong only to paper stock, stamps, selected filters, and the modal drawer.

**The Hard-Shadow Rule.** Workshop objects use crisp positional offsets, not diffuse SaaS glows.

## Shapes

The dominant form is square and fabricated: cards, fields, buttons, maps, hero labels, and panels have no corner radius. Thin outer rules and occasional inner inset rules make surfaces feel assembled. Equipment nameplates add small circular rivets, while semantic status dots and the LINE icon container are intentionally round exceptions.

Micro-radii are functional only: 2px on global focus outlines and inline code, 3px on language-switcher segments, and 4px on compact status badges. Photographs clip to rectangular process-friendly ratios such as 16:9, 4:3, and 3:4.

**The Fabricated-Edge Rule.** Default to square corners; a rounded silhouette must communicate status, segmented selection, a rivet, or a branded channel.

## Components

### Buttons

- **Shape:** Square, compact, and stamp-like with a minimum 44px touch target; prominent conversion buttons increase to 48–52px.
- **Primary:** Kiln coral with near-black ink, bold or semibold label copy, and a crisp offset stamp shadow.
- **Hover / Focus:** Lift 2px and shift to kiln red with warm-white text on hover; press down 1px when active. Keyboard focus uses a 2px kiln-coral ring or outline with a 2px offset.
- **Secondary / Ghost / Outline:** Dark blueprint fill for secondary actions, paper-tint hover for ghost actions, and 1px paper or blueprint rules for outline actions.
- **LINE:** LINE green with dark green ink; it does not borrow the kiln-coral stamp treatment.

### Chips

- **Style:** Square 44px-high filter controls with a 1px paper rule and compact Sans labels.
- **State:** Unselected chips sit on ceramic paper and acquire cobalt border/text on hover. Selected chips fill with blueprint cobalt, use warm-white text, and carry a 3px kiln-coral offset.

### Cards / Containers

- **Corner Style:** Square throughout.
- **Background:** Job sheets use translucent warm-white stock over the page; standard information panels use ceramic or aged paper; equipment plates use blueprint surface.
- **Shadow Strategy:** Job-sheet offset only, with no ambient resting shadow.
- **Border:** 1px paper rule plus a second low-opacity cobalt inset rule 6px inside job sheets.
- **Internal Padding:** Typically 20px; machinery and article cards use a tighter image frame followed by 8–16px copy insets.
- **Interaction:** Whole-card links move or scale the image by 2–4px and shift title/arrow color; the paper body stays physically stable.

### Inputs / Fields

The shipped site has no text-entry form. Do not invent a field vocabulary: contact conversion happens through LINE, phone, email, and map links.

### Navigation

The 72px sticky header is warm paper with a 2px blueprint bottom rule and light backdrop blur. The red PSCM mark anchors the left; compact muted links gain an aged-paper block and cobalt text on hover; the quote action is a kiln stamp. At mobile sizes, a square 44px menu trigger opens a full-height blueprint drawer. Active drawer links use a 2px kiln-coral left rule and kiln-coral text, with call and LINE actions fixed at the drawer foot.

### Equipment Nameplate

The signature equipment plate is a square blueprint-surface block with a 1px outline, a second inset line, four rendered rivets, mono model data, a machine category, status badge, and maker mark. It is a detail-page evidence component, not a generic decoration for every card.

### Numbered Section Stamp

Major sections open with a small kiln-coral stamp, a short connector rule, and a Thai-safe eyebrow. Trust metrics repeat the same job-traveller grammar with mono indices and oversized tabular numerals.

### Photography

Workshop and machinery photography is documentary, rectangular, and slightly inked with reduced saturation and increased contrast. Heroes darken images with layered blueprint overlays so text remains primary; content images preserve recognisable equipment and people rather than behaving as abstract texture.

## Do's and Don'ts

### Do:

- **Do** begin new surfaces with ceramic paper, blueprint ink, and kiln coral before reaching for any additional hue.
- **Do** use exact 1px rules, inset construction lines, mono codes, and numbered stamps to communicate workshop precision.
- **Do** keep Thai in IBM Plex Sans Thai with sufficient line-height and use IBM Plex Mono only for Latin data.
- **Do** keep primary contact targets at least 44px high, stack them on narrow screens, and retain the mobile call/LINE bar with safe-area padding.
- **Do** preserve visible 2px kiln-coral focus treatment and reduced-motion behavior.
- **Do** show useful machinery and workshop photography with restrained ink treatment and legibility overlays.

### Don't:

- **Don't** round every card or control, add pill-shaped navigation, or soften the system into a generic SaaS interface.
- **Don't** use diffuse glows, glossy gradients, or decorative drop shadows where a rule, tonal step, or crisp offset will do.
- **Don't** use kiln coral as ambient filler or LINE green outside a LINE action.
- **Don't** set Thai in IBM Plex Mono, uppercase Thai labels, or tighten Thai display leading below the implemented safe range.
- **Don't** hide important product, service, or contact facts behind motion, client-only effects, or interaction.
- **Don't** invent an input form, pricing, certifications, customer marks, or performance claims to fill visual space.
