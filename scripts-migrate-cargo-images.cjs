// One-off migration: download all freight.cargo.site assets into /public/images
// and rewrite every reference in src/pages to a local /images/ path.
const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve('src/pages');
const imagesDir = path.resolve('public/images');
fs.mkdirSync(imagesDir, { recursive: true });

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(pagesDir).filter((f) => f.endsWith('.astro'));

// Collect unique cargo URLs across all pages
const urlRe = /https:\/\/[a-z0-9.]*cargo\.site[^"'\\ )]*/g;
const urls = new Set();
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  const matches = text.match(urlRe) || [];
  matches.forEach((u) => urls.add(u));
}

function localName(url) {
  const base = url.split('/').pop();
  // keep it filesystem + URL safe
  return base.replace(/[^A-Za-z0-9._-]/g, '-');
}

// Build URL -> /images/<name> map, guarding against name collisions
const map = new Map();
const used = new Set();
for (const url of urls) {
  let name = localName(url);
  if (used.has(name)) {
    const ext = path.extname(name);
    const stem = name.slice(0, -ext.length);
    let i = 2;
    while (used.has(`${stem}-${i}${ext}`)) i++;
    name = `${stem}-${i}${ext}`;
  }
  used.add(name);
  map.set(url, name);
}

console.log(`Found ${map.size} unique cargo URLs.`);

async function download(url, dest) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

(async () => {
  const entries = [...map.entries()];
  const failures = [];
  let done = 0;
  const CONCURRENCY = 8;

  for (let i = 0; i < entries.length; i += CONCURRENCY) {
    const batch = entries.slice(i, i + CONCURRENCY);
    await Promise.all(
      batch.map(async ([url, name]) => {
        const dest = path.join(imagesDir, name);
        if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
          done++;
          return;
        }
        try {
          await download(url, dest);
          done++;
        } catch (err) {
          failures.push({ url, name, err: err.message });
        }
      })
    );
    process.stdout.write(`\rDownloaded ${done}/${entries.length}`);
  }
  process.stdout.write('\n');

  if (failures.length) {
    console.log(`\n${failures.length} FAILED:`);
    failures.forEach((f) => console.log(`  ${f.err}  ${f.url}`));
    console.log('\nAborting rewrite — fix failures first.');
    process.exit(1);
  }

  // Rewrite references in page files
  let changedFiles = 0;
  for (const f of files) {
    let text = fs.readFileSync(f, 'utf8');
    const before = text;
    for (const [url, name] of map) {
      text = text.split(url).join(`/images/${name}`);
    }
    if (text !== before) {
      fs.writeFileSync(f, text, 'utf8');
      changedFiles++;
    }
  }
  console.log(`Rewrote references in ${changedFiles} files.`);
})();
