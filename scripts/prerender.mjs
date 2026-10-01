import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = `${root}dist/index.html`;
const ssrDir = `${root}dist-ssr`;

const { render } = await import(`${ssrDir}/entry-server.js`);
const template = await readFile(indexPath, 'utf8');

if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder');
}

const html = template.replace('<!--app-html-->', render());
await writeFile(indexPath, html);
await rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered dist/index.html (${Math.round(html.length / 1024)} kB)`);
