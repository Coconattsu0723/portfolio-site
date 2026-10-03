# Portfolio Design System

> **Status: Design System / Foundation**

本書は、Portfolio全体で再利用するLayout、Typography、Color、Spacing、Image、Component、Accessibilityの共通Ruleを定義します。

対象はDesign SystemのFoundationです。TOP、WORKS、個別作品Detailの完成Designではありません。作品そのものを主役にし、Portfolio UIは情報を理解するための静かなFrameとして機能させます。

## Direction

正式Design Directionは**Clean / Neutral Portfolio**です。

- Neutral Baseと明確なHierarchyを基本とする
- Editorial MinimalのTypographyと余白の強弱を限定的に使う
- MotionはHover、Underline、Subtle Transitionに限定する
- VISTAを含む各作品固有のColorをPortfolio Brand Colorへ流用しない
- 装飾より、作品比較とCase Studyの可読性を優先する

## Principles

1. **作品を主役にする。** Portfolio UIは作品Visualと判断内容を支える。
2. **短時間でScanできる。** Title、Type、要約、次の導線を明確にする。
3. **情報量が増えてもHierarchyを保つ。** Container、Type、Spacingを共通Ruleで管理する。
4. **作品固有のToneを邪魔しない。** Neutral Baseと限定的なAccentを使う。
5. **理解順をViewportで変えない。** Mobile Firstで意味順とDOM順を一致させる。

## Decision Order

Design判断は次の順序で行います。

1. Container
2. Grid
3. Typography
4. Spacing
5. Color
6. Image
7. Component

Component固有の見た目から先に決めず、上位Ruleで解決できない理由がある場合だけ固有値を追加します。

## Layout

### Three-level Layout

3段階のContainerを採用します。

| Level | Maximum | Purpose |
|---|---:|---|
| Content Container | 1200px / 75rem | Header、TOP、WORKS、ABOUT、標準Detail Section |
| Reading Container | 720px / 45rem | Case Study本文、長文説明、Technical Notes |
| Wide Visual | 1440px / 90rem | 大きな作品Visual、Desktop / Mobile比較、複数画面 |

3段階を用意する価値があります。文章とVisualでは適切な幅が異なり、1つのContainerだけではCase Study本文が広がりすぎるか、大きな作品画像が小さくなります。

### Content Container

- 標準最大幅：1200px
- Pageの基本Alignmentを統一
- 12-column Gridの基準
- Header / Footerも同じ左右基準を使用

### Reading Container

- 最大幅：720px
- 日本語本文で約36〜42全角文字を目安
- Problem、Approach、Process説明、Technical Notesに使用
- HeadingやFigureが必ずReading幅へ制限されるわけではない

### Wide Visual

- 最大幅：1440px
- 作品画像の比較やUI Overviewなど、幅が理解に必要な場合だけ使用
- Wide Visual内でもCaptionはReadingまたはContent基準へ戻せる
- Full Bleedは意図があるSectionだけに限定

### Page Gutter

| Range | Side padding |
|---|---:|
| Mobile | 20px |
| Tablet | 32px |
| Desktop | 48px |

Viewportに対する固定Percentageではなく、Breakpointごとの安定したGutterを使います。

### Full-width Visual

Full-widthは装飾目的で乱用しません。

使用条件：

- Image detailを大きく見せる必要がある
- Desktop / Mobile比較で横幅が必要
- Page全体のRhythm上、標準Containerとの差に意味がある

Text本文をViewportいっぱいに広げません。

## Container

CSS ClassのFoundation：

```text
.container
.container-reading
.container-wide
```

- `.container`：1200px
- `.container-reading`：720px
- `.container-wide`：1440px
- すべてPage Gutterを保持
- 固定Pixel幅ではなく、Viewportが狭い場合は利用可能幅へ縮小

ContainerをComponentごとに再定義しません。

## Grid

### Decision

Desktopは**12-column Grid**を採用します。

12-columnは複雑なLayoutを作るためではなく、2、3、4、6分割を同じ基準で扱えるために使用します。

| Range | Columns | Gap |
|---|---:|---:|
| Mobile | 1 | 16px |
| Tablet | 6 | 24px |
| Desktop | 12 | 24px |

### Common Composition

| Use | Desktop candidate |
|---|---|
| Detail text + visual | 4 + 8 または 5 + 7 |
| Two-column content | 6 + 6 |
| Project Info | 3 × 4 または 4 × 3 |
| Featured Works | 6 + 6、または1件を12 |
| WORKS Grid | 6 + 6を基本。必要時のみ4 + 4 + 4 |
| ABOUT | Profile 4 + Content 8 |

Column Spanを大量のUtility Classとして先行実装しません。各Componentの意味に合わせ、同じGrid基準上で定義します。

### Guardrails

- 12-columnを埋めるためだけに情報を横並びにしない
- Card列数を増やしすぎて説明を読みにくくしない
- MobileでDOM順を入れ替えない
- 見た目の左右交互配置より、内容の理解順を優先する

## Breakpoints

### CSS Breakpoints

正式なCSS Breakpointは2つです。

| Name | Value | Role |
|---|---:|---|
| Tablet | 48rem / 768px | Gutter、Grid、必要な2-column開始候補 |
| Desktop | 64rem / 1024px | 12-column、Desktop Type Scale、広いSection spacing |

MobileはDefault Styleです。

### Review Widths

BreakpointとQA幅を分離します。

- 375px
- 390px
- 768px
- 1024px
- 1366px
- 1440px

1366pxと1440pxはDesktopでの余白、Container、画像Scaleを確認する幅であり、追加Breakpointではありません。

### Content-based Exception

Componentが48remより前に破綻する場合、Component専用Breakpointを無条件に追加せず、まずContent量、Minimum幅、Layout構造を見直します。

## Responsive

### Philosophy

**Mobile First**を正式方針とします。

Desktopを縮小するのではなく、Content Priorityを保ったまま必要な箇所だけColumnを増やします。

### Rules

- DOM順と読み順を一致させる
- MobileでTitle、Description、Primary Linkを先に理解できる
- Horizontal Scrollを前提にしない。Tableなど意味上必要な場合だけ例外
- ImageとTextの左右交互配置をMobileで意味順へ戻す
- Text line lengthをDesktopでも制限する
- TouchでHover情報が失われない
- Portfolio側Breakpointと、掲載作品内部のResponsive仕様を混同しない

作品画像内のDesktop / Mobile Designは作品自身の仕様です。Portfolio ContainerのBreakpointを画像内UIへ適用しません。

## Typography

### Requirements

- 日本語の長文が読みやすい
- English Project Nameが明確に見える
- 13px Labelと12px Captionが潰れない
- Case Studyで行間とMeasureを保てる
- Font RequestとWeightを増やしすぎない

### Candidate Comparison

| Candidate | Strength | Risk | Decision |
|---|---|---|---|
| System Sans stack | 追加Request 0、表示が速い、Neutral | OS間で字形差がある | **Foundation採用** |
| Noto Sans JP + Inter | 日本語と英字を安定制御 | 2 Familyと複数WeightでLoad増 | Visual比較後の再検討候補 |
| Zen Kaku Gothic New + Manrope | 編集的な個性が出る | 作品よりPortfolioのToneが強くなる | 初期版では不採用 |

### Font Recommendation

日本語・英数字とも、Foundationでは同じSystem Sans Stackを使用します。

```css
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
"Hiragino Sans",
"Yu Gothic UI",
"Noto Sans JP",
sans-serif
```

理由：

- Network Font Requestが0
- Japanese / LatinのFallbackがOSに最適化される
- Clean / Neutral Directionに適合
- Font LoadingによるLayout Shiftを避けられる
- 作品VisualよりFontの個性を前へ出さない

Visual Design工程でSystem差が問題になった場合だけ、Noto Sans JP 1 Familyへの統一を再評価します。現時点ではGoogle Fontsを導入しません。

## Type Scale

### Mobile Default

| Token | Size | Line height | Weight | Use |
|---|---:|---:|---:|---|
| Display | 48px / 3rem | 1.1 | 700 | TOP Hero等の限定箇所 |
| H1 | 36px / 2.25rem | 1.25 | 700 | Page / Project Title |
| H2 | 28px / 1.75rem | 1.25 | 700 | Major Section |
| H3 | 20px / 1.25rem | 1.25 | 600 | Subsection / Point |
| Body Large | 18px / 1.125rem | 1.8 | 400 | Lead / Short Description |
| Body | 16px / 1rem | 1.8 | 400 | Japanese body |
| Small | 14px / 0.875rem | 1.7 | 400 | Supporting text |
| Label | 13px / 0.8125rem | 1.4 | 600 | Category / Eyebrow |
| Caption | 12px / 0.75rem | 1.6 | 400 | Figure caption |

### Desktop at 64rem

| Token | Size |
|---|---:|
| Display | 80px / 5rem |
| H1 | 56px / 3.5rem |
| H2 | 40px / 2.5rem |
| H3 | 24px / 1.5rem |
| Body Large | 20px / 1.25rem |

Body、Small、Label、CaptionはDesktopでも拡大しません。長文可読性と情報密度を維持します。

### Fluid Typography

Foundationでは`clamp()`を使用しません。

理由：

- 48rem / 64remの明確な段階で十分
- すべてのHeadingがViewportに追従するとHierarchyの確認が難しい
- Work Titleの長さによる折返しを固定Review幅で評価しやすい

TOP Hero Displayだけは、WireframeとCopy確定後にFluid化を再検討できます。

## Line Height and Measure

- 日本語Body：1.8
- Body Large：1.8
- Small：1.7
- Heading：1.25
- Display：1.1
- Label：1.4
- Caption：1.6
- Reading Container：最大720px
- 日本語本文：1行約36〜42全角文字を目安

長いCase Studyでは、Reading Container内にParagraphを置き、FigureやComparisonだけをContent / Wideへ広げます。

Paragraphを短いCardへ分割して可読性を作るのではなく、Heading、段落、List、Figure Captionで構造化します。

## Font Weight

使用Weightは3つです。

| Weight | Use |
|---:|---|
| 400 | Body、Description、Caption |
| 600 | H3、Label、Button、強調 |
| 700 | Display、H1、H2 |

500は採用しません。System Fontで500と600の差が不安定な環境があり、用途も600で代替できるためです。

## Color

### Light Theme

Dark Modeは初期要件にしません。

| Token | Value | Role |
|---|---|---|
| Background | `#FAFAF8` | Page base |
| Surface | `#FFFFFF` | Image letterbox、必要なsurface |
| Text | `#18181B` | Primary text |
| Text Muted | `#5F6368` | Supporting text / caption |
| Border | `#D8D8D2` | Subtle divider / frame |
| Accent | `#5A3EC8` | Link、限定的Primary action |
| Accent Hover | `#43269B` | Hover / active emphasis |
| Focus | `#C2410C` | Focus ring |
| On Accent | `#FFFFFF` | Accent surface上のtext |

### Neutral Base

BackgroundはPure WhiteよりわずかにWarmなNeutralとし、Photography、Product UI、LPの異なる色を受け止めます。

SurfaceはCardを大量に浮かせるためではなく、Imageの`contain`余白や、背景との区別が必要な領域に限定します。

## Accent

### Comparison

#### Neutral only

- 作品色への干渉が最小
- Border / Underlineだけで構成可能
- LinkやPrimary actionの識別が弱くなる可能性

#### Single Accent

- LinkとActionを一貫して識別できる
- Focusとは別の役割を持たせられる
- 使いすぎるとPortfolio Brandが作品より強くなる

### Decision

**Neutral Base + restrained Violet Accent 1色**を採用します。

- VISTA BlueをPortfolio Primaryへ流用しない
- AccentはLink、Primary Button、少数のActive stateに限定
- Large BackgroundやDecorationへ広げない
- SectionごとにAccent Colorを変えない

## Contrast

WCAGの通常Text 4.5:1を基準に確認しました。

| Combination | Ratio | Result |
|---|---:|---|
| Text `#18181B` / Background `#FAFAF8` | 16.95:1 | PASS AAA |
| Muted `#5F6368` / Background `#FAFAF8` | 5.79:1 | PASS AA |
| Accent `#5A3EC8` / Background `#FAFAF8` | 6.79:1 | PASS AA |
| Accent Hover `#43269B` / Background | 10.10:1 | PASS AAA |
| White / Accent | 7.10:1 | PASS AAA |
| White / Accent Hover | 10.56:1 | PASS AAA |
| Focus `#C2410C` / Background | 4.96:1 | UI識別に十分 |
| Focus / White Surface | 5.18:1 | UI識別に十分 |

BorderはText Contrast用途に使用しません。Muted Textより薄い色で情報を伝える場合は、Color以外のLabelやStructureを併用します。

Focus RingをImage上へ置くComponentでは、背景に埋もれないようSurface色の外側Ringまたは十分なOffsetを追加します。

## Spacing

### Scale

| Token | Value |
|---|---:|
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 6 | 24px |
| 8 | 32px |
| 12 | 48px |
| 16 | 64px |
| 24 | 96px |
| 32 | 128px |

10段階に限定します。新しい値をComponentごとに追加しません。

### Semantic Use

- Inline icon / label gap：4〜8px
- Text group：8〜16px
- Card internal：24px、Featured候補は32px
- Component group：32〜48px
- Mobile section：64px
- Desktop section：96px
- Large page separation：128pxを最大候補

## Section Spacing

| Context | Mobile | Desktop |
|---|---:|---:|
| Related content inside section | 24〜32px | 32〜48px |
| Standard section | 64px | 96px |
| Major narrative transition | 96px | 128px候補 |

TOP、WORKS、Detailで別Scaleを作りません。情報密度に応じて同じScaleから選びます。

- TOP HeroとFeaturedの間：Major transition候補
- WORKS内のGrid：Standard section
- Detailの連続するText Section：Related content
- Detailでテーマが変わる箇所：Standard section

## Radius

| Token | Value | Use |
|---|---:|---|
| Small | 4px | Tag、small control |
| Medium | 8px | Button、UI screenshot frame |
| Large | 12px | Thumbnail wrapper、large visualで必要な場合 |

作品VisualをすべてLarge Radiusへ統一しません。

- Photography：Wrapperに最大12px
- Product UI / Browser screenshot：0〜8px
- 文字入りImage：Assetの形を優先
- Full / Wide Visual：0〜8pxを基本

Pill RadiusはTagの意味が明確な場合だけ使用し、すべてのComponentをPill化しません。

## Border

- 標準：1px
- 色：`#D8D8D2`
- Divider、Image wrapper、Secondary Button、必要なCard境界に使用
- Borderだけで重要なStateを伝えない
- Section全体をBoxで囲まない

BorderとWhitespaceを基本とし、Shadowで階層を作りすぎません。

## Shadow

正式Ruleは2段階です。

1. **None** — Cardと通常SectionのDefault
2. **Subtle** — 浮遊が意味を持つOverlay、Menu、比較用UI Frameだけ

Subtle Token：

```text
0 8px 24px rgb(24 24 27 / 8%)
```

Work Card全件へShadowを付けません。

## Image Treatment

### General

- Assetの縦横比を維持
- `width` / `height`またはAspect Ratioを指定
- Cropが必要な場合は重要部分を作品別に確認
- Image内Textを本文の代替にしない
- Below-the-foldはLazy Loading候補
- Masterを上書きしない

### Photography

- Thumbnail：`cover`候補
- 被写体、建築、料理等の重要領域をCrop確認
- Detail：元Aspect Ratio維持を優先

### Product UI

- `contain`
- Crop禁止
- Readabilityを損なうScaleにしない
- Neutral Surface上に置き、UI色を変えない

### Text-in-image Thumbnail

- `contain`優先
- LetterboxはSurface色
- Image内のTitleへ依存せず、Card本文にもProject名を表示

### Screenshot

- Crop禁止を基本
- Browser chromeを追加するかは全作品共通に強制しない
- DetailではAssetごとのAspect Ratioを維持

## Work Thumbnail

### Ratio Decision

正式候補は**3:2**です。

理由：

- Photography作品に十分な高さを確保できる
- LPやProduct UIを一覧で小さくしすぎない
- 16:10よりわずかに縦方向の情報量を持てる
- 2-column Gridで安定しやすい

### Mixed Assets

- VISTA OGP 1200 × 630：約1.90:1のため、3:2 Wrapper内で`contain`
- Photography：3:2へ`cover`可能。ただしCrop監査必須
- LP screenshot：`contain`
- Product UI：`contain`

Wrapper比率を共通化しても、Image自体を一律Cropしません。

### Token

```text
--ratio-work-thumbnail: 3 / 2
```

## Work Card

### Information Hierarchy

1. Thumbnail
2. Category / Project Type
3. Project Title
4. One-line Description
5. Priority Tags：最大3個
6. Year
7. Detail destination

### Link Structure

Card内の主要LinkはDetailへの1つを基本とします。

推奨：

- Project Titleを意味のあるLinkにする
- Card全体Click領域を拡張する場合もDOM上のLinkは1つ
- Live、GitHub等の複数CTAはCardへ置かずDetailへ移す
- `Read more`だけの曖昧なLink Textを使わない

### Layout

- Mobile：1 column
- Tablet / Desktop：2 columnを基本
- 3 columnはDescription幅とThumbnail可読性が保てる場合だけ
- Text heightを固定しない
- Tag数でCard高さを無理に揃えない

### Interaction

DefaultはUnderline、Border、Imageの小さな変化を候補とします。

- Image scale：最大1.02程度
- Underline：Title Linkで明確化
- Arrow：移動方向の補助として任意
- Border：Contrastを確認したState変化
- Duration：160ms
- 3D、Tilt、強いParallaxは禁止

`:focus-visible`でもHoverと同等に目的が分かる必要があります。TouchではAnimationなしでもLinkが理解できる構造にします。

## Featured Work Card

TOP FeaturedとWORKS一覧は同じCore DataとComponentを共有します。

Featured Variantで許可する差：

- Thumbnail表示面積を拡大
- Descriptionを一覧より1文程度長くする
- DesktopでColumn Spanを広げる

変更しないもの：

- 情報順
- Link destination
- Tag上限
- Category / Yearの意味

別ComponentとしてData構造を複製しません。

## Section Heading

共通Pattern：

1. Optional Eyebrow
2. Title
3. Optional Description

Rules：

- Eyebrowを全Sectionへ強制しない
- Titleだけで意味が明確ならTitleのみ
- DescriptionはSectionの役割を補足するときだけ
- EyebrowはLabel Size、600、限定的Letter Spacing
- Heading Levelは見た目ではなくDocument Structureで決める

## Buttons

### Primary

用途：

- View Works
- 主要なLive Demo
- Contactが正式導線になった場合

Rule：

- Accent Background / White Text
- 44px以上の操作高さ
- Medium Radius
- Page内で乱用しない
- 1つのAction Groupに原則1個

### Secondary

用途：

- GitHub
- Back to Works
- Secondary external destination

Rule：

- TransparentまたはSurface Background
- 1px Border
- Text colorはPrimary TextまたはAccent
- Primaryと同じ操作高さ

### Text Link

用途：

- Card Title
- Related Work
- Inline Navigation

Underlineを基本とし、ButtonのようなBoxを不要に増やしません。

### States

- Default
- Hover
- Focus Visible
- Active
- Disabled。必要なForm / Controlだけ

ColorだけでStateを伝えず、Underline、Border、Focus Ring等を併用します。

## Links

### Internal Link

- 原則同じTab
- DestinationをLink Textから理解できる
- Current Pageは将来`aria-current="page"`で示す

### External Link

Defaultは同じTabです。新しいTabを必要とする明確な理由がある場合だけ`target="_blank"`を使用します。

`target="_blank"`使用時：

- `rel="noopener noreferrer"`
- Visible Iconまたは補助Textで新規Tabを通知
- Accessible Nameにも必要な情報を含める

External / Arrow Iconは必要時に小さなInline SVGとして管理します。Icon Libraryは導入しません。

## Tags

### Role

- Project Category
- Strength
- Technology / Quality Attribute

### Rules

- Card：最大3個
- Detail：必要なものだけ。無制限に並べない
- SmallまたはLabel Size
- Small Radius
- BorderまたはSubtle Surface
- Buttonのような強いFillやHoverを付けない
- Filterを実装するまでInteractive Elementにしない

TagをSkill証明の代わりにせず、Detail本文で事実を説明します。

## Project Info

### Common Fields

- Category
- Type
- Role
- Year / Period
- Pages / Format
- Tools / Tech Summary

### Rules

- 作品に存在するFieldだけ表示
- 空文字、`-`、`N/A`を出さない
- Definition Listを第一候補とする
- LabelはLabel Size、ValueはBody
- Mobileは1 column
- Tablet / Desktopは2〜4 column候補
- Live / GitHubはInfo FieldではなくAction Groupとして分離可能

## Detail Hero

### Required

- Type / Category
- Project Title
- Short Description
- Project Info
- Main Visual

### Optional

- Live Demo
- GitHub
- Fictional / Self-initiated disclosure

### Variant Decision

**1-columnをDefault、2-columnをOptional Variant**とします。

VISTA専用の2-columnを全作品の標準にしません。

- 1-column：長いTitle、Editorial Project、Main Visualを大きく見せる作品
- 2-column：CopyとVisualの並列比較が理解を助ける場合
- Mobile：どちらもText → Info / Actions → Visualの意味順を基本

VariantはProject TypeではなくContent適合性で選びます。

## Detail Layout Primitives

作品名に依存しないPrimitiveを定義します。

| Primitive | Purpose |
|---|---|
| Text | 課題、判断、結果の長文 |
| Text + Visual | 説明後に関連Image |
| Visual + Text | Visualを入口に説明 |
| Full Visual | Overview、全体画面、Key Visual |
| Two Visual | Desktop / Mobile、Before / After |
| Three Point | 制作判断や特徴3点 |
| Numbered Sequence | 順序のある制作ポイント |
| Process Steps | Flow、Decision、制作工程 |
| Comparison | Problem / Solution、Before / After |
| Info Grid | Scope、Role、Metrics等の整理 |
| Disclosure | 架空案件、Sample、Dataの注記 |

PrimitiveはLayoutとSemanticsを共通化し、Project固有の色や図形をToken化しません。

## Detail Image Caption

- Caption Size：12px
- Line Height：1.6
- Color：Text Muted
- Position：Image直下
- Gap：8px
- Text Align：原則Left
- 何の画像か、何を確認すべきかを短く説明

`Screenshot 01`だけのCaptionを避けます。装飾画像にはCaptionを強制しません。

## Problem and Solution

共通の必須Section名にはしません。

使用候補：

- Problem：解決すべき課題が明確な作品
- Goal：自主制作やBrief中心で、達成目的を示す作品
- Solution / Approach：判断と実行を説明できる作品

作品にProblemがない場合は無理に作らず、Context / Goal / Approachへ置き換えます。

Comparison Primitiveは意味のある対比が存在する場合だけ使用します。

## Numbered Points

制作ポイント、優先順位、判断順序に使える共通Patternです。

- Numberは順序または参照に意味がある場合だけ
- 3点を基本候補とするが固定しない
- Number、Title、Descriptionで構成
- Mobileで縦に読む
- Desktopで横並びにしてもDOM順を維持

装飾目的でNumberを付けません。

## Process and Flow

`ProcessSteps`という共通概念を定義する価値があります。

用途：

- Design Process
- Performance Decision Flow
- Content / Approval Flow
- ResearchからValidationまで

Rule：

- Step Number / Label
- Title
- Short Description
- Optional Evidence / Link
- Arrow線だけへ意味を依存しない
- Mobileでは自然な縦方向

VISTA専用Componentとして作らず、必要な2作品以上で構造を確認してから実装します。

## Details and Accordion

Native`details` / `summary`を第一候補とします。

用途：

- More Details
- Technical Notes
- 補足的なChallenge

Rules：

- 結論、主要Visual、Role、重要なValidationを最初から折りたたまない
- Summaryだけで内容を予測できる
- Native Keyboard behaviorを維持
- Markerを消す場合は同等のOpen / Closed Indicatorを追加
- Open stateでもHeading Hierarchyを保つ

## Header

### Information Architecture

- Name / Wordmark
- Works
- About
- Contact

### Desktop

- NameとNavigationを同一Levelに置く候補
- 大規模Mega MenuやSkill Linkを追加しない
- Current Pageを示す

### Mobile

- Name
- Menu Button
- Works / About / Contact

Visual Styleは未決定です。Headerを作品Thumbnailより目立たせません。

## Mobile Menu

実装が必要になった場合のRequirement：

- Native`button`
- `aria-expanded`
- `aria-controls`
- Open時の明確なLabel
- EscapeでClose
- TriggerへFocus Return
- Menu内の論理的Focus順
- 背面操作を防ぐ必要がある場合のBody Scroll管理
- JavaScriptがなくても主要Navigationへ到達できるFallbackを検討
- Reduced Motion対応

今回Menuは実装しません。

## Footer

共通候補：

- Name
- Works
- About
- GitHub
- Contact
- Copyright

大規模Sitemap、全作品一覧、全SkillをFooterへ置きません。

External Link RuleとContact方式の決定後に最終構造を定義します。

## Focus

### Token

```text
--color-focus: #C2410C
```

### Rule

- `:focus-visible`を使用
- 3px solid ring
- 3px offset
- Background / Surface上で4.96:1以上
- HoverだけにInteraction理解を依存しない
- Card全体LinkではCard境界にもFocusが分かるようにする
- Image上では2-tone ringまたはSurface separationを検討
- `outline: none`だけの指定は禁止

Focus ColorはAccentと分離し、作品色やViolet Linkに埋もれにくくします。

## Motion

### Tokens

| Token | Value | Use |
|---|---:|---|
| Fast | 160ms | Link、Underline、Button color |
| Base | 240ms | Image hover、small disclosure |
| Standard easing | `cubic-bezier(0.2, 0, 0, 1)` | 共通Transition |

### Rules

- Motionがなくても情報と操作が理解できる
- Entrance AnimationをContent表示の前提にしない
- Large Reveal、Parallax、3D Tiltは禁止
- Image scaleは最大1.02程度
- Transition対象を`all`にしない

## Reduced Motion

`prefers-reduced-motion: reduce`で次を行います。

- Animation durationを実質0へ短縮
- Iterationを1回へ制限
- Transition durationを実質0へ短縮
- Smooth scrollを無効化

Motion OffでContent、State、Navigationが欠損してはいけません。

## Icons

FoundationではIcon Libraryを導入しません。

必要候補：

- External Link
- Direction Arrow
- Menu Open / Close

実装時に用途が確定したIconだけをInline SVGまたは小さな共通Componentとして管理します。装飾目的でIconを増やしません。

## Accessibility

### Foundation Requirements

- `lang="ja"`
- Pageごとに1つの内容を表す`h1`
- Heading Hierarchy
- Semantic Landmark
- Native Interactive Element
- Keyboard操作
- 明確な`:focus-visible`
- Link目的が分かるText
- Color Contrast
- DOM順とVisual順の一致
- ResponsiveでもText拡大とReflowを妨げない
- Reduced Motion

### Component Requirements

- ButtonとLinkの役割を混同しない
- TagをButtonに見せない
- Card内にNested Interactive Elementを作らない
- Image AltとCaptionの役割を分ける
- Project Infoで空Fieldを出さない
- Mobile Menu実装時はFocus Returnを行う

### Validation Widths

375、390、768、1024、1366、1440pxでContainer、Heading、Body、Link、Focusを確認します。

## CSS Architecture

正式構成：

```text
src/styles/
├── tokens.css
├── global.css
└── layout.css
```

### tokens.css

- Color
- Typography
- Spacing
- Container
- Radius
- Border
- Shadow
- Image ratio
- Motion

### global.css

- Reset
- Body foundation
- Base heading
- Base link
- Focus
- Form font inheritance
- Media behavior
- Reduced Motion

### layout.css

- Content / Reading / Wide Container
- Page-level spacing
- 将来必要になった場合のGrid foundation

Component Style FileはComponent実装時に必要性を確認します。現段階で`components.css`を空で作りません。

## CSS Variables

### Naming

```text
--color-*
--font-*
--line-height-*
--space-*
--container-*
--radius-*
--border-*
--shadow-*
--ratio-*
--duration-*
--ease-*
```

### Rule

- Value Scaleは数字、役割が固定された値はSemantic Name
- HexやSpacingをComponent内で繰り返さない
- 1回しか使わず意味も共通化できない値はTokenにしない
- BreakpointはCSS Custom Propertyにせず、DocumentとMedia Queryで管理

## Design Token Scope

### Tokenにするもの

- Portfolio共通Color
- Spacing Scale
- Typography Scale / Weight / Leading
- Container / Gutter
- Radius
- Border width
- Subtle Shadow
- Thumbnail ratio
- Motion duration / easing

### Tokenにしないもの

- VISTA Blue等の作品固有Color
- 作品固有Image Ratio
- Project固有Visual Effect
- 1つのScreenshotだけに必要なCrop位置
- Page固有のDecorative position
- 未決定のComponent value

## Astro Component Mapping

将来の配置候補です。今回新しいComponent Fileは作成しません。

```text
src/components/
├── Header.astro
├── Footer.astro
├── WorkCard.astro
├── SectionHeading.astro
├── ProjectInfo.astro
├── ButtonLink.astro
├── Figure.astro
├── ProcessSteps.astro
└── detail/
    ├── DetailHero.astro
    └── DetailSection.astro
```

### Mapping

| Design element | Future component |
|---|---|
| Global navigation | Header |
| Minimal site end | Footer |
| Shared work summary | WorkCard |
| Eyebrow / Title / Description | SectionHeading |
| Definition list | ProjectInfo |
| Primary / Secondary link action | ButtonLink |
| Image + Caption | Figure |
| Numbered flow | ProcessSteps |
| Work title + info + visual | DetailHero |
| Reusable narrative layout | DetailSection |

2作品以上で再利用構造が確認できるまで、専用Componentを増やしません。

## Implementation Foundation

今回実装する範囲：

- CSS Custom Properties
- System Font Stack
- Base background / text
- Heading scale
- Base link
- Focus visible
- Reduced Motion
- Content / Reading / Wide Container
- Existing Foundation PageへのContainer適用

今回実装しない範囲：

- Work Card
- Button Component
- Tag Component
- Project Info Component
- Detail Hero Component
- Header / Footer完成Style
- Mobile Menu
- Production Image

## Open Decisions

次工程以降で確認します。

1. Public Name / Wordmark
2. TOP Hero CopyとDisplay Typeの最終Size
3. System FontのOS間差が許容できるか
4. Work Card 2-column / 3-columnの実Content検証
5. 3:2 Thumbnail内の作品別`cover` / `contain`
6. HeaderのMobile Menuが必要になる幅
7. Contact方式
8. External Linkを新規Tabにする例外
9. Detail Heroの作品別Variant
10. Noto Sans JP導入を再評価する条件
11. Dark Modeの将来要否

これらを仮値でTokenやComponentへ先行実装しません。
