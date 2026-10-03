# Portfolio Tech Stack Decision

## Status

**Approved Tech Stack / Foundation**

Decision: **Approved**

本書は`docs/03_TECH_STACK_SPIKE.md`の実測結果を、Portfolio本体Projectの正式な技術判断として記録します。

## Decision

| Item | Decision |
|---|---|
| Framework | Astro 7.3.5 |
| Rendering | Static Site Generation |
| UI Framework | None |
| Client Framework | None |
| Language | Astro / HTML / CSS / JavaScript |
| TypeScript | Astro Config、Content Schema等で必要最小限 |
| Content | Astro Content Collections + Markdown |
| Client JavaScript | Vanilla JavaScriptを必要箇所だけ使用 |
| Package Manager | npm |
| Build | `astro build` / Static Output |

React、Vue、Svelte、MDX、CSS Framework、CMSはFoundationへ導入しません。

## Why

Technical SpikeではPlain HTML、Vite + Vanilla、Astroを同じRoute、Work Data、Metadata、Optional Module要件で比較しました。

Astroは次の要件を独自Generatorなしで満たしました。

- Content EntryからStatic Detail Routeを生成
- Work List、Detail、Metadataで同じDataを利用
- 共通LayoutとComponentによる重複削減
- Optional Moduleの条件出力
- Content SchemaのBuild-time Validation
- Static ComponentだけのBuildでClient JavaScript 0 B
- GitHub Pages Project SiteとRoot DomainのBase Path切替
- 新規作品を1 Content Entryで追加

Portfolioは約10作品と今後の追加を想定するため、初期の単純さより長期保守、Data整合、Static Outputを優先します。

## Why Not Plain HTML

Plain HTMLはBuild不要で理解しやすく、Static Performanceにも優れます。

一方、作品数が増えるとHeader、Footer、Detail Template、Metadata、Optional Moduleの重複が増えます。JSONをClient側で読む方法では、Static Detail HTMLとMetadataの自動生成を解決できません。

## Why Not Vite Only

ViteはDev Server、Asset Build、Base Path、Cache Bustingに有効です。

ただしVite単体はStatic HTML TemplateやContent Route Generatorではありません。Detail Route、Metadata、Optional ModuleをDataから生成するには、HTML複製または独自Generatorが必要です。今回のContent ArchitectureにはAstroの標準機能がより直接的です。

## Content Strategy

### Work Data

`src/content/works/`で1作品1 Markdown Entryとして管理します。

Frontmatterの基本Field：

- slug
- title
- category
- type
- description
- year
- tags
- featured
- liveUrl
- githubUrl
- optionalModules

URLは存在する作品だけに設定できるOptional Fieldとします。

### Detail Page

`src/pages/works/[slug].astro`でContent Collectionを読み、Static HTMLを生成します。

Required Coreと作品固有のOptional Moduleを分離し、全作品へ同一Sectionを強制しません。

### Metadata

Foundationでは`title`と`description`をContent Dataから共通Layoutへ渡します。

Canonical、OGP、Twitter Card、Structured DataはHostingとMetadata Systemを決める後工程で実装します。

### Optional Module

許可するModule IDをContent SchemaでValidationします。Foundationでは存在するModuleだけを出力し、空Sectionを生成しません。

初期候補：

- productUI
- informationArchitecture
- performance
- accessibility
- challenges
- branding
- copy
- interaction
- responsive

Schemaを万能化せず、本番Content監査後に必要なDataだけ追加します。

## Routing

| Route | Role |
|---|---|
| `/` | TOP |
| `/works/` | WORKS一覧 |
| `/works/[slug]/` | WORK DETAIL |
| `/about/` | ABOUT |
| `/contact/` | CONTACT Foundation |

- Trailing Slashは`always`
- Work Slugは小文字英数字とHyphen
- Detail RouteはStatic Build時に生成

## Base Path Strategy

### Root

Default Base Pathは`/`です。Netlifyまたは将来のCustom DomainでRoot配信できる構造を維持します。

### GitHub Pages Project Site

GitHub Pages Project SiteではBuild時に`BASE_PATH=/portfolio-site`を渡します。

Source Pageへ`/portfolio-site/`を分散してHardcodeせず、Astro Configと`import.meta.env.BASE_URL`を正本にします。

Production URLが未決定のため、`site`へ架空URLを設定しません。Hosting決定後に正式Originを追加します。

## Hosting Compatibility

### GitHub Pages

- Static Outputに対応
- Project Site Base Pathに対応
- GitHub ActionsでBuild OutputをDeployする候補
- 今回はDeployしない

### Netlify

- Build Command：`npm run build`
- Publish Directory：`dist`
- Root Base Pathに対応
- Deploy Preview、Custom Domain、Formsは将来のHosting判断事項

Stack DecisionとHosting Decisionは分離します。

## JavaScript Policy

### Static First

Content、Navigation、Metadata、Works List、Detail本文はStatic HTMLとして出力します。

### Vanilla JavaScript

Client Frameworkは導入しません。必要になった場合もVanilla JavaScriptを優先します。

### Client JSを許可する候補

- Mobile Menu
- 必要性が確認されたFilter
- 小規模Interaction

Content表示をClient JavaScriptへ依存させません。Hydration Directiveは要件確認なしに追加しません。

## Image Policy

- Responsive Sourceを使用
- `width` / `height`またはAspect Ratioを保持
- Above-the-foldとBelow-the-foldでLoading方針を分ける
- Below-the-foldはLazy Loading候補
- Alt TextをContentとして管理
- Master Assetを上書きしない

`src/assets/images/works/[slug]/`はAstro Image Pipeline対象の候補です。

`public/`は次に限定します。

- favicon等の固定Static File
- Download File
- 変換禁止Asset
- Exact Pathまたは既存最適化Fileが必要な場合

既存ProjectのProduction Derivativeを無条件に再変換しません。Astro Image、素の`picture`、`public`をAsset単位で選択します。

## Accessibility Policy

Foundationから次を必須とします。

- `lang="ja"`
- Semantic HTML
- 各Pageの内容を示す`h1`
- Heading Hierarchy
- Keyboard操作可能なNative Element
- 意味の分かるLink Text
- DOM OrderとVisual Orderの一致

Design System工程で次を定義します。

- `:focus-visible`
- Color Contrast
- Touch Target
- Skip Link
- Current Page
- `prefers-reduced-motion`
- Mobile NavigationのFocus管理

Accessibilityを公開前だけの確認ではなく、Component要件として管理します。

## Risks

### Astro Learning

Content Collections、Static Route、Component境界、Image Pipelineの理解が必要です。

Mitigation：Client Frameworkを追加せず、AstroのStatic機能へ範囲を限定します。

### Build Dependency

Node、npm、Astro Buildが必要です。

Mitigation：Astro VersionをLockし、`package-lock.json`を管理し、CIでも`npm run build`を実行します。

Foundation監査時点で、Astro 7.3.5のTransitive Dependencyである`http-cache-semantics@4.2.0`に対し、npm Auditは2件のHigh Advisoryを報告しました。Astro 7.3.5は現在のStable Latestで、npmが提示する自動修正はAstro 2.10.9へのBreaking Downgradeです。FoundationはStatic BuildのみでRemote ImageやServer Runtimeを使用しないため、強制Downgradeや未検証Overrideは行わず、AstroとUpstreamの修正版を追跡します。

### Content Schema

Schemaを複雑化すると作品追加が難しくなります。

Mitigation：Required Fieldを少数に保ち、長文はMarkdown、共通VisualだけをComponent化します。

### Base Path

Root前提のAbsolute PathはGitHub Pages Project Siteで破綻します。

Mitigation：Configと`import.meta.env.BASE_URL`を使用し、Root / Project Baseの両方をBuild QAします。

### Version Change

AstroのAPI変更が将来発生する可能性があります。

Mitigation：Spikeで検証した7.3.5をExact Versionで採用し、Upgradeは別Taskで検証します。

## Revisit Conditions

次の場合にStackを再評価します。

1. Astro 7系が保守されずSecurity Updateを受けられない
2. PortfolioがStatic Content中心ではなくなる
3. Authentication、Database、User-specific Renderingが必要になる
4. Content編集者が増え、CMSが必須になる
5. Build / Hosting要件がAstro Static Outputと両立しない
6. Client Application相当の複雑なState管理が必要になる
7. Version Upgrade時にContent APIまたはBase Pathが重大な互換性問題を起こす

作品追加、Design System、軽量なInteractionだけを理由にStackを変更しません。
