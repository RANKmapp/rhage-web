// Copies the web app (repo root) into app/www so Capacitor can bundle it.
// Keeps GitHub Pages at the repo root untouched; this is the only build step.
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const www = join(here, '..', 'www');

rmSync(www, { recursive: true, force: true });
mkdirSync(www, { recursive: true });

const include = ['index.html', 'config.js', 'preact.umd.js', 'manifest.json', 'install.html', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'media'];
for (const item of include) {
  const src = join(root, item);
  if (existsSync(src)) cpSync(src, join(www, item), { recursive: true });
}
console.log('synced web app -> app/www');
