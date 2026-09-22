// Renders the app to static HTML so crawlers and AI agents that don't run JavaScript see the full content.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const indexPath = resolve(root, 'dist/index.html');
const ssrDir = resolve(root, 'dist-ssr');

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
const html = readFileSync(indexPath, 'utf8');
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error('prerender: root marker not found in dist/index.html');

writeFileSync(indexPath, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync(ssrDir, { recursive: true, force: true });
console.log('prerender: wrote static HTML to dist/index.html');
