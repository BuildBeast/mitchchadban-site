// Apply unique meta descriptions from a JSON file: [{file, description}, ...]
// Replaces the first description="..." prop value in each Astro page.
const fs = require('fs');

const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error('Usage: node scripts-apply-descriptions.cjs <descriptions.json>');
  process.exit(1);
}

const items = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
let applied = 0;
const problems = [];

for (const { file, description } of items) {
  if (!fs.existsSync(file)) {
    problems.push(`MISSING FILE: ${file}`);
    continue;
  }
  // sanitize: strip any double quotes / newlines, collapse whitespace, trim
  const clean = description.replace(/"/g, "'").replace(/\s+/g, ' ').trim();
  let text = fs.readFileSync(file, 'utf8');

  // Replace the first description="..." attribute value
  const re = /description="[^"]*"/;
  if (!re.test(text)) {
    problems.push(`NO description= prop in ${file}`);
    continue;
  }
  text = text.replace(re, `description="${clean}"`);
  fs.writeFileSync(file, text, 'utf8');
  applied++;
}

console.log(`Applied ${applied}/${items.length} descriptions.`);
if (problems.length) {
  console.log('Problems:');
  problems.forEach((p) => console.log('  ' + p));
}
