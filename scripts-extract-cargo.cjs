const fs = require('fs');
const path = require('path');

const sourcePath = path.resolve(
  process.env.HOME,
  'Desktop/site-migration/mitchchadban-static-clone/index.html'
);

const html = fs.readFileSync(sourcePath, 'utf8');
const marker = 'window.__PRELOADED_STATE__=';

const start = html.indexOf(marker);

if (start === -1) {
  console.error('Could not find Cargo preloaded state marker.');
  process.exit(1);
}

const jsonStart = html.indexOf('{', start);

if (jsonStart === -1) {
  console.error('Could not find JSON start.');
  process.exit(1);
}

let depth = 0;
let inString = false;
let escaped = false;
let jsonEnd = -1;

for (let i = jsonStart; i < html.length; i++) {
  const char = html[i];

  if (escaped) {
    escaped = false;
    continue;
  }

  if (char === '\\') {
    escaped = true;
    continue;
  }

  if (char === '"') {
    inString = !inString;
    continue;
  }

  if (inString) continue;

  if (char === '{') depth++;
  if (char === '}') depth--;

  if (depth === 0) {
    jsonEnd = i + 1;
    break;
  }
}

if (jsonEnd === -1) {
  console.error('Could not find JSON end.');
  process.exit(1);
}

const json = html.slice(jsonStart, jsonEnd);
const state = JSON.parse(json);

const css = state.css?.stylesheet || '';
const pages = state.pages?.byId || {};
const homePageId = state.site?.homepage_id;
const homePage = pages[homePageId];

const desktopHeader = pages.N3531065501?.content || '';
const mobileHeader = pages.G1082584447?.content || '';
const footer = pages.A0222545523?.content || '';
const homeContent = homePage?.content || '';

if (!css) {
  console.error('Could not extract CSS.');
  process.exit(1);
}

if (!homeContent) {
  console.error('Could not extract homepage content.');
  process.exit(1);
}

fs.mkdirSync('src/styles', { recursive: true });
fs.mkdirSync('src/components', { recursive: true });

fs.writeFileSync('src/styles/cargo.css', css, 'utf8');

fs.writeFileSync(
  'src/components/CargoHeader.astro',
`---
---

${desktopHeader
  .replaceAll('href="#" rel="home-page"', 'href="/"')
  .replaceAll('href="portfolio-1" rel="history"', 'href="/portfolio-1/"')
  .replaceAll('href="services-main" rel="history"', 'href="/services-main/"')
  .replaceAll('href="blogs-resources" rel="history"', 'href="/blogs-resources/"')
  .replaceAll('href="contact-form" rel="history"', 'href="/contact-form/"')
  .replaceAll('rel="history"', '')}

${mobileHeader
  .replaceAll('href="#" rel="home-page"', 'href="/"')
  .replaceAll('href="portfolio-1" rel="history"', 'href="/portfolio-1/"')
  .replaceAll('href="services-main"', 'href="/services-main/"')
  .replaceAll('href="blogs-resources"', 'href="/blogs-resources/"')
  .replaceAll('href="contact-form"', 'href="/contact-form/"')
  .replaceAll('rel="history"', '')}
`,
  'utf8'
);

fs.writeFileSync(
  'src/components/CargoFooter.astro',
`---
---

${footer
  .replaceAll('href="portfolio-1" rel="history"', 'href="/portfolio-1/"')
  .replaceAll('href="archive" rel="history"', 'href="/archive/"')
  .replaceAll('href="services-main" rel="history"', 'href="/services-main/"')
  .replaceAll('href="blogs-resources" rel="history"', 'href="/blogs-resources/"')
  .replaceAll('href="contact-form" rel="history"', 'href="/contact-form/"')
  .replaceAll('href="pricing-and-packages" rel="history"', 'href="/pricing-and-packages/"')
  .replaceAll('href="about" rel="history"', 'href="/about/"')
  .replaceAll('href="privacy-policy" rel="history"', 'href="/privacy-policy/"')
  .replaceAll('href="terms-of-service" rel="history"', 'href="/terms-of-service/"')
  .replaceAll('rel="history"', '')}
`,
  'utf8'
);

fs.writeFileSync(
  'src/components/CargoHomeHero.astro',
`---
---

${homeContent
  .replaceAll('href="tribal-habits" rel="history"', 'href="/tribal-habits/"')
  .replaceAll('href="portfolio-1" rel="history"', 'href="/portfolio-1/"')
  .replaceAll('href="archive" rel="history"', 'href="/archive/"')
  .replaceAll('href="blogs-resources" rel="history"', 'href="/blogs-resources/"')
  .replaceAll('href="services-main" rel="history"', 'href="/services-main/"')
  .replaceAll('href="about" rel="history"', 'href="/about/"')
  .replaceAll('href="contact-form" rel="history"', 'href="/contact-form/"')
  .replaceAll('rel="history"', '')}
`,
  'utf8'
);

console.log('Extracted Cargo CSS, header, footer and homepage hero.');
