// Renders index.html with its print stylesheet into the downloadable CV.
// Usage: node scripts/build-cv.mjs  (needs the playwright package and a Chromium)
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
);
const page = await browser.newPage();
// Reduced motion skips the scramble and reveal animations, so every label prints in its final state
await page.emulateMedia({ media: 'print', colorScheme: 'light', reducedMotion: 'reduce' });
await page.goto(pathToFileURL(path.join(root, 'index.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: path.join(root, 'Marco_De_Vecchi_CV.pdf'),
  format: 'A4',
  preferCSSPageSize: true,
  printBackground: true,
});
await browser.close();
