# XServer Renew Test

XServerの無料VPSサービスの契約を自動的に延長するためのPlaywrightテストスクリプトです。手動での延長作業を自動化し、VPSサービスの継続利用を支援します。

## セットアップ

### ローカル環境での実行

1. リポジトリをクローン

```bash
git clone 
cd xserver-renew-test
```

1. 依存関係をインストール

```bash
npm install
```

1. 環境変数を設定

```bash
cp .env.example .env
```

`.env`ファイルを編集し、XServerのログイン情報を設定：

```.env
XSERVER_EMAIL=your-email@example.com
XSERVER_PASSWORD=your-password
```

1. Playwrightブラウザをインストール

```bash
npx playwright install
```

### Docker環境での実行

1. Dockerイメージをビルド

```bash
docker build -t xserver-renew-test .
```

1. 環境変数を指定してコンテナを実行

```bash
# 環境変数を直接指定
docker run --rm \
  -e XSERVER_EMAIL=your-email@example.com \
  -e XSERVER_PASSWORD=your-password \
  xserver-renew-test

# .envファイルを使用
docker run --rm --env-file .env xserver-renew-test
```

1. テスト結果を保存したい場合（ボリュームマウント）

```bash
docker run --rm \
  --env-file .env \
  -v $(pwd)/test-results:/app/test-results \
  -v $(pwd)/playwright-report:/app/playwright-report \
  xserver-renew-test
```

## 使用方法

### 基本的なテスト実行

```bash
# 全テストを実行
npm test

# XServerテストのみ実行
npm run test:xserver

# ヘッド付きモードで実行（ブラウザが表示される）
npm run test:headed

# デバッグモードで実行
npm run test:debug

# テストレポートを表示
npm run test:report
```

### Docker環境でのテスト実行

```bash
# 基本実行
docker run --rm --env-file .env xserver-auto-extend

# テスト結果を保存
docker run --rm --env-file .env \
  -v $(pwd)/test-results:/app/test-results \
  -v $(pwd)/playwright-report:/app/playwright-report \
  xserver-renew-test
```
