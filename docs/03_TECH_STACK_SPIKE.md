# Portfolio Tech Stack Technical Spike

> **Status: Technical Spike / Stack Decision**
>
> **Decision Candidate: Option C — Astro Static Site Generator**

Portfolio本体の正式Tech Stackを決めるため、同じ3作品DataとRoute要件を使い、Plain HTML、Vite + Vanilla、Astroの最小PrototypeをPortfolio Repository外で作成・Build・検証した記録です。

今回、正式Portfolio Repositoryへ追加するのは本書だけです。本番Source、Design System、Pencil、Work Asset、Production Deployment、Contactは作成していません。

## Purpose

一般論ではなく最小Prototypeから、次の要件に最も自然に対応できるStackを選びます。

- 約10作品と今後の追加
- TOP / WORKS / WORK DETAIL / ABOUT / CONTACT
- `/works/[project]/`形式のStatic Route
- 共通Work CardとDetail Template
- 作品ごとのMetadata
- Required / Optional Detail Module
- Static Content中心
- Responsive / Accessibility / Performance
- GitHub Pages Project Site Base Path
- Netlifyや将来のRoot Domain
- 長期保守と作品追加の容易さ

Frameworkの新しさではなく、採用担当が作品を読みやすく、実装が破綻せず、更新を継続できることを優先します。

## Requirements

### Shared Routes

```text
/
/works/
/works/vista/
/works/tsugi/
/works/tane/
```

### Shared Work Data

3方式で同じFieldを使用しました。

```text
slug
title
category
type
description
year
tags
featured
liveUrl
githubUrl
optionalModules
```

### Optional Modules

- VISTA：Product UI / Accessibility / Performance / Challenges
- TSUGI：Information Architecture / Branding / Responsive
- tane：Branding / Copy / Responsive

### Detail Output

各作品で次を確認しました。

- Project Title
- Category / Type
- Description
- Tags
- Required Section
- 作品Dataに存在するOptional Moduleだけを表示
- Live / GitHub

### Metadata

各DetailでDataに対応する固有値を確認しました。

- `<title>`
- `meta description`
- `canonical`
- `og:title`
- `og:description`

## Test Setup

### Portfolio Source of Truth

- **Project Root:** `/Users/natsumikato/Documents/ポートフォリオ/portfolio-site`
- **Branch:** `main`
- **Repository:** `https://github.com/Coconattsu0723/portfolio-site.git`
- **Master Plan:** `docs/00_PORTFOLIO_MASTER_PLAN.md`

### Temporary Environment

- **Path:** `/tmp/portfolio-tech-spike/`
- **Git管理:** なし
- **Portfolio Repositoryとの分離:** 確認済み
- **npm Cache:** `/tmp/portfolio-tech-spike/npm-cache`

macOSの既存npm Cacheに権限問題があったため、Spike専用Cacheを使用しました。Home DirectoryのCache権限は変更していません。

### Versions

| Item | Version |
|---|---|
| macOS | 14.6 / arm64 |
| Node.js | 24.16.0 |
| npm | 11.13.0 |
| Vite | 8.3.2 |
| Astro | 7.3.5 |

Vite / AstroはSpike実施時の`latest`をTemporary Directoryだけへ導入しました。正式ProjectにはInstallしていません。

### Temporary Structure

```text
/tmp/portfolio-tech-spike/
├── common-data.json
├── plain/
├── plain-root/
├── vite/
│   ├── node_modules/
│   ├── dist/
│   └── dist-root/
├── astro/
│   ├── node_modules/
│   ├── dist/
│   └── dist-root/
└── npm-cache/
```

## Option A — Plain HTML

### Prototype

```text
plain/
├── index.html
├── works/
│   ├── index.html
│   ├── vista/index.html
│   ├── tsugi/index.html
│   └── tane/index.html
├── data/works.json
└── assets/
    ├── css/style.css
    └── js/works.js
```

### Result

- 全5 RouteをStatic Fileとして作成可能
- BuildなしでHTTP配信可能
- 各DetailのMetadataはStatic HTML内へ記述可能
- CSS、JavaScript、JSONをBase Path下から取得可能
- Semantic HTMLとAccessibilityを完全に制御可能

### Work Data

3つの候補を比較しました。

#### HTML手書き

- JavaScript不要
- CardとDetailが完全なStatic HTMLになる
- 一方、Work Card、Detail、Metadataへ同じDataを重複入力する

#### JSON

- 一覧CardのDataは1 Fileへまとめられる
- Browser JavaScriptでJSONをFetchし、Cardを生成できる
- 一覧がJavaScript依存になる
- Static Detail HTMLとMetadataはJSONから自動生成されない
- DataとDetail HTMLの内容を手作業で同期する必要がある

#### JavaScript Object

- JSONより関数・定数を扱いやすい
- Browser上のCard生成には使える
- BuildなしではStatic Detail Routeと`<head>`を生成できない

PrototypeではJSON + Client JavaScriptを採用しました。これは自然な完全解ではなく、Data共有とStatic HTML Metadataの間に分断が残ることを確認するためです。

### Templates and Components

Header、Footer、Project Hero、Project Info、Required Sectionは各HTMLへ重複しました。

Server-side includeや独自Generatorを追加しない限り、次をComponentとして再利用できません。

- Header
- WorkCardのStatic HTML
- ProjectHero
- ProjectInfo
- Footer

JavaScriptでComponentを生成すればMarkup重複は減りますが、Content表示がClient JavaScript依存になり、Metadata問題は残ります。

### Optional Modules

作品ごとに必要なSectionだけを手作業で配置できます。空Sectionは出ません。

ただし、Module名、順序、Heading、共通Markupの整合は各Detail HTMLで人が維持します。

### Build

Buildなしです。Source DirectoryがそのままPublish Directoryになります。

### Baseline Output — 3 Works

| Type | Size |
|---|---:|
| HTML | 6,212 B |
| CSS | 514 B |
| JavaScript | 389 B |
| JSON等 | 1,710 B |
| Total | 8,825 B |

WORKS一覧では389 BのJavaScriptに加え、1,710 BのJSON取得が必要です。完全手書きStatic HTMLへ戻せばJavaScriptを0 Bにできますが、Card Dataの重複管理が増えます。

### Base Path

`/portfolio-site/`で全Route、CSS、JavaScript、JSONがHTTP 200になることを確認しました。

必要な対応：

- HTML NavigationへBase Pathを反映
- CSS / JS / Image PathへBase Pathを反映
- Client JavaScript内のFetch URLへBase Pathを反映
- CanonicalへBase Pathを反映
- Nested 404用のPath設計

Build時の共通Configがないため、Base Pathを複数FileへHardcodeするとRoot Domain移行時の置換漏れが起こります。相対Pathを使う場合もNested Routeごとの階層差を管理する必要があります。

### Work Addition Cost

架空の4作品目`sample-project`を実際に追加しました。

| Operation | Result |
|---|---|
| `data/works.json`へData追加 | 必要 |
| `works/sample-project/index.html`作成 | 必要 |
| Detail Metadata記述 | 新しいHTML内で必要 |
| WORKS Card | JSONから自動表示 |
| Build設定 | 不要 |
| Template Copy | 必要 |

- **変更File:** 2
- **主な編集箇所:** JSON Data + Detail HTML全体
- **Template Copy:** あり
- **Metadata自動生成:** なし

完全Static Cardにする場合は、さらに`works/index.html`の編集が必要です。

### Assessment

初期理解とDebugは最も容易です。しかし10作品前後では、共通Markup、Metadata、Optional Module、Navigationの重複がMaintenance上の主要Riskになります。

## Option B — Vite

### Prototype

Framework Pluginは追加せず、Vanilla HTML / CSS / JavaScriptだけを使用しました。

```text
vite/
├── index.html
├── works/
│   ├── index.html
│   ├── vista/index.html
│   ├── tsugi/index.html
│   └── tane/index.html
├── assets/
│   ├── style.css
│   ├── works.js
│   └── works.json
├── vite.config.js
├── package.json
└── node_modules/
```

### Multi-page Input

各HTML Entryを`build.rollupOptions.input`へ明示しました。

```text
index.html
works/index.html
works/vista/index.html
works/tsugi/index.html
works/tane/index.html
```

### Result

- `vite build`成功
- Static HTMLを`dist/`へ出力
- CSSとJavaScriptをHash付きAssetへ変換
- Base Pathを`base`で設定可能
- `%BASE_URL%`をHTML NavigationとCanonicalの共通値へ利用可能
- JSONをJavaScriptへBundle可能

### Important Finding

**Vite単体では、作品DataからDetail Route、HTML、Metadata、Optional Moduleを自動生成しません。**

ViteはDev ServerとBuild Toolとして有効ですが、次は別途必要です。

- 各作品のHTML File
- Multi-page Input追加
- Detail Templateの複製
- Metadataの記述
- または独自Node Generator / Template Engine / Plugin

独自Generatorを追加すると、Viteだけを採用する単純さが薄れ、Generator自体の設計・Test・保守が必要になります。

### Work Data

`works.json`を`works.js`からImportし、WORKS CardをClient側で生成しました。

- 一覧Data共有は可能
- Build時にJSONがJavaScript Bundleへ含まれる
- Detail HTMLとMetadataはJSONから生成されない
- Static HTMLへCardを埋め込む標準Template機能はない

### Templates and Components

Vite + Vanillaだけでは、Header、Footer、ProjectHero、ProjectInfoをStatic Componentとして展開する標準機能はありません。

選択肢：

1. HTMLを複製する
2. Client JavaScriptで挿入する
3. Web Componentsを使う
4. 独自Generatorを作る
5. Template Pluginを追加する

2と3はClient JavaScript依存、4と5はBuild Complexity増加になります。Prototypeでは共通MarkupをHTMLへ複製しました。

### Optional Modules

Detail HTMLへ手作業で必要Sectionだけを配置しました。空Sectionは出ませんが、Dataの`optionalModules`とDetail HTMLは自動同期しません。

### Build

```text
npm run build
```

- **Output:** `dist/`
- **Build time:** 約0.1〜0.5秒の範囲
- **Static routes:** 5件生成
- **CSS:** Hash付き1 File
- **JavaScript:** Hash付き1 File

### Baseline Output — 3 Works

| Type | Size |
|---|---:|
| HTML | 5,832 B |
| CSS | 513 B |
| JavaScript | 2,259 B |
| Total | 8,604 B |

JavaScriptは主にWORKS DataとCard Renderingです。Vite Runtimeが大量に追加されたわけではありませんが、Static CardをDataからBuild-time生成する仕組みがないため、一覧表示にClient JavaScriptを使用しました。

### Base Path

`base: '/portfolio-site/'`とHTML内の`%BASE_URL%`を使い、全Route、CSS、JavaScriptがHTTP 200になることを確認しました。

Root Domain Testでは次を実行し、Source HTMLの個別置換なしで`/`へ切替できました。

```text
vite build --base=/ --outDir=dist-root
```

CanonicalはPrototype上で`https://example.com%BASE_URL%works/...`として確認しました。本番ではSite URL環境変数とProject Dataの組合せを標準化する必要があります。

### Work Addition Cost

`sample-project`を実際に追加してBuildしました。

| Operation | Result |
|---|---|
| `assets/works.json`へData追加 | 必要 |
| `works/sample-project/index.html`作成 | 必要 |
| `vite.config.js` Input追加 | 必要 |
| Detail Metadata | 新しいHTML内で必要 |
| WORKS Card | JSON Bundleから自動表示 |
| Template Copy | 必要 |

- **変更File:** 3
- **主な編集箇所:** Data + Detail HTML + Build Input
- **Template Copy:** あり
- **Build:** 成功
- **Metadata自動生成:** なし

ViteのHTML Entry検出を自動化するPluginまたはGlob ConfigでInput編集は減らせますが、Detail生成とMetadata問題は残ります。

### Assessment

Plain HTMLよりAsset Build、Dev Server、Base Path、Cache Bustingが改善します。一方、今回最も重い要件であるDetail Template、Project Data、Route、Metadata、Optional Moduleの管理はVite単体では解決しません。

## Option C — Astro

### Prototype

React、Vue等は導入していません。

```text
astro/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── src/
    ├── content.config.ts
    ├── content/works/
    │   ├── vista.md
    │   ├── tsugi.md
    │   └── tane.md
    ├── layouts/BaseLayout.astro
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── WorkCard.astro
    │   ├── ProjectHero.astro
    │   ├── ProjectInfo.astro
    │   └── OptionalModules.astro
    ├── pages/
    │   ├── index.astro
    │   └── works/
    │       ├── index.astro
    │       └── [slug].astro
    └── styles/global.css
```

### Result

- `astro build`成功
- Static HTMLを`dist/`へ出力
- `getStaticPaths()`で3作品Routeを生成
- Content CollectionのDataからCard、Detail、Metadataを生成
- Required / Optional Moduleを共通Componentで制御
- Static ComponentだけのBuildでGenerated JavaScript **0 B**
- CSSはHash付きStatic Assetへ出力
- Client Framework / Hydrationなし

### Content Collection

Astro 7のContent Layer APIを使用しました。

```text
src/content.config.ts
src/content/works/*.md
```

Schemaでは次を検証しました。

- title
- category
- type
- description
- year
- tags
- featured
- liveUrl / githubUrl
- optionalModulesの許可値

意図的に次のInvalid Entryを作成したところ、BuildはExit 1で停止しました。

- `title`欠落
- URL形式不正
- 未定義Optional Module

Error：`InvalidContentEntryDataError`

Invalid Fileを削除後、Buildが再び成功することを確認しました。

### Routing

`src/pages/works/[slug].astro`の`getStaticPaths()`がCollectionを読み、次を生成しました。

```text
dist/works/vista/index.html
dist/works/tsugi/index.html
dist/works/tane/index.html
```

Routeごとの手書きPageとBuild Input追加は不要です。

### Templates and Components

実際に次を再利用しました。

- `BaseLayout.astro`
- `Header.astro`
- `Footer.astro`
- `WorkCard.astro`
- `ProjectHero.astro`
- `ProjectInfo.astro`
- `OptionalModules.astro`

Header / Footer / Metadata / Detail Coreは1箇所で管理されます。HTML-likeな`.astro` Syntaxで、最終OutputはStatic HTMLです。

### Optional Modules

`optionalModules`配列を`OptionalModules.astro`へ渡し、存在するModuleだけを出力しました。

検証結果：

- VISTAだけにProduct UI / Accessibility / Performance / Challenges
- TSUGIだけにInformation Architecture
- taneだけにCopy
- 指定されていないModuleの空Sectionなし

### Metadata

`BaseLayout.astro`へ作品Dataを渡し、各作品で固有の次を生成しました。

- Title
- Description
- Canonical
- OGP Title
- OGP Description

Metadata Markupは1 Component、値は1 Content Entryで管理できます。

### Build

```text
npm run build
```

- **Output:** `dist/`
- **Build time:** 約1〜2秒
- **Static routes:** 5件生成
- **CSS:** Hash付き1 File
- **JavaScript:** 0 File / 0 B

### Baseline Output — 3 Works

| Type | Size |
|---|---:|
| HTML | 7,573 B |
| CSS | 513 B |
| JavaScript | **0 B** |
| Total | 8,086 B |

HTMLがViteより大きいのは、WORKS CardをBuild時にStatic HTMLへ展開しているためです。Browserは作品Data用JSONやCard生成JavaScriptを追加取得しません。

### Vanilla JavaScript

Astro ComponentにClient Directiveを付けなければHydration JavaScriptは生成されません。

必要になった場合は通常の`<script>`またはVanilla Moduleを使えます。

候補：

- Mobile Menu
- Optional Filter
- Small Interaction

React等のUI Frameworkを追加せず、必要なComponentだけへJavaScriptを限定できます。

### Astro Image Test

Temporary PNGを`src/assets`へ置き、Astroの`Image` ComponentをBuildしました。

確認結果：

- 100 × 60のSource寸法をOutputへ保持
- 50w / 100wのWebP Derivativeを生成
- `srcset`を生成
- `sizes`を維持
- `loading="lazy"`
- `decoding="async"`
- Base Path付きURLを生成

生成例：

```html
<img
  src="/portfolio-site/_astro/test...webp"
  srcset="/portfolio-site/_astro/test...webp 50w, /portfolio-site/_astro/test...webp 100w"
  sizes="(max-width: 600px) 50px, 100px"
  loading="lazy"
  decoding="async"
  width="100"
  height="60"
  alt="Test"
>
```

Test Asset / PageはTemporary環境から削除し、Baseline Buildへ戻しました。

### Base Path

設定：

```text
site: https://example.com/portfolio-site/
base: /portfolio-site
```

`import.meta.env.BASE_URL`と`Astro.site`からNavigation、Asset、Canonicalを生成し、全RouteとCSSがHTTP 200になることを確認しました。

Root Domain Testも実行しました。

```text
astro build --site=https://example.com/ --base=/ --outDir=dist-root
```

結果：

- Navigation：`/`
- Work Route：`/works/.../`
- CSS：`/_astro/...css`
- Canonical：`https://example.com/works/.../`

Source PageへBase PathをHardcodeせず切替できました。

### Work Addition Cost

`sample-project.md`を1 File追加し、再Buildしました。

| Operation | Result |
|---|---|
| Content Entry追加 | 必要 |
| Works Index編集 | 不要 |
| Detail Page作成 | 不要 |
| Route Input追加 | 不要 |
| Metadata追加 | Entry Dataだけ |
| Optional Module | Entry配列で指定 |
| Template Copy | 不要 |

- **変更File:** 1
- **主な編集箇所:** Content Entry 1件
- **Template Copy:** なし
- **Build:** 成功
- **Generated Route:** `/works/sample-project/`

### Assessment

今回のHigh PriorityであるMaintenance、Work Addition、Shared Templates、Metadata、Static Performanceを、独自Generatorなしで最も直接的に満たしました。

## Work Data

### Candidate A — TypeScript / JavaScript Data Array

#### Strength

- CardとMetadataへ同じObjectを渡しやすい
- Type定義が可能
- 小規模Dataでは簡潔

#### Limitation

- 長文Case StudyをStringまたは別Fileへ分ける必要がある
- Editor上で長文Markdownを扱う利点がない
- 1つの大きなArrayは作品数とともに読みにくくなる

### Candidate B — JSON

#### Strength

- Stack非依存
- Data交換が容易
- 一覧用途には単純

#### Limitation

- CommentやRich Bodyを持ちにくい
- Image ImportとSchema Integrationが弱い
- URL、Module名等のValidationを別途用意する必要がある

### Candidate C — Astro Content Collections

#### Strength

- 1作品1 File
- Frontmatter Schema Validation
- Markdown Body
- Card / Detail / Metadata / Routeを同じEntryから生成
- Tags / Optional Modules / URLを型付きで管理
- Image Schemaへ拡張可能
- 追加時に既存Fileを変更しない

#### Limitation

- Astro固有
- Schema設計の学習が必要
- Optional Moduleを複雑な万能SchemaへしすぎるRisk

### Candidate D — Markdown / MDX

MarkdownはContent CollectionのBodyとして適します。MDXはComponentを本文へ直接埋め込めますが、作品ごとに自由なComponent利用が増えるとTemplate統一性が下がります。

### Recommendation

**Astro Content Collections + Markdownを推奨します。MDXは初期版では使用しません。**

- Frontmatter：Card、Metadata、Project Info、Tags、Optional Module ID
- Markdown Body：Overview、Problem、Approach等の長文
- Astro Component：共通Visual ModuleとLayout
- `src/assets` Image：SchemaまたはImportで参照

必要になった場合だけ、Module Data用の小さな型付きObjectを追加します。最初から全Sectionを複雑なDiscriminated Unionへしません。

## Routing

| Requirement | Plain | Vite | Astro |
|---|---|---|---|
| Static route | File配置 | HTML Entry | `getStaticPaths()` |
| `/works/[project]/` | 作品ごとにDirectory作成 | Directory + Input追加 | Content Entryから生成 |
| Works Index | 手書きまたはClient JS | 手書きまたはClient JS | CollectionからStatic生成 |
| 追加時のRoute設定 | 必要 | 必要 | 不要 |
| Unknown slug | Server / 404依存 | Static 404 | Generated route以外は404 |

## Templates

| Component | Plain | Vite | Astro |
|---|---|---|---|
| Header | HTML重複 | HTML重複 | `Header.astro` |
| WorkCard | 手書きまたはClient JS | Client JS候補 | `WorkCard.astro` |
| ProjectHero | HTML重複 | HTML重複 | `ProjectHero.astro` |
| ProjectInfo | HTML重複 | HTML重複 | `ProjectInfo.astro` |
| Footer | HTML重複 | HTML重複 | `Footer.astro` |
| Metadata | 各Page | 各HTML Entry | `BaseLayout.astro` |

ViteはBuild Toolであり、Vite単体ではStatic HTML Component Systemになりません。

## Optional Modules

### Required Core

- Hero
- Project Info
- Problem
- Approach
- Responsive
- Scope
- Links

### Optional

- Product UI
- Information Architecture
- Performance
- Accessibility
- Challenges
- Branding
- Copy
- Interaction

### Findings

- **Plain:** 手作業で非表示。空Sectionなし。ただし各Fileの整合を人が管理
- **Vite:** Plainと同じ。JSON DataとStatic Detailが自動同期しない
- **Astro:** Entry DataからComponentが条件出力。空Sectionなし。許可Module名をSchema検証

## Metadata

### Ten-work Maintenance

#### Plain

各Detail HTMLの`head`を編集します。共通Format変更時は約10 Fileを更新します。

#### Vite

各HTML Entryの`head`を編集します。Viteは値の共通化やData生成を自動では行いません。共通Format変更時は約10 Fileを更新します。

#### Astro

Formatは`BaseLayout.astro` 1 File、値は各Content Entryで管理します。共通Format変更は1 File、作品追加はEntry 1 Fileです。

### Duplicate Risk

AstroではCard / Detail / Metadataが同じEntryを参照するため、TitleやDescriptionの不一致を減らせます。

## JavaScript

| Option | Baseline generated / served JS | Finding |
|---|---:|---|
| Plain | 389 B + JSON 1,710 B | JSONからCard生成。完全手書きなら0 Bだが重複増加 |
| Vite | 2,259 B | Work DataとCard RenderingをBundle |
| Astro | **0 B** | Static ComponentとCollectionだけではClient JSなし |

Astroを採用しても、PortfolioにClient Frameworkを入れる理由はありません。Mobile Menu等はVanilla JavaScriptで実装できます。

## Images

### Plain

- `img` / `picture` / `srcset`を手作業
- `width` / `height`、Lazy Loadingを完全制御
- Optimization Pipelineは別Script / Toolが必要
- Asset候補：`assets/images/works/[slug]/`

### Vite

- ImportしたAssetのHash化
- `public/`はそのままCopy
- Vite CoreだけではResponsive Derivativeや`srcset`を自動生成しない
- Pluginまたは事前変換が必要
- Asset候補：`src/assets`相当の管理Directory、または`public/images/works/[slug]/`

### Astro

- `src/assets/images/works/[slug]/`でAstro Image Pipelineを利用可能
- `Image` / `Picture`でDerivative、Format、寸法、`srcset`を生成可能
- `public/`は最適化しないStatic File用
- 素の`img` / `picture`も使用可能
- VISTA等の正式Derivativeを再変換したくない場合は、用途に応じて素の`picture`または`public`を選べる

### Proposed Asset Rule

- **`src/assets/images/works/[slug]/`:** Portfolio用Thumbnail、Hero、Responsive Derivative生成対象
- **`public/`:** favicon、download、変換禁止File、既に最適化済みでExact Pathが必要なFile
- 個別Project Sourceを直接参照しない
- 実装時に必要Assetだけを正式Copyする

## Base Path

### Tested Project Site

```text
/portfolio-site/
```

全OptionでTOP、WORKS、3 Detail、CSS、JavaScript / JSONまたはAstro CSSをHTTP 200で確認しました。

### Plain

共通Build Configがないため、HTML、JavaScript、CanonicalのPathを規約で管理します。Root Domain移行時は相対Path設計または複数Fileの置換が必要です。

### Vite

`base`と`%BASE_URL%`でAsset / Navigationを切替できます。Canonical Site Originは環境変数等を別途設計します。

### Astro

`base`、`site`、`import.meta.env.BASE_URL`、`Astro.site`でNavigation、Asset、Canonicalを同じConfigから生成できます。

### Root Domain

ViteとAstroはBuild Option変更だけでRoot Outputを生成できました。PlainはSpike Copy内のHard-coded Baseを置換しました。

### Rule

Base PathをPage Componentへ文字列で分散させず、StackのConfigとURL Helperを正本にします。

## GitHub Pages

| Item | Plain | Vite | Astro |
|---|---|---|---|
| Static output | Sourceそのもの | `dist/` | `dist/` |
| Build | 不要 | 必要 | 必要 |
| GitHub Actions | 不要候補 | 推奨 | 推奨 |
| Base Path | 手動設計 | `base` | `base` + `site` |
| 404 | 手作業 | Static 404をSourceへ用意 | `404.astro`候補 |
| Sitemap | 手作業 / Script | Plugin / Script | IntegrationまたはStatic生成 |
| robots | 手作業 | `public`等 | `public`等 |
| Custom Domain | 対応可 | 対応可 | 対応可 |

Vite / AstroはBuild OutputをDeployするGitHub Actionsが必要です。実Deployは今回行っていません。

## Netlify

| Item | Plain | Vite | Astro |
|---|---|---|---|
| Build command | なし | `npm run build` | `npm run build` |
| Publish directory | Prototype Root | `dist` | `dist` |
| Deploy Preview | 対応 | 対応 | 対応 |
| Custom Domain | 対応 | 対応 | 対応 |
| Netlify Forms | HTML Formで候補 | Static HTMLで候補 | Static HTML Outputで候補 |

Contactだけを理由にStackを決定しません。

- `mailto:`：全Optionで可能
- External Form：全Optionで可能
- Netlify Forms：Netlifyを採用した場合に全Optionで検討可能
- Server-side Form：Hosting / Privacy / Spam対策を別途判断

## Work Addition Simulation

`sample-project`を実際に各Prototypeへ追加しました。

| Item | Plain | Vite | Astro |
|---|---:|---:|---:|
| 変更File | 2 | 3 | **1** |
| Data追加 | JSON | JSON | Markdown Entry |
| Detail HTML | Copyして編集 | Copyして編集 | 自動生成 |
| Build Input | 不要 | 追加 | 不要 |
| Metadata | Detailへ手書き | Detailへ手書き | Entryから生成 |
| Works Card | Client JSで自動 | Client JSで自動 | Build時にStatic生成 |
| Template Copy | あり | あり | **なし** |
| Optional Module | HTML編集 | HTML編集 | Entry配列 |
| Schema Validation | なし | なし | **あり** |

### Final Simulation Output — 4 Works

| Option | HTML | CSS | JS | Other | Total |
|---|---:|---:|---:|---:|---:|
| Plain | 7,637 B | 514 B | 389 B | 2,131 B JSON等 | 10,671 B |
| Vite | 7,098 B | 513 B | 2,552 B | 0 B | 10,163 B |
| Astro | 9,175 B | 513 B | **0 B** | 0 B | **9,688 B** |

厳密Benchmarkではなく、同じ最小Contentに対する構造差の確認値です。

## Generated Output

### Plain

```text
index.html
works/index.html
works/[slug]/index.html
assets/css/style.css
assets/js/works.js
data/works.json
```

### Vite

```text
dist/index.html
dist/works/index.html
dist/works/[slug]/index.html
dist/assets/style-[hash].css
dist/assets/index-[hash].js
```

### Astro

```text
dist/index.html
dist/works/index.html
dist/works/[slug]/index.html
dist/_astro/BaseLayout.[hash].css
```

Astro BaselineにJavaScript Fileはありません。

## Type Safety

### Plain / Vite

JSON Fieldが欠落しても、専用Validationを追加しなければBuildまたは配信前に検出できません。ViteのJSON ImportだけではPortfolio Schemaになりません。

### Astro

Content Collection Schemaで次をBuild前に検出できます。

- Required Field欠落
- URL形式不正
- Optional ModuleのTypo
- Tagsの型不正
- featuredのBoolean不正

### Value

10作品のCard / Detail / Metadataを共通Dataから生成するため、軽量なSchema Validationには価値があります。

ただし、Schemaは掲載に必要なFieldへ限定し、TypeScriptの高度なGenericsや複雑な抽象化は導入しません。

## Learning Cost

### Plain HTML

- **学習時間:** 最小
- **Debug:** BrowserとFileだけで容易
- **HTML / CSSとの距離:** 最短
- **面接説明:** 容易
- **完成速度:** 初期は最速、作品追加で遅くなる

### Vite

- **学習時間:** 低〜中
- **Debug:** Dev ServerとBuild Outputを理解すれば容易
- **HTML / CSSとの距離:** 近い
- **面接説明:** Asset BuildとBase Pathの理由を説明可能
- **完成速度:** Plainに近いが、Detail重複は残る

### Astro

- **学習時間:** 中
- **Debug:** Collection、Build、Route、Component境界の理解が必要
- **HTML / CSSとの距離:** `.astro`は近いが、FrontmatterとBuild Stepが増える
- **面接説明:** 作品数、Static Route、Template、Metadataの保守理由として説明可能
- **完成速度:** 初期Setupは遅いが、作品追加は最速

Framework学習を作品より前へ出さず、採用理由を「10作品のStatic Case Study管理」に限定します。

## Evaluation Matrix

5が今回の要件に最も適合する評価です。

| Criterion | Plain | Vite | Astro |
|---|---:|---:|---:|
| Initial simplicity | **5** | 4 | 3 |
| Work data management | 2 | 2 | **5** |
| Shared templates | 1 | 2 | **5** |
| Dynamic static routes | 1 | 1 | **5** |
| Metadata management | 2 | 2 | **5** |
| Optional modules | 2 | 2 | **5** |
| Image handling | 3 | 3 | **5** |
| Base path handling | 2 | 4 | **5** |
| GitHub Pages | **5** | 4 | 4 |
| Netlify | 4 | **5** | **5** |
| JS overhead | **5** | 3 | **5** |
| Static performance | **5** | 4 | **5** |
| Accessibility freedom | **5** | **5** | **5** |
| Maintenance | 2 | 2 | **5** |
| Work addition | 2 | 2 | **5** |
| Learning cost | **5** | 4 | 2 |
| Debuggability | **5** | 4 | 3 |

### Reasons by Priority

#### High Priority

- **Maintenance:** Astroは共通Layout / Component / Collectionで1箇所管理。PlainとViteはDetail HTML重複
- **Work addition:** 実測でPlain 2 File、Vite 3 File、Astro 1 File
- **Shared templates:** Astroは標準機能。Vite単体はTemplate Systemではない
- **Metadata:** AstroはLayout + Entry。Plain / Viteは各HTML
- **Static performance:** AstroはStatic HTML + 0 B JS。Plainも可能だがData共有と両立しにくい

#### Medium Priority

- **Initial simplicity:** Plainが優位
- **Image handling:** Astro Image Pipelineが優位。ただし既存Derivativeは素の`picture`も選べる
- **Base path:** Astroの`site` + `base`がNavigation / Asset / Canonicalをまとめやすい
- **Learning cost:** Astroが最も高い

#### Low Priority

- Framework Ecosystemは選定理由にしていない
- Complex Interactionは今回の中心要件ではない

単純合計ではなく、High PriorityでAstroが大きく優位なことをDecisionの根拠にします。

## Recommendation

**Option C — Astroを推奨し、正式Decision候補とします。**

### Why Astro Instead of Vite

ViteもAstro内部のBuild Toolとして優秀ですが、Vite単体では今回のContent Architectureを解決しません。

| Requirement | Vite | Astro |
|---|---|---|
| Detail Template | HTML Copyまたは独自Generator | `[slug].astro` 1 File |
| Project Data | JSONをClient Bundleへ利用可能 | Content CollectionをBuild時利用 |
| Route | HTML File + Input | `getStaticPaths()` |
| Metadata | 各HTMLまたは独自処理 | Layout + Entry |
| Optional Module | HTML手作業 | Schema付きDataから条件表示 |
| Work追加 | 3 File | 1 Content Entry |

Viteへ独自Node Generatorを追加すれば近い結果を作れます。しかし、そのGenerator、Template、Validation、Route、Metadata処理を自分で保守するなら、Static Content Site向けの仕組みを持つAstroを最小構成で使う方が単純です。

### Recruiter Perspective

Astro名自体を実績として強調しません。採用担当に見せる価値は次です。

- 作品が読みやすい
- Static HTMLで安定している
- Responsive
- Accessibility
- Performance
- 作品追加時にも情報が不整合になりにくい

## Proposed Stack

Technical Spikeに基づく正式候補です。ProjectへのInstallはまだ行いません。

| Role | Proposal |
|---|---|
| Framework / SSG | Astro 7系。Scaffold時点の安定版をLock |
| Language | HTML-like Astro / CSS / Vanilla JavaScript |
| TypeScript | Content Schemaと必要なData型に限定 |
| Content | Astro Content Collections + Markdown |
| MDX | 初期版では不採用 |
| Client Framework | なし |
| Client JavaScript | Mobile Menu等の必要箇所だけVanilla JS |
| Package Manager | npm |
| Build | `astro build` / Static Output |
| Work Routes | `src/pages/works/[slug].astro` + `getStaticPaths()` |
| Shared UI | Astro Layout / Components |
| Images | `src/assets` + Astro Image、または意図的な素の`picture` |
| Static Files | `public/`を用途限定で使用 |

## Design System Impact

次工程でDesign Systemを定義する場合の自然な配置案です。まだ作成しません。

```text
src/
├── styles/
│   ├── tokens.css
│   ├── foundation.css
│   ├── layout.css
│   └── components.css
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── WorkCard.astro
│   ├── ProjectHero.astro
│   └── ProjectInfo.astro
├── layouts/
│   ├── BaseLayout.astro
│   └── WorkLayout.astro
└── content/works/
```

- CSS Variables：Color、Type、Spacing、Grid、Radius、Motion
- Layout：Container、Section、Readable Text Width
- Components：Header、Footer、Button、Tag、Work Card、Figure
- Responsive：Content-based Breakpointと共通Media Query
- Detail Template：Required Core + Optional Module

正式StructureはScaffoldとDesign System工程で確定します。

## Risks

### 1. Learning Cost

Astro Content Collections、`getStaticPaths()`、`site` / `base`、Image Pipelineを理解する必要があります。

**Mitigation:** Client Frameworkを入れず、最初はTOP / WORKS / 1 Dummy DetailだけでFoundationを確認します。

### 2. Over-abstraction

Optional Moduleを万能Schemaへすると、作品ごとのContent表現が不自然になります。

**Mitigation:** Required Fieldは少数、Optional Moduleは明確なTypeだけにし、長文はMarkdown Bodyで管理します。

### 3. Base Path

Absolute Root PathをComponentへ直接書くと、GitHub Pages Project Siteで破綻します。

**Mitigation:** `site`、`base`、`import.meta.env.BASE_URL`、URL Helperを正本にし、Project Site / Root Domainの両BuildをQAします。

### 4. Image Double Optimization

VISTA等の既存DerivativeをAstro Imageで再変換すると、画質や容量が悪化する可能性があります。

**Mitigation:** Source AssetごとにAstro Image、素の`picture`、`public`を選び、Master / Production Derivativeを区別します。

### 5. Version Change

SpikeはAstro 7.3.5で実施しました。正式Scaffold時にVersionが変わる可能性があります。

**Mitigation:** Scaffold時の安定版をLockし、Content APIとBuildを再確認します。

### 6. Hosting Undecided

GitHub Pages / Netlifyはどちらも適合しますが、ContactとDomainは未決定です。

**Mitigation:** StackとHostingを分離し、Static OutputとBase Pathの両方を維持します。

## Decision

### Stack Decision

**C — AstroをPortfolio本体の正式Tech Stack候補として採用します。**

正式ProjectへInstallする前に、本書をDecision Recordとして確認し、次工程のScaffoldでVersion Lockと最小Foundationを作成します。

### Decision Basis

- 3作品でStatic Route、Metadata、Optional Moduleを実生成できた
- Static Astro ComponentだけではClient JS 0 Bだった
- 4作品目を1 Content Entryだけで追加できた
- Invalid ContentをSchemaでBuild時に拒否できた
- GitHub Pages Base PathとRoot Domainの両Buildを確認できた
- Vite単体にはないStatic Template / Route / Content機能が今回の要件に直接対応した

### Not Decided Here

- Hosting
- Custom Domain
- Contact方式
- Design System
- Production Asset
- Thumbnail
- Deployment Workflow

## Recommended Next Step

**次は「Portfolio正式Tech Stack Decisionの記録 → Project Scaffold」を先に行うことを推奨します。まだ実行しません。**

理由：

1. Design Systemの置場とComponent境界はAstroの正式Structureへ合わせる必要がある
2. `site` / `base`、Content Collection、Route、Build OutputをProject Foundationとして先に固定できる
3. Scaffold後ならDesign Systemを正式Repository内の正しいDirectoryへ定義できる
4. Temporary Spikeの依存関係やSourceをそのまま本番へCopyせず、承認済みDecisionから最小構成を作り直せる

次工程でも、いきなり作品実装へ進まず、Decision Record、Version Lock、Minimal Route、Build / Base Path確認までを範囲とします。
