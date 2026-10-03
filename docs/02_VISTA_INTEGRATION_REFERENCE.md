# VISTA Integration Reference

> **Status: Integration Reference / Planning**

VISTAをPortfolioへ掲載するときに参照する正本をまとめたReferenceです。VISTAのCopy、Case Study、実装計画、Detail仕様、Asset台帳の全文は本Repositoryへ複製せず、VISTA Repository側の正式Documentを参照します。

## Project Links

- **VISTA Repository:** [Coconattsu0723/vista-progress-saas](https://github.com/Coconattsu0723/vista-progress-saas)
- **Live Demo:** [VISTA](https://coconattsu0723.github.io/vista-progress-saas/)

## Source of Truth

参照時はVISTA Repositoryの`main` Branchにある次のDocumentを正本とします。

1. **Portfolio Short Copy**<br>
   [`03_Docs/PORTFOLIO_SHORT_COPY.md`](https://github.com/Coconattsu0723/vista-progress-saas/blob/main/03_Docs/PORTFOLIO_SHORT_COPY.md)<br>
   Work Card、Overview、Problem / Solution、Production Points、Project Info、Skill Tagsの正式Copy。

2. **Long-form Case Study**<br>
   [`03_Docs/PORTFOLIO_CASE_STUDY.md`](https://github.com/Coconattsu0723/vista-progress-saas/blob/main/03_Docs/PORTFOLIO_CASE_STUDY.md)<br>
   課題設定、Design判断、Implementation、Accessibility、Performance、QAの詳細記録。

3. **Portfolio Implementation Plan**<br>
   [`03_Docs/PORTFOLIO_IMPLEMENTATION_PLAN.md`](https://github.com/Coconattsu0723/vista-progress-saas/blob/main/03_Docs/PORTFOLIO_IMPLEMENTATION_PLAN.md)<br>
   Card、Detail Hero、Section Priority、Asset用途、Copy Mappingの掲載準備仕様。

4. **Portfolio Detail Page Specification**<br>
   [`03_Docs/PORTFOLIO_DETAIL_PAGE_SPEC.md`](https://github.com/Coconattsu0723/vista-progress-saas/blob/main/03_Docs/PORTFOLIO_DETAIL_PAGE_SPEC.md)<br>
   VISTA Detail PageのSection順、Responsive、Image、Accessibility、SEO候補の設計仕様。

5. **Image Assets**<br>
   [`03_Docs/IMAGE_ASSETS.md`](https://github.com/Coconattsu0723/vista-progress-saas/blob/main/03_Docs/IMAGE_ASSETS.md)<br>
   正式Asset、寸法、用途、Master / Derivativeの管理台帳。

## Reference Rules

- Portfolio全体の企画、Routing、Design System、共通Componentは本Repositoryで管理する
- VISTA固有のCopy、Case Study、Asset情報はVISTA Repositoryを正本とする
- VISTA Assetは実装時に必要なものだけ、台帳と用途を確認して正式移植する
- Source Masterを上書きしない
- VISTA OGPをDetail Heroへ流用しない
- 架空BtoB SaaS、自主制作、CONTACT非送信仕様をPortfolio上でも明示する
- VISTA側Documentの全文を本Referenceへ重複保存しない

## Current Boundary

現段階ではReferenceだけを配置しています。VISTAの画像、Logo、Copy本文、HTML / CSS / JavaScript、Pencil Dataは本Repositoryへ移植していません。
