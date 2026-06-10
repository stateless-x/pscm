# Blog post template

This file defines the structure every blog post on the Petkasem site
must follow. New posts go in `/docs/blog/<slug>.md` and conform to
this shape.

## Why this template exists

We're an old industrial company in a tough market. We can't promise
"lifetime support" because we don't know what the next 5 years look
like. But we CAN promise things that are true today: parts in stock,
our team builds + repairs, fast response, 38+ years of know-how. The
template enforces that distinction — every post promises only what's
controllable, and never commits to a future the writer can't guarantee.

## Hard rules (every post)

1. **No em-dashes (—).** Anywhere. Commas, periods, colons, line
   breaks. The owner has a blanket no-em-dash policy.

2. **No "lifetime" / "forever" / "always" promises.** Specifically
   ban these phrases or any Thai equivalent:
   - "ตลอดอายุการใช้งาน" → "ตลอดอายุของอะไหล่ที่ผลิตล็อตปัจจุบัน" or just delete
   - "lifetime support" → "long-term service, parts in stock today"
   - "เราจะอยู่ดูแลคุณตลอดไป" → "ทีมที่สร้างเครื่องคือทีมที่ดูแลซ่อมให้"
   - "always available" → "currently in stock" / "ปัจจุบันมีให้พร้อมส่ง"

   Promise what's controllable today, not what depends on the future.

3. **Native Thai voice.** Verb-first, real factory shorthand allowed
   (แบทช์, ไลน์, สเปก, รัน, ฟีด, สลิป, บอลมิล, ฟิลเตอร์เพรส, เพรส,
   เมช, ไฮดรอลิก). Conversational, engineer-to-owner tone. Not
   textbook ("เครื่องจักรที่มีความสำคัญอย่างยิ่ง" type phrasing is
   banned).

4. **Honest soft brand mention at the END only.** Body reads as useful
   editorial that would be valid even reposted on a competitor's site.
   Brand mention lives in a single italic paragraph at the bottom,
   ~50 words, with a concrete CTA (see rule 8).

## Required sections (in this order)

1. **YAML frontmatter** — see schema below
2. **H1** — same as the title in frontmatter
3. **Intro** (1-2 paragraphs) — set the question or problem
4. **Body sections** (3-6 H2 headings, ~150-300 words each)
   - At least ONE section must include **concrete numbers** (cost
     ranges, scrap rates, throughput math, etc.) — not vague
     "saves time" claims
   - At least ONE section must include a **"common mistake"** or
     "what NOT to do" callout — buyers love avoid-this content
5. **A short "what we can guarantee today" paragraph** (optional but
   recommended for posts that touch on after-sales / longevity). 1-2
   sentences. Frames promises around what's controllable now.
6. **Closing thought** (1 short paragraph) — pulls the argument
   together without restating it
7. **Italic outro with CTA** — see rule 8

## Frontmatter schema

```yaml
---
title: "<one-line working title, ~60-80 Thai chars>"
description: "<meta description, ~120-160 chars, native Thai with 1-2 keywords>"
keywords:
  - <8-12 Thai/English keywords; popular aliases preferred>
author: "เพชรเกษมจักรกลซีรามิค"
publishDate: YYYY-MM-DD
tags:
  - "<topic tags>"
locale: th  # or en
template: "default"  # this template
---
```

## CTA rules (rule 8, the most important rule)

The closing italic outro is where we earn the lead. Three things it
MUST do, in this order:

1. **One concrete sentence about Petkasem** — what we build, that we
   build + repair in-house, since 1986. No "we are the leader." No
   superlatives. Verifiable facts only.

2. **What happens when you call** — concrete:
   - "ที่ปรึกษาเป็นช่างจริง ไม่ใช่ฝ่ายขาย"
   - "ตอบกลับใน LINE ภายในวันทำการ"
   - "ขอใบเสนอราคาฟรี ไม่มีค่าใช้จ่ายแม้คุณไม่สั่งทำ"

   Each of these is verifiable today. None promises future behavior.

3. **One specific CTA** — link to either `/contact?ref=<slug>` (when
   the post is about a specific machine), `/service` (for repair-themed
   posts), or `/contact` (for general posts). One link, not three.

   Bad: "ติดต่อเราที่ ✓ โทร ✓ LINE ✓ อีเมล ✓ เว็บไซต์"
   Good: "ปรึกษาสเปกกับเรา ผ่าน LINE หรือโทร 02-431-2100"

## What NOT to do in the CTA

- Don't promise "lifetime support" / "forever" / "ตลอดอายุ"
- Don't say "best in Thailand" / "ดีที่สุด"
- Don't say "trusted by hundreds of factories" unless you can name them
- Don't use urgency manipulation ("ขณะที่ราคายังไม่ขึ้น", "เฉพาะเดือนนี้")
- Don't say "we'll always be here" — we don't know that, and buyers
  in this economy can smell that promise
- Don't have multiple competing CTAs. One link. One action.

## What to do instead

- Promise things that are true today (parts in stock, our team builds,
  ฟรี consult, fast LINE response).
- Use the company's age as a *past* signal, not a *future* promise
  ("38 ปีที่อยู่กับอุตสาหกรรมเซรามิกไทย" — verifiable past).
- Make the call feel low-risk ("ฟรี ไม่มีค่าใช้จ่าย ไม่ต้องสั่งทำ
  ก็คุยกันได้").
- Use specific URLs with `?ref=<slug>` so the contact form pre-fills
  the machine the buyer was reading about. Friction reduction.

## Length

- **800-1500 Thai words** body. Posts under 800 don't rank long-tail.
  Posts over 1500 lose buyer attention.
- **Subheadings every 200-300 words** for scanability.
- **Outro 40-70 words.** Concise.

## Example CTA (good)

```markdown
*เพชรเกษมจักรกลซีรามิค ผลิตและซ่อมเครื่องจักรเซรามิกในประเทศไทยมาตั้งแต่ปี
2529 เครื่องทุกตัวที่กล่าวถึงในบทความนี้เราสร้างและดูแลซ่อมเองในโรงงาน
ปัจจุบันเรามีอะไหล่และทีมช่างพร้อมรับงาน หากต้องการปรึกษาสเปกหรือ
สอบถามราคา ทักมาคุยกับช่างได้ทาง [LINE](#) หรือโทร 02-431-2100 ฟรี
ไม่มีค่าใช้จ่าย ไม่ต้องสั่งทำก็คุยกันได้*
```

## Example CTA (bad, do NOT do this)

```markdown
*เพชรเกษมจักรกลซีรามิคคือผู้นำในวงการเครื่องจักรเซรามิกของไทย เราพร้อม
ดูแลคุณตลอดอายุการใช้งานเครื่อง พร้อมรับประกันคุณภาพและบริการหลังการขาย
ที่ดีที่สุด ติดต่อเราเลยวันนี้!*
```

Why the bad one is bad: "ผู้นำ" (unverifiable), "ตลอดอายุ" (we don't
know), "ที่ดีที่สุด" (subjective superlative), exclamation mark (sales
energy not editorial), no concrete CTA, no specific URL.
