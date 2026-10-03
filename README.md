# Portfolio Site

Webデザイナー転職用Portfolio Siteの制作Projectです。

## Status

Home Complete / Works Next

## Tech Stack

- Astro 7.3.5
- Astro / HTML / CSS / Vanilla JavaScript
- Static Site Generation
- Astro Content Collections + Markdown
- Client Framework: None
- Package Manager: npm

## Current Routes

- `/`
- `/works/`
- `/works/[slug]/`
- `/about/`
- `/contact/`

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

GitHub Pages Project Site相当のBase Path Buildは、次で確認できます。

```bash
BASE_PATH=/portfolio-site npm run build
```

## Content

Worksは`src/content/works/`のAstro Content Collectionで管理します。VISTA、TSUGI、tane、sotoをFeatured Worksとして登録しています。

## Documentation

- [`docs/00_PORTFOLIO_MASTER_PLAN.md`](docs/00_PORTFOLIO_MASTER_PLAN.md)
- [`docs/03_TECH_STACK_SPIKE.md`](docs/03_TECH_STACK_SPIKE.md)
- [`docs/04_TECH_STACK_DECISION.md`](docs/04_TECH_STACK_DECISION.md)
- [`docs/05_DESIGN_SYSTEM.md`](docs/05_DESIGN_SYSTEM.md)

## Current Scope

- Home Page: Complete
- Works / Detail Pages: Next
- Hosting: TBD
- Production: Not Deployed
- Contact Method: TBD
- Remaining Work Content / Assets: Not Integrated
