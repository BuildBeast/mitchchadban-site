const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve('src/pages');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function fixUrl(value) {
  if (!value) return value;

  if (
    value.startsWith('/') ||
    value.startsWith('http://') ||
    value.startsWith('https://') ||
    value.startsWith('data:') ||
    value.startsWith('#') ||
    value.startsWith('mailto:') ||
    value.startsWith('tel:')
  ) {
    return value;
  }

  if (
    value.includes('.jpg') ||
    value.includes('.jpeg') ||
    value.includes('.png') ||
    value.includes('.gif') ||
    value.includes('.webp') ||
    value.includes('.svg') ||
    value.includes('.mp4') ||
    value.includes('.mov') ||
    value.includes('.webm') ||
    value.includes('/media/') ||
    value.includes('/assets/') ||
    value.includes('/images/')
  ) {
    return '/' + value.replace(/^\.?\//, '');
  }

  return value;
}

function fixSrcset(srcset) {
  return srcset
    .split(',')
    .map((part) => {
      const bits = part.trim().split(/\s+/);
      if (!bits[0]) return part;
      bits[0] = fixUrl(bits[0]);
      return bits.join(' ');
    })
    .join(', ');
}

let changedFiles = 0;

for (const file of walk(pagesDir)) {
  if (!file.endsWith('.astro')) continue;

  let text = fs.readFileSync(file, 'utf8');
  const before = text;

  text = text.replace(
    /(src|data-src|data-original|poster)=["']([^"']+)["']/g,
    (_, attr, url) => `${attr}="${fixUrl(url)}"`
  );

  text = text.replace(
    /(srcset|data-srcset)=["']([^"']+)["']/g,
    (_, attr, srcset) => `${attr}="${fixSrcset(srcset)}"`
  );

  text = text.replace(
    /url\((['"]?)([^'")]+)\1\)/g,
    (_, quote, url) => `url(${quote}${fixUrl(url)}${quote})`
  );

  if (text !== before) {
    fs.writeFileSync(file, text, 'utf8');
    changedFiles++;
  }
}

console.log(`Fixed media paths in ${changedFiles} Astro files.`);
