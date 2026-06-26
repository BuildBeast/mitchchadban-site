# Spanish Page Gap Audit

**Branch:** `seo-relaunch-improvements`
**Date:** 2026-06-27
**Scope:** Map English ↔ Spanish pages, find the Spanish content gap, recommend which Spanish pages are worth creating. **Phase 1 — audit only, no pages created yet.**

## Headline numbers

| Metric | Count |
|---|---|
| Total built pages | 83 (82 content + `404`) |
| Content pages | 82 |
| Spanish content pages (`lang="es"`) | 12 |
| English content pages | 70 |
| Empty leftover dirs (build nothing) | 2 — `src/pages/casa/`, `src/pages/portfolio/` |

> Navigation note: `CargoHeader.astro` and `CargoFooter.astro` are **global and 100% English** (`/portfolio-1/`, `/services-main/`, `/blogs-resources/`, `/contact-form/`, `/about/`, `/pricing-and-packages/`, `/privacy-policy/`, `/terms-of-service/`). There is **no language switcher and no Spanish nav**. Spanish pages are reachable only via in-content links and direct URLs. The one bilingual bridge that exists is on the two landing/hub pages (see below).

---

## 1. Existing Spanish pages

| # | Slug | Title | Likely English equivalent | `lang="es"` | Index? | Notes |
|---|---|---|---|---|---|---|
| 1 | `acerca-de` | Acerca de | `about` | ✅ | index | Clean pair with `about`. No internal links in body. |
| 2 | `servicios-principales` | Servicios Principales | `services-main` | ✅ | index | Spanish services index. Links to all 5 Spanish service pages + `/contact-form/` (EN). |
| 3 | `servicios-de-diseño,-seo-y-marketing-en-españa` | Servicios de diseño, SEO y marketing en España | `design,-seo-and-marketing-services-australia` | ✅ | index | **Spanish landing/hub.** Mirror of the EN `contact-form` hub. Has the "Ingles" language toggle → EN landing. |
| 4 | `consultor-seo-para-saas-en-espana-—-pensado-para-pipeline,-no-solo-para-rankings` | Consultor SEO para SaaS en Espana… | `seo-for-saas-startups` | ✅ | index | Service page. Links to growth-marketing ES + `/contact-form/` (EN). |
| 5 | `diseñador-freelance-de-marcas-y-diseño-de-logotipos` | Diseñador freelance de marcas y diseño de logotipos | `branding-designer-(logos-+-visual-identity)` | ✅ | index | Service page. Cross-links to diseño-gráfico ES + `/contact-form/` (EN). |
| 6 | `diseño-gráfico-para-empresas-(limpio,-premium-y-listo-para-usar)` | Diseño gráfico para empresas… | `graphic-designer-for-modern-brands` | ✅ | index | Service page. Cross-links to diseñador-freelance ES + `/contact-form/` (EN). |
| 7 | `growth-marketing-para-saas-y-startups-(estrategia-+-ejecución)` | Growth Marketing para SaaS y Startups… | `growth-marketing-consultant-for-saas-startups` | ✅ | index | Service page. Cross-links to consultor-seo ES + `/contact-form/` (EN). |
| 8 | `ilustración-comercial-(digital-y-impresa)` | Ilustración comercial (digital y impresa) | `commercial-illustration-(digital-+-print)` | ✅ | index | Service page. **Links to two English sub-pages** `/portrait-commissions-(digital-+-print)/` and `/custom-pet-portraits-(digital-+-print)/` (no ES equivalents). |
| 9 | `precios-y-paquetes` | Precios y paquetes | `pricing-and-packages` | ✅ | index | Clean pair. Links to `/contact-form/` (EN). |
| 10 | `política-de-privacidad-1` | Política de Privacidad | `privacy-policy` | ✅ | index | Clean pair. Links to `/contact-form/` (EN). |
| 11 | `términos-de-servicio` | Términos de servicio | `terms-of-service` | ✅ | index | Clean pair. Links to `/contact-form/` (EN). |
| 12 | `próximamente` | Próximamente | (placeholder — no EN equivalent) | ✅ | **noindex** ✅ | Thin "coming soon" page (~194 visible chars), excluded from sitemap. Used as the **Blog** target in the Spanish landing nav ("Notas + proceso"). Correctly noindexed. |

---

## 2. English pages with Spanish equivalents already present

All core pairs exist:

| English | Spanish | Status |
|---|---|---|
| `about` | `acerca-de` | ✅ paired |
| `services-main` | `servicios-principales` | ✅ paired |
| `design,-seo-and-marketing-services-australia` (EN landing) | `servicios-de-diseño,-seo-y-marketing-en-españa` (ES landing) | ✅ paired (mutual language toggle) |
| `pricing-and-packages` | `precios-y-paquetes` | ✅ paired |
| `privacy-policy` | `política-de-privacidad-1` | ✅ paired |
| `terms-of-service` | `términos-de-servicio` | ✅ paired |
| `branding-designer-(logos-+-visual-identity)` | `diseñador-freelance-de-marcas-y-diseño-de-logotipos` | ✅ paired |
| `graphic-designer-for-modern-brands` | `diseño-gráfico-para-empresas-(...)` | ✅ paired |
| `growth-marketing-consultant-for-saas-startups` | `growth-marketing-para-saas-y-startups-(...)` | ✅ paired |
| `seo-for-saas-startups` | `consultor-seo-para-saas-en-espana-—-(...)` | ✅ paired |
| `commercial-illustration-(digital-+-print)` | `ilustración-comercial-(digital-y-impresa)` | ✅ paired |

**The Spanish core funnel is ~90% complete:** landing → services index → 5 service pages → pricing → legal. The only structural break is the **contact endpoint**.

---

## 3. Missing Spanish pages — recommended for creation

### P0 — create before launch
| English source | Proposed ES slug | Why it's P0 |
|---|---|---|
| `contact-form` (the contact/landing hub) | **`contacto`** | **Every one of the 12 Spanish pages funnels its primary CTA ("Escríbeme") to the English `/contact-form/`.** This is the conversion endpoint for the entire Spanish funnel, and it currently dumps Spanish visitors onto an English page. Mirror the hub structure, translate copy, and repoint the 12 Spanish CTAs to it. Highest-value, single page. |

### P1 — useful soon after launch
| English source | Proposed ES slug | Why P1 |
|---|---|---|
| `portrait-commissions-(digital-+-print)` | `retratos-por-encargo-(digital-e-impreso)` | Linked from the Spanish `ilustración-comercial` page, currently lands on English. Completes the illustration sub-funnel. Lower commercial intent for the ES/B2B target than the core services. |
| `custom-pet-portraits-(digital-+-print)` | `retratos-de-mascotas-(digital-e-impreso)` | Same — linked from `ilustración-comercial`, currently English. Consumer-niche, so not launch-critical. |

### P2 — optional / probably not worth translating yet
| Candidate | Reason to defer |
|---|---|
| Spanish homepage (the empty `casa/` dir) | The Spanish landing (`servicios-de-diseño…`) already serves the homepage role and owns the language toggle. A separate ES `/` root adds duplication, not value, on a single-domain bilingual setup. Recommend deleting the empty `casa/` dir or leaving it dormant. |
| Spanish blog index + 39 Spanish blog posts | Large content effort; the English posts are AU-focused SEO content. The Spanish landing already routes "Blog" to the `próximamente` placeholder, which is an honest signal. Translate later if/when a Spanish content strategy exists. |
| Spanish portfolio project pages | Visual case studies — language-neutral, not where ES conversion happens. |

---

## 4. Pages that should stay English for now

- **Portfolio project pages (13):** `biggs`, `johnny-bird`, `karl-jacobs`, `kryoz`, `monoduo`, `newy-fried-chicken`, `paragon-bm`, `pinos-restaurant`, `the-star-hotel`, `tribal-habits`, `various-posters`, `yellow-billy-the-sty`, `empowered-community-services` — visual work, minimal copy.
- **`archive`** and **`portfolio-1`** — gallery/index pages.
- **`blogs-resources`** (blog index) + **all 39 blog posts** — AU-targeted SEO/AEO content; English is the strategy.
- **`index.astro`** (EN root homepage) — stays the English entry point.

---

## 5. Internal link gaps (Spanish → English where an ES equivalent exists or should)

| Page | Current link | Should be | Fix priority |
|---|---|---|---|
| `servicios-de-diseño…` (ES landing) | "Sobre mí" → `/about/` | `/acerca-de/` (exists) | **P0 — trivial, broken bilingual link today** |
| All 12 Spanish pages | "Escríbeme" / CTA → `/contact-form/` | `/contacto/` | P0 — depends on creating `contacto` |
| `ilustración-comercial…` | `/portrait-commissions-(digital-+-print)/` | ES `retratos-por-encargo…` | P1 — depends on P1 page |
| `ilustración-comercial…` | `/custom-pet-portraits-(digital-+-print)/` | ES `retratos-de-mascotas…` | P1 — depends on P1 page |
| `servicios-de-diseño…` | "Blog" → `/próximamente/` | (leave) | No action — intentional placeholder |

> Not fixable without a redesign (out of scope): the global English header/footer renders on every Spanish page, so Spanish visitors still see English "Privacy/Terms/Services/Portfolio" chrome even though ES equivalents exist. Fixing this cleanly needs a language-aware layout — flagged for a later pass, not this one.

---

## 6. Hreflang opportunity map (identify only — not implementing this pass)

`BaseLayout` exposes `<slot name="head" />`, so per-page `<link rel="alternate" hreflang="…">` pairs *could* be injected later. Confirmed reciprocal pairs:

| `hreflang="en-AU"` | `hreflang="es"` |
|---|---|
| `/design,-seo-and-marketing-services-australia/` | `/servicios-de-diseño,-seo-y-marketing-en-españa/` |
| `/about/` | `/acerca-de/` |
| `/services-main/` | `/servicios-principales/` |
| `/pricing-and-packages/` | `/precios-y-paquetes/` |
| `/privacy-policy/` | `/política-de-privacidad-1/` |
| `/terms-of-service/` | `/términos-de-servicio/` |
| `/branding-designer-(logos-+-visual-identity)/` | `/diseñador-freelance-de-marcas-y-diseño-de-logotipos/` |
| `/graphic-designer-for-modern-brands/` | `/diseño-gráfico-para-empresas-(...)/` |
| `/growth-marketing-consultant-for-saas-startups/` | `/growth-marketing-para-saas-y-startups-(...)/` |
| `/seo-for-saas-startups/` | `/consultor-seo-para-saas-en-espana-—-(...)/` |
| `/commercial-illustration-(digital-+-print)/` | `/ilustración-comercial-(digital-y-impresa)/` |
| `/contact-form/` | `/contacto/` *(after P0)* |
| `/portrait-commissions-(digital-+-print)/` | `retratos-por-encargo…` *(after P1)* |
| `/custom-pet-portraits-(digital-+-print)/` | `retratos-de-mascotas…` *(after P1)* |

Hreflang requires the alternate tags on **both** sides (EN and ES). Deferring keeps this pass from touching English content, per the rules. Recommend a dedicated follow-up once the page set is final.

---

## Recommendation summary

- **P0 (1 page):** `contacto` + repoint the 12 Spanish CTAs, and fix the `servicios-de-diseño` "Sobre mí" link to `/acerca-de/`.
- **P1 (2 pages):** `retratos-por-encargo…`, `retratos-de-mascotas…` + repoint the two `ilustración-comercial` links.
- **P2:** Spanish homepage (skip — landing covers it), Spanish blog (defer).
- **Leave English:** portfolio projects, archive, blog index + 39 posts, EN homepage.
- **Defer (needs redesign):** language-aware header/footer, hreflang tags.
