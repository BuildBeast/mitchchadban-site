const fs = require('fs');
const path = require('path');

const [,, sourceFile, outputFile] = process.argv;

if (!sourceFile || !outputFile) {
  console.error('Usage: node scripts-extract-page.cjs <source-html> <output-astro>');
  process.exit(1);
}

const sourcePath = path.resolve(sourceFile);
const outputPath = path.resolve(outputFile);
const cloneDir = path.resolve(process.env.HOME, 'Desktop/site-migration/mitchchadban-static-clone');

function getKnownSlugs() {
  if (!fs.existsSync(cloneDir)) return [];

  const slugs = fs
    .readdirSync(cloneDir)
    .filter((file) => file.endsWith('.html'))
    .map((file) => file.replace(/\.html$/, ''))
    .filter((slug) => slug !== 'index')
    .sort((a, b) => b.length - a.length);

  slugs.push('portfolio-1');
  slugs.push('archive');
  slugs.push('blogs-resources');
  slugs.push('services-main');
  slugs.push('about');
  slugs.push('contact-form');
  slugs.push('pricing-and-packages');
  slugs.push('privacy-policy');
  slugs.push('terms-of-service');
  slugs.push('tribal-habits');

  return [...new Set(slugs)].sort((a, b) => b.length - a.length);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function attrValue(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']*)["']`, 'i'));
  return match ? match[1] : '';
}

function escapeAttr(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function buildMediaMap(page) {
  const map = new Map();

  const mediaItems = [
    ...(Array.isArray(page.media) ? page.media : []),
    page.thumbnail || null,
  ].filter(Boolean);

  for (const item of mediaItems) {
    if (!item.hash || !item.name) continue;

    map.set(item.hash, {
      name: item.name,
      width: item.width || '',
      height: item.height || '',
      mime: item.mime_type || '',
      isImage: item.is_image !== false,
      isVideo: item.is_video === true,
    });
  }

  return map;
}

function mediaUrl(item, hash) {
  const safeName = encodeURIComponent(item.name).replaceAll('%2F', '/');
  return `https://freight.cargo.site/w/1600/i/${hash}/${safeName}`;
}

function convertMediaItems(content, page) {
  const mediaMap = buildMediaMap(page);

  return content.replace(/<media-item\b[^>]*>[\s\S]*?<\/media-item>/gi, (tag) => {
    const hash = attrValue(tag, 'hash');
    const alt = attrValue(tag, 'alt');
    const className = attrValue(tag, 'class');

    if (!hash || !mediaMap.has(hash)) {
      return tag;
    }

    const item = mediaMap.get(hash);
    const src = mediaUrl(item, hash);

    if (item.isVideo) {
      return `<video class="${escapeAttr(className)}" controls playsinline preload="metadata" src="${escapeAttr(src)}"></video>`;
    }

    return `<img class="${escapeAttr(className)}" src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" loading="lazy" decoding="async" width="${escapeAttr(item.width)}" height="${escapeAttr(item.height)}">`;
  });
}

function fixInternalLinks(content) {
  let fixed = content;

  fixed = fixed
    .replaceAll('rel="history"', '')
    .replaceAll("rel='history'", '');

  for (const slug of getKnownSlugs()) {
    const escaped = escapeRegExp(slug);

    fixed = fixed.replace(
      new RegExp(`href=(["'])${escaped}/?\\1`, 'g'),
      `href="/${slug}/"`
    );
  }

  fixed = fixed
    .replaceAll('href="portfolio"', 'href="/portfolio-1/"')
    .replaceAll("href='portfolio'", 'href="/portfolio-1/"')
    .replaceAll('href="/portfolio/"', 'href="/portfolio-1/"');

  return fixed;
}

const html = fs.readFileSync(sourcePath, 'utf8');
const marker = 'window.__PRELOADED_STATE__=';
const start = html.indexOf(marker);

if (start === -1) {
  console.error('Could not find Cargo preloaded state marker.');
  process.exit(1);
}

const jsonStart = html.indexOf('{', start);

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

const state = JSON.parse(html.slice(jsonStart, jsonEnd));
const pages = state.pages?.byId || {};
const activePID = state.frontendState?.activePID;
const page = pages[activePID];

if (!page) {
  console.error('Could not find active page content.');
  process.exit(1);
}

let content = page.content || '';
content = convertMediaItems(content, page);
content = fixInternalLinks(content);

const rawTitle = page.title || 'Mitch Chadban';
const title = rawTitle.includes('Mitch Chadban') ? rawTitle : `${rawTitle} | Mitch Chadban`;

const description =
  page.description ||
  state.site?.site_description ||
  'Design, SEO and marketing by Mitch Chadban.';

const slug = path.basename(path.dirname(outputPath));
const canonical = `https://mitchchadban.com/${slug}/`;

const astro = `---
import BaseLayout from '../../layouts/BaseLayout.astro';

const pageContent = ${JSON.stringify(content)};
---

<BaseLayout
  title=${JSON.stringify(title)}
  description=${JSON.stringify(description)}
  canonical=${JSON.stringify(canonical)}
>
  <Fragment set:html={pageContent} />
</BaseLayout>
`;

fs.writeFileSync(outputPath, astro, 'utf8');

console.log('Extracted page:', page.title);
console.log('From:', sourcePath);
console.log('To:', outputPath);
