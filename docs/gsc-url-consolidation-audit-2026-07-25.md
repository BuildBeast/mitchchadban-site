# GSC URL Consolidation & Traffic-Recovery Audit — Stage 1 (Audit Only)

**Site:** mitchchadban.com (main domain) · **Prepared:** 2026-07-25 · **Status:** Stage 1 findings for approval. **No site code, redirects, canonicals, metadata, sitemaps, content or internal links were changed.** Only two files were added: this report and the action-map CSV.

**Companion file:** `docs/gsc-url-action-map-2026-07-25.csv` (machine-readable, one row per URL).

---

## 1. Executive summary

The redirect and canonical **infrastructure is fundamentally sound**. Across 194 coverage rows and the performance export, there are **no redirect loops, no redirects to wrong destinations, no insecure final hops, and only one intentionally noindexed page** (`/proximamente/`, correctly excluded from the sitemap). Every current page declares a correct self-referential canonical (trailing-slash) that matches its sitemap URL, and www/http variants canonicalise cleanly to `https://mitchchadban.com/…`. **There are zero P0 issues.**

The real problems are **(a) missing redirects for a batch of capitalised/encoded legacy "Cargo" URLs that still 404, several of which carry meaningful impressions**, and **(b) chronic low CTR / low position on pages that are already live and consolidated**. Two of the highest-impression URLs in Google's data are dead:

- **`/Logo-Design-Cost-in-Australia-What-You-Actually-Get`** — **464 impressions**, avg pos 25 → **404**. Google is ranking a dead URL. The live page exists at `/logo-design-cost-in-australia-what-you-actually-get/`.
- **`/The-12-Point-Brand-Consistency-Checklist`** — **214 impressions**, avg pos **10.1 (page 1)** → **404**. The live page exists at `/the-12-point-brand-consistency-checklist/`.

Neither is in the Coverage exports (they surfaced in Performance/Pages.csv), which is why they are easy to miss — they are the single highest-value fixes and are added as supplementary P1 rows in the action map.

The biggest *demand* signal — the **Rankings Drop** article (`/what-to-do-when-your-google-rankings-drop-suddenly/`, ~1,216 combined impressions) — is **live, indexable, self-canonical and already URL-consolidated**. Its problem is **weak ranking (avg pos ~64)**, not fragmentation or noindex. It needs content depth, internal authority and time — it is *not* a quick win.

The clearest quick win is **Best Growth Marketing Channels** (fully consolidated, cluster avg pos **7.63**, ranking pos **2–4** for real "fastest-growing channels Australia 2026" queries, with ~0% CTR — a title/snippet-intent problem, no rebuild needed).

**Recommended sequence (Stage 2, on approval):** add the missing redirects (P1) → align titles/meta on 4–6 consolidated page-1 pages (P1) → add internal links into thin-but-ranking targets (P1/P2) → monitor canonical-disagreement trio → leave travel subdomain and correct intentional redirects alone.

### Headline counts

| Metric | Value |
|---|---|
| Coverage export rows | **194** (49 + 52 + 89 + 3 + 1) |
| Unique URLs (2 URLs dual-listed 404↔redirect) | **192** |
| Action-map data rows | **194** (192 unique coverage + 2 supplementary performance-only 404s) |
| Live 200 (of 194 coverage) | 120 |
| Live 404 (of 194 coverage) | 74 |
| Redirect loops / wrong-destination / insecure hops | **0** |
| Accidentally noindexed content pages | **0** |
| **P0 / P1 / P2 / Ignore-monitor** | **0 / 4 / 25 / 165** |

---

## 2. Export date ranges & limitations

| Export | Coverage / range | Notes |
|---|---|---|
| `Performance-on-Search` (Chart/Pages/Queries) | **2026-04-23 → 2026-07-22** ("Last 3 months", Web) | 15 clicks · 4,498 impressions · 0.33% CTR · weighted avg pos ≈ **33.0** (Desktop 12clk/4,123imp/pos 33.8; Mobile 3clk/370imp/pos 25.3; Tablet 0/5/22.4). |
| `Coverage-Validation` ×3 | crawl snapshot to 2026-07-11 | "All known pages" sitemap. Issues: Crawled-not-indexed (49), Not found 404 (52), Page with redirect (89). These are **validation *sample* tables**, not the full coverage counts. |
| `Coverage-Drilldown` ×2 | to 2026-07-03 | Canonical disagreement (3), Excluded by noindex (1). |
| `Reports_snapshot.csv` (GA4) | **2026-01-01 → 2026-07-25** | 858 active users; 6,634 events; 61 "key events" (web). |

**Limitations & cautions**
- **GA4 "key events" (61) are not defined.** The export lists a total on platform `web` but **no event names**. They must **not** be treated as conversions until the actual event names are identified in GA4. (Per brief.)
- The **Coverage tables are validation samples**; the true site-wide totals per state in the GSC UI may be larger. Every row supplied (194) is classified; unsupplied rows can't be.
- **GSC "Last crawled" dates predate fixes.** Several rows reflect crawls *before* the July rebuild/redirect work, so their status is stale (verified live below).
- **GSC does not tell us which canonical Google chose** for the 3 canonical-disagreement URLs — that requires the URL Inspection tool (manual).
- **GA4 traffic is largely non-organic:** 905 sessions total, of which **google/organic = 60**, perplexity = 4, chatgpt = 2; **cargo.site + mitchchadban.cargo.site referral = 56 sessions** (the old Cargo site is still live and referring). 791 users are `(direct)/(none)`. Bot/hosting cities (Las Vegas, Singapore, Council Bluffs, Boardman, The Dalles) dominate GA4 geography — treat GA4 volumes as noisy.
- **31 views of the 404 page** in GA4 (2026-01-01→07-25) corroborate that dead legacy URLs are being hit by real navigation, reinforcing the missing-redirect fixes.
- Live verification used rate-limited HEAD/GET requests (300 ms apart, manual redirect tracing) on 2026-07-25.

---

## 3. Current route & canonical source of truth (Stage 1A)

Confirmed against the repository **and the built output** (`dist/`), not filenames alone.

- **Framework/host:** Astro (static) on Vercel. `astro.config.mjs` → `site: https://mitchchadban.com`. `vercel.json` → `"trailingSlash": true`.
- **Canonical URL form:** `https://mitchchadban.com/<slug>/` — lowercase, **trailing slash**, non-www, https. All **143** page routes pass an explicit self-referential `canonical` prop (verified: 143/143). Sampled canonicals all match their sitemap URL exactly.
- **Sitemap:** `@astrojs/sitemap` → `dist/sitemap-index.xml` → `dist/sitemap-0.xml`, **139 URLs**, all main-domain trailing-slash. Excludes `/404/` and `/proximamente/` (config filter). **No travel URLs** in the sitemap.
- **hreflang:** 138 pages emit `<link rel="alternate" hreflang>` pairs (EN ↔ ES). BaseLayout renders `alternates` when provided.
- **Indexability:** Only **`/proximamente/`** sets `noindex={true}` (correct — also excluded from sitemap). **No content page is accidentally noindexed** — including the Rankings Drop article and the SEO/technical checklists (earlier "noindex" string matches were article *body text discussing the noindex tag*, not meta directives).
- **Redirects:** `vercel.json` contains **~75 redirect rules** (301 permanent), mostly with/without trailing-slash pairs, covering: capitalised title URLs, `(…)`/`+`/apostrophe/em-dash punctuation, `%`-encoded accented Spanish slugs, and a few structural moves (`/portfolio`→`/portfolio-1/`, `/Homepage`→`/`, `/Blog-Feed`→`/blogs-resources/`).
- **robots.txt:** `Allow: /`, sitemap reference present.
- **Vercel behaviour confirmed live:** trailing-slash normalisation (`308`) fires **before** case/format redirects, so a legacy capitalised URL that *has* a rule resolves in two hops (e.g. `/About` → 308 `/About/` → 301 `/about/` → 200). A legacy URL **without** a rule normalises to its own slash form and then **404s** (Vercel paths are case-sensitive). **This is the root cause of every missing-redirect 404 below.**

---

## 4. Coverage classification totals (Stage 1B/1C)

All **194 export rows → 192 unique URLs** classified (2 URLs appear in both the *404* and *Page with redirect* exports: `/commercial-illustration-(digital- -print)` and `/best-growth-marketing-channels-for-2026-(australia)`).

| Classification | Unique URLs |
|---|---:|
| Intentional redirect, correct | 81 |
| Travel-subdomain issue | 41 |
| Legacy URL missing a redirect | 23 |
| Intentional retired URL | 23 |
| Current live page with stale GSC status | 21 |
| Duplicate/canonical conflict requiring correction | 3 |
| **Total** | **192** |

**Reconciliation to the 5 GSC issue buckets (194 export rows):**

| GSC issue (rows) | Breakdown |
|---|---|
| Page with redirect (89) | 81 intentional-correct · 4 legacy-missing-redirect (space-variant 404s) · 3 retired · 1 stale-live |
| Not found 404 (52) | 19 retired · 14 legacy-missing-redirect · 12 stale-live (now redirect/200) · 7 travel |
| Crawled-not-indexed (49) | 34 travel · 9 stale-live · 6 legacy-missing-redirect |
| Canonical disagreement (3) | 3 canonical-conflict |
| Excluded by noindex (1) | 1 retired (`/cart`, now 404) |

Missing-redirect action items = **23 unique coverage** + **2 supplementary performance-only** = **25 total**.

---

## 5. Redirect findings (Stage 1D)

**Verdict: the redirects that exist all work and point to the correct canonical. No corrections required to existing rules.**

- **81 "Page with redirect" URLs → correct canonical, 200, in sitemap.** These are *supposed* to be excluded from indexing — **no action** (do not try to make old URLs indexable). Examples: `/Canva-vs-Designer-When-DIY-Starts-Costing-You` → `/canva-vs-designer-when-diy-starts-costing-you/`; `/portfolio` → `/portfolio-1/`; `/Homepage` → `/`; www/http variants → `https://mitchchadban.com/…`.
- **Chain length:** worst observed is **3 hops** (e.g. `/Best-SEO-AI-Workflow-for-2026` → 308 → 308 → 200), caused by Vercel doing trailing-slash normalisation and the case/format redirect as separate hops. They reach the correct secure canonical — **minor, not a defect**; optionally collapsible later, not in this sprint.
- **No loops. No wrong destinations. No chain ends on http.** `http://…` and `www.…` variants upgrade to `https` non-www correctly.
- **The only redirect-adjacent defects are *missing* rules** (see §6), not broken ones.

---

## 6. 404 findings (Stage 1D) — the core cleanup

74 of 194 coverage URLs (plus the 2 supplementary performance URLs) resolve to **404**. They split cleanly:

### 6a. Legacy URLs missing a redirect (23 coverage + 2 supplementary = 25) — **fix these**

The current page exists; only a redirect rule is missing (capitalised title-case, or the Cargo `+`→space `%20` variant). Ranked by impressions:

| Impr | Avg pos | Dead URL (404) | → Current page | Priority |
|---:|---:|---|---|---|
| **464** | 25.4 | `/Logo-Design-Cost-in-Australia-What-You-Actually-Get` † | `/logo-design-cost-in-australia-what-you-actually-get/` | **P1** |
| **214** | **10.1** | `/The-12-Point-Brand-Consistency-Checklist` † | `/the-12-point-brand-consistency-checklist/` | **P1** |
| 55 | 22.3 | `/growth-marketing-para-saas-y-startups-(estrategia- -ejecución)` (space) | `/growth-marketing-para-saas-y-startups/` | **P1** |
| 40 | 13.0 | `/best-seo- -ai-workflow-for-2026` (space) | `/best-seo-and-ai-workflow-for-2026/` | **P1** |
| 30 | 6.8 | `/Paragon-BM` | `/paragon-bm/` | P2 |
| 16 | 6.1 | `/SEO-for-SaaS-Australia-What-Works-in-2026` | `/seo-for-saas-australia-what-works-in-2026/` | P2 |
| 16 | 5.3 | `/Blogs-Resources` | `/blogs-resources/` | P2 |
| 10 | 6.2 | `/Archive` | `/archive/` | P2 |
| 8 | 7.9 | `/Karl-Jacobs` | `/karl-jacobs/` | P2 |
| 7 | 6.3 | `/Services-Main` | `/services-main/` | P2 |
| 7 | 8.1 | `/branding-designer-(logos- -visual-identity)` (space) | `/branding-designer-logos-and-visual-identity/` | P2 |
| 6 | 7.2 | `/Johnny-Bird` | `/johnny-bird/` | P2 |
| 4 | 7.5 | `/MonoDuo` | `/monoduo/` | P2 |
| 4 | 8.8 | `/Newy-Fried-Chicken` | `/newy-fried-chicken/` | P2 |
| 3 | 2.0 | `/Blogs-Resources-Page-2` | `/blogs-resources/` | P2 |
| 2 | 5.0 | `/Growth-Marketing-Strategy-for-SaaS` | `/growth-marketing-strategy-for-saas/` | P2 |
| 2 | 3.5 | `/SEO-for-SaaS-Startups` | `/seo-for-saas-startups/` | P2 |
| 2 | 2.0 | `/Technical-SEO-Checklist-Plain-English` | `/technical-seo-checklist-plain-english/` | P2 |
| 1 | 8.0 | `/commercial-illustration-(digital- -print)` (space) | `/commercial-illustration-digital-and-print/` | P2 |
| 0 | — | `/Social-Media-Design-That-Doesnt-Look-Like-Everyone-Else` | `/social-media-design-that-doesnt-look-like-everyone-else/` | P2 |
| 0 | — | `/portrait-commissions-(digital- -print)` (space) | `/portrait-commissions-digital-and-print/` | P2 |
| 0 | — | `/custom-pet-portraits-(digital- -print)` (space) + `/custom-pet-portraits` | `/custom-pet-portraits-digital-and-print/` | P2 |
| 0 | — | `/diseño-gráfico-para-empresas-(limpio,-premium-y-listo-para-usar)` (accented literal) | `/diseno-grafico-para-empresas/` | P2 |
| 0 | — | `/ilustración-comercial-(digital-y-impresa)` (accented literal) | `/ilustracion-comercial-digital-y-impresa/` | P2 |
| 0 | — | `/home` → `/` ; `/services` → `/services-main/` | (structural) | P2 |

† Supplementary — from Performance/Pages.csv, **not** in a Coverage export.

**Pattern to fix in Stage 2:** add 301s for (i) the exact capitalised title-case variants that lack a rule, and (ii) the `%20` "space" variants of the `(digital + print)` / `(estrategia + ejecución)` slugs (the `%2B` variants already redirect). Add both slash and non-slash sources. This is a well-bounded batch, not a rearchitecture.

### 6b. Intentional retired URLs (23) — **no action**

Cargo-era utility/system pages and drafts with no current equivalent and ~no search value: `/Landing`, `/Main`, `/Mobile-nav`, `/home-menu`, `/casa`, `/casa-menu`, `/cabeza-mobile`, `/pie-de-página`, `/spanish`, `/test-1`, `/commercial-illustration-(digital- -print)-copy`, `-copy-copy`, `/consultor-seo-para-saas-en-australia-—…` (mislabeled "australia" draft of the Spain page — see §14), plus the retired `/cart` (ex-noindex, now 404) and several Cargo menu/system routes. Leave as 404 (correct). Do **not** add redirects or reindex.

---

## 7. Crawled-currently-not-indexed findings (49)

- **34 travel-subdomain URLs** → §9 (out of scope).
- **9 "current live page with stale GSC status"** — live 200, indexable, self-canonical, in sitemap. Crawled-not-indexed here = **low authority / thin, or a pre-fix crawl**, *not* a config defect. Includes the strongest quick-win pages: **`/aeo-explained-how-to-rank-in-ai-answers`** (324 impr), **`/best-ways-to-build-e-e-a-t-in-2026`** (47 impr, pos 9.6), `/seo-for-professional-services-…`, `/pricing-and-packages`, `/blogs-resources`. Action: strengthen internal links + snippet/content (see §11–12); monitor re-indexing. No redirect/canonical change.
- **6 legacy-missing-redirect 404s** already listed in §6a (`/SEO-for-SaaS-Australia-…`, `/MonoDuo`, `/Growth-Marketing-Strategy-for-SaaS`, `/SEO-for-SaaS-Startups`, `/Blogs-Resources`, `/best-seo- -ai-workflow-for-2026`).
- The homepage `?fbclid=…` param URL returns 200 and collapses to the site canonical — **no action** (canonical handles parameters).

---

## 8. Canonical-disagreement findings (3)

All three are **live 200, in the sitemap, with a correct self-referential canonical and no noindex** — i.e. the site implementation is already correct. Google has independently chosen a *different* canonical (typically a sign of perceived thin/duplicate content or low authority). **The export does not reveal Google's chosen canonical**, so each needs URL-Inspection confirmation.

| URL | Live | Declared canonical | Likely cause / note |
|---|---|---|---|
| `/contact-form/` | 200 | self | Thin utility page; likely clustered with `/contacto/` or homepage. |
| `/how-google-ai-overviews-choose-sources/` | 200 | self | 216 impr (pos 17.6) on the no-slash variant, which 308→ this page. Sits in a tight cluster of near-duplicate "how X chooses sources" articles (ChatGPT/Perplexity/Google) + the Spanish `/como-elige-google-ai-overviews-sus-fuentes/`. |
| `/acerca-de/` | 200 | self | Spanish About; likely clustered with `/about/` — confirm hreflang pairing is reciprocated. |

**Action:** manual URL Inspection to see Google's chosen canonical; then differentiate content / strengthen internal links. **No redirect or canonical code change is warranted** on current evidence. Priority **P2 / monitor**.

---

## 9. Travel-subdomain findings (41) — **out of scope this sprint**

41 coverage URLs belong to **travel.mitchchadban.com** (34 under Crawled-not-indexed, 7 under 404). Live checks: ~19 return 200, ~22 return 404 (mostly accented/em-dash slug variants). This is a **separate project**; the main-site sitemap correctly excludes it. **Recorded only — do not touch the travel repository, redirects, or content during this sprint.** They are tagged `Travel-subdomain issue` / `Ignore-monitor` in the action map.

---

## 10. Consolidated search-performance clusters (Stage 1E)

Impression-weighted positions across all known variants of each page. "Chain" shows live behaviour.

| Cluster | Variants | Clicks | Impr | Wtd pos | Consolidation status |
|---|---:|---:|---:|---:|---|
| **Rankings Drop** | 2 | 1 | **1,216** | **64.4** | ✅ Consolidated (www 301→canonical). **Weak ranking**, not a URL problem. Not a quick win. |
| **Logo Design Cost** | 2 | 0 | **466** | 25.4 | ❌ **464 impr on a 404** capitalised URL. **Add redirect (P1).** |
| **AEO Explained** | 2 | 0 | 391 | 16.9 | ✅ Consolidated (cap variant 308→canonical). Page-2; needs push. |
| **Complete AI Search Strategy Guide** | 2 | 2 | 340 | 32.6 | ✅ Consolidated (`(2026)` paren variant 308→canonical). Canonical page ranks pos 39; needs content/authority. |
| **Best Growth Marketing Channels** | 4 | 1 | 260 | **7.63** | ✅ **Fully consolidated, page 1.** Best CTR quick-win. |
| **Google AI Overviews** | 1–2 | 0 | 216 | 17.6 | ✅ no-slash 308→canonical; but **canonical-disagreement** (see §8). |
| **Brand Consistency Checklist** | 2 | 1 | 215 | **10.1** | ❌ **214 impr (page 1) on a 404** capitalised URL. **Add redirect (P1)** → then CTR win. |
| **Perplexity Chooses Sources** | 2 | 0 | 121 | 66.0 | ✅ long-title variant 308→canonical. Weak ranking. |

Key reads:
- **Fragmentation is largely already solved by redirects** — most clusters consolidate. The two exceptions (**Logo**, **Brand Consistency**) fragment because their highest-impression variant is a **404**, not because of a canonical split.
- **Best Growth Marketing Channels** is the standout: fully consolidated, cluster pos 7.6, and ranking **pos 2–4** for `fastest growing marketing channels australia 2026` (26 impr, pos 2.38) and `which marketing channels are growing fastest in australia 2026?` (58 impr, pos 3.98) — with essentially **0% CTR**. Pure title/snippet-intent opportunity.
- **Rankings Drop** owns huge query demand ("google ranking suddenly dropped" 157 impr pos 41; "google rankings drop" 94 impr pos 62; dozens of long-tail "why did my rankings drop" variants) but ranks page 6–7. **This is a ranking/authority/content problem**, not consolidation.

---

## 11. Quick-win CTR opportunities (Stage 1F)

Proposals below improve **search-intent clarity and click appeal** — not keyword stuffing. **Proposed, not implemented.**

### QW-1 — Best Growth Marketing Channels · **P1 (snippet only; already consolidated)**
- **URL:** `/best-growth-marketing-channels-australia-2026/` · 260 impr (cluster) · pos 7.63 · CTR ~0.4%
- **Target queries:** "fastest growing marketing channels australia 2026" (pos 2.4), "which marketing channels are growing fastest in australia 2026?" (pos 4.0)
- **Current title:** `Best Growth Marketing Channels Australia 2026 | Mitch Chadban`
- **Proposed title:** `Fastest-Growing Marketing Channels in Australia (2026) | Mitch Chadban`
- **Current meta:** "Compare the best growth marketing channels for Australian businesses in 2026, from SEO and AI search to paid media, referrals, LinkedIn and email."
- **Proposed meta:** "Which marketing channels are growing fastest in Australia in 2026 — ranked, with where to invest first and what's losing steam."
- **Reason:** title says "best" but the page already ranks top-4 for "fastest-growing / which are growing" phrasing; align the snippet to the query that's already winning position. No rewrite. **Needs:** snippet-only.

### QW-2 — Brand Consistency Checklist · **P1 (redirect FIRST, then snippet)**
- **URL:** `/the-12-point-brand-consistency-checklist/` · 214 impr on the **404** variant · pos 10.1
- **Blocker:** the impressions are on `/The-12-Point-Brand-Consistency-Checklist` (404). **Add the 301 (§6a) before any snippet work**, or CTR stays ~0 because clicks hit a dead page.
- **Current title:** `Brand Consistency Checklist for Small Businesses | Mitch Chadban`
- **Proposed title:** `The 12-Point Brand Consistency Checklist (Free) | Mitch Chadban`
- **Proposed meta:** "A free 12-point checklist to audit brand consistency across your website, socials, docs and messaging — with what 'consistent' looks like for each."
- **Reason:** matches the "brand consistency checklist" query and the "12-point" phrasing users see; "free/checklist" lifts CTR. **Needs:** consolidation (redirect) → snippet.

### QW-3 — Best Ways to Build E-E-A-T · **P1 (snippet + internal links)**
- **URL:** `/best-ways-to-build-e-e-a-t-in-2026/` · 47 impr · pos 9.6 · page 1, ~0 CTR · (queries: "e-e-a-t best practices 2026" pos 10, "eeat 2026" pos 28)
- **Current title:** `Best Ways to Build E-E-A-T in 2026 | Mitch Chadban` (keep)
- **Proposed meta:** "A practical, step-by-step way to build E-E-A-T in 2026 — experience, proof, original assets and authority — with a pre-publish checklist."
- **Needs:** snippet + internal-link support (§12).

### QW-4 — Best Demand Gen Content for 2026 · **P2 (snippet only)**
- **URL:** `/best-demand-gen-content-for-2026/` · 36 impr · pos 8.4 · page 1
- **Proposed meta:** "The demand-gen content that works in 2026 — a create/capture/convert system and a monthly plan you can actually ship."
- **Needs:** snippet-only.

### QW-5 — How Comparison Content Affects AEO · **P1 (internal links + snippet)**
- **URL:** `/how-comparison-content-affects-aeo-rankings/` · queries: "how does comparison content affect aeo rankings?" pos 5.9 (32 impr), same w/o "?" pos 16.7 (85 impr)
- **Current title:** `How Comparison Content Affects AEO Rankings | Mitch Chadban` (keep — already matches the query well)
- **Proposed meta:** "Why comparison pages get picked up by AI answers — and how to structure them so ChatGPT, Perplexity and AI Overviews can extract and cite you."
- **Reason:** only **4 inbound internal links**; it ranks pos 6 for its exact question. Internal-link support is the lever. **Needs:** internal-link support + snippet.

### QW-6 — AEO Explained · **P2 (content/freshness + snippet; page 2)**
- **URL:** `/aeo-explained-how-to-rank-in-ai-answers/` · 391 impr (cluster) · pos 16.9
- Already has 17 inbound links; pos 15–17 means it needs a **content refresh / stronger answer targeting** ("how to rank on aeo" pos 48, "aeo ranking" pos 62) more than links. **Needs:** content refresh + snippet. Medium.

### Assessed but **not** quick wins
- **Complete AI Search Strategy Guide** (`…-2026/`, pos 32.6): consolidated but page 3–4 for "ai search strategy" (214 impr, pos 41). **Needs content/authority**, not a snippet tweak.
- **Rankings Drop** (pos 64, ~1,216 impr): biggest demand, worst position, already consolidated & indexable. **Needs substantial content depth + internal authority + time.** Do not expect a snippet fix to move it.

---

## 12. Internal-link opportunities (Stage 1G)

Existing internal linking is already **dense** for AEO Explained (17 inbound) and the AI Search Strategy Guide (17). It is **thin where it matters most**: Rankings Drop (5), Comparison Content (4), Best Growth Marketing Channels (7). **Proposed, not inserted.** Each source page was confirmed to (a) cover the topic and (b) *not already* link the target.

### Into `/what-to-do-when-your-google-rankings-drop-suddenly/` (Rankings Drop — needs authority)
| Source page | Section / heading | Suggested anchor | Why it fits |
|---|---|---|---|
| `technical-seo-checklist-plain-english` | "Part 2 — Indexing checklist" | "what to do when rankings drop suddenly" | Indexing problems are a top cause of drops; natural next step. |
| `seo-for-saas-australia-what-works-in-2026` | "Core updates still reward overall quality" | "diagnose a sudden rankings drop" | Core-update volatility → triage guide. |
| `ai-seo-vs-traditional-seo-whats-changed` | "5) Trust signals matter more…" | "recovering after a ranking drop" | Explains volatility; links to the recovery playbook. |
| `entity-seo-and-why-it-matters-for-ai-search` | "How to improve your entity footprint" | "if your rankings dropped" | Entity/authority loss as a drop cause. |
| `best-ways-to-build-e-e-a-t-in-2026` | authority/proof section | "a rankings-drop triage framework" | E-E-A-T erosion → drops. |

### Into `/how-comparison-content-affects-aeo-rankings/` (Comparison Content — only 4 inbound, ranks pos 6)
| Source page | Section / heading | Suggested anchor | Why it fits |
|---|---|---|---|
| `how-chatgpt-chooses-sources` | "Step 5: ChatGPT looks for extractable information" | "comparison content is highly extractable" | Comparison tables are prime extractable format. |
| `how-google-ai-overviews-choose-sources` | "5. Supporting link selection" | "how comparison pages get cited" | Direct mechanism link. |
| `how-perplexity-chooses-sources` | source-evaluation section | "structure comparison content for AI" | Same reasoning, Perplexity. |
| `the-difference-between-mentions-citations-and-rankings` | citations section | "comparison content and AEO rankings" | Topical sibling; strengthens the cluster. |
| `aeo-australia-how-to-show-up-in-ai-answers` | tactics section | "use comparison content" | Actionable AEO tactic. |

### Into `/best-growth-marketing-channels-australia-2026/` (Best Growth Marketing Channels — top quick-win)
| Source page | Section / heading | Suggested anchor | Why it fits |
|---|---|---|---|
| `growth-marketing-strategy-for-saas` | "1) One Growth Loop (your compounding mechanism)" | "which channels are growing fastest in Australia" | Strategy → channel selection. |
| `from-traffic-to-demos-a-practical-funnel-for-b2b-saas` | top-of-funnel section | "best growth channels for 2026" | Funnel top = channel choice. |
| `growth-marketing-consultant-for-saas-startups` | services/approach section | "the fastest-growing marketing channels" | Commercial → editorial support. |

### Into `/aeo-explained-how-to-rank-in-ai-answers/` and `/the-complete-ai-search-strategy-guide-2026/`
Already well-linked (17 each). **No new links required** — prioritise the three thin targets above.

---

## 13. Recommended implementation order (Stage 2 — on approval)

1. **P1 — Add missing redirects** (biggest, safest wins):
   - `/Logo-Design-Cost-in-Australia-What-You-Actually-Get` → `/logo-design-cost-in-australia-what-you-actually-get/` (464 impr)
   - `/The-12-Point-Brand-Consistency-Checklist` → `/the-12-point-brand-consistency-checklist/` (214 impr, page 1)
   - `/best-seo- -ai-workflow-for-2026` (space) → `/best-seo-and-ai-workflow-for-2026/` (40 impr)
   - `/growth-marketing-para-saas-y-startups-(estrategia- -ejecución)` (space) → `/growth-marketing-para-saas-y-startups/` (55 impr)
   - Add slash + non-slash source variants for each.
2. **P1 — Align titles/meta** on consolidated page-1 pages: **QW-1** (Best Growth Marketing Channels), **QW-3** (E-E-A-T), and **QW-2** *after* its redirect lands.
3. **P1 — Internal links** into Comparison Content (QW-5) and Best Growth Marketing Channels; begin Rankings-Drop authority links.
4. **P2 — Batch the remaining missing redirects** (§6a lower rows) in one `vercel.json` pass.
5. **P2 — Content** on AEO Explained (QW-6) and the AI Search Strategy Guide (position, not snippet).
6. **P2 / monitor — Canonical-disagreement trio:** run URL Inspection, then differentiate content / hreflang; expect no code change.
7. **Ignore/monitor:** correct intentional redirects (81), correct noindex (`/proximamente/`), retired 404s (23), and all travel URLs (41).
8. **Rankings Drop:** schedule as a dedicated content/authority project, not a quick fix.

> Deliberately **excluded** (per the 60–90-day freeze): no URL restructures, no redesigns, no content moves, no page deletions, no sitemap surgery, no Astro upgrades, no GSC validation/indexing submissions.

---

## 14. Items requiring manual confirmation

1. **GA4 "key events" (61)** — obtain the actual event names in GA4 before calling any of them conversions. The 858 users / 61 key events cannot be interpreted as leads/enquiries as-is.
2. **Canonical-disagreement trio** (`/contact-form/`, `/how-google-ai-overviews-choose-sources/`, `/acerca-de/`) — use URL Inspection to see Google's chosen canonical; confirm hreflang reciprocity for `/acerca-de/`↔`/about/`.
3. **`/consultor-seo-para-saas-en-australia-—…`** (404) — this "australia" slug looks like a mislabeled draft of the Spain page `/consultor-seo-para-saas-en-espana/`. Confirm intent before deciding redirect vs leave-retired (currently classed retired).
4. **Old Cargo site still live** — GA4 shows 56 sessions referred from `cargo.site` / `mitchchadban.cargo.site`. Confirm whether the Cargo site should be unpublished/redirected at source (outside this repo; may be leaking authority and duplicate content).
5. **Coverage totals** — the GSC UI's full per-state counts may exceed these validation samples; re-pull full "Pages" coverage if you want site-wide totals beyond the 194 supplied rows.
6. **3-hop redirect chains** — cosmetic; confirm whether to collapse later (not this sprint).

---

## 15. Exact files added or changed

**Added (2):**
- `docs/gsc-url-consolidation-audit-2026-07-25.md` (this report)
- `docs/gsc-url-action-map-2026-07-25.csv` (194 data rows × 17 columns)

**Changed:** none. No site source, `vercel.json`, canonicals, metadata, content, sitemap, internal links, or dependencies were modified. Nothing was staged, committed, or pushed. No GSC validation/indexing was submitted. The travel repository was not touched.

---

### Appendix A — Priority framework applied

- **P0 (0):** broken live pages, redirect loops, wrong-destination redirects, important pages accidentally noindexed, canonical conflicts actively splitting important URLs. **None found.**
- **P1 (4):** high-impression legacy URLs missing redirects (Logo 464, Brand-Consistency 214, best-seo space 40, growth-marketing-ES space 55) + the page-1 CTR opportunities they unlock.
- **P2 (25):** lower-impression missing redirects, stale-but-harmless coverage, canonical-disagreement monitoring, secondary snippet/content work.
- **Ignore/monitor (165):** correct intentional redirects (81), correct noindex (1), retired 404s (23), travel-subdomain (41), stale rows already resolved by the July rebuild (19).

### Appendix B — Method & reproducibility

Exports extracted from the 7 supplied files; CSVs parsed with an RFC-4180 parser (handles quoted embedded newlines in the Cargo `+`→space slugs). Repo routes taken from `dist/sitemap-0.xml` (built output) + `src/pages/**` + `vercel.json`. Live behaviour verified 2026-07-25 via rate-limited (300 ms) manual redirect tracing (HEAD, GET fallback) over 203 URLs (194 coverage + 9 cluster), plus canonical/robots extraction on 62 unique live pages. Every coverage URL appears exactly once in the action map; impression-weighted positions computed from Performance/Pages.csv; totals reconcile to the source exports (49 + 52 + 89 + 3 + 1 = 194 rows → 192 unique).
