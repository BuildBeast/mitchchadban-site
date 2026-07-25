# Priority Internal-Link Implementation — Stage 2C

**Date:** 2026-07-25 · **Scope:** Add the high-priority inbound internal links mapped in the Stage 1 audit (§12) into three thin-but-ranking target pages. Prose-only anchor insertions; no architecture, metadata, or content rewrites.
**Source of truth:** `docs/gsc-url-consolidation-audit-2026-07-25.md` §12 (internal-link opportunities) + §11 QW-5 · target canonicals resolved from the repository.

---

## Links implemented

| Source page | Section | Anchor text | Target canonical | Result |
|---|---|---|---|---|
| technical-seo-checklist-plain-english | Part 2 — Indexing checklist | a sudden drop in rankings | /what-to-do-when-your-google-rankings-drop-suddenly/ | ✅ added (1×) |
| seo-for-saas-australia-what-works-in-2026 | Core updates still reward overall quality | diagnosing performance changes | /what-to-do-when-your-google-rankings-drop-suddenly/ | ✅ added (1×, phrase-wrap) |
| ai-seo-vs-traditional-seo-whats-changed | 5) Trust signals matter more | rebuild after a sudden drop | /what-to-do-when-your-google-rankings-drop-suddenly/ | ✅ added (1×) |
| entity-seo-and-why-it-matters-for-ai-search | How to improve your entity footprint | if your rankings dropped | /what-to-do-when-your-google-rankings-drop-suddenly/ | ✅ added (1×) |
| best-ways-to-build-e-e-a-t-in-2026 | 5) Build authority without begging for backlinks | a rankings-drop triage framework | /what-to-do-when-your-google-rankings-drop-suddenly/ | ✅ added (1×) |
| how-chatgpt-chooses-sources | Step 5: ChatGPT looks for extractable information | Comparison tables | /how-comparison-content-affects-aeo-rankings/ | ✅ added (1×, phrase-wrap) |
| how-google-ai-overviews-choose-sources | 5. Supporting link selection | how comparison pages get cited | /how-comparison-content-affects-aeo-rankings/ | ✅ added (1×) |
| how-perplexity-chooses-sources | Structured content wins | comparison sections | /how-comparison-content-affects-aeo-rankings/ | ✅ added (1×, phrase-wrap) |
| the-difference-between-mentions-citations-and-rankings | What is a citation? | comparison content and AEO rankings | /how-comparison-content-affects-aeo-rankings/ | ✅ added (1×) |
| aeo-australia-how-to-show-up-in-ai-answers | Template 3: Comparison blocks | use comparison content | /how-comparison-content-affects-aeo-rankings/ | ✅ added (1×) |
| growth-marketing-strategy-for-saas | One Growth Loop (compounding mechanism) | the channels growing fastest right now | /best-growth-marketing-channels-australia-2026/ | ✅ added (1×) |
| from-traffic-to-demos-a-practical-funnel-for-b2b-saas | Top-of-funnel with commercial value | the best growth channels for 2026 | /best-growth-marketing-channels-australia-2026/ | ✅ added (1×, phrase-wrap) |
| growth-marketing-consultant-for-saas-startups | Demand Generation → Channel strategy | the fastest-growing marketing channels | /best-growth-marketing-channels-australia-2026/ | ✅ added (1×, phrase-wrap) |

All 13 anchors are distinct wording — no exact-match anchor is reused across pages.

---

## Summary

- **Source pages changed:** 13
- **English links added:** 13
- **Spanish links added:** 0
- **Links added per target page:**
  - `what-to-do-when-your-google-rankings-drop-suddenly` — **5**
  - `how-comparison-content-affects-aeo-rankings` — **5**
  - `best-growth-marketing-channels-australia-2026` — **3**
  - `aeo-explained-how-to-rank-in-ai-answers` — **0** (skipped, see below)
  - `the-complete-ai-search-strategy-guide-2026` — **0** (skipped, see below)

### Opportunities skipped and why
- **AEO Explained** and **Complete AI Search Strategy Guide:** the audit (§12) explicitly states both are already well-linked (≈17 inbound links each) and "No new links required — prioritise the three thin targets." No inbound links were added to them, and they were not used as sources for this sprint's mapped opportunities.
- **Spanish pages:** audit §12 maps **no** Spanish internal-link opportunities. Per the brief, no Spanish body copy was pointed at an English target and no Spanish counterpart was invented. Zero Spanish pages touched.
- **entity-seo → Rankings Drop** was flagged during drafting as the weakest topical fit, but it is an explicit audit-mapped opportunity ("Entity/authority loss as a drop cause") and a natural, non-forced conditional insertion existed ("…among the first things to shore up if your rankings dropped"), so it was **implemented**, not skipped.

---

## Anchor & link-quality rules honoured
- Every link woven into **existing relevant prose** (7 phrase-wraps, 6 short natural clauses/parentheticals); no "click here"/"read more"/naked URLs; no headings linked.
- **One** new link per source, **one** per source section; no source received a duplicate link to a target it already linked (all sources had 0 prior links to their target).
- Original meaning and tone preserved; only minimal grammar added to host each anchor.
- All hrefs point **directly to the current canonical route** (lowercase, trailing slash) — no uppercase URL, no Cargo-era path, no redirecting alias, no 404.

---

## Verification

- **Target routes exist & are canonical 200:** `dist/what-to-do-when-your-google-rankings-drop-suddenly/index.html`, `dist/how-comparison-content-affects-aeo-rankings/index.html`, `dist/best-growth-marketing-channels-australia-2026/index.html` all present; hrefs match each target's own declared canonical exactly.
- **No legacy redirect / uppercase / Cargo / alias / 404 target:** confirmed — all three targets are current self-canonical routes.
- **No malformed HTML / nested anchors:** `grep -P '<a[^>]*<a'` across all pages → none.
- **No accidental duplicate link:** each changed source contains its target slug exactly once, inside exactly one anchor href (source and built HTML).
- **Word-level diff:** the only change in each of the 13 files is the inserted anchor plus minimal connecting words — no metadata, schema, canonical, redirect, title, image, or unrelated link changed.
- **Build:** `npm run build` → **success**, 144 pages, sitemap generated, no errors.
- **Built-HTML spot-check:** each of the 13 pages renders its new `<a href="/<canonical>/">…</a>` exactly once with the intended anchor text.

## Exact files changed
- 13 article source files (listed in the table above), one line each (the single-line `pageContent`).
- `docs/priority-internal-link-implementation-2026-07-25.md` — this report (added).

## Not changed
No page titles, metadata, H1s/headings, schema, canonicals, redirects, URLs/slugs, images, CSS/layouts, sitemap logic, Astro config, or dependencies were modified. No new pages created. The travel-site repository was not touched.

**Nothing was staged, committed, or pushed.**
