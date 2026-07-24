# New Blog Image Placement Map — 2026-07-24

**Status:** DRAFT FOR APPROVAL — no Astro pages edited, no images modified, nothing committed.
**Scope:** 14 new English blogs × 4 intended images (1 hero + 3 inline) = 56 placements, plus corresponding Spanish pages.
**Source of truth (master library):** `Cerebro/Cerebro/raw-sources/mc-com/Photo Library/Blogs/`
**Web-ready derivatives:** `/Users/mitchchadban/Desktop/mitchchadban-site/public/images/` (flat; referenced as `/images/<file>.jpg`)

---

## How to read this document

- Each blog has a table (**hero row first, then inline 1–3 in document order**), a proposed visual sequence, and per-blog notes.
- "Placement after (heading)" names the exact `<h2>`/`<h3>` the image should follow inside the page's escaped `pageContent` HTML string.
- Spanish alt text is a natural Spanish description, not a mechanical translation.
- This is a **plan only**. No `<img>` tags have been inserted; no page copy, headings, schema, canonicals or CSS touched.

---

## Stage 1 — Image-count reconciliation (60 vs 56)

**Expected:** 14 blogs × 4 = **56**. **Found in library:** **60** loose PNGs (already converted to 60 JPGs).

**Explanation:** the entire 4-image surplus lives in **one** folder — *How ChatGPT Chooses Sources*, which holds **8** images. All other 13 folders hold exactly 4. `8 + (13 × 4) = 60`.

The 4 extra ChatGPT images are **alternate / duplicate versions**, not assets for another page and not accidental files. After visual inspection, four were selected and four flagged as surplus (kept in the library, unused on the page):

| Selected (4) | Surplus (4) | Why surplus |
|---|---|---|
| The-Source-Selection-Stack (hero) | The-Authority-Stack | Alternate of The-Authority-Interview (same "authority/trust" theme); generic, no step label, weakest literal map |
| The-Retrieval-Scramble | The-Authority-Interview | Trust/authority pillar already carried by the hero's stack; would over-cluster the Step 2–5 band |
| The-Extraction-Struggle | The-Context-Matching-Room | Baked "STEP 4" label collides with the article's Step 4 = Trust; overlaps the process band |
| The-Entity-Recognition-Board | The-Entity-Identity-Check | Duplicate/alternate of Entity-Recognition-Board (which is stronger — shows mitchchadban.com + confidence score) |

**Per-folder count**

| Source folder | Images | Used | Surplus |
|---|---|---|---|
| AI Citation Tracking for Small Businesses | 4 | 4 | 0 |
| How ChatGPT Chooses Sources | **8** | 4 | **4** |
| How Google AI Overviews Choose Sources | 4 | 4 | 0 |
| How Perplexity Chooses Sources (…) | 4 | 4 | 0 |
| How to Get Cited in AI-Generated Answers | 4 | 4 | 0 |
| How to Measure AI Search Traffic in GA4 | 4 | 4 | 0 |
| The Difference Between Mentions, Citations and Rankings | 4 | 4 | 0 |
| Why Some Brands Get Mentioned by AI and Others Don't | 4 | 4 | 0 |
| Marketing for Accountants | 4 | 4 | 0 |
| Marketing for Architects | 4 | 4 | 0 |
| Marketing for Consultants | 4 | 4 | 0 |
| Marketing for Engineers | 4 | 4 | 0 |
| Marketing for Financial Advisers | 4 | 4 | 0 |
| Marketing for IT Service Providers (…) | 4 | 4 | 0 |
| **Total** | **60** | **56** | **4** |

**Cross-check — the two "Analytics Blindfold" images are NOT a misfile.** `The-Analytics-Blindfold.jpg` (GA4 blog) and `The-Analytics-Blindfold-mentions-citations-rankings.jpg` (Mentions blog) are **distinct renders**, each correctly filed:
- GA4 copy: baked text "THE MEASUREMENT GAP", "NOT ALL TRAFFIC IS TRACKED", GA4 "Reports snapshot" → a GA4-measurement image.
- Mentions copy: book spines "BEYOND RANKINGS / CITATIONS & MENTIONS / THE NEW VISIBILITY", callouts "MENTIONED WITHOUT A LINK", "NO CLICK. STILL INFLUENCED." → a mentions/citations/rankings image (GA4 shown only as a foil).

---

## EN ↔ ES page mapping

| # | English page | Spanish page (canonical alternate) | ES structure vs EN |
|---|---|---|---|
| 1 | /ai-citation-tracking-for-small-businesses-how-to-measure-ai-search-visibility | /seguimiento-de-citas-de-ia-para-pequenas-empresas | Condensed (6 H2 vs 11) — adapted |
| 2 | /how-chatgpt-chooses-sources | /como-elige-chatgpt-sus-fuentes | Identical — 1:1 |
| 3 | /how-google-ai-overviews-choose-sources | /como-elige-google-ai-overviews-sus-fuentes | Condensed (5 vs ~12) — adapted |
| 4 | /how-perplexity-chooses-sources | /como-elige-perplexity-sus-fuentes | Condensed (6 vs ~15) — adapted |
| 5 | /how-to-get-cited-in-ai-generated-answers | **none (English-only)** | — |
| 6 | /how-to-measure-ai-search-traffic-in-ga4 | /como-medir-el-trafico-de-busqueda-con-ia-en-ga4 | Condensed / restructured — adapted |
| 7 | /the-difference-between-mentions-citations-and-rankings | /diferencia-entre-menciones-citas-y-rankings | Condensed — adapted |
| 8 | /why-some-brands-get-mentioned-by-ai-and-others-dont | /por-que-algunas-marcas-aparecen-en-la-ia-y-otras-no | 5 signals as H3 under 1 H2 — 2 inline anchor to H3 |
| 9 | /marketing-for-accountants-the-complete-guide | /marketing-para-asesorias-y-despachos-contables | Identical (16 TOC) — 1:1 |
| 10 | /marketing-for-architects-how-architecture-firms-win-clients | /marketing-para-arquitectos | Significantly shorter — adapted |
| 11 | /marketing-for-consultants-how-to-build-a-client-pipeline | /marketing-para-consultores | Shorter / reorganised — adapted |
| 12 | /marketing-for-engineers-how-technical-experts-win-more-clients | /marketing-para-ingenieros | Heavily condensed — adapted |
| 13 | /marketing-for-financial-advisers-how-to-attract-more-clients | /marketing-para-asesores-financieros | Condensed (~10 vs ~18 H2) — adapted |
| 14 | /marketing-for-it-service-providers-how-to-generate-more-qualified-leads | /marketing-para-empresas-de-servicios-it | Condensed — adapted |

> The canonical ES slug above is taken from each English page's own `alternates={[…]}` array. Note: a few *other* ES slugs exist in `src/pages/` for similar topics (e.g. `marketing-para-estudios-de-arquitectura`, `marketing-para-proveedores-de-servicios-it`, `por-que-la-ia-menciona-a-unas-marcas-y-a-otras-no`, `como-eligen-las-fuentes-los-resumenes-de-ia-de-google`) but they are **not** the declared alternates and are excluded here.

---

## Global conventions & caveats (read before the edit stage)

1. **Baked-in English text on every image.** All 56 images are "premium cursed-stock" illustrations with legible on-image English text (signage, labels, checklists). This is fine on English pages. On the 13 Spanish pages the artwork will show **English words** — acceptable as house-style conceptual art, but flag if Spanish-localised renders are ever wanted.
2. **Shared image directory.** ES pages reference the same `/images/*.jpg` files; there are no Spanish image variants.
3. **Embed ratio.** Existing site markup uses `width="800" height="450"` (16:9). Source JPGs are 3:2 (~1200×800/1100×733); they crop cleanly to 16:9 but the edit stage should confirm final dimensions/crop.
4. **Insertion syntax differs by file.** English `pageContent` is a JS string with escaped quotes (`\"`); several Spanish pages use template literals with plain `"`. Any inserted `<img>` must match each file's quoting/escaping convention.
5. Every target page currently has **zero** `<img>` tags for these images — all placements are net-new insertions.

---

# Per-blog placement plans

## AI Citation Tracking for Small Businesses
- **English page:** /ai-citation-tracking-for-small-businesses-how-to-measure-ai-search-visibility
- **Spanish page:** /seguimiento-de-citas-de-ia-para-pequenas-empresas

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| The-AI-Says-So-Moment.jpg | Hero | below intro, before "What is AI citation tracking?" | A marketer points to a screen reading "Recommended by AI" with five stars while skeptical colleagues at the table hold mugs demanding data, proof and citations | below intro blockquote, before "Por qué importa" | Un profesional señala una pantalla que dice "Recommended by AI" con cinco estrellas mientras compañeros escépticos piden datos y pruebas de las citas | The article's whole thesis: being recommended by AI is the new signal, but it only counts once you can measure and prove it. Widest, most cinematic frame. |
| The-Invisible-Funnel.jpg | Inline 1 | Why AI citation tracking matters | A whiteboard funnel titled "Customer Journey (AI influence)" with its middle stage marked unknown and untracked, as a team debates the gap they can't measure | Por qué importa | Un embudo de recorrido del cliente dibujado en una pizarra, con la fase intermedia marcada como desconocida y sin medir, mientras un equipo debate el hueco que no logran medir | Illustrates the section's argument that traditional metrics are incomplete and the AI touchpoint disappears into the fog. |
| The-Phantom-Badge.jpg | Inline 2 | Which AI platforms can you track? | A laptop displays a "#1 Recommended by AI" badge above logos for ChatGPT, Gemini, Perplexity and Google AI Overviews, as one person points excitedly and another looks skeptical | Qué plataformas conviene revisar | Un portátil muestra una insignia de "Recomendado por la IA" sobre los logotipos de ChatGPT, Gemini, Perplexity y Google AI Overviews, ante dos personas con reacciones opuestas | The only image that literally shows the four platforms this section walks through. |
| The-Invisible-Testimonial-Wall.jpg | Inline 3 | Build a simple AI citation tracking dashboard | A laptop shows an "AI Visibility Report" with mentions up 38%, citations up 52% and referrals up 61%, set in front of a wall of empty client-testimonial frames | Cómo medirlo sin montar un circo | Un portátil muestra un informe de visibilidad en IA con menciones, citas y referencias al alza, frente a una pared de marcos de testimonios vacíos | The report screen is a near-literal render of the visibility/traffic dashboard this section tells readers to build. |

**Proposed visual sequence**
```
Hero: The-AI-Says-So-Moment.jpg
↓ Introductory content
↓ What is AI citation tracking?
↓ Why AI citation tracking matters → Inline 1: The-Invisible-Funnel.jpg
↓ The four types of AI visibility
↓ Which AI platforms can you track? → Inline 2: The-Phantom-Badge.jpg
↓ 7 ways small businesses can track AI citations
↓ Build a simple AI citation tracking dashboard → Inline 3: The-Invisible-Testimonial-Wall.jpg
↓ Common mistakes / Growth / Future / CTA / FAQ
```

**Notes:** All four used; none leftover or misfiled. ES is condensed (6 H2 vs 11) with no "four types," "7 ways," growth or future sections — the three inline images fall after three consecutive ES headings (Por qué importa → Qué plataformas → Cómo medirlo) but remain non-adjacent (body text between). Minor ambiguity: Invisible-Funnel could also serve "future of AI search measurement," and the testimonial-wall metrics could sit under "growth"; chosen placements match the measurement-gap and build-a-dashboard arguments more literally.

---

## How ChatGPT Chooses Sources
- **English page:** /how-chatgpt-chooses-sources
- **Spanish page:** /como-elige-chatgpt-sus-fuentes
- **Reconciliation:** 8 source images → 4 selected; 4 surplus (see Stage 1 + Notes)

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| The-Source-Selection-Stack.jpg | Hero | after intro, before "Does ChatGPT actually search the web?" | A five-stage industrial sorting machine labelled Access, Relevance, Trust, Extraction and Attribution, feeding a few web pages into a Cited bin while most drop away as rejects | tras la introducción, antes del primer H2 ("¿ChatGPT busca realmente en la web?") | Una máquina clasificadora de cinco fases etiquetada Acceso, Relevancia, Confianza, Extracción y Atribución que envía unas pocas páginas a la papelera de Citadas mientras la mayoría se descarta | Full-width master framework; its five pillars are literally the article's core thesis and its "Source Selection Stack" section. |
| The-Retrieval-Scramble.jpg | Inline 1 | "Step 2: ChatGPT retrieves possible sources" (#retrieval) | A robotic claw lifts web pages from a chaotic pile onto conveyor belts, separating blocked, inaccessible content from accessible pages stamped Retrieved | "Paso 2: ChatGPT recupera fuentes posibles" (#recuperacion) | Una pinza robótica retira páginas de un montón caótico y las coloca en cintas transportadoras, separando el contenido bloqueado e inaccesible de las páginas accesibles marcadas como recuperadas | Baked label "STEP 2: SOURCE RETRIEVAL" — exact match. |
| The-Extraction-Struggle.jpg | Inline 2 | "Step 5: ChatGPT looks for extractable information" (#extractability) | At an AI extraction desk, a robot rejects a dense, highlighted article while approving a clean, structured page with clear headings and a comparison table | "Paso 5: ChatGPT busca información extraíble" (#extraccion) | En un escritorio de extracción con IA, un robot descarta un artículo denso y lleno de subrayados y aprueba una página limpia y estructurada, con encabezados claros y una tabla comparativa | Baked "AI EXTRACTION DESK / hard vs easy to extract" maps precisely to the extractability step. |
| The-Entity-Recognition-Board.jpg | Inline 3 | "The role of entity SEO" | A detective-style pinboard links mitchchadban.com to related topics with strong green connections, beside a disconnected rival site with weak red links and a low entity confidence score | "El papel del SEO de entidades" | Un tablero de investigación conecta mitchchadban.com con temas relacionados mediante fuertes conexiones verdes, junto a un sitio rival desconectado con enlaces rojos débiles y una baja puntuación de confianza de entidad | Baked "STEP 10: ENTITY RECOGNITION"; on-brand (features mitchchadban.com), sits low for good spread. |

**Proposed visual sequence**
```
Hero: The-Source-Selection-Stack.jpg
↓ Introductory content + "Does ChatGPT search?" / "Simple version" / Step 1
↓ Step 2: ChatGPT retrieves possible sources → Inline 1: The-Retrieval-Scramble.jpg
↓ Step 3 (relevance), Step 4 (trust)
↓ Step 5: ChatGPT looks for extractable information → Inline 2: The-Extraction-Struggle.jpg
↓ Signals table, high-ranking pages, smaller sites, Google, freshness, schema
↓ The role of entity SEO → Inline 3: The-Entity-Recognition-Board.jpg
↓ Formats, Source Selection Stack, checklist, myths, FAQ
```

**Notes:**
- **Surplus (4):** The-Authority-Interview (trust pillar already in hero; would over-cluster Steps 2–5), The-Authority-Stack (duplicate/alternate of Authority-Interview; generic, weakest map), The-Context-Matching-Room (baked "STEP 4" collides with article Step 4 = Trust), The-Entity-Identity-Check (duplicate/alternate of Entity-Recognition-Board, the stronger pick).
- EN and ES are structurally identical — placements map 1:1.
- Numbering caveat: images carry internal step numbers ("STEP 2/4/10/12") that don't all match the article's Step 1–5. Only The-Retrieval-Scramble's "STEP 2" aligns; The-Context-Matching-Room's "STEP 4" is the most likely to look misfiled if placed — another reason it stays surplus.

---

## How Google AI Overviews Choose Sources
- **English page:** /how-google-ai-overviews-choose-sources
- **Spanish page:** /como-elige-google-ai-overviews-sus-fuentes

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| The-Query-Intent-Translator.jpg | Hero | below intro, before "What are Google AI Overviews?" | An interpreter at a broadcast desk turning a caller's messy spoken question into a neat list of structured sub-questions, each matched to an answer card | below intro, before "El proceso de selección, simplificado" | Una intérprete en una cabina traduce la pregunta desordenada de un usuario en una lista ordenada de subpreguntas, cada una enlazada con su respuesta | Most central image: depicts the whole retrieve-rank-synthesise-cite pipeline and carries the blog's exact headline question. |
| The-Supporting-Link-Lottery.jpg | Inline 1 | The 5-step source selection process (#selection-process) | Office workers cheering around a lottery machine of paper slips labelled potential sources, with a winning-sources leaderboard on the screen behind them | El proceso de selección, simplificado (#proceso) | Un grupo de oficinistas celebra alrededor de una máquina de lotería llena de papeletas de fuentes, con un ranking de fuentes ganadoras en la pantalla | Literal match for the final step — many candidate pages in, few drawn as winning sources. |
| The-Evidence-vs-Opinion-Scale.jpg | Inline 2 | Signals that influence AI Overview citations (#source-signals) | A brass balance scale tipping evidence-backed books and data studies down against a pan of fluffy opinion sticky-notes floating on feathers | Señales que suelen importar (#senales) | Una balanza de latón inclina libros y estudios con datos frente a un platillo de notas de opinión que flotan sobre plumas | Weighs proof against opinion, mirroring the signals table in this section. |
| The-Citation-Crime-Scene.jpg | Inline 3 | Why some pages never get cited (#why-pages-never-get-cited) | Detectives examining a case board that maps rival brands cited across the web while one brand sits circled, uncited, with zero evidence logged | Por qué una página se queda fuera (#motivos) | Detectives estudian un tablero de investigación donde varias marcas rivales aparecen citadas y una marca queda señalada, sin citar y sin pruebas | The "missing citation" crime scene is the exact failure-diagnosis theme of this section. |

**Proposed visual sequence**
```
Hero: The-Query-Intent-Translator.jpg
↓ Introductory content
↓ What are Google AI Overviews? / Do AI Overviews only use top-ranking pages?
↓ The 5-step source selection process → Inline 1: The-Supporting-Link-Lottery.jpg
↓ Query fan-out: the hidden expansion layer
↓ Signals that influence AI Overview citations → Inline 2: The-Evidence-vs-Opinion-Scale.jpg
↓ Why some pages never get cited → Inline 3: The-Citation-Crime-Scene.jpg
↓ What Google says / How to get cited / Checklist / FAQ
```

**Notes:** ES is a condensed version (5 body H2 vs ~12); the three inline images map cleanly onto proceso → señales → motivos, preserving EN order/spacing. "Query fan-out" is intentionally image-free (concept already carried by the hero). No misfiled images. (ES `datePublished` 2026-06-28 vs EN 2026-05-29 — noted, not an image issue.)

---

## How Perplexity Chooses Sources
- **English page:** /how-perplexity-chooses-sources
- **Spanish page:** /como-elige-perplexity-sus-fuentes

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| Final-Selection-Chamber.jpg | Hero | below intro/blockquote, before "What is Perplexity?" | A robotic hand selecting three well-evidenced sources on lit pedestals while weaker articles tumble into a discard pit below | below intro blockquote, before "Proceso de selección, explicado sin humo" | Un brazo robótico elige tres fuentes bien documentadas sobre pedestales iluminados mientras descarta los artículos más débiles | Stage 5 image captures the central idea — becoming one of the few sources the answer depends on. Cinematic, full-width. |
| Retrieval-Gate.jpg | Inline 1 | How Perplexity works | An airport-style security checkpoint waving through crawlable, indexable pages and blocking inaccessible ones from consideration | Proceso de selección, explicado sin humo | Un control de seguridad tipo aeropuerto deja pasar páginas rastreables e indexables y bloquea las inaccesibles | Stage 1 (access) illustrates "source retrieval" and the first-gate argument. |
| Structure-Test.jpg | Inline 2 | The biggest factors influencing Perplexity citations | A robotic arm cleanly lifting answers from a well-structured page while an unstructured wall of text shreds and is rejected | Señales que suelen ayudar | Un brazo robótico extrae respuestas de una página bien estructurada mientras un muro de texto sin formato se tritura y queda rechazado | Stage 3 (extractability) maps onto the "structured content wins" factor. |
| Evidence-Checkpoint.jpg | Inline 3 | What content struggles to get cited? | A content evaluator stamping a generic post as rejected while evidence-backed sources with data and quotes move to the citable tray | Errores frecuentes | Un evaluador marca como rechazado un artículo genérico mientras las fuentes con datos y pruebas pasan a la bandeja de fuentes citables | Stage 4 (proof) matches the "not citable" failures listed here. |

**Proposed visual sequence**
```
Hero: Final-Selection-Chamber.jpg
↓ Introductory content (What is Perplexity?)
↓ How Perplexity works → Inline 1: Retrieval-Gate.jpg
↓ How Perplexity chooses sources
↓ The biggest factors influencing Perplexity citations → Inline 2: Structure-Test.jpg
↓ Does Google ranking matter? / What content Perplexity cites
↓ What content struggles to get cited? → Inline 3: Evidence-Checkpoint.jpg
↓ Optimise / vs ChatGPT / checklist / FAQ
```

**Notes:**
- **Sequential stage set with a gap:** the four images are labelled STAGE 1, 3, 4, 5 — **there is no Stage 2** among the delivered files (Stage 2 would be a relevance/evaluation step). The plan preserves narrative order (1 → 3 → 4 in body, 5 as hero) so the gap isn't conspicuous. Alternative: make Retrieval-Gate (Stage 1) the hero for strict top-to-bottom order — but Final-Selection-Chamber is the stronger thesis image.
- ES is heavily condensed (6 H2 vs ~15); inline images map to Proceso / Señales / Errores with good spread. ES page will show English signage in the artwork.

---

## How to Get Cited in AI-Generated Answers
- **English page:** /how-to-get-cited-in-ai-generated-answers
- **Spanish page:** none (English-only — no ES alternate exists)

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| The-AI-Citation-Library.jpg | Hero | below intro/blockquote, before "What an AI citation actually means" | A stern librarian labelled AI Answer Engine pulls a High Quality Source book from shelves marked authoritative and evidence-based while a businessman raises his hand | N/A — no Spanish page | N/A — no Spanish page | Depicts the central thesis: an AI answer engine selecting source-worthy pages while rejecting thin content. Broadest, most cinematic frame. |
| The-Missing-Evidence-Investigation.jpg | Inline 1 | Why AI systems cite some pages and ignore others | A detective studies a corkboard headed "Why wasn't this page cited", with red string linking missing evidence, author and schema clues while competitor pages get cited instead | N/A — no Spanish page | N/A — no Spanish page | Literal match — investigating why some pages are ignored, competitors cited instead. |
| The-AI-Customs-Check.jpg | Inline 2 | The citation-readiness checklist | An AI customs officer inspects two suitcases, one stamped Citation Approved with proof, schema and author, the other marked Not Cited for thin content and vague claims | N/A — no Spanish page | N/A — no Spanish page | The approved-vs-rejected suitcases mirror the readiness checklist almost item-for-item. |
| The-Source-Worthiness-Interview.jpg | Inline 3 | Proof and trust requirements | A panel labelled AI Answer Engine interviews a candidate whose folder shows proof, examples and author checks, under a board asking "Why should we cite you" | N/A — no Spanish page | N/A — no Spanish page | Dramatises making a page reference-worthy through proof and visible expertise. |

**Proposed visual sequence**
```
Hero: The-AI-Citation-Library.jpg
↓ Introductory content
↓ What an AI citation actually means (no image)
↓ Why AI systems cite some pages and ignore others → Inline 1: The-Missing-Evidence-Investigation.jpg
↓ The citation-readiness checklist → Inline 2: The-AI-Customs-Check.jpg
↓ Technical requirements / Content structure requirements (no image)
↓ Proof and trust requirements → Inline 3: The-Source-Worthiness-Interview.jpg
↓ Internal linking / Monthly testing / CTA / FAQ (no image)
```

**Notes:**
- Re the "(hero)" filename: the source PNG was "The AI Citation Library (hero).png"; the hero choice here is **on merit** (strongest thesis-level image), not auto-promoted for the filename.
- Minor front-loading: Inline 1 and Inline 2 fall on consecutive sections (their single best homes); the hero plus one text-only section separate the run, so it reads as narrative, not a cluster. Back half left image-free by design.
- English-only blog — no ES placements. (Even if an ES page were created later, the heavy baked-in English text means these JPGs couldn't be reused as-is for ES.)

---

## How to Measure AI Search Traffic in GA4
- **English page:** /how-to-measure-ai-search-traffic-in-ga4
- **Spanish page:** /como-medir-el-trafico-de-busqueda-con-ia-en-ga4

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| The-Analytics-Blindfold.jpg | Hero | below intro, before "What AI search traffic looks like" | Analyst wearing an "Analytics" blindfold beside a GA4 dashboard, with a whiteboard splitting what analytics can and cannot see about AI search influence | below intro, before "Qué conviene medir de verdad" | Analista con una venda que dice "Analytics" junto a un panel de GA4, y una pizarra que separa lo que se puede y no se puede ver de la influencia de la IA | Whole thesis: GA4 is blindfolded to part of AI search. Literal GA4 dashboard + "THE MEASUREMENT GAP". |
| The-Dashboard-Illusion-Mirror.jpg | Inline 1 | What GA4 can track | A clean GA4 dashboard reflected in a mirror that reveals dark traffic, unattributed conversions and AI influence the report cannot track | Qué incluir en un dashboard útil | Un panel limpio de GA4 reflejado en un espejo que revela tráfico oscuro, conversiones sin atribuir e influencia de IA que el informe no capta | The dashboard looks complete but hides dark traffic — matches the "GA4 is not good for" list. |
| The-Referral-Leak-Pipe.jpg | Inline 2 | Referral sources to monitor | An "AI traffic" pipe leaking into buckets for direct, dark and misattributed sources while only identifiable AI referrals reach the GA4 bucket | Dónde mirarlo en GA4 | Una tubería de "tráfico de IA" que gotea en cubos de tráfico directo, oscuro y mal atribuido, mientras solo las referencias identificables llegan al cubo de GA4 | Identifiable AI referrals vs what leaks away — literal match for the referral-source section. |
| The-Monthly-Reporting-War-Table.jpg | Inline 3 | Monthly reporting template | Desk covered with a monthly AI search review: referral sources, top landing pages, manual citation tests and branded search lift | Cómo medir la influencia más allá del clic | Escritorio con una revisión mensual de búsqueda con IA: fuentes de referencia, páginas de destino, pruebas manuales de citas y subida de marca | SOURCES/PAGES/CITATIONS/NEXT ACTIONS columns mirror the five-question monthly template. |

**Proposed visual sequence**
```
Hero: The-Analytics-Blindfold.jpg
↓ Introductory content
↓ What GA4 can track → Inline 1: The-Dashboard-Illusion-Mirror.jpg
↓ What GSC can and cannot show
↓ Referral sources to monitor → Inline 2: The-Referral-Leak-Pipe.jpg
↓ Landing page analysis / Branded search lift / Manual citation tracking / Measurement table
↓ Monthly reporting template → Inline 3: The-Monthly-Reporting-War-Table.jpg
```

**Notes:** **Analytics-Blindfold fit confirmed for THIS blog** (GA4 "Reports snapshot", "THE MEASUREMENT GAP", "NOT ALL TRAFFIC IS TRACKED") — it is measurement-gap content, not the mentions/citations taxonomy; no conflict with the Mentions blog's separate copy. ES is restructured (no standalone "monthly template"/"branded lift" H2s) so placements are adapted to dashboard útil → dónde mirarlo → más allá del clic (ES sections 2, 4, 5), still spread with no clustering.

---

## The Difference Between Mentions, Citations and Rankings
- **English page:** /the-difference-between-mentions-citations-and-rankings
- **Spanish page:** /diferencia-entre-menciones-citas-y-rankings

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| The-AI-Visibility-Pyramid.jpg | Hero | below intro, before "Quick definition" | A team debates around a three-tier pyramid stacking rankings at the base, citations in the middle and brand mentions crowned with logos at the top | below intro, before "Resumen rápido" | Un equipo debate junto a una pirámide de tres niveles con rankings en la base, citas en el centro y menciones de marca en la cima | The three-layer pyramid is the article's central metaphor and the only image showing all three types at once. |
| The-Ranking-vs-Reality-Split-Screen.jpg | Inline 1 | Why rankings alone are no longer enough | Split screen contrasting a marketer celebrating a number-one Google ranking against the same person dejected by zero visits from AI answers | Por qué rankings solos ya se quedan cortos | Pantalla dividida que contrasta la euforia por un ranking número uno en Google con la frustración de no recibir visitas desde las respuestas de IA | The "RANK #1" vs "INVISIBLE IN AI ANSWERS" split is a direct visual of the section's argument. |
| The-Brand-Name-Echo-Chamber.jpg | Inline 2 | Why mentions may become the ultimate metric | A presenter repeats a brand name into a microphone as it echoes across a wall, drowning out fading competitor names | Qué aporta cada una | Un ponente repite el nombre de una marca ante un micrófono mientras resuena en la pared y eclipsa a los nombres de la competencia que se desvanecen | Baked "MENTIONS BUILD MEMORY / BRAND MENTIONS = AI MEMORY" maps onto the mentions-as-entity-recognition argument. |
| The-Analytics-Blindfold-mentions-citations-rankings.jpg | Inline 3 | Common mistakes when tracking AI visibility | A marketer wearing a blindfold labelled "Analytics" studies a GA4 dashboard while AI answers citing and mentioning brands glow unseen around him | Cómo medir cada señal | Un profesional con una venda que dice "Analytics" mira un panel de GA4 sin ver las respuestas de IA que citan y mencionan marcas a su alrededor | Notebook "THINGS ANALYTICS CAN'T SEE: AI MENTIONS, AI INFLUENCE, ZERO-CLICK IMPACT" fits the mistakes/measurement discussion. |

**Proposed visual sequence**
```
Hero: The-AI-Visibility-Pyramid.jpg
↓ Introductory content
↓ Quick definition / What is a ranking / citation / mention / Comparison table / The AI visibility pyramid
↓ Why rankings alone are no longer enough → Inline 1: The-Ranking-vs-Reality-Split-Screen.jpg
↓ Why citations matter more than most people realise
↓ Why mentions may become the ultimate metric → Inline 2: The-Brand-Name-Echo-Chamber.jpg
↓ How to measure rankings, citations and mentions
↓ Common mistakes when tracking AI visibility → Inline 3: The-Analytics-Blindfold-mentions-citations-rankings.jpg
↓ How to improve all three / takeaway / FAQ
```

**Notes:** **Analytics-Blindfold verdict — belongs here, not the GA4 blog** (book spines "BEYOND RANKINGS / CITATIONS & MENTIONS", callouts "MENTIONED WITHOUT A LINK", "NO CLICK. STILL INFLUENCED."; GA4 shown only as a foil). Placed at "Common mistakes" rather than the adjacent "How to measure" to avoid clustering with Inline 2. "generate" prefix on the Pyramid source PNG is cosmetic (source only); on merit it's the best image → hero. ES is condensed (no dedicated pyramid/citations/mentions/mistakes sections) — hero below intro; Split-Screen → "Por qué rankings solos…"; mentions → "Qué aporta cada una"; blindfold → "Cómo medir cada señal" (ES has no mistakes section).

---

## Why Some Brands Get Mentioned by AI and Others Don't
- **English page:** /why-some-brands-get-mentioned-by-ai-and-others-dont
- **Spanish page:** /por-que-algunas-marcas-aparecen-en-la-ia-y-otras-no

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| The-Content-Tourist-vs-Resident.jpg | Hero | below intro, before "Why do some brands get mentioned by AI?" | A tourist in a Hawaiian shirt taking selfies beside a "new brand" with no backlinks or mentions, while a calm expert brand works at a desk backed by content plans and press mentions, under a giant "Who do you trust?" sign | below intro, before "La respuesta corta" | Un turista con camisa hawaiana se hace selfies junto a una marca nueva sin enlaces ni menciones, mientras una marca experta trabaja tranquila entre planes de contenido y menciones de prensa, bajo un cartel gigante que pregunta "¿En quién confías?" | Shows both halves of the thesis at once plus the full signal stack. Best whole-article summary. |
| The-Entity-Assembly-Line.jpg | Inline 1 | 2. Entity recognition: AI needs to know who you are | Colleagues pinning labels like About Us, schema markup and industry mentions onto a blank mannequin beside a whiteboard reading "Define Your Entity — status incomplete" | H3 "Reconocimiento de entidad" (within "Las 5 señales que más suelen pesar") | Un equipo pega etiquetas como Sobre Nosotros, schema y menciones del sector sobre un maniquí en blanco, junto a una pizarra que dice "Define tu entidad" con el estado marcado como incompleto | Literal assembly of a brand entity from consistent-identity signals. |
| The-Internet-Echo-Chamber-Room.jpg | Inline 2 | 3. Third-party mentions: AI trusts patterns across the web | A room lined with repeated brand reviews and headlines around a boardroom table, with amplification meters for blogs, reviews and press feeding an AI "likely to mention" verdict | H3 "Menciones de terceros" (within "Las 5 señales que más suelen pesar") | Una sala forrada de reseñas y titulares repetidos de una misma marca alrededor de una mesa de reunión, con medidores de amplificación de blogs, reseñas y prensa que alimentan un veredicto de la IA | Visualises "one source is a claim, many sources are a pattern." |
| The-Invisible-Brand-Office.jpg | Inline 3 | Why smaller brands struggle to get mentioned by AI | Ghostly, translucent workers toiling in a glass office labelled "The Invisible Brand" with no mentions and zero AI visibility, ignored as commuters pass a "Top 10 tools according to AI" list | H2 "Por qué las marcas pequeñas lo tienen más difícil" | Trabajadores translúcidos y fantasmales en una oficina de cristal rotulada "La marca invisible", sin menciones y con cero visibilidad en IA, ignorados mientras la gente pasa junto a una lista de las 10 mejores herramientas | Direct literal render of "the invisible brand problem." |

**Proposed visual sequence**
```
Hero: The-Content-Tourist-vs-Resident.jpg
↓ Introductory content
↓ Why do some brands get mentioned? / AI doesn't think like a customer / The five signals / 1. Topical authority
↓ 2. Entity recognition → Inline 1: The-Entity-Assembly-Line.jpg
↓ 3. Third-party mentions → Inline 2: The-Internet-Echo-Chamber-Room.jpg
↓ 4. Original research / 5. Trust signals
↓ Why smaller brands struggle → Inline 3: The-Invisible-Brand-Office.jpg
↓ How to increase your chances / flywheel / FAQ
```

**Notes:** EN gives each of the five signals its own `<h2>`; **ES collapses them into `<h3>` subsections under one `<h2>` ("Las 5 señales que más suelen pesar")**, so inline 1 & 2 anchor to ES `<h3>`s. Inline 3 maps to the ES `<h2>` cleanly. Topical-authority literal metaphor (tourist/resident) was traded up to the hero for whole-article summary + better spacing; alternative is to demote it inline after "1. Topical authority" and promote The-Invisible-Brand-Office to hero. No misfiled images; brand logos shown (Forbes, Ahrefs, HubSpot, Semrush) match the article body.

---

## Marketing for Accountants
- **English page:** /marketing-for-accountants-the-complete-guide
- **Spanish page:** /marketing-para-asesorias-y-despachos-contables

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| Cashflow-control-tower-in-action.jpg | Hero | below intro paragraphs, before the "On this page" menu | Air traffic controllers in a control tower directing planes labelled as sales invoices, payroll and tax payments across a cashflow radar screen | bajo los párrafos de introducción, antes del menú "En esta página" | Controladores aéreos en una torre de control dirigiendo aviones etiquetados como facturas, nóminas e impuestos sobre una pantalla de radar de tesorería | Truest match for the core thesis: marketing as one coordinated system run from a single command position. |
| Expense-Categorisation-Conveyor.jpg | Inline 1 | The best marketing channels for accountants | Workers scanning receipts on a conveyor belt that sorts them into labelled bins for travel, meals, office supplies and software | Los mejores canales de marketing para contables | Empleados escaneando tickets en una cinta transportadora que los clasifica en cubos etiquetados como viajes, dietas, material de oficina y software | The section is a categorisation exercise — sorting channels into priority buckets. |
| Surgery-on-a-spreadsheet-operation-in-progress.jpg | Inline 2 | Service pages that actually win clients | Surgeons in an operating theatre performing precision surgery on a spreadsheet under a sign reading accuracy is critical | Páginas de servicio que realmente consiguen clientes | Cirujanos en un quirófano operando con precisión sobre una hoja de cálculo bajo un cartel que dice que la exactitud es crítica | Captures the deliberate, exacting work of turning a forgettable page into one that converts. |
| Audit-archaeology-in-action.jpg | Inline 3 | A simple marketing plan for accounting firms | Archaeologists brushing dirt off old ledgers, receipts and bank statements at an excavation site labelled audit archaeology | Un plan de marketing sencillo para despachos contables | Arqueólogos cepillando la tierra de libros contables, recibos y extractos bancarios en una excavación rotulada como arqueología de auditoría | Month 1 of the plan is explicitly about auditing current foundations before building. |

**Proposed visual sequence**
```
Hero: Cashflow-control-tower-in-action.jpg
↓ Introductory content (Why marketing matters, What makes it different, Framework)
↓ The best marketing channels for accountants → Inline 1: Expense-Categorisation-Conveyor.jpg
↓ SEO for accountants, Local SEO
↓ Service pages that actually win clients → Inline 2: Surgery-on-a-spreadsheet-operation-in-progress.jpg
↓ Content, AI search, LinkedIn, Email, Referrals, Paid ads, Mistakes
↓ A simple marketing plan for accounting firms → Inline 3: Audit-archaeology-in-action.jpg
```

**Notes:** EN and ES are effectively identical (same 16 TOC entries, same order) — clean **1:1** mapping; only localisation differs (GST/BAS→IVA/IRPF, Xero/MYOB→Holded/Sage). No misfiled images. Baked-in text is English (AU spelling "Categorisation") — visible on ES page. Minor spacing caveat: Inline 1 and Inline 2 are separated by only two headings (SEO, Local SEO), the tightest gap; Inline 1 could move to "SEO for accountants" if wider spacing preferred.

---

## Marketing for Architects
- **English page:** /marketing-for-architects-how-architecture-firms-win-clients
- **Spanish page:** /marketing-para-arquitectos

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| The-Client-Vision-Translation-Machine.jpg | Hero | below intro, before "What is marketing for architects?" | A vast industrial machine labelled The Client Vision Translation Machine feeding vague client sketches in one end and printing precise architectural blueprints out the other | below intro, before "Problemas típicos" | Una gran máquina industrial rotulada Máquina de Traducción de la Visión del Cliente que recibe bocetos confusos por un extremo y expulsa planos arquitectónicos precisos por el otro | Central idea: marketing turns vague perception into clarity and trust. Widest, most cinematic frame. |
| Design-Iteration-Assembly-Line.jpg | Inline 1 | The architecture firm marketing funnel | A factory assembly line moving architectural models through numbered stages from concept to finalise, with staff refining each design along the conveyor | Qué contenidos ayudan de verdad | Una línea de montaje de fábrica que hace avanzar maquetas arquitectónicas por fases numeradas, del concepto al acabado final, con personal refinando cada diseño en la cinta | Numbered conveyor is a literal pipeline metaphor for the awareness → consideration → conversion funnel. |
| Planning-Approval-Border-Control.jpg | Inline 2 | AI search for architects | An architect hands plans across a Planning Approval Border Control desk while an inspector stamps drawings and a departures board lists approved and refused decisions | SEO para arquitectos | Un arquitecto entrega sus planos en un mostrador tipo control fronterizo de aprobación urbanística mientras un inspector los sella y un panel muestra decisiones aprobadas y rechazadas | The gatekeeping/approval board mirrors how search and AI judge whether to surface a firm. |
| Site-Coordination-Control-Room.jpg | Inline 3 | How to build a marketing strategy for an architecture firm | A construction control room where a team in headsets monitors master schedules, live site feeds and risk dashboards on a wall of screens | Plan sencillo | Una sala de control de obra donde un equipo con auriculares supervisa cronogramas, cámaras en directo y paneles de riesgos en una pared de pantallas | Dashboards and tracked risks visualise the deliberate, measured strategy. |

**Proposed visual sequence**
```
Hero: The-Client-Vision-Translation-Machine.jpg
↓ Introductory content
↓ The architecture firm marketing funnel → Inline 1: Design-Iteration-Assembly-Line.jpg
↓ SEO for architects
↓ AI search for architects → Inline 2: Planning-Approval-Border-Control.jpg
↓ Content marketing / Website checklist / Best channels / Common mistakes
↓ How to build a marketing strategy → Inline 3: Site-Coordination-Control-Room.jpg
```

**Notes:** ⚠️ **Genre mismatch worth flagging:** all four images are architecture *process/delivery* metaphors (designing, approving, coordinating, building), not *marketing* metaphors — they fit by analogy, not literally; no marketing-specific asset exists in the set. ES diverges significantly (no funnel / AI-search / best-channels sections) → adapted: funnel → "Qué contenidos ayudan de verdad", AI search → "SEO para arquitectos", strategy → "Plan sencillo" (ES sections ~5, 3, 8). No misfiled images.

---

## Marketing for Consultants
- **English page:** /marketing-for-consultants-how-to-build-a-client-pipeline
- **Spanish page:** /marketing-para-consultores

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| The-Authority-Lighthouse.jpg | Hero | intro (below "This guide breaks down…", before "What is marketing for consultants?") | A consultant watches from a cliff as a lighthouse beams "Authority attracts, clients follow" across a crowd of prospects tagged with search queries like "b2b lead generation expert" | intro (below opening paragraph, before "Por qué muchos consultores no convierten bien") | Un consultor observa desde un acantilado cómo el faro proyecta "Authority attracts, clients follow" sobre una multitud de prospectos etiquetados con búsquedas como "consultor de estrategia de marketing" | Most cinematic full-width image; captures the thesis that authority makes searching clients come to you. |
| The-Authority-Compass.jpg | Inline 1 | Positioning comes before marketing | Two executives study a large brass compass on a boardroom table, its points labelled Positioning, SEO, Content and AI Search around the words "Authority creates opportunity" | El posicionamiento va antes que el marketing (#posicionamiento) | Dos directivos analizan una gran brújula dorada sobre la mesa de una sala de juntas, con sus puntas marcadas como Posicionamiento, SEO, Contenido e IA, bajo la idea de que la autoridad crea oportunidades | The compass literally names the guide's four pillars, with Positioning at the top point. |
| Insight-Distillation-Lab.jpg | Inline 2 | Content marketing for consultants | A scientist distils jars of messy sticky-note "raw input" through glass apparatus into a flask of "distilled insight", beneath a chalkboard titled "The Science of Clarity" | Estrategia de contenidos para consultores (#contenidos) | Un científico destila frascos de notas adhesivas caóticas, la "materia prima", en un aparato de vidrio hasta obtener un matraz de "insight destilado", bajo una pizarra titulada "La ciencia de la claridad" | Turning noisy expertise into clear authority assets — a direct metaphor for good consultant content. |
| Stakeholder-Alignment-Rig.jpg | Inline 3 | Consultant marketing channels ranked | Five executives labelled with different business functions stand clamped into an industrial "Alignment Control" machine reading "One strategy, one direction, one outcome", its status dial set to optimal | Plan simple para 90 días (#plan) | Cinco directivos, cada uno etiquetado con una función distinta del negocio, sujetos a una máquina industrial de "control de alineación" que marca "una estrategia, una dirección, un resultado" con el indicador en óptimo | Visualises many channels aligned into one coherent engine. Placed late for even spacing. |

**Proposed visual sequence**
```
Hero: The-Authority-Lighthouse.jpg
↓ Introductory content
↓ Positioning comes before marketing → Inline 1: The-Authority-Compass.jpg
↓ Website + SEO sections
↓ Content marketing for consultants → Inline 2: Insight-Distillation-Lab.jpg
↓ LinkedIn + AI search sections
↓ Consultant marketing channels ranked → Inline 3: Stakeholder-Alignment-Rig.jpg
```

**Notes:** **Hero is a close call** — Lighthouse (chosen; most cinematic/thesis-level) vs Compass (tighter four-pillar match). Swap is reasonable. **Stakeholder-Alignment-Rig is the weakest thematic fit** (depicts internal business-function alignment, not external marketing) — if you'd rather run only three images total, drop this one. ES is shorter/reorganised (no funnel / website-table / channels-ranked / standalone AEO); Inline 3 remapped to "Plan simple para 90 días." Positioning + content map cleanly in both.

---

## Marketing for Engineers
- **English page:** /marketing-for-engineers-how-technical-experts-win-more-clients
- **Spanish page:** /marketing-para-ingenieros

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| Works-On-My-Machine-Bubble.jpg | Hero | below intro, before "On this page" menu / first `<h2>` | An engineer works calmly at a clean desk sealed inside a glass dome while colleagues outside firefight production failures and server errors | below intro paragraph, before first `<h2>` ("Posicionamiento: el primer filtro") | Un ingeniero trabaja tranquilo dentro de una cúpula de cristal sellada mientras, fuera, sus colegas apagan fallos de producción y errores de servidor | Baked "Works On My Machine" + isolated engineer is the literal picture of expertise that is real but invisible and disconnected from the client. |
| Constraint-Tug-of-War.jpg | Inline 1 | The best marketing channels for engineers | Business teams in suits play tug-of-war over a concrete block marked "The Solution," with staked signs for cost, time, scope, quality and performance | Errores comunes | Equipos con traje tiran de una cuerda contra un bloque de hormigón marcado como "La Solución," rodeados de carteles de coste, tiempo, alcance y calidad | "Trade-offs are inevitable / Balance > Perfection" mirrors "the right balanced mix of channels." |
| Physics-Doesnt-Care-Room.jpg | Inline 2 | Engineering case studies | An engineer studies a snapped carbon-fibre test beam in a lab, beneath a wall stencilled "Physics doesn't care about your model" | Casos de estudio: donde se gana mucha confianza | Un ingeniero observa una viga de fibra de carbono partida en un laboratorio de ensayos, bajo un muro que dice "A la física le da igual tu modelo" | A real failed test with data is the visual argument for case studies: evidence over confident claims. |
| Over-Specified-Door.jpg | Inline 3 | Common engineering marketing mistakes | An engineer studies an over-built vault door bristling with locks and sensors beside a whiteboard listing dozens of requirements | Posicionamiento: el primer filtro | Un ingeniero examina una puerta blindada repleta de cerrojos y sensores junto a una pizarra con una larga lista de requisitos | Leading with every technical feature instead of the client outcome (EN mistake #1; ES "abarcar todo" trap). |

**Proposed visual sequence**
```
Hero: Works-On-My-Machine-Bubble.jpg
↓ Introductory content (their expertise is invisible)
↓ The best marketing channels for engineers → Inline 1: Constraint-Tug-of-War.jpg
↓ SEO for engineers / Why technical content is a superpower
↓ Engineering case studies → Inline 2: Physics-Doesnt-Care-Room.jpg
↓ LinkedIn / Building trust before the first conversation
↓ Common engineering marketing mistakes → Inline 3: Over-Specified-Door.jpg
```

**Notes:** ES heavily condensed (opens straight into "Posicionamiento"; no best-channels / what-clients-want / building-trust sections) → Tug-of-War remapped to "Errores comunes", Over-Specified-Door to "Posicionamiento"; Physics + Bubble map cleanly. ES hero sits just above the first `<h2>`, so the first ES inline falls one heading below it (unavoidable at this length). Hero ambiguity: Bubble vs Physics both fit the intro thesis — Bubble chosen for the more literal "invisible/isolated expertise" read. No misfiled images.

---

## Marketing for IT Service Providers
- **English page:** /marketing-for-it-service-providers-how-to-generate-more-qualified-leads
- **Spanish page:** /marketing-para-empresas-de-servicios-it

| Image filename | Role | Placement after (EN heading) | English alt text | Spanish placement (ES heading) | Spanish alt text | Reason |
|---|---|---|---|---|---|---|
| The-Invisible-Hero.jpg | Hero | below intro, before first `<h2>` "Why marketing is different for IT service providers" | An IT technician quietly repairing a server rack under a desk while the office keeps working around him, beneath a wall sign about technology disappearing | below intro, before first `<h2>` "Qué hace difícil vender servicios IT" | Un técnico de IT repara discretamente un servidor bajo un escritorio mientras la oficina sigue trabajando con normalidad | Central idea: IT's best work is invisible and lets the business move forward. |
| Downtime-Domino-Effect.jpg | Inline 1 | Why marketing is different for IT service providers | An IT professional halting a row of falling dominoes labelled with core systems before they can topple database, backups and revenue | Qué hace difícil vender servicios IT | Un profesional de IT detiene una hilera de fichas de dominó con los sistemas críticos antes de que caigan sobre las copias de seguridad y los ingresos | Literalises "no outage, no breach, prevention" — the invisible risk-reduction this section describes. |
| The-Industry-Doors.jpg | Inline 2 | SEO for IT service providers | A man weighing up a hallway of glass office doors labelled Legal, Medical, Accounting, Construction and Professional Services, with a blurred "Everyone" door at the end | SEO para empresas de servicios IT | Un hombre observa un pasillo de puertas de cristal rotuladas Legal, Medicina, Contabilidad, Construcción y Servicios Profesionales, con una puerta borrosa de "Todos" al fondo | The door labels mirror this section's exact list of industry pages vs the vague generalist "everyone." |
| Invisible-Shield.jpg | Inline 3 | Content strategy for IT companies | A glowing protective dome around a worker and servers deflecting incoming threats labelled malware, phishing, ransomware and data theft | Qué contenido suele funcionar mejor | Una cúpula de energía protege a un trabajador y sus servidores desviando amenazas de malware, phishing y ransomware | Anchors the "risk / cybersecurity" theme; visualises security value content should make tangible. |

**Proposed visual sequence**
```
Hero: The-Invisible-Hero.jpg
↓ Introductory content (invisible value / buying confidence)
↓ Why marketing is different for IT service providers → Inline 1: Downtime-Domino-Effect.jpg
↓ The biggest marketing mistakes / The best marketing channels
↓ SEO for IT service providers → Inline 2: The-Industry-Doors.jpg
↓ Marketing for MSPs / How AI search is changing IT marketing
↓ Content strategy for IT companies → Inline 3: Invisible-Shield.jpg
↓ Case studies / practical plan / FAQ
```

**Notes:** Distribution lands on sections 1, 4, 7 (plus hero) — no clustering. ⚠️ **Text artifact:** `The-Industry-Doors.jpg` has garbled baked-in text where the "Construction"/"Professional Services" doors overlap (reads "PROFESRUCTION") — legible at a glance, alt text states the intended labels; flag if pixel-level polish matters. ES condensed (no standalone best-channels / MSP sections; industry targeting folded into "Soluciones por industria o caso de uso" under SEO) → placements mapped to nearest ES headings; Shield's ES anchor is weaker ("Qué contenido suele funcionar mejor"; "Errores comunes" is an alternative).

---

# Final report

### English pages reviewed — 14 / 14 ✅
All fourteen English blogs were read and their `<h2>` structure extracted. Each has 1 hero + 3 inline placements defined.

### Corresponding Spanish pages identified — 13
Confirmed via each English page's `alternates={[…]}` array. **1 English blog has no Spanish counterpart:** *How to Get Cited in AI-Generated Answers* (its alternates list only `en-AU` + `x-default`; no ES translation exists). The other 13 map to an existing ES page (all directories confirmed present).

### Intended images mapped — 56 / 56 ✅
14 × 4 = 56 placements, every image assigned a defined role (hero or inline 1–3), with English alt text for all 56 and Spanish alt text for the 52 that have a Spanish page (13 blogs × 4). *Get Cited* (4 images) is English-only, so its Spanish columns are marked N/A.

### Extra images discovered — 4
All four are in **How ChatGPT Chooses Sources** (8 images total). They are **alternate/duplicate versions**, not misfiled or accidental: The-Authority-Interview & The-Authority-Stack (same trust/authority theme), The-Entity-Identity-Check (alternate of The-Entity-Recognition-Board), The-Context-Matching-Room (baked "STEP 4" clashes with the article's Step 4 = Trust). Kept in the library, unused on the page.

### Explanation for the 60-vs-56 discrepancy
`8 (ChatGPT) + 13 × 4 = 60`. Only the ChatGPT folder deviates from the 4-image standard. Selecting its best 4 leaves 56 placed and 4 surplus — matching the expected 56.

### Ambiguous placements (flagged for your call)
- **Perplexity** — delivered images are STAGE 1/3/4/5 (no Stage 2); hero could be Retrieval-Gate for strict order, but Final-Selection-Chamber is the stronger thesis image.
- **Consultants** — hero close call (Lighthouse vs Compass); **Stakeholder-Alignment-Rig is the weakest fit** and is the drop candidate if you prefer 3 images.
- **Why-Brands** — the tourist/resident image was promoted to hero over its literal home (§1 Topical Authority) for whole-article summary + spacing; reversible.
- **Engineers** — hero Bubble vs Physics both fit the intro thesis.
- **Get Cited** — Inline 1 & 2 fall on consecutive sections (each image's best home); intentional.
- **Mentions** — blindfold placed at "Common mistakes" vs the equally valid "How to measure."
- **AI Citation Tracking** — Invisible-Funnel / Testimonial-Wall each have a secondary candidate section.

### Any image assigned to the wrong blog — none confirmed
The one real risk, the two same-named "Analytics Blindfold" images, was investigated and **cleared**: they are distinct renders, each correctly filed (GA4 copy = measurement-gap; Mentions copy = mentions/citations/rankings). Note two cosmetic source artifacts (not misfiles): `The-Industry-Doors.jpg` has a garbled overlapping label ("PROFESRUCTION"); the Mentions Pyramid source PNG had a stray "generate " filename prefix (source only — the delivered JPG is clean).

### EN vs ES structures that differ enough to change placements
- **Identical / 1:1:** Marketing for Accountants; How ChatGPT Chooses Sources.
- **Condensed — placements adapted to nearest ES heading:** AI Citation Tracking, Google AI Overviews, Perplexity, GA4, Mentions/Citations/Rankings, Architects, Consultants, Engineers, Financial Advisers, IT Service Providers.
- **H2→H3 remap:** Why-Brands — EN gives each of the 5 signals its own `<h2>`; ES nests them as `<h3>` under one `<h2>`, so 2 inline images anchor to ES `<h3>`s.
- **No ES page:** How to Get Cited in AI-Generated Answers.
- **Cross-cutting:** all images carry baked-in **English** text, which will be visible on the 13 Spanish pages (flag for possible future localised renders).

### Exact files added or changed
- **Added:** `docs/new-blog-image-placement-map-2026-07-24.md` (this file).
- **Changed:** none. No Astro pages edited, no image references added, no page copy/headings/schema/canonicals/CSS touched, no PNGs or JPGs modified or renamed, nothing committed.

---

**Next step (on approval):** implement the placements by inserting `<img class="zoomable" src="/images/…" alt="…" loading="lazy" decoding="async" width="800" height="450">` after the named headings, matching each file's quoting convention (EN escaped `\"`; ES template-literal `"`), on the 14 English pages and the 13 Spanish pages.
