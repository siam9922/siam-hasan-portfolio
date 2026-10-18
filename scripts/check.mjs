import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
if (ids.length !== new Set(ids).size) throw new Error('Duplicate HTML IDs');
for (const [, target] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (target.startsWith('#')) {
    if (!ids.includes(target.slice(1))) throw new Error(`Missing section: ${target}`);
  } else if (!/^(https?:|mailto:)/.test(target) && !existsSync(resolve(root, target))) {
    throw new Error(`Missing local file: ${target}`);
  }
}
console.log('Passed: section anchors, unique IDs, and local asset paths.');
