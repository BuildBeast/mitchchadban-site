const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve('src/pages');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const routeSlugs = new Set();

for (const file of walk(pagesDir)) {
  if (!file.endsWith('/index.astro')) continue;

  const dir = path.basename(path.dirname(file));

  if (dir !== 'pages') {
    routeSlugs.add(dir);
  }
}

const sortedSlugs = [...routeSlugs].sort((a, b) => b.length - a.length);

let filesChanged = 0;
let replacements = 0;

for (const file of walk(pagesDir)) {
  if (!file.endsWith('.astro')) continue;

  let text = fs.readFileSync(file, 'utf8');
  const before = text;

  for (const slug of sortedSlugs) {
    const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const patterns = [
      new RegExp(`href="${escapedSlug}"`, 'g'),
      new RegExp(`href="${escapedSlug}/"`, 'g'),
      new RegExp(`href=\\\\"${escapedSlug}\\\\"`, 'g'),
      new RegExp(`href=\\\\"${escapedSlug}/\\\\"`, 'g'),
      new RegExp(`href='${escapedSlug}'`, 'g'),
      new RegExp(`href='${escapedSlug}/'`, 'g'),
    ];

    for (const pattern of patterns) {
      text = text.replace(pattern, (match) => {
        replacements++;

        if (match.includes('\\"')) {
          return `href=\\\\"/${slug}/\\\\"`;
        }

        if (match.includes("'")) {
          return `href='/${slug}/'`;
        }

        return `href="/${slug}/"`;
      });
    }
  }

  text = text
    .replaceAll('href="portfolio"', 'href="/portfolio-1/"')
    .replaceAll('href=\\"portfolio\\"', 'href=\\"/portfolio-1/\\"')
    .replaceAll("href='portfolio'", "href='/portfolio-1/'");

  if (text !== before) {
    fs.writeFileSync(file, text, 'utf8');
    filesChanged++;
  }
}

console.log(`Fixed links in ${filesChanged} files.`);
console.log(`Replacements attempted: ${replacements}.`);
