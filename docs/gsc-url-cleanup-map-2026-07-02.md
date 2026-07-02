# GSC URL Cleanup Map — 2026-07-02

Redirect & indexation cleanup plan derived from the latest Google Search Console
coverage exports, following the Cargo → Astro migration.

**Scope:** Main domain (`mitchchadban.com`) only. Travel subdomain URLs are **out of
scope** for this pass. No code changed yet — this is a plan/report only.

**Method:** Every source URL below was matched against the actual `src/pages/*` routes
and the existing `vercel.json` redirect table. Targets are only recommended where a
live page/route was confirmed to exist. Where no current page matches, the URL is
classified as *leave 404/410* rather than given an invented destination.

**Route conventions confirmed:** `trailingSlash: true`; pages live at
`src/pages/<slug>/index.astro`; homepage is `/` (`src/pages/index.astro`); English blog
index is `/blogs-resources/` (`<h1>Blog Archive</h1>`); English contact page is
`/contact-form/`.

**"Already handled"** = a matching redirect already exists in `vercel.json` and needs no
new work.

---

## Section 1 — Full diagnosis table

| Source URL | GSC bucket | Diagnosis | Recommended action | Target URL | Confidence |
|---|---|---|---|---|---|
| `/Homepage` | Not found 404 | Cargo default homepage slug; live homepage is `/` | 301 redirect | `/` | Medium |
| `/Main` | Not found 404 | Cargo helper/nav slug; no unambiguous live equivalent (could be `/` or `/services-main/`) | Leave 404/410 | — | Low |
| `/Social-Media-Design-That-Doesn-t-Look-Like-Everyone-Else` | Not found 404 | Title-case variant of live service page; apostrophe rendered as `-t-`. Existing redirect only covers the `%E2%80%99` apostrophe form, not this title-case form | 301 redirect (new) | `/social-media-design-that-doesnt-look-like-everyone-else/` | High |
| `/Portrait-Commissions-Digital-Print` | Not found 404 | Title-case variant; live page uses `-digital-and-print` | 301 redirect | `/portrait-commissions-digital-and-print/` | High |
| `/Commercial-Illustration-Digital-Print` | Not found 404 | Title-case variant; live page uses `-digital-and-print` | 301 redirect | `/commercial-illustration-digital-and-print/` | High |
| `/Branding-Designer-Logos-Visual-Identity` | Not found 404 | Title-case variant of live page (`-logos-and-visual-identity`) | 301 redirect | `/branding-designer-logos-and-visual-identity/` | High |
| `/The-Marketing-Collateral-Checklist-What-You-Need` | Not found 404 | Title-case variant; existing redirect only covers the trailing `!` form | 301 redirect (new) | `/the-marketing-collateral-checklist-what-you-need/` | High |
| `/Portrait-Commissions-Digital-Print-Mitch-Chadban` | Not found 404 | Same portrait page with `-Mitch-Chadban` title suffix appended by Cargo | 301 redirect | `/portrait-commissions-digital-and-print/` | High |
| `/SEO-for-SaaS-Startups-Mitch-Chadban` | Not found 404 | SEO-for-SaaS page with `-Mitch-Chadban` title suffix | 301 redirect | `/seo-for-saas-startups/` | High |
| `/Landing` | Not found 404 | Cargo helper slug; no unambiguous live equivalent | Leave 404/410 | — | Low |
| `/About-3` | Not found 404 | Cargo numbered duplicate of the About page | 301 redirect | `/about/` | High |
| `/Blog-Feed` | Not found 404 | Cargo blog-feed slug; live blog index is `/blogs-resources/` (Blog Archive) | 301 redirect | `/blogs-resources/` | Medium |
| `/Front-page` | Not found 404 | Cargo default front-page slug; live homepage is `/` | 301 redirect | `/` | Medium |
| `/contact-form` | Duplicate, no canonical | **Live page** at `/contact-form/`; duplicate is the non-trailing-slash form vs canonical trailing-slash. `trailingSlash:true` self-canonicalises | Leave alone (monitor) | `/contact-form/` (self) | High |
| `/About` | Duplicate, no canonical | Redirect already exists → `/about/` | Already handled | `/about/` | High |
| `/branding-designer-(logos- -visual-identity)` | Duplicate, no canonical | Paren/`+` form; redirect already exists (`%28…%29` / escaped-paren) | Already handled | `/branding-designer-logos-and-visual-identity/` | High |
| `/Graphic-Designer-for-Modern-Brands` | Crawled, not indexed | Title-case variant of live page | 301 redirect | `/graphic-designer-for-modern-brands/` | High |
| `/Biggs` | Crawled, not indexed | Title-case variant of live case study | 301 redirect | `/biggs/` | High |
| `/Best-Demand-Gen-Content-for-2026` | Crawled, not indexed | Title-case variant of live page | 301 redirect | `/best-demand-gen-content-for-2026/` | High |
| `/Best-SEO-AI-Workflow-for-2026` | Crawled, not indexed | Title-case variant; live page uses `-seo-and-ai-workflow-` | 301 redirect | `/best-seo-and-ai-workflow-for-2026/` | High |
| `/Growth-Marketing-Consultant-for-SaaS-Startups` | Crawled, not indexed | Title-case variant of live page | 301 redirect | `/growth-marketing-consultant-for-saas-startups/` | High |
| `/Best-Ways-to-Build-E-E-A-T-in-2026` | Crawled, not indexed | Title-case variant of live page | 301 redirect | `/best-ways-to-build-e-e-a-t-in-2026/` | High |
| `/AI-SEO-vs-Traditional-SEO-What-s-Changed` | Crawled, not indexed | Title-case variant; live page is `-whats-changed`. Existing redirect covers the `what's` apostrophe form, not this title-case `What-s` form | 301 redirect (new) | `/ai-seo-vs-traditional-seo-whats-changed/` | High |
| `/From-Traffic-to-Demos-A-Practical-Funnel-for-B2B-SaaS` | Crawled, not indexed | Redirect already exists | Already handled | `/from-traffic-to-demos-a-practical-funnel-for-b2b-saas/` | High |
| `/Custom-Pet-Portraits-Digital-Print` | Crawled, not indexed | Title-case variant; live page uses `-digital-and-print` | 301 redirect | `/custom-pet-portraits-digital-and-print/` | High |
| `/Canva-vs-Designer-When-DIY-Starts-Costing-You` | Crawled, not indexed | Redirect already exists | Already handled | `/canva-vs-designer-when-diy-starts-costing-you/` | High |
| `/Positioning-vs-Messaging-Why-Your-Ads-Aren-t-Working` | Crawled, not indexed | Title-case variant; live page is `-arent-working`. Existing redirects cover the `%E2%80%99` apostrophe forms, not this title-case `Aren-t` form | 301 redirect (new) | `/positioning-vs-messaging-why-your-ads-arent-working/` | High |
| `/Best-Growth-Marketing-Channels-for-2026-Australia` | Crawled, not indexed | Redirect already exists | Already handled | `/best-growth-marketing-channels-australia-2026/` | High |
| `/AEO-Australia-How-to-Show-Up-in-AI-Answers` | Crawled, not indexed | Title-case variant of live page | 301 redirect | `/aeo-australia-how-to-show-up-in-ai-answers/` | High |
| `/test-1` | Crawled, not indexed | Leftover test page; no live equivalent | Leave 404/410 (410 preferred) | — | High |

---

## Section 2 — Safe redirects to implement now

High-confidence mappings only. All targets confirmed to exist as live
`src/pages/<slug>/index.astro` routes. Add as `permanent: true` (301) entries to
`vercel.json`, mirroring the existing pattern (include **both** the no-slash and
trailing-slash source forms). None of these duplicate an existing redirect.

| Source URL | Target URL |
|---|---|
| `/Social-Media-Design-That-Doesn-t-Look-Like-Everyone-Else` | `/social-media-design-that-doesnt-look-like-everyone-else/` |
| `/Portrait-Commissions-Digital-Print` | `/portrait-commissions-digital-and-print/` |
| `/Portrait-Commissions-Digital-Print-Mitch-Chadban` | `/portrait-commissions-digital-and-print/` |
| `/Commercial-Illustration-Digital-Print` | `/commercial-illustration-digital-and-print/` |
| `/Branding-Designer-Logos-Visual-Identity` | `/branding-designer-logos-and-visual-identity/` |
| `/The-Marketing-Collateral-Checklist-What-You-Need` | `/the-marketing-collateral-checklist-what-you-need/` |
| `/SEO-for-SaaS-Startups-Mitch-Chadban` | `/seo-for-saas-startups/` |
| `/About-3` | `/about/` |
| `/Graphic-Designer-for-Modern-Brands` | `/graphic-designer-for-modern-brands/` |
| `/Biggs` | `/biggs/` |
| `/Best-Demand-Gen-Content-for-2026` | `/best-demand-gen-content-for-2026/` |
| `/Best-SEO-AI-Workflow-for-2026` | `/best-seo-and-ai-workflow-for-2026/` |
| `/Growth-Marketing-Consultant-for-SaaS-Startups` | `/growth-marketing-consultant-for-saas-startups/` |
| `/Best-Ways-to-Build-E-E-A-T-in-2026` | `/best-ways-to-build-e-e-a-t-in-2026/` |
| `/AI-SEO-vs-Traditional-SEO-What-s-Changed` | `/ai-seo-vs-traditional-seo-whats-changed/` |
| `/Custom-Pet-Portraits-Digital-Print` | `/custom-pet-portraits-digital-and-print/` |
| `/Positioning-vs-Messaging-Why-Your-Ads-Aren-t-Working` | `/positioning-vs-messaging-why-your-ads-arent-working/` |
| `/AEO-Australia-How-to-Show-Up-in-AI-Answers` | `/aeo-australia-how-to-show-up-in-ai-answers/` |

### Medium-confidence — recommend, but confirm intent before adding
These map cleanly to live pages but rely on Cargo naming convention rather than an exact
slug match. Reasonable to add; flagged separately so they aren't lumped in as certain.

| Source URL | Target URL | Note |
|---|---|---|
| `/Homepage` | `/` | Cargo default homepage slug |
| `/Front-page` | `/` | Cargo default front-page slug |
| `/Blog-Feed` | `/blogs-resources/` | Live blog index is the "Blog Archive" at `/blogs-resources/` |

---

## Section 3 — Leave alone

**Already handled by existing `vercel.json` redirects (no new work):**
- `/About` → `/about/`
- `/branding-designer-(logos- -visual-identity)` → `/branding-designer-logos-and-visual-identity/`
- `/From-Traffic-to-Demos-A-Practical-Funnel-for-B2B-SaaS` → `/from-traffic-to-demos-a-practical-funnel-for-b2b-saas/`
- `/Canva-vs-Designer-When-DIY-Starts-Costing-You` → `/canva-vs-designer-when-diy-starts-costing-you/`
- `/Best-Growth-Marketing-Channels-for-2026-Australia` → `/best-growth-marketing-channels-australia-2026/`

**No live equivalent — leave 404/410 (do not invent a destination):**
- `/Main` — Cargo helper/nav slug; ambiguous (`/` vs `/services-main/`). No redirect.
- `/Landing` — Cargo helper slug; no clear equivalent. No redirect.
- `/test-1` — leftover test page. Prefer returning **410 Gone** so Google drops it faster.

**Canonical / crawl-hygiene items to leave (per constraints — do not change canonical URLs or content):**
- `/contact-form` (Duplicate, no user-selected canonical) — `/contact-form/` is the live
  page; the duplicate is just the non-trailing-slash form. `trailingSlash:true` already
  self-canonicalises. Leave alone and let Google reprocess; monitor.

**Standard buckets to leave as-is (not in the supplied lists, noted per the report brief):**
- `http → https` and `www → non-www` redirects — already correct; leave.
- `/cart` (Excluded by noindex) — noindex is correct if e-commerce/cart is irrelevant to this site. Leave.
- `fbclid` parameter URLs — tracking-parameter duplicates; leave (canonical strips them).
- **All `travel.mitchchadban.com` URLs** — explicitly out of scope for this pass. Do not touch.

---

## Notes on scope & next step
- The three "Excluded by noindex" (1), remaining "Page with redirect" (4), and the bulk
  of "Discovered – currently not indexed" (74) were not enumerated in the task list and
  are largely expected states (redirects working; thin/new pages awaiting crawl). No
  action recommended unless a specific URL is escalated.
- **Next step (separate change, on request):** append the Section 2 mappings to
  `vercel.json` following the existing dual (slash / no-slash) `permanent: true` pattern,
  and set up a `410` response for `/test-1`. No page content or canonical tags change.
