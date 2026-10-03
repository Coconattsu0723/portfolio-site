# Portfolio Site

Webデザイナー転職用Portfolio Siteの制作Projectです。

## Status

Foundation / Design System Next

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

Foundation検証用として`/works/sample-project/`を生成します。

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

Worksは`src/content/works/`のAstro Content Collectionで管理します。現在のSample EntryはFoundation検証専用です。

## Documentation

- [`docs/00_PORTFOLIO_MASTER_PLAN.md`](docs/00_PORTFOLIO_MASTER_PLAN.md)
- [`docs/03_TECH_STACK_SPIKE.md`](docs/03_TECH_STACK_SPIKE.md)
- [`docs/04_TECH_STACK_DECISION.md`](docs/04_TECH_STACK_DECISION.md)

## Current Scope

- Hosting: TBD
- Design: Not Started
- Production: Not Deployed
- Contact Method: TBD
- Production Work Content / Assets: Not Integrated
