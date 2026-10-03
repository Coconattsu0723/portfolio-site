# Portfolio Host Audit

> **Historical Note:** 本書は正式Portfolio Hostが存在しないことを確認し、新規Project立ち上げを判断した監査記録です。Portfolio Project作成後も経緯の記録として維持します。
>
> **Status: Portfolio Host Audit / Pre-implementation**
>
> **Audit Result: BLOCKED — 確認範囲内に正式Portfolio Siteは存在せず、Portfolio Host自体が未作成**

VISTAを複数作品をまとめる本人Portfolio Siteへ接続する前に、Portfolio本体のRepository、Design System、既存Component、Routing、Deploymentを確認するための監査記録です。

今回は監査のみとし、Portfolio本体はRead Only、VISTA側では本書だけを新規作成しています。VISTA詳細ページのPencil Design、HTML / CSS / JavaScript実装、Asset追加、既存Portfolioの修正は行っていません。

## Audit Sources

VISTA側の正式仕様として、次の4ファイルを全文確認しました。いずれも変更していません。

1. `03_Docs/PORTFOLIO_DETAIL_PAGE_SPEC.md`
2. `03_Docs/PORTFOLIO_IMPLEMENTATION_PLAN.md`
3. `03_Docs/PORTFOLIO_SHORT_COPY.md`
4. `03_Docs/PORTFOLIO_CASE_STUDY.md`

確認した主な探索範囲は次のとおりです。

- `/Users/natsumikato/Documents/ポートフォリオ/`
- `/Users/natsumikato/Documents/`
- `/Users/natsumikato/Desktop/`
- `/Users/natsumikato/Downloads/`
- `/Users/natsumikato/`以下のGit Root（`Library`、`node_modules`等を除外）
- GitHub User `Coconattsu0723`の公開Repository一覧

Project名だけでは判定せず、Git Root、Remote、Root File、HTML Title、`package.json`、`src/`、`works/`、`projects/`、README、複数作品をまとめる構造の有無を確認しました。

## Portfolio Root

### Result

**正本未特定。確認範囲内に正式Portfolio Siteは存在しません。**

`/Users/natsumikato/Documents/ポートフォリオ/`以下にはVISTAを含む個別作品Projectが複数ありますが、複数作品をまとめる本人Portfolio SiteのProject Rootは存在しませんでした。単に既存Portfolioを見つけられなかったという記録ではなく、Localの主要探索範囲とGitHub公開Repositoryを確認した結果、正式Hostを特定できず、Portfolio本体は未作成と判断した監査結果です。

### Confirmed collection directory

- **Path:** `/Users/natsumikato/Documents/ポートフォリオ/`
- **内容:** VISTA、michi、nolla、SEN、soto、tane、TSUGI、tsumugi、yori等の個別作品Project群
- **判定:** Portfolio作品を保管する親Directoryであり、Portfolio本体のProject Rootではない
- **理由:** 親Directory自体に単一の`.git`、Portfolio共通`index.html`、`package.json`、共通`src/`、Works一覧、作品詳細Routeがない

### Candidate 01 — Rejected as canonical host

- **Path:** `/Users/natsumikato/Downloads/PortfolioWeb_sample`
- **Repository:** なし（`.git`なし）
- **内容:** Bootstrap 4.4.1、jQuery、Popperを含む1ページの学習用Sample
- **Entry:** `docs/index.html`
- **Title:** `ポートフォリオサイト`
- **表示内容:** `SAKURAのポートフォリオ`、`ポートフォリオサイトの例です`等のSample CopyとPlaceholder Image
- **Route:** 1ページのみ。Navigationと作品Linkは`href="#"`
- **正本候補に見える理由:** Directory名に`PortfolioWeb`があり、複数の作品Placeholderを持つ
- **不採用理由:** 本人の正式情報、実作品、Project Detail Route、Git Repository、Deployment設定、運用中のDesign Systemがなく、明示的にSampleである

### Candidate 02 — Rejected as canonical host

- **Path:** `/Users/natsumikato/Documents/ポートフォリオ/nolla_lp_project/04_exports/portfolio`
- **Repository:** 親Projectは`nolla-craft-granola`、当該Directory単体のRepositoryではない
- **内容:** `.gitkeep`のみ
- **正本候補に見える理由:** Directory名が`portfolio`
- **不採用理由:** Portfolio SiteのSource、Page、Component、Asset、設定が存在しない

### GitHub confirmation

GitHub User `Coconattsu0723`の公開Repository一覧には、VISTAと個別作品Repositoryは存在しますが、複数作品をまとめる正式Portfolio Repositoryは存在しませんでした。Local確認結果と合わせ、Portfolio Hostは未作成と判断します。

確認できた個別作品Repository例：

- `vista-progress-saas`
- `oler_nagoya`
- `tsugi-onsen-hotel`
- `tane-brand-partner-lp`
- `soto-storage-lp`
- `michi-paper-driver-lp`
- `yori-lp`
- `sen-personal-pilates-lp`
- `tsumugi-lp`
- `nolla-craft-granola`

## Repository / Deployment

Portfolio本体が未作成で正式Repositoryも未特定のため、次の項目は存在しないか未確定です。

- Project Root
- `git status`
- Branch
- `remote -v`
- Latest Commit
- GitHub Repository
- Production URL
- Deployment方式

`PortfolioWeb_sample`には`.git`がなく、正式Repositoryとして扱っていません。個別作品RepositoryのGit情報をPortfolio本体へ流用することもしていません。

## Tech Stack

### Portfolio host

未確認です。正本の設定Fileがないため、次を判定していません。

- Static HTML
- Vite
- React
- Next.js
- Astro
- その他Framework
- Package Manager
- Build Tool
- Bundler

### Rejected sample reference

`PortfolioWeb_sample`はStatic HTML + CSS + Bootstrap 4.4.1 + jQuery 3.4.1 + Popperですが、SampleでありPortfolio本体のTech Stackとして採用できません。

## Directory Structure

Portfolio本体の正本構造は未確認です。

次の正式配置は決定していません。

- Entry Page
- `pages/`
- `works/`
- `projects/`
- `components/`
- `assets/`または`public/`
- CSS / JavaScript
- Images
- Docs

個別作品Projectの構造をPortfolio本体の構造として推測・転用しません。

## Routing

Portfolio本体のRoute構造は未確認です。

| Route role | Status |
|---|---|
| TOP | 未確認 |
| WORKS一覧 | 未確認 |
| Project Detail | 未確認 |
| ABOUT | 未確認 |
| CONTACT | 未確認 |
| 404 | 未確認 |

VISTAのDetail Routeについて、`/works/vista/`、`/projects/vista/`、`/work/vista.html`等の方式は決定していません。既存作品詳細PageのURL形式を確認するまで新規Route方式を採用しません。

## Design System

Portfolio本体が未作成のため、正式Design Systemは未存在 / 未確認です。以下の値をVISTA側から補完したり、`PortfolioWeb_sample`から流用したりしません。

### Color

未確認：

- Background
- Text
- Muted
- Border
- Accent
- Primary
- Surface
- Focus

VISTA Blueは作品内容のAccentとしてのみ使用可能ですが、Portfolio Background、Heading、Button、Tag、Header、Footerの色はPortfolio本体のTokenを正本とします。

### Typography

未確認：

- Font Family
- Heading Scale
- Body Size
- Caption Size
- Font Weight
- Line Height
- Letter Spacing

VISTAで使用するInter / Noto Sans JPを、Portfolio本体のGlobal Typographyへ自動的に採用しません。

### Spacing

未確認：

- Section spacing
- Container side padding
- Component gap
- Mobile side padding
- Vertical rhythm

### Grid

未確認：

- Container `max-width`
- Desktop columns
- Grid gap
- Side padding
- Content width
- Text measure
- Full-width visual rule

VISTA Detail Specの2columnは仮案です。Portfolio本体が1columnまたは別のGridを採用している場合はPortfolio側を正本とします。

### Radius

未確認：

- Card radius
- Button radius
- Image radius
- Tag radius

### Shadow

使用有無、Token、適用対象は未確認です。VISTA Product UI画像自体が持つShadowと、Portfolio側のContainer Shadowを重ねる判断はしていません。

## Header / Footer

### Header

未確認：

- Logo
- Global Navigation
- Mobile Menu
- Current表示
- Header CTA
- Sticky / Fixed behavior
- Keyboard behavior

### Footer

未確認：

- Structure
- Internal links
- External links
- Social links
- Copyright

VISTA Detail Page専用のHeader / Footerは作成しません。正本特定後、既存MarkupまたはComponentを必ず再利用します。

## Work Card

既存の正式Work Cardは確認範囲内に存在せず、2〜3件の比較監査は実施できませんでした。Portfolio本体の企画時に共通Systemとして新たに定義する必要があります。

未確定項目：

- Image ratio
- Category
- Title
- Description
- Tag数と表示形式
- Link範囲
- Hover
- Card高さ
- CTA
- Desktop列数
- Mobile列数

`PortfolioWeb_sample`の正方形Placeholder Gridは正式Work Cardではないため、VISTA Cardの基準に使用しません。

## Detail Page

既存の正式作品詳細PageとDetail Page Templateは確認範囲内に存在せず、1〜2件の全文監査は実施できませんでした。Portfolio本体の企画・情報設計後に共通Templateとして定義する必要があります。

未確定項目：

- Hero
- Breadcrumb
- Project Info
- Main Visual
- Section Header
- Text Width
- Full-width Image
- 2column
- Caption
- Tags
- Related Works
- Final CTA
- Header / Footer

VISTA専用Templateを先行して決定しません。

## Components

Portfolio本体で再利用可能なComponentは未確認です。

確認待ち：

- Header / Mobile Navigation
- Footer
- Container
- Section Header
- Work Card
- Project Hero
- Project Info
- Primary / Secondary Button
- Text Link / External Link
- Tag / Badge
- Figure / Caption
- Full-width Image
- 2column Section
- Numbered Points / Process
- Accordion / Native `details`
- Related Works
- Final CTA

## Button

Portfolio本体のPrimary、Secondary、Text Link、External Linkの仕様は未確認です。

VISTAのLive Demo / GitHub CTAは、正本特定後に既存Buttonを再利用します。Size、Radius、Icon、Hover、Focus、External Link表示を新規決定しません。

## Tag / Badge

Portfolio本体のTag Systemは未確認です。

VISTAのCard用6 Tags、Detail用8 TagsはCopyとして確定していますが、表示数、順序、折返し、色、Radius、Link有無は既存Systemへ合わせます。新しいTag Styleは作成しません。

## Image Style

Portfolio本体の作品画像Styleは未確認です。

未確定項目：

- `aspect-ratio`
- `object-fit`
- Background
- Border
- Radius
- Shadow
- Full bleed
- Caption
- Responsive source policy
- Lazy / Eager loading policy

## Responsive

Portfolio本体の正式Breakpointは未確認です。

VISTAの制作・検証基準である375 / 390 / 430 / 600 / 768 / 900 / 1000 / 1024 / 1366 / 1440pxは、Portfolio本体のBreakpoint定義ではありません。Portfolio詳細PageはHost側のMobile / Tablet / Desktop Ruleに従います。

## Accessibility

Portfolio本体の実装基準は未確認です。

確認待ち：

- Skip Link
- `:focus-visible`
- Heading hierarchy
- Image `alt`
- Navigation landmark
- Mobile MenuのKeyboard操作
- Current page表示
- Reduced Motion
- External Link通知
- Native `details`

VISTA Detail Pageでは、Hostの既存基準を満たした上で、VISTA仕様のHeading、Alt、descriptive link、DOM順、Native `details`要件を適用する必要があります。

## Metadata / SEO

既存作品DetailのMetadata生成方法は未確認です。

未確定項目：

- `title`
- `description`
- Canonical
- OGP
- Twitter Card
- Favicon
- Static markup / Template / JavaScript generation
- Site name
- Production base URL

VISTA公開サイトのCanonical、Site Name、MetadataをPortfolio本体へ流用しません。VISTA Detail SpecのTitle / Descriptionは候補Copyとして保持し、Hostの既存生成方式へ合わせます。

## Asset Structure

Portfolio本体の作品Asset格納先は未確認です。

正式格納候補は、Host確認後に既存規則から選びます。例示Pathを新規規則として採用しません。

- `assets/images/works/`
- `assets/images/projects/`
- `public/images/works/`
- `public/images/projects/`

現時点ではVISTA AssetをCopy、Move、Rename、Resizeしていません。

## External Link

Portfolio本体のExternal Link仕様は未確認です。

確認待ち：

- `target`
- `rel`
- External icon
- Accessible name
- New tab通知
- Focus style

接続予定Link：

- Live Demo: `https://coconattsu0723.github.io/vista-progress-saas/`
- GitHub: `https://github.com/Coconattsu0723/vista-progress-saas`

Hostの既存方式を確認するまで、`target="_blank"`等を独自に決定しません。

## VISTA Card Mapping

### Copy

VISTA側の正式Copyは確定済みです。

- Title: `VISTA｜制作会社向け進捗可視化SaaS`
- One-line: `制作進行の「止まり」を可視化する、制作会社向けSaaSサイト`
- Description: `PORTFOLIO_SHORT_COPY.md`のOfficial Card Description
- Priority Tags: BtoB SaaS / Multi-page / Product UI / Responsive / HTML / CSS / JavaScript

### Existing pattern mapping

HostのWork Cardが未確認のためMapping未完了です。

| VISTA item | Existing pattern / component | Reuse | Adjustment |
|---|---|---|---|
| Card root | 未確認 | 判定不可 | 既存CardのLink範囲と高さへ合わせる |
| Thumbnail | 未確認 | 判定不可 | 既存Image ratio確認後に判断 |
| Category | 未確認 | 判定不可 | 既存Category表記へ合わせる |
| Title | 未確認 | 判定不可 | 既存Heading階層へ合わせる |
| Description | 未確認 | 判定不可 | 既存行数・省略Ruleへ合わせる |
| Tags | 未確認 | 判定不可 | 既存Tag Systemを再利用 |
| CTA | 未確認 | 判定不可 | 既存Card CTAがある場合のみ使用 |

## VISTA Thumbnail Fit

### Final classification

**判定保留 — A / B / Cを確定できません。**

対象Asset：

- `05_Assets/images/ogp/VISTA_OGP_DEFAULT.png`
- 1200 × 630px
- Aspect Ratio: 40:21（約1.90:1）

Work Cardの正式Image Ratio、Crop Policy、`object-fit`、Background、文字入りThumbnailの使用方針が未確認のため、A / B / Cのいずれかを根拠付きで選べません。

判定条件：

- **A:** Host Cardが約1.90:1で、文字入り画像と`contain`を許容
- **B:** Host Card比率が異なるが、既存Wrapperと`contain`、余白調整で全体表示可能
- **C:** Hostが固定Cropを要求し、OGP内のLogo、Copy、Product UIを欠損せず収められない

今回は画像制作を行っていません。

## VISTA Detail Hero Fit

対象Asset：

- Desktop: `VISTA_HERO_PRODUCT_MOCKUP_1280.png` — 1280 × 800px、8:5
- Mobile: `VISTA_HERO_PRODUCT_MOCKUP_800.png` — 800 × 500px、8:5
- Alpha: あり
- Fit: `contain`
- Crop: 禁止

Host HeroのContainer、Background、Width、1column / 2column、Mobile順序が未確認のため、配置方法は未確定です。

接続時の必須条件：

- Portfolio側の既存Surface上へ配置
- 8:5を維持
- Crop / Stretchしない
- Desktop / Mobileで適切なSourceを選択
- Above-the-foldの場合はHostの既存方針に従いEager候補
- VISTA OGPをDetail Heroへ流用しない

## Existing Section Pattern

Host側の既存Section Patternは存在しないため、再利用判定はできません。Portfolio本体の共通Patternを先に企画し、その後にVISTA Sectionを接続します。

確認対象：

- Intro
- 2column text
- Feature row
- Full-width image
- Grid
- Numbered points
- Process
- Accordion / `details`
- CTA
- Related Works

## VISTA Detail Mapping

Host Component未確認のため、以下はVISTAの必要構造と接続先の確認項目を示す暫定Mappingです。新規Componentの決定ではありません。

| VISTA Section | Existing Pattern / Component | Reuse可否 | Adjustment |
|---|---|---|---|
| Project Hero | 未確認 | 判定不可 | Host Heroを優先。Title、Disclosure、CTA、8:5 Visualを適合 |
| Problem / Solution | 未確認 | 判定不可 | 既存比較またはText Sectionへ接続。Product UIは先出ししない |
| Production Points | 未確認 | 判定不可 | 既存Numbered / Process Patternがあれば再利用 |
| Information Architecture | 未確認 | 判定不可 | 既存Process / Diagram Patternを優先。新規図版は作らない |
| Product UI | 未確認 | 判定不可 | 既存Figure / Feature Row / Full-width Imageを優先。Crop禁止 |
| Design Approach | 未確認 | 判定不可 | 既存2column / Editorial Sectionへ接続 |
| Responsive Design | 未確認 | 判定不可 | 既存Comparison / Figure Patternを優先 |
| Implementation & Accessibility | 未確認 | 判定不可 | 既存Text + List / 2columnへ接続 |
| Performance | 未確認 | 判定不可 | 既存Process Patternの有無を先に確認 |
| Challenges & Solutions | 未確認 | 判定不可 | 既存Card / Case-study block / `details`を優先 |
| Project Scope | 未確認 | 判定不可 | 既存Project Info / Definition Listを優先 |
| Final CTA / Links | 未確認 | 判定不可 | Host Final CTAとButtonを再利用 |

## VISTA Asset Mapping

Portfolio側の格納Pathは未確定ですが、使用候補と役割はVISTA側で確定しています。

| Usage | VISTA source | Host destination |
|---|---|---|
| Work Card | `05_Assets/images/ogp/VISTA_OGP_DEFAULT.png` | 未確認 |
| Detail Hero Desktop | `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP_1280.png` | 未確認 |
| Detail Hero Mobile | `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP_800.png` | 未確認 |
| Product UI Lead | `05_Assets/images/product-ui/VISTA_UI_OVERVIEW_DASHBOARD.png` | 未確認 |
| Waiting Desktop | `05_Assets/images/product-ui/VISTA_UI_WAITING_INBOX_1440.png` | 未確認 |
| Waiting Mobile | `05_Assets/images/product-ui/mobile-preview/VISTA_UI_WAITING_INBOX_PREVIEW.png` | 未確認 |
| Risk Desktop | `05_Assets/images/product-ui/VISTA_UI_RISK_REPORT_1440.png` | 未確認 |
| Risk Mobile | `05_Assets/images/product-ui/mobile-preview/VISTA_UI_RISK_REPORT_PREVIEW.png` | 未確認 |
| Flow Desktop | `05_Assets/images/product-ui/VISTA_UI_FLOW_ANALYTICS.png` | 未確認 |
| Flow Mobile | `05_Assets/images/product-ui/mobile-preview/VISTA_UI_FLOW_ANALYTICS_PREVIEW.png` | 未確認 |
| Project Detail | `05_Assets/images/product-ui/VISTA_UI_PROJECT_DETAIL.png` | 未確認 |
| Brand Logo | `01_Brand/VISTA_LOGO_A_TRANSPARENT.svg` | 未確認 |

Source Masterを上書きせず、Hostへ移植する場合も既存Asset Ruleに従います。

## Conflicts

### Confirmed host conflicts

**なし。** Hostの正本が未特定のため、実在するHost Ruleとの衝突は確定できません。

### Unresolved assumptions requiring conflict audit

次はVISTA Detail Spec側の仮案であり、Host確認後に必ず比較します。衝突時はPortfolio側を正本とします。

| VISTA assumption | Host item to confirm | Priority on conflict |
|---|---|---|
| HeroはDesktop 2column | Existing Detail Hero layout | Portfolio host |
| Hero下にProject Info Grid | Existing Project Info placement | Portfolio host |
| Problem / SolutionはDesktop左右対比 | Existing Text / Comparison pattern | Portfolio host |
| Production Pointsは3-step flow | Existing Numbered / Process component | Portfolio host |
| Product UIはAlternating layout | Existing Figure / Feature pattern | Portfolio host |
| ChallengesはDesktop 3column | Existing Case-study layout | Portfolio host |
| More DetailsはNative `details`候補 | Existing Accordion policy | Portfolio host |
| Live Demo Primary / GitHub Secondary | Existing Button hierarchy | Portfolio hostのStyle、VISTAの意味優先度 |
| VISTA BlueをAccentに使用 | Existing Primary / Accent policy | Portfolio host |
| Detail 8 Tags | Existing Tag count / wrapping | Portfolio host |
| 12 Section順 | Existing Detail Template | Portfolio hostのTemplateを優先しつつVISTAの意味順を維持 |

## Required New Components

### Confirmed

**0件。**

Hostの既存Componentを確認できていないため、新規Componentが必要とは断定しません。

### Potential only — not approved

- Performance Decision Flow

既存Process、Timeline、Numbered Steps等で表現できる場合は新規作成しません。Host監査完了後も既存Patternで表現できない場合に限り、最小構成を検討します。

## Implementation Constraints

- Portfolio本体を正本とし、VISTA側の仮Layoutを優先しない
- Portfolio Background、Heading、Button、Tag、Header、FooterはHost Design Systemへ従う
- VISTA Blueは作品内容のAccentに限定する
- 既存Header / Footerを再利用する
- 既存Work Card、Detail Template、Button、Tag、Image、Focus Styleを優先する
- HostのRoute方式、Asset配置、Metadata生成、Deploymentへ従う
- VISTA OGPをDetail Heroへ流用しない
- Hero Product MockupとProduct UIはCrop / Stretchしない
- 架空サービス表記をHero付近に置く
- Live Demoを意味上Primary、GitHubをSecondaryとする。ただしVisual StyleはHost Componentへ合わせる
- CONTACTはBackendなしのUI State Designと明記する
- 架空Case Studiesの数値を実績として表示しない
- Long-form Case Study全文をPortfolio Webへ転載しない
- Portfolio側BreakpointとVISTA検証幅を混同しない
- 正本特定前にPencil Design、Route、Component、Token、Asset destinationを決定しない

## Blockers

### Primary Blocker — Portfolio Host Is Not Yet Created

今回確認した範囲では、接続先となる正式Portfolio Site、Project Root、Repository、Production、Design System、Work Card、Detail Page Templateが存在しません。BlockerはVISTA側の不足ではなく、Portfolio Hostそのものが未作成であることです。

### VISTA Readiness

VISTA側では、Portfolio掲載に必要な次の要素が確定しており、Asset / Copyに実装開始を妨げるBlockerはありません。

- Official Short Copy
- Long-form Case Study
- Implementation Plan
- Detail Page Specification
- Card / Hero / Product UI Asset候補
- Section orderとCopy Mapping
- Responsive / Performance / Accessibility掲載方針

### Decisions Required When Starting the Portfolio Project

- Portfolio本体のProject RootとRepository
- Branch、Production URL、Deployment方式
- Framework、Build Tool、Package Manager
- Information ArchitectureとRouting
- Design SystemとResponsive Rule
- Work CardとDetail Page Template
- Metadata生成方法とAsset格納先
- External Link Policy

これらをPortfolio本体の企画・情報設計として決定するまで、Folder作成、Git init、Pencil Design、HTML実装には進みません。

## Recommended Next Step

**既存Portfolioへの追加ではなく、Portfolio本体を新規プロジェクトとして立ち上げるための企画・情報設計を行う。**

次工程では、Portfolioの目的、Target、掲載作品、Site Map、Route、Detail Page共通構造、Design System方針、Technology / Deployment候補を文書上で定義します。Folder作成、Git init、Pencil Design、HTML / CSS / JavaScript実装はまだ開始しません。
