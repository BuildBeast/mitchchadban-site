# Brand Consistency Checklist — CTR Snippet Update (snippet-only)

**Date:** 2026-07-25 · **Scope:** SEO title + meta description only for one canonical page.
**Canonical page:** `https://mitchchadban.com/the-12-point-brand-consistency-checklist/`
**Source file changed:** `src/pages/the-12-point-brand-consistency-checklist/index.astro`
**Stage 1 sources:** `docs/gsc-url-consolidation-audit-2026-07-25.md` (§1, §10, §11 QW-2) · `docs/gsc-url-action-map-2026-07-25.csv` (rows 161, 197)

---

## Before / After

| Field | Before | After |
|---|---|---|
| Canonical URL | `https://mitchchadban.com/the-12-point-brand-consistency-checklist/` | unchanged |
| SEO title | `Brand Consistency Checklist for Small Businesses \| Mitch Chadban` (64 chars) | `The 12-Point Brand Consistency Checklist \| Mitch Chadban` (56 chars) |
| Meta description | `Use this 12-point brand consistency checklist to audit your website, social profiles, documents, visuals, messaging and customer touchpoints.` (141 chars) | `A practical 12-point checklist to audit brand consistency across your website, social, documents and proposals — with a quick fix and a bigger fix for each.` (156 chars) |
| H1 | `The 12-Point Brand Consistency Checklist` | unchanged |
| Schema headline | `The 12-Point Brand Consistency Checklist` | unchanged |

---

## GSC metrics & target queries

| Metric | Value |
|---|---|
| Impressions | ~214 (ranking variant); 215 across the 2-URL cluster |
| Clicks | 1 |
| CTR | ~0.47% (1 / 214) |
| Average position | ~10.1 (10.11 — page 1) |
| Target queries | "brand consistency checklist"; "the 12-point brand consistency checklist" / "12-point brand consistency checklist" phrasing |

**Cluster note (already resolved, not this task):** the 214 impressions were landing on the capitalised legacy URL `/The-12-Point-Brand-Consistency-Checklist`, which previously 404'd. That redirect has since been added, so the impressions/position now consolidate onto this canonical page. The action-map rows: line 161 (`Page with redirect`, 308→200, correct) and line 197 (the former performance-only 404, P1, now redirected). This task is snippet-only and touches no redirect.

---

## Title decision (why the title was rewritten, not kept)

The brief said to keep the title if it already matches the query well, and not to force a rewrite. Here the rewrite is justified, not cosmetic:

- The **old title omitted "12-Point"** — the exact phrasing used by the H1, the URL slug, and the ranking query variant (`/The-12-Point-Brand-Consistency-Checklist`, the URL that earned all 214 impressions at pos 10.1).
- The old title instead added **"for Small Businesses,"** which is not the query users are searching.
- The new title is an **exact match to the H1 and URL** (`The 12-Point Brand Consistency Checklist`), directly describes the 12-point checklist, uses no "ultimate guide"/clickbait language, and is 56 characters (within the 50–60 target).
- This aligns with the Stage 1 audit's QW-2 recommendation. The audit's proposed `(Free)` suffix was **dropped** to avoid a promotional/clickbait tone and to stay under 60 characters.

## Meta description rationale (156 chars)

- **Matches query intent** — leads with "12-point checklist … brand consistency."
- **Distinguishes from generic checklist advice** — "practical" mirrors the article's own framing ("built as a practical brand consistency checklist, not a theory piece"), and "a quick fix and a bigger fix for each" reflects the article's actual structure: every one of the 12 points lists a **Quick fix** and a **Bigger fix**. That is a real differentiator, not a generic claim.
- **Nothing absent from the article** — website, social, documents and proposals are all covered as audit surfaces in the body.
- **No keyword stuffing**, within the 140–160 target.

## Open Graph / Twitter

No second metadata system introduced. `BaseLayout.astro` derives `og:title`, `og:description`, `twitter:title`, and `twitter:description` from the page's `title`/`description` props. The build confirms all reuse the new values automatically.

---

## Build & verification

`npm run build` → **success** (144 pages built, sitemap generated, no errors).

Inspected `dist/the-12-point-brand-consistency-checklist/index.html`:

- Exactly **one** `<title>` ✓ · exactly **one** `<meta name="description">` ✓
- Approved title present ✓ · approved description present ✓
- Canonical unchanged (`https://mitchchadban.com/the-12-point-brand-consistency-checklist/`) ✓
- H1 unchanged (`The 12-Point Brand Consistency Checklist`) ✓
- Schema `headline` unchanged (`The 12-Point Brand Consistency Checklist`) ✓
- `og:description` / `twitter:description` correctly reuse the new description ✓
- No unrelated page changed — `git status` shows a single modified source file ✓

## Files changed

- `src/pages/the-12-point-brand-consistency-checklist/index.astro` — two props (title + description) on the `BaseLayout` call.
- `docs/brand-consistency-checklist-ctr-update-2026-07-25.md` — this report (added).

Nothing was staged, committed, or pushed.
