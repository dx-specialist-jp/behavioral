# 行動経済学大全

「人はなぜ、いつも『合理的』に選べないのか。」行動経済学の原理を、イラストと体験型のミニデモで1つずつ学べる学習サイトです（愛称: くせラボ）。個人の学習コンテンツとして公開しており、広告掲載や販売など収益化は行っていません。

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

## 参考文献

各原理ページの解説は、相良奈美香『行動経済学が最強の学問である』（SBクリエイティブ、2023年）や、Kahneman・Tversky・Thaler・Cialdini・Arielyらの古典的な研究をもとに、独自に噛み砕いて執筆しています。詳細はサイト内の[参考文献ページ](https://dx-specialist-jp.github.io/behavioral/#/references)を参照してください。
