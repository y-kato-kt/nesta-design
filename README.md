# NESTA DESIGN

愛知県を拠点とする架空の建築・内装デザイン会社を想定して制作した、
HTML / CSS / JavaScriptによるコーポレートサイトです。

ポートフォリオ掲載用の架空案件として、
企業サイトの情報設計・デザイン・レスポンシブ対応・下層ページ制作まで一式で構築しています。

## Demo

公開サイト：

https://y-kato-kt.github.io/nesta-design/

## Concept

NESTA DESIGNは、

- 店舗内装設計
- オフィス内装設計
- 住宅リノベーション
- 空間デザイン
- 施工管理

を一貫して行う架空のデザインスタジオです。

「空間から、心地よい時間をつくる。」をテーマに、
建築・内装会社らしい信頼感と、制作会社らしい洗練されたデザインの両立を目指しました。

## Pages

- TOP
- ABOUT
- SERVICE
- WORKS
- WORKS DETAIL
- COMPANY
- CONTACT

## Features

- レスポンシブ対応
- PC / Tablet / Smartphone対応
- ハンバーガーメニュー
- スクロール時のヘッダー変化
- Intersection Observerによるフェードイン
- 画像hoverアニメーション
- WORKS一覧 / 詳細ページ
- CONTACTフォームのフロント側入力チェック
- セマンティックHTML
- alt属性対応
- focus表示
- prefers-reduced-motion対応

## Technologies

- HTML5
- CSS3
- JavaScript
- Git / GitHub
- GitHub Pages

フレームワークや外部JavaScriptライブラリは使用していません。

## Project Structure

```text
nesta-design/
├─ index.html
├─ about.html
├─ service.html
├─ works.html
├─ works-detail.html
├─ company.html
├─ contact.html
├─ css/
│  └─ style.css
├─ js/
│  └─ script.js
├─ images/
├─ templates/
│  ├─ header.html
│  └─ footer.html
└─ scripts/
   └─ sync-layout.py
```

## Design Approach

デザイン検討では、以下の実在サイトを参考にしました。

- GT DESIGN
- A-WORKS
- Napup

参考にした主な要素：

- 大きな写真の見せ方
- 英字見出し
- 余白
- セクション番号
- 罫線
- SERVICEの情報整理
- WORKSの見せ方
- 日本語と英語のタイポグラフィ

各サイトのHTML / CSS / 文章 / 画像 / 独自素材を転載・複製したものではありません。

複数サイトの構成やデザイン要素を研究し、
NESTA DESIGNとしてオリジナルのレイアウトに再構成しています。

## Images

本サイトで使用している主要ビジュアルは、
ポートフォリオ用の架空案件に合わせて生成したAI画像です。

実在する建築物、店舗、オフィス、住宅、クリニック、企業の施工実績を示すものではありません。

| File | Usage |
| --- | --- |
| hero.png | Hero |
| work-office.png | MORI OFFICE |
| work-cafe.png | KITO CAFE |
| work-residence.png | HANA RESIDENCE |
| work-clinic.png | AO CLINIC |
| company.png | Company |

案件ごとに、

- 住宅
- オフィス
- カフェ
- クリニック
- デザインスタジオ

の雰囲気が分かれるよう、用途に合わせてビジュアルを調整しています。

## Works

WORKSには以下の架空案件を掲載しています。

- MORI OFFICE
- KITO CAFE
- HANA RESIDENCE
- AO CLINIC
- NEST SHOP
- SOU HAIR SALON

MORI OFFICEには詳細ページを用意し、

- Project Info
- Project Concept
- Design Point
- Gallery

まで確認できる構成にしています。

## Contact Form

CONTACTページはポートフォリオ用デモです。

以下をフロント側でチェックしています。

- 必須項目
- 空白入力
- メールアドレス形式
- 電話番号形式
- プライバシーポリシー同意

実際のメール送信やサーバーへの保存は行いません。

## Responsive Design

以下の画面幅を意識して調整しています。

- Desktop
- Tablet
- Smartphone
- Small mobile devices

確認内容：

- 横スクロールが発生しない
- スマホではWORKSを1カラム表示
- ハンバーガーメニュー
- フォーム操作性
- 文字サイズ
- 画像トリミング
- タップ領域

## Development Flow

今回の制作では、

1. 参考サイト選定
2. 架空企業設定
3. ページ構成・要件整理
4. TOPページ制作
5. 下層ページ制作
6. PC表示レビュー
7. スマートフォン表示レビュー
8. 画像差し替え
9. Git / GitHub公開
10. GitHub Pages公開

という流れで制作しました。

AIを実装支援に使用しながら、
レイアウト・文字サイズ・余白・レスポンシブ・画像選定・修正内容は都度ブラウザで確認し、
調整を行っています。

## Notes

本サイトはポートフォリオ掲載用の架空企業サイトです。

実在する企業、建築物、施工事例、代表者、所在地とは関係ありません。