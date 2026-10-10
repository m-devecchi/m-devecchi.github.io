# m-devecchi.github.io

Personal CV website of Marco De Vecchi, published with GitHub Pages.

- `index.html` — the single-page CV
- `styles.css` — styling built on the "Marco DeVecchi" design system tokens (colours, Inter type scale, 4px spacing, radii); light and dark themes, print stylesheet
- `fonts/` — self-hosted Inter and JetBrains Mono (latin subset, SIL OFL)
- `Marco_De_Vecchi_CV.pdf` — the downloadable CV, two A4 pages, generated from the site

No build step: push to the default branch and GitHub Pages serves the site.

The PDF is generated from the site itself: `index.html` rendered with its print stylesheet (`@media print` in `styles.css`) onto two A4 pages by `scripts/build-cv.mjs`. The `Build CV PDF` GitHub Action runs it on every push to `main` that touches the site and commits the new `Marco_De_Vecchi_CV.pdf`, so the download always matches the page. To build it locally: `npm install --no-save playwright && npx playwright install chromium && node scripts/build-cv.mjs`.
