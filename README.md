# くせラボ

行動経済学の原理を、イラストと体験型のミニデモで1つずつ学べる学習サイトです。個人の学習コンテンツとして公開しており、広告掲載や販売など収益化は行っていません。

https://dx-specialist-jp.github.io/behavioral/

## 技術スタック

- React 19 + TypeScript
- Vite 8
- react-router-dom(HashRouter)
- CSS Modules

## 開発

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # 型チェック + 本番ビルド
npm run lint     # oxlint
npm run preview  # ビルド結果のプレビュー
```

## デプロイ

`main` ブランチへの push をトリガーに GitHub Actions(`.github/workflows/deploy.yml`)が GitHub Pages へ自動デプロイします。

## イラストのクレジット

各原理ページの「まとめ」欄などに使用しているイラストは、[いらすとや](https://www.irasutoya.com/)の無料素材を[利用規約](https://www.irasutoya.com/p/terms.html)に従って使用しています。
