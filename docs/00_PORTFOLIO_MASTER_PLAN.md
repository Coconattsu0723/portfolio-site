# Portfolio Master Plan

> **Canonical Note:** 本書は正式Portfolio Repository作成前にVISTA Project内で策定されました。このCopyをPortfolio Project全体の企画・情報設計に関する正本とし、VISTA側Originalは立ち上げ前の履歴として維持します。
>
> **Status: Portfolio Master Plan / Planning**
>
> 正式Portfolio Projectが未作成のため、本書は一時的にVISTA Projectの`03_Docs`へ保存します。Portfolio Project作成後は内容を再確認し、Portfolio側の正式Docsへ移管します。

Webデザイナー転職用Portfolio Siteを新規に立ち上げる前に、目的、読者、情報優先度、作品構成、共通Page、Detail Template、技術候補、制作順を定義する企画・情報設計の正本です。

今回はDocument作成だけを行います。Project Folder作成、Git init、GitHub Repository作成、Pencil Design、HTML / CSS / JavaScript実装、Asset移植、画像制作、Deploymentは行いません。

## Purpose

### Primary Purpose

制作会社、Web制作会社、Design TeamへのWebデザイナー転職時に提出し、採用担当が短時間で次を判断できるPortfolio Siteをつくります。

1. どのようなWeb Designerか
2. どの範囲を担当できるか
3. どのような作品があるか
4. 課題からDesign判断へどうつなげたか
5. DesignをResponsiveなWebとして実装・公開できるか
6. 詳細を見たい作品へ迷わず進めるか

Portfolioそのものの演出を主役にせず、作品と制作判断を理解するための静かなFrameとして設計します。

### Portfolio Positioning

**Web Designerを主語にし、「企画から公開・検証までつなげられること」を差別化要素として伝える**方針です。

`Front-end Developer`を第一肩書きにはしません。HTML / CSS / JavaScriptは、Designを実装可能な形へ落とし込み、Responsive、Accessibility、Performanceまで確認できる強みとして示します。

### Success Criteria

- 最初の数十秒でName / Role / Strength / Featured Worksが分かる
- 3〜5分で代表作品の課題、判断、担当範囲、品質確認を理解できる
- LPとMulti-page Siteを同じ一覧で比較できる
- 作品数が増えてもTOPの情報量が膨張しない
- Work CardとDetail Templateを共通化し、追加運用しやすい
- DesignだけでなくResponsive、Implementation、Git / GitHub、Production QAも事実に基づいて確認できる
- 架空案件と実在案件を誤認させない

## Audience

### Primary Audience

- Web制作会社の採用担当
- Web Designer
- Director
- UI Designer
- Front-end寄りのReviewer

### Reading Context

採用担当は、最初から全ページを精読するとは限りません。初期閲覧を次の3段階で設計します。

| Stage | Time | Reader question | Required answer |
|---|---:|---|---|
| Scan | 数十秒 | 何者で、何ができるか | Name、Web Designer、Strength、Featured Works |
| Compare | 1〜3分 | どの作品を見るべきか | Project Type、Thumbnail、短い説明、Tags |
| Evaluate | 3〜5分以上 | どう考え、どこまで作ったか | Problem、Approach、Visual、Role、Implementation、QA |

### Audience Needs

- **採用担当:** 役割、作品の幅、完成度、公開URLを素早く確認したい
- **Designer:** Visualだけでなく、課題設定、情報設計、Responsive判断を見たい
- **Director:** Target、Goal、Content順、Page Role、制作範囲を見たい
- **UI Designer:** Component、State、Product UI、Hierarchyを見たい
- **Front-end Reviewer:** Semantic HTML、Responsive、Interaction、Accessibility、Performance、Gitを見たい

同じ情報を全員へ同じ密度で見せず、Cardは概要、Detailは判断、GitHubは実装詳細という段階をつくります。

## Goals

Portfolioで伝える能力を、次の4層へ整理します。

### 1. Think

- 課題設定
- Target / Goal整理
- 情報設計
- Page / Section Role設計
- CopyとVisualの優先順位

### 2. Design

- Web UI
- Visual Direction
- Brandingへの展開
- Product UI
- Responsive Design
- 異なる業種・Toneへの対応

### 3. Build

- HTML / CSS / Vanilla JavaScript
- Semantic Structure
- Interaction / Form State
- Git / GitHub
- Multi-page Implementation

### 4. Validate

- Accessibility
- Responsive QA
- Performance
- Metadata / SEO
- Production QA

TOPでは4層を短く示し、各Detail Pageで作品に該当する要素だけを具体化します。全作品へ同じSkill一覧を繰り返しません。

## Content Strategy

### Core Principle

**作品一覧では「違い」を伝え、作品詳細では「判断」を伝える。**

TOP、WORKS、WORK DETAILの情報量を分離します。

- **TOP:** Positioningと代表作
- **WORKS:** 全作品の比較
- **WORK DETAIL:** 課題、判断、制作過程、Visual、実装、検証
- **ABOUT:** 人物、姿勢、Skill、現在の目標
- **CONTACT:** 次の連絡手段

### Information Priority

#### Priority A — First View

- Name
- Role: Web Designer
- 1行のPositioning
- Works CTA
- Featured Worksの入口

#### Priority B — First Scroll

- Strength概要
- Featured Works 3〜5件
- DesignからImplementationまで対応できること
- About要約

#### Priority C — Deeper Reading

- 全作品
- Detail Case Study
- Skills / Tools
- Career / Current Goal
- GitHub / Resume / Contact

### Progressive Disclosure

- CardではProject Type、Title、1行説明、少数Tagsだけを表示
- Detail HeroでRole、Scope、Year、Type、Linkを表示
- 本文でProblem、Approach、Key Points、Visualを展開
- 実装詳細や長文Case Studyは必要な作品だけに限定
- RepositoryのREADME / Case Studyは補足資料として利用

### Content Tone

- 日本語を主言語とする
- Project名、Role、Label、技術名は必要に応じて英語を併用
- 短く、事実ベースで、成果を誇張しない
- 架空サービス、自主制作、Demo Formを明示する
- 実測していないBusiness Resultを作らない

## Hero Strategy

### Hero Role

最初の画面で「誰が」「何をする人で」「何を見ればよいか」を伝えます。長いProfile、全Skill、装飾的な作品一覧は置きません。

### Required Information

1. Name — TBD
2. Role — `Web Designer`
3. Short Statement — TBD
4. Short Introduction — 1〜2文
5. Primary CTA — `Worksを見る`
6. Secondary CTA — `About`または`Contact`。最終決定はContact方式と合わせる

### Copy Direction Analysis

| Direction | Strength | Risk | Decision |
|---|---|---|---|
| Web Designer | 採用職種と直結し、理解が最速 | 実装力が見えにくい | **Primary Roleに採用** |
| Design + Front-end | 両方できることが明快 | 職種の主語が曖昧になりやすい | Supporting Label候補 |
| 企画から公開まで | 担当範囲の広さが伝わる | Roleそのものではない | Short Statementの中心候補 |

### Recommended Message Direction

第一に`Web Designer`と伝え、その直後に「課題整理から、デザイン、実装、公開後の検証までつなぐ」ことを示します。

方向性例であり、最終Copyではありません。

> 課題を整理し、デザインから実装・公開までつなぐWeb Designer。

Name、経験年数、求職状況等を確認してから最終Copyを決定します。

## Work Strategy

### Portfolio Architecture for Works

作品数が増えてもTOPを長大化させないため、作品を3段階に分けます。

| Priority | Role | Placement | Detail depth |
|---|---|---|---|
| A — Featured | 最初に能力を判断してもらう代表作 | TOP + WORKS | Full Case Study |
| B — Core | 制作の幅を補強する主要作品 | WORKS、必要に応じてTOP補助 | Standard Detail |
| C — Archive / Supporting | 経験・Tone・業種の幅を示す | WORKS | Compact DetailまたはExternal Link |

Priorityは作品の優劣ではなく、採用担当へ最初に何を見せるかを表します。完成状態とDetail Materialの監査後に確定します。

### Classification Axes

#### Project Type

- BtoB SaaS
- Multi-page Website
- Landing Page
- Corporate / Service
- Hospitality
- Personal Service
- Product / Food
- Local Business

#### Strength

- Planning / Problem Definition
- Information Architecture
- Branding / Copy
- Web UI
- Product UI
- Responsive
- Front-end
- Interaction
- Accessibility
- Performance
- Production QA

Cardへ全分類を表示せず、一覧Filter、Detail Info、内部管理Dataへ役割を分けます。

### Selection Rules

- 最近の作品を優先する
- 同じ業種・Tone・LP構造を連続させない
- Multi-pageとLPを両方見せる
- DesignだけでなくImplementation / QAを確認できる作品を含める
- Visual Toneが分散する順序にする
- Detail Materialが不足する作品はFeatured確定前に監査する

## Featured Works

### Provisional Selection — 4 Works

正式完成状態とThumbnail品質を作品別に監査するまでは候補扱いとします。

| Order | Project | Type | Main strength | Reason |
|---:|---|---|---|---|
| 1 | VISTA | BtoB SaaS / 5-page Website | Product UI、IA、Performance、Accessibility | Product UIを含む挑戦作で、企画からProduction QAまで最も広い範囲を示せる |
| 2 | TSUGI | Hospitality / 4-page Website | Multi-page IA、Editorial Visual、Responsive | VISTAと異なる静かなToneで、ページごとの役割とVisual編集力を示せる |
| 3 | tane | Brand Service LP | Problem Definition、Brand、Copy、Editorial | 課題からブランド判断軸へつなぐ思考と、写真・文章中心のLPを示せる |
| 4 | soto | Service LP | Interaction、Responsive、Accessibility、Performance | Storage Simulatorを通じて、JavaScriptを意思決定支援へ使う例を示せる |

### Alternative Candidates

- **nolla:** Product / Food、診断・カルーセル・状態同期を見せたい場合にsotoと入替候補
- **yori:** Personal ServiceとStyling Simulation、Fashion Toneを強めたい場合の候補
- **michi:** 日常課題からサービスを設計する穏やかなLPとして候補

### Featured Balance

- Multi-page：2件
- LP：2件
- BtoB / Hospitality / Branding / Consumer Serviceを分散
- Clean Tech / Experimental Editorial / Natural Editorial / Warm Lifestyleを分散

Featuredを5件以上へ増やす前に、TOPの閲覧時間と作品間の差が維持できるか確認します。

## Sitemap

### Recommended Candidate

```text
/
├── works/
│   └── [project]/
├── about/
└── contact/
```

### Proposed Routes

| Route | Page | Status |
|---|---|---|
| `/` | TOP | Required |
| `/works/` | WORKS一覧 | Required |
| `/works/[project]/` | 共通作品詳細 | Required |
| `/about/` | ABOUT | Required |
| `/contact/` | CONTACT | Provisional。連絡方式確定後にRequired / Integratedを判断 |

`/profile/`と`/skills/`は追加しません。Profile、Skills、Tools、Current GoalはABOUTへ統合し、Navigationを増やしすぎない方針です。

### Human-readable Work Routes

候補：

- `/works/vista/`
- `/works/tsugi/`
- `/works/tane/`
- `/works/soto/`

Project slugは小文字英数字とHyphenで統一します。Hosting方式がGitHub Pagesの場合はProject Site Base Pathも考慮しますが、Hosting決定前に絶対Path実装を固定しません。

## Page Roles

### TOP

#### Purpose

数十秒でPositioningと代表作品を理解し、WORKSまたはABOUTへ進める入口です。

#### Recommended Sections

1. Header
2. Hero — Name / Role / Statement / CTA
3. Strength Summary — Think / Design / Build / Validateを簡潔に表示
4. Featured Works — 4件を基本
5. About Summary — ProfileとDesign Approachを短く表示
6. Contact CTA — 連絡方法確定前は内容をTBDとする
7. Footer

全作品、全Skill、長いCareer、各作品のCase StudyはTOPへ置きません。

### WORKS

#### Purpose

全作品を比較し、興味のあるDetailへ進めるPageです。

#### Structure

1. Page Header — Worksの方針と掲載範囲
2. Optional Category Navigation — `All / Multi-page / LP`程度
3. Work Grid
4. Supporting / Archive Works
5. Contact CTA

#### Filter Policy

初期版ではJavaScript Filterを必須にしません。作品数が10件前後なら、次のいずれかで十分です。

- `Featured / All Works`のSection分け
- `Multi-page / LP`の見出し分け
- Anchor Link

CategoryやTagを多数組み合わせるFilterは、作品数と利用状況を確認してから追加します。Sortは初期版では新しい順に固定し、UIを設けません。

### WORK DETAIL

#### Purpose

Visual Galleryではなく、課題、判断、制作範囲、Responsive、実装、検証を理解できるCase Studyです。

#### Reading Order

`Context → Problem → Decision → Execution → Validation → Links`

共通Templateを基本にし、LP、Multi-page、Product UIの差はOptional Sectionで吸収します。

### ABOUT

#### Purpose

作品だけでは分からない人物像、Design Approach、Skill、現在の目標を補い、採用判断に必要なContextを伝えます。

#### Recommended Content

1. Short Profile
2. Career Summary — 履歴書全文ではなく現在につながる要点
3. Design Approach — 課題、情報、Visual、実装、検証への姿勢
4. Skills / Tools
5. Current Goal / Desired Role
6. Resume Link — 公開範囲とFileを確認後。TBD
7. Contact CTA

### CONTACT

#### Purpose

採用担当が次の行動を迷わず選べる連絡窓口です。

#### Options

| Option | Description | Benefit | Risk / Requirement |
|---|---|---|---|
| A — Contact Form | Site内Form | 離脱が少なく項目を揃えられる | Backend、Spam対策、Privacy、Error / Successが必要 |
| B — Email Link | `mailto:`またはCopyable Email | 最小構成で確実 | Mail App依存、公開EmailのSpamリスク |
| C — External Links | GitHub / SNS等 | 実績確認へつなげやすい | 採用連絡の主導線として弱い場合がある |

現時点では未決定です。Backendが未決定のまま架空Successを実装しません。初期版はB + Cを第一候補とし、AはHostingとPrivacy要件を確認して判断します。

## Header / Footer

### Header Candidate

- NameまたはWordmark
- Works
- About
- Contact

Current Page表示、Keyboard操作、Mobile Menu、Focus Returnを将来のDesign / Implementation要件とします。Skill、Profile、SNSをGlobal Navへ追加しません。

### Footer Candidate

- Name
- Works
- About
- GitHub
- Contact
- Copyright

大規模Sitemapにはせず、主要導線とExternal Profileだけを整理します。

## Work Card

### Shared Component Policy

TOP Featured CardとWORKS一覧Cardは、同じCore Componentを再利用します。TOPでは大きいVariant、WORKSではGrid Variantとして、Data構造と情報順を共通化します。

### Required Content

1. Thumbnail
2. Project Type / Category
3. Title
4. One-line Description
5. Priority Tags — 最大3個を初期候補
6. Year
7. Detail Link

### Omitted from Card

- 長いProject Overview
- 全Skill Tags
- Role全文
- Tech Stack全文
- Live Demo / GitHubの複数CTA
- 詳細な成果数値

これらはDetail Pageへ移します。

### Link Policy

Card内に複数のNested Linkを置かず、Detailへ進む単一の明確なLinkを基本にします。Card全体をLink化する場合も、TitleでLink目的が分かり、Focus IndicatorがCard全体に表示される設計とします。

### Thumbnail Direction

- 共通表示枠は**3:2または16:10を次工程で比較**
- Photographyは`cover`候補。ただし重要被写体のCropを作品別に確認
- Product UI、文字入りOGP、Browser UIは`contain`候補
- Asset内部のTextをCard本文の代替にしない
- 元Assetを上書きせず、必要な場合だけPortfolio専用Derivativeを作る
- Image dimensionsを保持し、GridのLayout Shiftを防ぐ

VISTA OGPは約1.90:1のため、Card比率確定後に`contain`で成立するか検証します。現段階では画像制作を行いません。

### Layout Candidate

- Mobile：1 column
- Tablet：2 columns候補
- Desktop：2〜3 columns候補。Descriptionの可読性を優先し、列数を増やしすぎない
- Card高さは固定Pixelではなく、Thumbnail比率とText領域のRuleで揃える

## Detail Template

### Core Principle

すべての作品で同じSectionを強制せず、共通のRequired Coreと作品特性に応じたOptional Modulesを組み合わせます。

### Required Sections

#### 1. Project Hero

- Project Title
- Category / Type
- One-line statement
- Short Overview
- Main Visual
- 自主制作 / 架空案件等のDisclosure

#### 2. Project Info

- Year / Period
- Role / Scope
- Project Type
- PagesまたはFormat
- Tools / Techの要約
- Live / GitHub。存在するLinkだけ表示

#### 3. Problem / Goal

- 誰のどの課題を扱ったか
- 何を達成したい作品か
- 架空案件では設定と実測結果を混同しない

#### 4. Approach / Key Decisions

- 課題から情報設計・Designへつないだ判断
- 3〜5点を優先し、制作物一覧にしない

#### 5. Visual Sections

- 作品の主要Visual
- Section / Page / FeatureのRole
- Image Caption
- Full-widthとText + Imageを意味に応じて使い分ける

#### 6. Responsive

- Desktop縮小ではなく、情報順、Column、Navigation、Visualの切替を説明
- 作品に正式なMobile Designがあることを確認して掲載

#### 7. Scope / Implementation

- 担当範囲
- HTML / CSS / JavaScript等の実装事実
- Interactionがない作品に機能を追加しない

#### 8. Validation / Result

- Accessibility、Performance、QAのうち実施した内容
- Business Resultがない自主制作では、検証済みの技術結果だけを示す

#### 9. Final Links

- Live Site
- GitHub Repository
- Next / Related Work候補
- External Link PolicyはPortfolio共通Ruleへ従う

### Optional Sections

| Module | Suitable projects | Examples |
|---|---|---|
| Information Architecture / Sitemap | Multi-page | VISTA、TSUGI |
| Page Roles / Navigation | Multi-page | VISTA、TSUGI |
| Brand Concept / Visual System | Brand-heavy work | tane、TSUGI、soto |
| Product UI | SaaS / App-like work | VISTA |
| Interaction / State Design | Interactive LP | soto、yori、nolla |
| Performance | Measured projects | VISTA、TSUGI、tane、soto等 |
| Accessibility | Verified projects | VISTA、TSUGI、tane、soto等 |
| Challenges & Solutions | Decision recordがある作品 | VISTA、TSUGI、tane |
| Process / Before-After | Brand / Service | tane、LP作品 |
| Case Studies / Pricing | 作品内のSupplement | VISTA。架空Label必須 |
| More Details / `details` | 長い技術補足 | VISTA等 |

### LP Adaptation

LPでは次を中心にします。

1. Target / Problem
2. Goal / Conversion
3. Concept / Copy
4. Information Flow
5. Section Design
6. CTA Design
7. Responsive
8. Interaction / Form。存在する場合のみ
9. Implementation / QA

Product UIや複雑なChallenge Sectionは要求しません。

### Multi-page Adaptation

Multi-page作品では次を追加可能にします。

- Sitemap
- Page Roles
- Global Navigation
- Current Page
- Cross-page CTA
- 共通ComponentとPage固有Layout
- Page単位のMetadata

### VISTA Adaptation

VISTAはCore Templateへ次を追加します。

- Product UI
- Performance Decision Flow
- Accessibility / CONTACT State
- Challenges & Solutions
- Detailed Information Architecture

これらはVISTAのOptional Modulesであり、Portfolio全作品へ強制しません。VISTAの正式12 Sectionは、共通Templateの意味順を保ちながらModuleとして展開できます。

## Skills Strategy

### Design

- Figma
- Pencil
- Illustrator
- Photoshop

### Development

- HTML
- CSS
- JavaScript
- Git / GitHub

### Workflow / Quality

- Responsive Design
- Accessibility
- Performance
- Production QA

### Display Policy

- Skill Level Barや根拠のないPercentageは使わない
- 実作品で確認できるSkillと、使用経験のみのToolを分ける
- Tool名より、何に使ったかを短く説明する
- TOPは4層の概要、ABOUTは整理した一覧、WORK DETAILは作品固有の事実を表示する

経験年数、業務利用、学習中の区分は本人確認後に記載します。

## Design Direction

具体的なColor、Font、Component Styleは次工程で定義します。ここでは作品を邪魔しないPortfolio Frameとして3案を比較します。

### Option A — Editorial Minimal

#### Characteristics

- 大きなTypography
- 非対称Grid
- Thin Ruleと余白によるSection分け
- Image比率と配置に強弱をつける
- Label / Numberで編集的なRhythmをつくる

#### Why It Fits

- Web DesignerとしてのLayout感覚をPortfolio自体でも示せる
- TSUGIやtaneのEditorial Toneと相性がよい
- Card一辺倒にならず長文Case Studyを読み物として構成できる

#### Risk

- Portfolioの演出が作品より強くなる可能性
- VISTAのClean TechやPersonal Service作品とのTone差が出る
- Responsive実装と作品追加時のLayout調整が増える

### Option B — Clean / Neutral Portfolio

#### Characteristics

- Neutral Base
- restrained accent
- 明確なHeading Hierarchy
- 一定のContainerとGrid
- 作品画像を主役にし、UI装飾を抑える
- Text幅とSection間隔で読みやすさをつくる

#### Why It Fits

- 採用担当が短時間で比較しやすい
- VISTA、TSUGI、LP群の異なるColor / Toneを受け止められる
- Work CardとDetail Templateを共通化しやすい
- 作品追加時に破綻しにくい
- HTML / CSSでもAstroでも実装可能

#### Risk

- 抑えすぎると無個性に見える
- Typography、Spacing、Image Scaleの精度が低いとGenericになる
- Designerとしての個性は作品と編集判断で補う必要がある

### Option C — Slightly Experimental Web Designer Portfolio

#### Characteristics

- Variable Grid
- Horizontal LabelやIndex
- Subtle Layering
- Hover / Transitionで作品の違いを見せる
- 一部SectionでScreen幅を活かす

#### Why It Fits

- DesignとFront-endの両方を印象づけやすい
- Interaction SkillをPortfolio自体でも示せる
- Featured Worksに記憶性を持たせやすい

#### Risk

- Keyboard、Reduced Motion、Mobileで追加検証が必要
- 作品閲覧より演出へ注意が向く可能性
- 長期運用で特殊Layoutの保守負荷が高い

### Recommendation

**Option B — Clean / Neutral Portfolioを推奨します。**

理由：

1. 採用担当のScanと作品比較を最優先できる
2. VISTAのBlue、TSUGIの建築写真、taneのWarm Editorial、sotoのLifestyle Toneが競合しない
3. Work CardとDetail Templateの共通化に向く
4. Mobile FirstとAccessibilityを組み込みやすい
5. 作品追加時に既存Pageを大きく変更しなくてよい

Option Aの編集的な強弱を、Project Index、Section Label、Image Scaleなど限定した箇所に取り入れます。Option CのMotionはHoverやUnderlineなど補助的な範囲だけ採用します。

### Color Direction

- Neutral Base
- 高ContrastのText
- 控えめなMuted / Border
- Portfolio固有Accentは1色程度
- 作品固有ColorはThumbnailとDetail Visual内で見せる
- VISTA BlueをPortfolio Primaryにはしない

HexはDesign System工程で決定します。

### Typography Direction

- 日本語本文の可読性を最優先
- English Project TitleとNumber / Labelに明確なHierarchyを持たせる
- Japanese SansをBase候補
- SerifまたはDisplay Faceは限定的なAccent候補
- 本文幅、Line Height、Weightを先に検証し、Font名だけで個性を作らない

具体的Fontは次工程で比較します。

### Layout Direction

- Wide Whitespace
- Clear Hierarchy
- Image-led
- Readable Text Width
- Sectionごとに情報の関係に合うLayoutを選ぶ
- 全SectionをCard化しない
- Full-width Image、Text Column、2column、Gridを意味に応じて使い分ける

### Motion Direction

候補：

- Subtle reveal
- Image hover
- Underline transition
- Page / Component transition

Large Animation、長いIntro、強いParallax、操作を待たせるTransitionは使用しません。ContentはMotionなしでも理解でき、`prefers-reduced-motion`で抑制できる構造を要件とします。

## Responsive

### Strategy

**Mobile Firstを推奨します。**

作品Card、長文Detail、Navigationを狭い画面で意味順に整理し、その後に比較が有効な箇所だけ多列化します。Desktop LayoutをMobileへ縮小しません。

### Review Width Candidates

- 375px
- 390px
- 768px
- 1024px
- 1366px
- 1440px

これらは確認幅であり、Breakpoint値とは限りません。BreakpointはContentが破綻する位置からDesign System工程で決定します。VISTAの430 / 600 / 900 / 1000px等の詳細検証幅をPortfolio共通Breakpointと混同しません。

### Responsive Requirements

- Header / NavigationのDOM順とFocus順を保つ
- Featured Worksは意味順を変えない
- CardのThumbnail Cropを幅ごとに確認する
- Detail HeroはTextとVisualの優先順位を保つ
- Full-width ImageはViewportを超えない
- Tableは内容に応じてStackまたはScrollを設計する
- Text line lengthをDesktopでも広げすぎない

## Accessibility

初期設計要件として次を採用します。

- Semantic HTML
- 各Pageに内容を表す1つの`h1`
- Heading Hierarchy
- Skip Link
- Keyboard操作
- 明確な`:focus-visible`
- Current Page表示
- 意味のあるAlt Textと装飾画像の空Alt
- Descriptive Link Text
- External Linkの挙動通知
- Color Contrast
- 約44pxを目安とする主要操作領域
- Mobile MenuのEscape / Focus Return
- `prefers-reduced-motion`
- Visual OrderとDOM Orderの一致
- Formを採用する場合のLabel、Error、Status Announcement

Accessibilityを実装後のCheck項目ではなく、Content StructureとComponent要件として定義します。

## Performance

### Common Rules

- Responsive Image
- Thumbnail Optimization
- Explicit Image DimensionsまたはAspect Ratio
- Above-the-fold Imageの優先読込
- Below-the-fold ImageのLazy Loading
- 適切なFormatとFallback
- Font Weight / Subset / Loadingの最小化
- Layout Shiftの抑制
- Routeごとの不要Asset読込防止

### Applying VISTA Learnings

VISTAで確認した方針をPortfolio共通Ruleへ応用します。

1. CSSでDesktop / Mobile画像を隠すだけにせず、`picture` / `source`等で必要なSourceだけを取得する
2. 派生画像は生成しただけで採用せず、Visual QualityとTransferを実測する
3. HeroはEager候補、Below-the-foldはLazy候補として役割を分ける
4. Image dimensionsを保持し、CLSを抑える
5. FontはHTMLから早く発見できる構造を候補とし、不要なWeightを増やさない
6. Master Assetを保持し、Production Derivativeを別管理する

FrameworkやHostingが変わっても、この判断原則を維持します。

## SEO

### Site-wide Requirements

- Site Title
- Description
- Canonical
- OGP
- Twitter Card
- Favicon / Apple Touch Icon候補
- `robots.txt`
- `sitemap.xml`
- Custom 404
- Semantic Heading
- Crawlable Internal Link

### Work Detail Metadata

各作品Detailに固有の次を持たせます。

- Title：`Project名｜作品種別｜Portfolio`等。最終Formatは共通Ruleで決定
- Description：課題、制作範囲、作品Typeを短く要約
- Canonical：Portfolio Detailの正式URL
- OGP：Portfolio Card / Share用途に適した画像
- `og:type`：基本は`article`または`website`を実装時に比較
- Published / Updated Date：表示・構造化Dataの必要性を検討

各作品の公開Site CanonicalやSite NameをPortfolio Detailへ流用しません。

## URL Strategy

### Recommended Pattern

```text
/
/works/
/works/vista/
/works/tsugi/
/works/tane/
/about/
/contact/
```

### Rules

- Human-readable
- 小文字英数字とHyphen
- Trailing SlashはHosting / Generatorに合わせて統一
- Route変更を避けるため、Project slugを早期に確定
- NavigationとBreadcrumbを同じ正式URLへ向ける
- External Live DemoとPortfolio Detailを混同しない

### GitHub Pages Base Path

GitHub PagesのProject Siteを選ぶ場合、`/repository-name/`がBase Pathになります。VISTAで発生したNested Route / 404 / Asset Pathの問題を避けるため、次を要件とします。

- Base URLを設定可能な構成
- Nested DetailからAsset / Navigationが解決すること
- Custom 404のPath確認
- Local Root前提のHard-coded URLを避ける
- Custom Domainへ移行する可能性を考慮する

Hosting未決定のため、現時点でBase Pathを固定しません。

## Hosting Options

| Option | Static / Multi-page | Custom Domain | Contact | Preview / Deploy | Main concern |
|---|---|---|---|---|---|
| GitHub Pages | 良好 | 対応可 | Backendなし。外部Form等が必要 | GitHub中心で簡潔 | Project Site Base Path、Preview環境が限定的 |
| Netlify | 良好 | 対応可 | Forms / Functions候補 | Deploy Previewが使いやすい | Free Plan制限、Service依存、Form方針確認 |
| Vercel | 良好 | 対応可 | Functions候補 | Previewが強い | Static Portfolioには機能過多になる可能性 |

### Provisional Assessment

- **ContactをEmail Link中心にする場合:** GitHub Pagesでも要件を満たせる
- **Form、Preview、Custom Domain運用を重視する場合:** Netlifyが第一候補
- **Framework連携やPreviewを最優先する場合:** Vercelも候補だが、現状は優先度を下げる

HostingはContact方式、Tech Stack、Custom Domain取得予定を確認してから決定します。

## Tech Stack Options

### Option A — HTML / CSS / Vanilla JavaScript

#### Advantages

- 現在の制作経験を直接活かせる
- Build Toolなしで構成が明快
- Semantic HTMLとPerformanceを細かく制御できる
- GitHub Pagesへそのまま公開しやすい

#### Disadvantages

- Header / Footer / Work Card / Metadataの重複管理が増える
- 10件以上のDetail Pageで更新漏れが起きやすい
- Work Dataと一覧の同期を手作業で保つ必要がある

#### Fit

小規模な初期版には適しますが、今後の作品追加と共通Template運用には保守負荷があります。

### Option B — Vite + HTML / CSS / JavaScript

#### Advantages

- 高速なLocal DevelopmentとAsset処理
- Vanilla JavaScriptのまま導入できる
- CSS / JSのBuildとCache Bustingを利用できる
- Frameworkを強制しない

#### Disadvantages

- Vite単体ではContent ModelやHTML Template重複を解決しない
- Multi-page Entryと共通Markupの設計が別途必要
- Build / Base Path設定が必要

#### Fit

現在のSkillから移行しやすい中間案です。ただし作品追加運用にはTemplate手段が必要です。

### Option C — Astro Static Site Generator

#### Advantages

- Static HTMLを出力できる
- Header / Footer / Work Card / Detail ModuleをComponent化できる
- Markdown / Content CollectionsでWork Dataを管理しやすい
- Route、Metadata、Image、Detail Templateを作品Dataから生成しやすい
- JavaScriptを必要なInteractionだけに限定できる

#### Disadvantages

- Astro、Node、Package Manager、Build / Deployの学習が必要
- Content SchemaとComponent設計を先に整える必要がある
- Vanilla構成よりRepositoryの概念が増える

#### Fit

作品数が10件前後あり、Detail Pageを増やす今回の長期運用に最も適します。ただし最小構成を守り、React等を追加しない方針が必要です。

## Recommended Stack

**Option C — AstroによるStatic Siteを理由付き推奨とします。最終決定ではありません。**

### Reason

1. Work CardとDetail Pageを同じProject Dataから生成できる
2. Required / Optional Moduleを共通Componentとして管理しやすい
3. 新しい作品を追加するときにNavigationや一覧の手作業更新を減らせる
4. Static HTMLとしてSEOとAccessibilityを維持できる
5. JavaScriptをMenuやFilter等の必要箇所へ限定できる
6. 10件前後の作品と今後の追加に対し、Plain HTMLの重複より長期保守に向く

### Guardrails

- React / Next.jsを理由なく追加しない
- Client-side RenderingをWork本文の前提にしない
- Content Collectionsと少数のLayout / Componentに限定する
- Build後のHTML、Image Request、Base Pathを必ず監査する
- Astro採用前に、1件のDummy Work DataでRoute / Metadata / Base PathのTechnical Spikeを行う

Astroの学習コストが制作期限に合わない場合はOption Bへ戻します。

## Content Inventory

| Content | Status | Source / Note |
|---|---|---|
| Name | TBD | 公開表記を決定 |
| Role | Direction decided | `Web Designer`をPrimary候補 |
| Hero Copy | TBD | Directionのみ決定 |
| Short Introduction | TBD | 1〜2文 |
| Profile | TBD | ABOUT用 |
| Career Summary | TBD | 履歴書全文にしない |
| Design Approach | Draft needed | Think / Design / Build / Validateを基に作成 |
| Current Goal | TBD | 希望職種・環境を確認 |
| Skills | Inventory available | 習熟度表現を確認 |
| Tools | Inventory available | 実利用と学習中を区分 |
| Featured Works | Provisional | 4件候補。作品Audit後に確定 |
| All Works | Initial inventory available | Status / Material監査が必要 |
| Work Card Copy | VISTA only complete | 他作品はShort Copy作成が必要 |
| Project Thumbnails | Needs audit | 比率、Crop、文字入り画像を確認 |
| Detail Copy | Mixed | VISTA / TSUGI / taneは資料が強い |
| Live URLs | Partially confirmed | 公開Statusと正式URLを作品別に再監査 |
| GitHub URLs | Mostly available | Local Remoteを基に確認 |
| Contact Method | TBD | Form / Email / External |
| Email | TBD | 公開可否を確認 |
| GitHub Profile | Available | `Coconattsu0723` |
| SNS | TBD | 掲載要否を確認 |
| Resume Link | TBD | File、公開範囲、個人情報を確認 |
| Site OGP | Missing | Portfolio Projectで制作予定。今回は制作しない |
| Favicon | Missing | Portfolio Projectで制作予定。今回は制作しない |
| Privacy Notice | TBD | Contact方式に依存 |

## Work Inventory

StatusとPriorityは、現時点のLocal File、README、Portfolio資料、Repository、一般的なGitHub Pages URLの応答を確認した暫定値です。VISTA以外はPortfolio掲載前に正式Auditを行います。

| Project | Type | Status | Live | GitHub | Detail Material | Priority |
|---|---|---|---|---|---|---|
| VISTA | BtoB SaaS / 5-page Website | **Complete** | [Live](https://coconattsu0723.github.io/vista-progress-saas/) | [Repo](https://github.com/Coconattsu0723/vista-progress-saas) | **Complete** | A — Featured |
| TSUGI | Hospitality / 4-page Website | Published / needs final listing audit | [Live](https://coconattsu0723.github.io/tsugi-onsen-hotel/) | [Repo](https://github.com/Coconattsu0723/tsugi-onsen-hotel) | Summary + Case Study | A — Featured candidate |
| tane | Brand Service LP | Published / needs final listing audit | [Live](https://coconattsu0723.github.io/tane-brand-partner-lp/) | [Repo](https://github.com/Coconattsu0723/tane-brand-partner-lp) | Summary + Case Study | A — Featured candidate |
| soto | Delivery Storage Service LP | Published / needs detail audit | [Live](https://coconattsu0723.github.io/soto-storage-lp/) | [Repo](https://github.com/Coconattsu0723/soto-storage-lp) | README; Detail Copy needs preparation | A/B — Featured candidate |
| michi | Personal Service / Driving Lesson LP | Published / needs detail audit | [Live](https://coconattsu0723.github.io/michi-paper-driver-lp/) | [Repo](https://github.com/Coconattsu0723/michi-paper-driver-lp) | README; Detail Copy needs preparation | B — Core candidate |
| yori | Personal Styling LP | Published / needs detail audit | [Live](https://coconattsu0723.github.io/yori-lp/) | [Repo](https://github.com/Coconattsu0723/yori-lp) | README; Detail Copy needs preparation | B — Core / Featured alternative |
| SEN PERSONAL PILATES | Personal Service / Studio LP | Live response confirmed; README says URL pending | [Candidate Live](https://coconattsu0723.github.io/sen-personal-pilates-lp/) | [Repo](https://github.com/Coconattsu0723/sen-personal-pilates-lp) | README; status inconsistency needs audit | B — Core candidate |
| つむぎ行政書士事務所 | Professional Service LP | Live response confirmed / needs final audit | [Candidate Live](https://coconattsu0723.github.io/tsumugi-lp/) | [Repo](https://github.com/Coconattsu0723/tsumugi-lp) | README + planning docs; Detail Copy needs preparation | B — Core candidate |
| nolla | Product / Food LP | Published / improvement items remain | [Live](https://coconattsu0723.github.io/nolla-craft-granola/) | [Repo](https://github.com/Coconattsu0723/nolla-craft-granola) | README + docs; final QA / metadata audit needed | B — Core / Featured alternative |
| oler | Corporate / Local Business candidate | Unknown / Needs Audit | [Candidate Live](https://coconattsu0723.github.io/oler_nagoya/) | [Repo](https://github.com/Coconattsu0723/oler_nagoya) | No formal Portfolio material confirmed | C — Supporting candidate |
| kurumu house | Housing Event LP candidate | Unknown / Needs Audit | Unknown | Local Git not confirmed | HANDOFF exists; formal Detail material unknown | C — Supporting candidate |
| mellow Pet Salon | Multi-page Local Business candidate | Unknown / Needs Audit | Unknown | Local Git not confirmed | Formal Detail material unknown | C — Supporting candidate |
| リセラボ整骨院 | Multi-page Local Business candidate | Unknown / Needs Audit | Unknown | Local Git not confirmed | HANDOFF exists; formal Detail material unknown | C — Supporting candidate |

### Inventory Notes

- `HTTP 200`だけでは完成品質を保証しないため、VISTA以外を一律`Complete`とはしていません
- Featured確定前に、Production、README、Thumbnail、Metadata、架空表記、Link、Responsive QAを作品別に確認します
- 同種のPersonal Service LPをすべてFeaturedにせず、WORKS一覧で幅を補います
- C作品は完成状態、権利、公開可否、Detail Materialを確認できなければ初期公開から除外します

## Roadmap

### Phase 01 — Strategy / Information Architecture

- 本Master Planを正本候補として確認
- Purpose、Audience、Positioning、Sitemap、Page Roleを承認
- Featured候補とPriority Ruleを確認

**Output:** Approved Portfolio Master Plan

### Phase 02 — Project Foundation Decision

- Portfolio Project名
- 正式Folder Path
- Repository名 / Visibility
- Tech Stack
- Hosting候補
- Custom Domain方針
- Contact方式の方向

**Output:** Project Brief / Repository Plan

### Phase 03 — Content & Work Audit

- 各作品の完成状態
- Live / GitHub / Metadata
- Thumbnail Asset
- Short Copy
- Detail Material
- 架空案件表記
- Featured 3〜5件を確定

**Output:** Work Data Inventory / Copy Inventory / Asset Inventory

### Phase 04 — Content Model / Design System

- Work Data Schema
- Required / Optional Detail Module
- Color / Typography / Spacing / Grid / Radius / Motion
- Header / Footer / Button / Tag / Card / Figure
- Responsive Breakpoint Policy
- Accessibility Foundation

**Output:** Design System Specification

### Phase 05 — Pencil Wireframe

- TOPを最初に設計
- WORKS
- Core WORK DETAIL Template
- ABOUT
- CONTACTまたはContact CTA
- 375 / 390 / 768 / 1024 / 1366 / 1440pxで構造確認

**Output:** Approved Wireframes

### Phase 06 — Visual Design

- Neutral BaseとAccent
- Typography
- Work Card
- TOP Featured Rhythm
- Detail Visual Modules
- Mobile / Desktop Formal Screens

**Output:** Approved Visual Design / Component Library

### Phase 07 — Implementation Foundation

- Project Setup
- Route / Layout / Content Data
- Global Header / Footer
- Metadata Base
- Image Pipeline
- Accessibility Base

**Output:** Running Local Portfolio Foundation

### Phase 08 — Page & Work Integration

- TOP / WORKS / ABOUT / CONTACT
- 共通Detail Template
- Featured Worksから順にData / Copy / Assetを接続
- Supporting Worksを追加

**Output:** Complete Local Content

### Phase 09 — QA / Performance / SEO

- Responsive
- Keyboard / Focus / Reduced Motion
- Heading / Alt / Contrast
- Image Request / Transfer / CLS
- Metadata / Canonical / OGP
- Internal / External Links
- Custom 404

**Output:** Release Candidate

### Phase 10 — Production

- Hosting / Domain
- Production Build
- Deploy
- Production QA
- Search / Share確認
- Portfolio URLをResume等へ反映

**Output:** Published Portfolio

## First Page Recommendation

Portfolio全体設計の承認後、**TOPのWireframeを先に作る**ことを推奨します。

理由：

1. Name / Role / Positioning / Featured Worksの優先順位がPortfolio全体を決める
2. TOPで作品の分類とCard情報量を検証できる
3. VISTA詳細を先行してPortfolio全体がCase Study中心へ偏ることを防げる
4. ABOUT / CONTACTへの導線を含め、Site全体の入口を確認できる

TOPの骨格とWork Cardが成立した後、共通WORK DETAIL Templateを設計します。最初のDetail PrototypeはVISTA専用構造ではなく、Required Coreだけで成立する中立Templateから始めます。

## TBD

### Identity / Copy

- 公開Name
- Hero Short Copy
- Short Introduction
- Career Summary
- Current Goal
- Resume公開有無

### Works

- Featured Works最終3〜5件
- Priority B / Cの初期公開範囲
- Project Year / Periodの統一表記
- Thumbnail比率：3:2 / 16:10
- Portfolio専用Thumbnailの必要性
- 各作品のShort Copy
- C作品の権利・完成・公開状態

### Design System

- Primary / Accent Color
- Font Family
- Type Scale
- Container / Grid
- Spacing Scale
- Radius / Shadow
- Breakpoints
- Motion Level

### Technology / Operation

- Astro最終採用可否
- Package Manager
- Repository名とVisibility
- Hosting
- Custom Domain
- Analytics採用可否
- Update Date表示

### Contact / Privacy

- Form / Email / External Link
- 公開Email
- Backend / Form Service
- Spam対策
- Privacy Notice
- SNS掲載有無

## Blockers

次工程のProject作成前に、次を確認します。

### Blocker 01 — Project Identity

- Portfolio Project名
- 正式Folder Path
- Repository名
- Public / Private

### Blocker 02 — Stack Decision

- Astro / Vite / Plain HTMLの最終判断
- Package Manager
- Hosting候補との互換性

### Blocker 03 — Public Identity and Contact

- 公開Name
- Role表記
- Contact方式
- Email / SNS / Resumeの公開範囲

### Blocker 04 — Initial Works Scope

- Featured Worksの正式確定
- 初期公開するB / C作品
- 各作品のThumbnail、Short Copy、Disclosure

Design Systemの具体値、Pencil Design、Asset移植、実装は、正式Portfolio Project作成後にそのRepositoryを正本として進めます。

## Recommended Next Step

**次は「Portfolio本体Projectの正式Folder / Repository作成」を先に行うことを推奨します。まだ実行しません。**

理由：

1. 現在のMaster PlanはVISTA Docsへ一時保存されており、Portfolio本体の正本置場がない
2. Design Systemを先にVISTA内で定義すると、Portfolio Project作成後に正本移管と履歴分断が起きる
3. Folder、Repository、Stackの基礎が決まれば、Design System、Work Data Schema、Pencil Handoffを同じProject内で管理できる
4. 初期Commitから企画、判断、Design、Implementationの履歴をPortfolio自身のRepositoryへ残せる

次工程を開始する場合も、まずProject名、正式Path、Repository名、Visibility、Stackの承認を取り、承認後にFolder / Repositoryを作成します。今回の作業では作成しません。
