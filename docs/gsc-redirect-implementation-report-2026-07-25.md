# Stage 2A — Redirect Implementation Report

**Date:** 2026-07-25 · **Scope:** redirect-only. **Files changed:** `vercel.json` (+50 redirect rules) and this report. No page content, titles, metadata, canonicals, sitemap, internal links, or dependencies were touched. Nothing staged, committed, or pushed.

**Source of truth:** `docs/gsc-url-action-map-2026-07-25.csv` (rows where `classification = Legacy URL missing a redirect`, 25 in total = 23 coverage + 2 supplementary high-impression performance-only 404s). Destinations copied verbatim from the action map.

---

## 1. What was implemented

**25 approved source URLs**, each added with **both** a non-slash and a trailing-slash source variant (per the action-map instruction and the existing file convention) → **50 new `permanent` redirect rules**. `vercel.json` redirects went from **120 → 170**.

Every destination is an **HTTPS, non-www, lowercase, trailing-slash canonical route that returns 200** (all 23 distinct destinations re-verified live 2026-07-25). No destination is itself a redirect source (no redirect-to-redirect), no source equals its destination (no self-loop), and no duplicate sources were introduced.

Special-character sources use the file's existing escaping conventions: literal parentheses escaped as `\(` `\)`, spaces as `%20`, accented characters as `%C3%xx` (e.g. `ñ`→`%C3%B1`, `á`→`%C3%A1`, `ó`→`%C3%B3`).

### Results table

`Dest status` is the live-verified status of the destination page. `Hops` shows the redirect chain length for the two ways the source can be requested (see §2).

| # | Source URL (as indexed) | Impr | Previous status | Destination | Dest status | Hops (no-slash / slash) |
|--:|---|--:|---|---|--:|---|
| 1 | `/Logo-Design-Cost-in-Australia-What-You-Actually-Get` | 464 | 308→404 | `/logo-design-cost-in-australia-what-you-actually-get/` | 200 | 2 / 1 |
| 2 | `/The-12-Point-Brand-Consistency-Checklist` | 214 | 308→404 | `/the-12-point-brand-consistency-checklist/` | 200 | 2 / 1 |
| 3 | `/growth-marketing-para-saas-y-startups-(estrategia- -ejecución)` | 55 | 308→404 | `/growth-marketing-para-saas-y-startups/` | 200 | 2 / 1 |
| 4 | `/best-seo- -ai-workflow-for-2026` | 40 | 308→404 | `/best-seo-and-ai-workflow-for-2026/` | 200 | 2 / 1 |
| 5 | `/Paragon-BM` | 30 | 308→404 | `/paragon-bm/` | 200 | 2 / 1 |
| 6 | `/SEO-for-SaaS-Australia-What-Works-in-2026` | 16 | 308→404 | `/seo-for-saas-australia-what-works-in-2026/` | 200 | 2 / 1 |
| 7 | `/Blogs-Resources` | 16 | 308→404 | `/blogs-resources/` | 200 | 2 / 1 |
| 8 | `/Archive` | 10 | 308→404 | `/archive/` | 200 | 2 / 1 |
| 9 | `/Karl-Jacobs` | 8 | 308→404 | `/karl-jacobs/` | 200 | 2 / 1 |
| 10 | `/Services-Main` | 7 | 308→404 | `/services-main/` | 200 | 2 / 1 |
| 11 | `/branding-designer-(logos- -visual-identity)` | 7 | 308→404 | `/branding-designer-logos-and-visual-identity/` | 200 | 2 / 1 |
| 12 | `/Johnny-Bird` | 6 | 308→404 | `/johnny-bird/` | 200 | 2 / 1 |
| 13 | `/MonoDuo` | 4 | 308→404 | `/monoduo/` | 200 | 2 / 1 |
| 14 | `/Newy-Fried-Chicken` | 4 | 308→404 | `/newy-fried-chicken/` | 200 | 2 / 1 |
| 15 | `/Blogs-Resources-Page-2` | 3 | 308→404 | `/blogs-resources/` | 200 | 2 / 1 |
| 16 | `/Growth-Marketing-Strategy-for-SaaS` | 2 | 308→404 | `/growth-marketing-strategy-for-saas/` | 200 | 2 / 1 |
| 17 | `/SEO-for-SaaS-Startups` | 2 | 308→404 | `/seo-for-saas-startups/` | 200 | 2 / 1 |
| 18 | `/Technical-SEO-Checklist-Plain-English` | 2 | 308→404 | `/technical-seo-checklist-plain-english/` | 200 | 2 / 1 |
| 19 | `/commercial-illustration-(digital- -print)` | 1 | 308→404 | `/commercial-illustration-digital-and-print/` | 200 | 2 / 1 |
| 20 | `/Social-Media-Design-That-Doesnt-Look-Like-Everyone-Else` | 0 | 308→404 | `/social-media-design-that-doesnt-look-like-everyone-else/` | 200 | 2 / 1 |
| 21 | `/home` | 0 | 308→404 | `/` | 200 | 2 / 1 |
| 22 | `/services` | 0 | 308→404 | `/services-main/` | 200 | 2 / 1 |
| 23 | `/diseño-gráfico-para-empresas-(limpio,-premium-y-listo-para-usar)` | 0 | 308→404 | `/diseno-grafico-para-empresas/` | 200 | 2 / 1 |
| 24 | `/portrait-commissions-(digital- -print)` | 0 | 308→404 | `/portrait-commissions-digital-and-print/` | 200 | 2 / 1 |
| 25 | `/custom-pet-portraits-(digital- -print)` | 0 | 308→404 | `/custom-pet-portraits-digital-and-print/` | 200 | 2 / 1 |

**Total recovered impression exposure (rows above):** ~700 GSC impressions currently landing on 404s — dominated by #1 (464) and #2 (214, page-1).

---

## 2. Hop count — important, read this

**The "one hop" acceptance criterion cannot be met literally for the non-slash form of these URLs, and this is a global-config reality, not a defect in the new rules.**

Live probing (2026-07-25) confirms Vercel applies **`trailingSlash: true` normalisation (a 308) BEFORE redirect matching**:

```
/About                 → 308 → /About/            (trailing-slash normalisation fires first)
/Karl-Jacobs           → 308 → /Karl-Jacobs/      (same; then previously 404, now the new rule)
```

Consequently, for a URL requested **without** a trailing slash — which is how Google indexed the two P1 targets and most capitalised variants — the chain is inherently:

```
/The-12-Point-Brand-Consistency-Checklist
  → 308  /The-12-Point-Brand-Consistency-Checklist/     (Vercel trailingSlash, built-in)
  → 308  /the-12-point-brand-consistency-checklist/     (the new redirect rule)
  → 200                                                  (canonical page)
= 2 hops
```

- Requested **with** a trailing slash → **1 hop** to the 200 canonical.
- Requested **without** a trailing slash → **2 hops** (Vercel's own slash 308 + the new rule).

This is **identical to the behaviour of all 120 pre-existing redirects** on the site and was explicitly accepted as non-defective in the Stage 1 audit (§5). Making the non-slash form a literal single hop would require removing `trailingSlash: true`, which is a **structural change affecting all 139 canonical URLs and the sitemap — out of scope for Stage 2A** and against the 60–90-day freeze. **Recommendation: accept the 2-hop non-slash behaviour** (negligible SEO cost; the important signal — a permanent redirect to the live canonical — is delivered, and the destination is always a final 200, never another redirect rule).

---

## 3. Verification

**Performed and passing:**
- ✅ **Previous status recorded** for all 25 sources (all `308→404`, table above; two P1 sources re-checked live today).
- ✅ **All 23 distinct destinations return HTTPS/200** (live, 2026-07-25).
- ✅ **`vercel.json` is valid JSON** (parses; 170 redirects).
- ✅ **No self-loops** (no source == destination).
- ✅ **No redirect-to-redirect** (no destination appears as any source).
- ✅ **No duplicate sources** introduced.
- ✅ **Diff is purely additive** — `250 insertions, 0 deletions`; all 120 existing rules byte-identical (spot-checked `/About` intact). Existing redirects therefore behave exactly as before.
- ✅ **`npm run build` passes** — 144 pages built, `sitemap-index.xml` regenerated, no errors.

**Cannot be performed until deployment (stated honestly):**
- ⚠️ **Live firing of the *new* rules could not be tested.** `npm run build` compiles the Astro site but does **not** exercise `vercel.json` routing; redirects only run on Vercel's edge. Because Stage 2A must not commit/push (so no Vercel Preview deploy exists), the new rules' live behaviour is verified by **static analysis + precedent** rather than live requests. Confidence:
  - **High (proven pattern):** the 18 ASCII sources and the escaped-parenthesis pattern (`\(…\)`) — the latter matches the same syntax as existing live-working rules such as `/the-complete-ai-search-strategy-guide-\(2026\)/`.
  - **Medium (confirm on Preview):** the `%20` space-variant sources (#3, #4, #11, #19, #23, #24, #25) and the `%C3%xx` accented source (#23). These follow the file's existing `%`-encoding convention but were not live-testable. **Please run the post-deploy check below on a Vercel Preview before promoting to production.**

**Post-deploy check (run against the Preview URL once available):**
```bash
for u in \
  "/The-12-Point-Brand-Consistency-Checklist" \
  "/Logo-Design-Cost-in-Australia-What-You-Actually-Get" \
  "/best-seo-%20-ai-workflow-for-2026" \
  "/branding-designer-(logos-%20-visual-identity)"; do
  curl -sSIL "https://<preview-domain>$u" -o /dev/null \
    -w "%{http_code} hops=%{num_redirects} final=%{url_effective}\n"
done
# Expect: 200, hops=1 or 2, final = the lowercase trailing-slash canonical.
```

---

## 4. Scope discipline — what was deliberately NOT changed

- **Intentional retired URLs** (23, e.g. `/Landing`, `/Main`, `/casa`, `/test-1`, Cargo menu/system pages, `/cart`) — left as 404. No redirects added.
- **Travel-subdomain URLs** (41) — untouched.
- **Stale-live, intentional-redirect-correct, canonical-conflict, unclear** rows — untouched.
- No titles, metadata, canonicals, content, sitemap, or internal links changed (those are Stages 2B/2C).
- `/custom-pet-portraits` (plain, no `(digital + print)`) was **not** in the action map's legacy-missing set, so it was not redirected (avoided a speculative destination).

---

## 5. Acceptance criteria

| Criterion | Status |
|---|---|
| Both high-impression dead URLs redirect correctly | ✅ Rules added (Logo 464, Brand-Consistency 214); destinations 200. Live firing pending Preview deploy. |
| All approved legacy-missing rows with clear destinations handled | ✅ 25/25 implemented (50 rules). |
| No intentional-retired or travel URLs changed | ✅ Confirmed. |
| All redirect chains are one hop | ⚠️ **1 hop for trailing-slash form; 2 hops for non-slash form** — unavoidable under global `trailingSlash: true`; matches all existing redirects. See §2. Flagged for your decision. |
| Build passes | ✅ `npm run build` clean (144 pages). |
| Only `vercel.json` + implementation report changed | ✅ Confirmed (see §6). |
| Nothing committed or pushed | ✅ Confirmed. |

---

## 6. Exact files changed

- **`vercel.json`** — +50 redirect rules (120 → 170); purely additive (`250 insertions, 0 deletions`).
- **`docs/gsc-redirect-implementation-report-2026-07-25.md`** — this report.

Nothing else. No staging, commits, or pushes.

---

## 7. Recommendation / next step

1. Approve → deploy to a **Vercel Preview**, run the §3 post-deploy check (especially the `%20`/`%C3` rows), then promote to production.
2. Accept the 2-hop non-slash behaviour (or, as a separate future decision outside the freeze, evaluate dropping `trailingSlash: true` — not recommended now).
3. Proceed to **Stage 2B** (titles/meta for CTR quick wins) as a separate change. Note the dependency: **QW-2 (Brand Consistency Checklist) snippet work should follow this deploy**, since its 214 impressions currently hit the now-redirected URL.
