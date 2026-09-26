# NESTA DESIGN — コーポレートサイト初稿

愛知の架空の建築・内装デザイン会社を想定した、HTML / CSS / JavaScriptによる静的サイトです。ビルド・外部ライブラリ・Webフォントは不要です。

## 確認方法

`index.html` をブラウザで開いてください。ローカルサーバーを使う場合は、このフォルダで `python -m http.server 8080 --bind 127.0.0.1` を実行し、`http://127.0.0.1:8080` にアクセスします。

## 構成と編集箇所

- `index.html`: 全9セクション。文言・画像の `src` / `alt`・リンク先を編集します。
- `about.html`: コンセプト・3つの設計思想・代表メッセージ。
- `service.html`: 内装設計・リノベーション・施工管理の詳細と6段階のFLOW。
- `works.html`: 架空実績6件の一覧と紹介。
- `works-detail.html`: MORI OFFICEの概要・コンセプト・設計ポイント・参考ギャラリー3枚。
- `company.html`: 会社紹介・概要・理念・アクセス用プレースホルダー。
- `contact.html`: 入力チェックとデモ完了表示、デモ用プライバシーポリシー。
- `css/style.css`: TOPのスタイルに続き、末尾のSubpages以下に下層ページ共通スタイルを追加。冒頭のCSS変数で色・余白を調整できます。
- `templates/header.html` / `templates/footer.html`: 全ページ共通パーツの編集元。
- `scripts/sync-layout.py`: 共通パーツと現在ページのaria-currentを全HTMLに反映する標準Pythonスクリプト。
- `js/script.js`: モバイルナビ、ヘッダーの状態変更、Intersection Observer、Instagramのデモ案内、フォームの入力チェックとデモ完了表示。
- `images/`: ローカル保存した仮写真6枚とSVG favicon。
- `previews/`: PC・タブレット・スマートフォンの表示確認用スクリーンショット。サイトの動作には不要です。

レスポンシブの区切りは1024px、700px。320px幅の小型端末も考慮しています。画像はobject-fitでトリミングしています。被写体の位置は各画像の `object-position` で調整してください。

## 画像の差し替えと出典

写真はUnsplashの仮画像です。架空の案件名と実際の撮影場所・建物・施工者には関係がありません。クリニックにはラウンジの参考写真を使用しています。Heroと住宅実績は同じ写真を異なる解像度で使用しています。

| ファイル | 使用箇所 | 取得元（Unsplash画像） |
| --- | --- | --- |
| hero.jpg | Hero | https://images.unsplash.com/photo-1600210492486-724fe5c67fb0 |
| work-office.jpg | MORI OFFICE | https://images.unsplash.com/photo-1497366754035-f200968a6e72 |
| work-cafe.jpg | KITO CAFE | https://images.unsplash.com/photo-1554118811-1e0d58224f24 |
| work-residence.jpg | HANA RESIDENCE | https://images.unsplash.com/photo-1600210492486-724fe5c67fb0 |
| work-clinic.jpg | AO CLINIC | https://images.unsplash.com/photo-1497366811353-6870744d04b2 |
| company.jpg | Company | https://images.unsplash.com/photo-1497366216548-37526070297c |

画像取得日: 2026-09-23。ライセンス: https://unsplash.com/license 。参考企業サイトの画像・コード・文言は使用していません。

## 共通パーツとページの更新

Header / Footerは全ページで各HTMLへリンクします。共通パーツを変更するときは `templates/header.html` / `templates/footer.html` を編集して、ルートで `python scripts/sync-layout.py` を実行してください。HTMLの `shared:header` / `shared:footer` マーカー間だけを書き換えます。生成済みHTMLはJavaScriptなしでも共通パーツを表示でき、追加のビルド・サーバーは不要です。

MORI OFFICEは詳細ページへ、その他のTOP実績はWORKSの該当案件へリンクします。一覧のMORI OFFICE以外の写真リンクは、そのカードの紹介文へ移動します。NEXT PROJECTはWORKS内のKITO CAFEへ移動します。Instagramは実在アカウントがない旨を案内します。

CONTACTは送信を行いません。必須項目・空白のみ・メール形式・電話番号（入力時）・同意をチェックし、成功時は入力をリセットしてデモ完了表示に切り替えます。入力内容のネットワーク送信・ストレージ保存は行いません。JavaScript無効時は送信ボタンを無効にして説明を表示します。プライバシーポリシーはこのデモの動作だけを説明するものです。

追加実績NEST SHOP / SOU HAIR SALON、下層の写真、MORI OFFICEのギャラリーは既存の仮画像を再利用しています。ギャラリーは同一物件の撮影写真ではありません。公開前に案件用途に合う写真へ差し替えてください。

Worksは `article.work-card` ごとに追加・編集可能です。Header、Footer、Works、Service、CTAは区切ってあり、将来WordPressテンプレートへ移しやすい構成です。

## デザインの考え方

- GT DESIGN: 大きな写真と英字、章番号による区切りを参考に、明るい背景の独自レイアウトへ展開。
- A-WORKS: 一貫対応の事業説明、実績と企業情報への明確な導線。
- Napup: 番号と罫線で整理したService、日本語と英語の強弱、広い余白。

## 公開前・次稿での検討

案件用途に合う写真・正式な会社概要への差し替え、各実績の個別詳細、実送信用バックエンドと実運用のプライバシーポリシー、実ドメイン確定後のcanonical / OGP画像を追加します。現在は架空サイトのため、架空の所在地詳細・連絡先・実績の実在性を示す構造化データは設定していません。

## 初稿の確認記録

Edge（Chromium）のヘッドレスブラウザで幅320 / 390 / 700 / 768 / 1024 / 1440pxを確認。横スクロールなし、写真6枚の読み込み、h1が1つ、アンカーの遷移先、スクロール後のヘッダー変化、フェードインの表示完了を確認しています。モバイルメニューの開閉・Escapeキー・ページ内移動・ダイアログ開閉も確認済み。コンソールエラーなし。動きを減らす設定とJavaScript無効時の本文表示も確認しています。

Safari / iOS / Android実機は未確認です。次稿では実機上の日本語フォント、写真のトリミング、タップのしやすさを確認してください。

## 下層ページの確認記録（2026-09-24）

TOPを含む全7ページについて、Edgeのヘッドレスブラウザで幅320 / 390 / 768 / 1440pxを確認。画像の読み込み、全ローカルリンクとアンカー、h1が1つ、ID重複なし、横スクロールなしを確認しました。幅390pxで全ページのハンバーガーメニュー開閉を確認。実送信・メール配信は未実装です。
