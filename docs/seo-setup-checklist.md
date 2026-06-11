# SEO setup checklist

One-time setup of the free Google tools every B2B site should have
before launch. Do these in order. Total time: about 60 to 90 minutes
spread across 1 or 2 sessions.

## Why these matter

The site is technically ready for search (sitemap, JSON-LD, hreflang,
mobile-friendly, fast). What it lacks is **discovery**. These tools
tell Google your site exists and tell you which queries actually bring
traffic. Without them you are flying blind.

---

## Part 1: Google Search Console

This is the dashboard that shows how your site appears in Google
search. It is free and required.

### What you need before starting

- A Google account (the one you want to receive notifications on,
  typically `purin.buriwong@gmail.com`)
- Access to the deployed site at its production domain
- Either: ability to add a DNS record at your domain registrar, OR
  ability to upload an HTML file to `public/` and redeploy

### Steps

1. **Go to https://search.google.com/search-console** and sign in.

2. **Click "Add property"**. You have a choice:
   - **Domain property** (recommended): covers `pscmceramic.com` and
     all subdomains, all protocols. Requires DNS verification.
   - **URL prefix property**: covers exactly `https://pscmceramic.com/`.
     Easier verification (HTML file or meta tag) but you may have to
     add multiple properties for different URL forms later.

   Pick "Domain". It is one-time more work but covers everything.

3. **Verify ownership via DNS**.
   - Google shows you a TXT record to add, looks like
     `google-site-verification=abc123...`
   - Log into your domain registrar (where you bought pscmceramic.com)
   - Go to the DNS management section
   - Add a new TXT record with that exact value, host is `@` or root
   - Save. Wait 5 to 30 minutes for DNS to propagate
   - Click "Verify" in Search Console

4. **Submit your sitemap** once verified:
   - In Search Console, sidebar: "Sitemaps"
   - Enter `sitemap.xml` (just that, not the full URL)
   - Submit

5. **Set the preferred locale** (optional but helps):
   - Sidebar: "Settings" then "International Targeting"
   - Confirm "Thailand" as the geographic target

### What to watch in the first 30 days

- **Coverage**: should show 50+ valid pages indexed within 2 weeks
  (we have 8 blog posts, 20 product pages, 7 main pages, and a few
  utility pages = about 60 routes). If indexed count is below 30
  after a month, something is blocking crawl. Common cause:
  `robots.txt` accidentally disallowing.
- **Performance** report stays mostly empty for the first 2 to 4
  weeks. Then queries start showing up. Look for: what queries
  surface our pages, average position, click-through rate.
- **Mobile usability**: should show zero issues. If errors appear,
  fix them — Google now uses mobile-first indexing.

### What to do at 60 days

Open Performance, sort by "Impressions" descending. The top 20 queries
that show our pages tell you exactly which topics buyers actually
search for. Use this as the input for the next 5 blog posts. Real
data beats the topic list in `docs/blog/seo-topic-list.md`.

---

## Part 2: Google Business Profile

This is what shows up in Google Maps and the "near me" / local pack
results in Google search. Critical for Thai B2B buyers searching
"ผู้ผลิตเครื่องจักรเซรามิก นครปฐม" or similar.

### What you need before starting

- The same Google account as Search Console
- Real business address (we have it: 60/7 หมู่ 9 ถนนพุทธมณฑลสาย 5
  ต.ไร่ขิง อ.สามพราน นครปฐม 73210)
- Business phone (we have: 02-431-2100)
- At least one photo of the workshop or building (phone photo is fine)
- 1 to 2 weeks of patience for the postcard verification

### Steps

1. **Go to https://business.google.com** and sign in.

2. **Add your business**. Search for "เพชรเกษมจักรกลซีรามิค" first.
   If a profile already exists (because Google auto-discovered the
   business), claim it. If not, create a new one.

3. **Fill out the profile carefully**:
   - **Business name**: `เพชรเกษมจักรกลซีรามิค`
     (exactly this, no extra keywords like "ผู้ผลิตเครื่องจักร" —
     stuffing keywords here gets you suspended)
   - **Category**: primary should be "ผู้ผลิตเครื่องจักรอุตสาหกรรม"
     (Industrial machinery manufacturer). Add secondary categories:
     "Ceramic equipment supplier", "Industrial equipment supplier".
   - **Address**: exact registered address
   - **Service area**: Thailand (whole country) if you ship nationwide
   - **Hours**: จันทร์-เสาร์ 08:00-17:00 (matches the site)
   - **Phone**: 02-431-2100
   - **Website**: `https://pscmceramic.com/th/`
   - **Description** (750 characters): write naturally in Thai.
     Mention since 1986, design + build + repair, in-house parts
     production, primary machine types (หม้อบด, ฟิลเตอร์เพรส,
     ตะแกรงแม่เหล็ก, เครื่องอัดไฮดรอลิก). Avoid superlatives.
     Avoid "ผู้นำ", "ที่ดีที่สุด" — Google considers them red flags.

4. **Verify ownership**:
   - Google mails a postcard with a verification code to your
     business address. Takes 7 to 14 days in Thailand.
   - When the postcard arrives, enter the code in Business Profile.
   - Until verified, the profile is not publicly visible.

5. **After verification, add content** (immediate ranking boost):
   - **Photos**: at least 5 (exterior of building, workshop interior,
     a couple of machines being built, team at work). Phone photos
     are fine. Caption each in Thai.
   - **Logo**: when you have one
   - **Products / Services** section: add the 4 to 5 main machines
     with short descriptions
   - **Q&A**: monitor and answer (questions buyers ask publicly)
   - **Posts**: optional, but a 100-word "update" weekly is a small
     ranking signal

### Why this matters for B2B

A factory owner in Lamphun searching "ผู้ผลิตหม้อบดเซรามิก ใกล้ฉัน"
on their phone sees the local pack — 3 businesses with a map. If you
are not in the pack, you are invisible to that buyer. Search Console
will not help with this query because the answer comes from Business
Profile, not from the website ranking.

---

## Part 3: Bing Webmaster Tools (optional, 10 minutes)

Bing has small market share in Thailand but the setup is essentially
free. It also feeds Yahoo and DuckDuckGo search results.

1. Go to https://www.bing.com/webmasters
2. Sign in with the same Google account (Bing accepts Google sign-in)
3. "Import from Google Search Console" — Bing pulls your sites and
   sitemap automatically
4. Done

You will rarely look at this dashboard. But the 10 minutes of setup
gets your content indexed by everyone-not-Google.

---

## Part 4: Quick sanity checks after setup

Run these queries in Google after 3 to 4 weeks to confirm Google has
indexed the site:

```
site:pscmceramic.com
```
Should show 30+ results. If it shows 0, something is blocking
indexing. Check `robots.txt` and Search Console "Coverage" report.

```
site:pscmceramic.com/blog
```
Should show all 8 blog posts.

```
ฟิลเตอร์เพรส site:pscmceramic.com
```
Should show your filter-press product page and the related blog post.

If any of these return zero results after 4 weeks, open Search
Console and look at the "URL Inspection" tool to debug specific pages.

---

## Part 5: Things to ignore

You will encounter advice telling you to do these. Skip them for now:

- **Backlink building services / outreach companies**: paid links are
  against Google guidelines. Some get away with it, most get
  penalized. Build links organically through actual industry
  relationships.
- **Submitting to 100+ directories**: most directories are spam. Only
  submit to genuine industry directories (Thai Industrial Federation,
  ceramic industry associations).
- **Keyword stuffing / hidden text**: covered earlier in the blog
  template. Do not.
- **Generic "SEO audits"** from agencies: most are auto-generated
  reports flagging non-issues. The technical SEO on this site is
  already in good shape per the post audit.

---

## Part 6: When to revisit

Set a calendar reminder for **3 months from launch** to:

1. Open Search Console Performance, look at top 20 queries
2. Open Business Profile, check incoming questions
3. Read Coverage report — fix any indexing errors
4. Look at which blog posts get traffic — write more on those topics
5. Look at which posts get zero impressions after 3 months —
   either improve them or accept they were the wrong topic

Then again at 6 months. Then quarterly.

SEO is a freight train, not a switch. The work you do today shows
results in 3 to 12 months. Stay patient. Stay honest in the content.
The compound effect is real.
