# fumiduki-detective

文月探偵事務所

## 開発コマンド

これはTypeScript、TailwindCSS、Biomeをリント/フォーマットに使用するNext.jsプロジェクトです。

- `pnpm dev` - Turbopackで開発サーバーを起動
- `pnpm build` - Turbopackでプロダクションバンドルをビルド
- `pnpm start` - プロダクションサーバーを起動
- `pnpm check` - src/でBiomeチェックを実行し問題を自動修正
- `pnpm lint` - src/でBiomeリンターを実行し問題を自動修正
- `pnpm format` - src/でBiomeを使用してコードをフォーマット

**重要**: 変更後は必ず`pnpm check`を実行して、コード品質とフォーマット基準を満たしていることを確認してください。

## アーキテクチャ概要

これはNext.js 15 App Routerアーキテクチャで構築された日本の探偵事務所ウェブサイトです：

### プロジェクト構造
```
src/
├── app/           # Next.js App Routerページ
│   ├── layout.tsx # 日本語ロケールとSEOメタデータを含むルートレイアウト
│   ├── page.tsx   # ホームページ
│   ├── contact/   # お問い合わせページ
│   ├── fee/       # 料金情報
│   ├── information/ # 情報記事（i00, i01）
│   ├── policy/    # プライバシーポリシー
│   ├── seminar/   # セミナーページ（s00, s01, s02）
│   ├── service/   # サービス概要
│   └── staff/     # スタッフ情報
├── components/    # 再利用可能なReactコンポーネント
└── shared/        # 共有データとユーティリティ
    ├── topicInformation.ts
    └── seminarInformation.ts
```

### 主要技術
- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **TailwindCSS 4** for styling with PostCSS
- **Biome** for linting, formatting, and import organization
- **Swiper** for carousel/slider components

### コード規約
- TypeScriptでstrictモード有効
- Biomeフォーマッター（120文字行幅、ダブルクォート、スペースインデント）
- インポートパスエイリアス `@/*` は `./src/*` にマップ
- 日本語コンテンツ（ルートレイアウトでlang="ja"）
- Open GraphとTwitter Cardメタデータを使用したSEO最適化

### コンポーネントアーキテクチャ
コードベースは`/src/components/`の再利用可能なコンポーネントを使用したコンポーネントベースアーキテクチャを採用：
- `SeminarPage.tsx` - セミナー詳細ページのテンプレート
- `PageHeader.tsx` - 共通ページヘッダーコンポーネント
- `Slider.tsx` - Swiperを使用したカルーセルコンポーネント
- `Feature.tsx`, `ServiceItem.tsx`, `StaffMember.tsx` - コンテンツ表示コンポーネント
- `CheckListItem.tsx`, `QaItem.tsx` - インタラクティブリストコンポーネント

### データ管理
共有データは`/src/shared/`に集約：
- `seminarInformation.ts` - セミナーコンテンツとメタデータ
- `topicInformation.ts` - トピック/記事情報

このサイトは外部API依存なしで静的生成され、探偵事務所のサービス紹介に焦点を当てます。
