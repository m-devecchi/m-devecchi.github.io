# m-devecchi.github.io

Personal CV website of Marco De Vecchi, published with GitHub Pages.

- `index.html` — the single-page CV
- `styles.css` — styling built on the "Marco DeVecchi" design system tokens (colours, Inter type scale, 4px spacing, radii); light and dark themes, print stylesheet
- `fonts/` — self-hosted Inter (latin subset, SIL OFL)
- `cv-print.html` — the A4 version of the CV, built from the same design system
- `Marco_De_Vecchi_CV.pdf` — the downloadable CV, rendered from `cv-print.html`

No build step: push to the default branch and GitHub Pages serves the site.

To regenerate the PDF after editing `cv-print.html`, print it to A4 from a Chromium-based browser with "background graphics" on and default margins, or with Playwright:

```js
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + __dirname + '/cv-print.html', { waitUntil: 'networkidle' });
  await page.pdf({ path: 'Marco_De_Vecchi_CV.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true });
  await browser.close();
})();
```
