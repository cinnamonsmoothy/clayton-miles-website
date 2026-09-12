# Clayton Miles Recruitment website

Static GitHub Pages website for Clayton Miles Recruitment.

## Local development

From the repository root, start a local server:

```powershell
python -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.

The production site uses clean routes such as `/logistics-transport-recruitment`. Local navigation automatically falls back to the physical `.html` files when running from `file://`, `localhost` or `127.0.0.1`.

## Repository structure

- Root HTML files are the published GitHub Pages entry points.
- `scripts/` contains shared header, footer, landing-page and vacancies JavaScript.
- `styles/` contains the shared stylesheet.
- `images/` contains referenced visual assets and the local Lucide icon sprite.
- `robots.txt`, `sitemap.xml` and `CNAME` control search crawling and the custom domain.
- `THIRD_PARTY_NOTICES.md` records the Lucide icon licence.

## Deployment

The `main` branch deploys through GitHub Pages to `https://claytonmiles.cc/`.

Before pushing, check JavaScript syntax and whitespace:

```powershell
node --check scripts/site-header.js
node --check scripts/site-footer.js
node --check scripts/landing-pages.js
node --check scripts/vacancies.js
git diff --check
```
