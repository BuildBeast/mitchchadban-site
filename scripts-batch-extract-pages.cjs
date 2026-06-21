const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const cloneDir = path.resolve(process.env.HOME, 'Desktop/site-migration/mitchchadban-static-clone');
const pagesDir = path.resolve('src/pages');

const skip = new Set([
  'index.html',
  'portfolio-1.html',
  'archive.html',
  'blogs-resources.html',
  'services-main.html',
  'about.html',
  'contact-form.html',
  'pricing-and-packages.html',
  'privacy-policy.html',
  'terms-of-service.html',
  'tribal-habits.html'
]);

const files = fs
  .readdirSync(cloneDir)
  .filter((file) => file.endsWith('.html'))
  .filter((file) => !skip.has(file));

let created = 0;
let failed = 0;

for (const file of files) {
  const slug = file.replace(/\.html$/, '');
  const outputDir = path.join(pagesDir, slug);
  const outputFile = path.join(outputDir, 'index.astro');
  const sourceFile = path.join(cloneDir, file);

  fs.mkdirSync(outputDir, { recursive: true });

  const result = spawnSync(
    'node',
    ['scripts-extract-page.cjs', sourceFile, outputFile],
    { stdio: 'inherit' }
  );

  if (result.status === 0) {
    created++;
  } else {
    failed++;
    console.error(`Failed: ${file}`);
  }
}

console.log(`Batch migration complete. Created: ${created}. Failed: ${failed}.`);
