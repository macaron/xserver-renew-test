# XServer Renew Test

XServerの無料VPSサービスの契約を自動的に延長するためのPlaywrightテストスクリプトです。手動での延長作業を自動化し、VPSサービスの継続利用を支援します。

## セットアップ

`不審なログイン時の認証` を「無効」に設定変更してください
https://secure.xserver.ne.jp/xapanel/myaccount/account/loginsecurity/input

<img src="https://github.com/user-attachments/assets/ede29051-41e0-44fc-911d-95501e70a5fd" width="800">

### Docker環境での実行

```bash
docker pull ghcr.io/macaron/xserver-renew-test:latest
```

環境変数を指定してコンテナを実行

```bash
# 環境変数を直接指定
docker run --rm \
  -e XSERVER_EMAIL=your-email@example.com \
  -e XSERVER_PASSWORD=your-password \
  ghcr.io/macaron/xserver-renew-test:latest

# .envファイルを使用
docker run --rm --env-file .env ghcr.io/macaron/xserver-renew-test:latest
```

### ローカル環境での実行

リポジトリをクローン

```bash
git clone git@github.com:macaron/xserver-renew-test.git
cd xserver-renew-test
```

依存関係をインストール

```bash
npm install
```

環境変数を設定

```bash
cp .env.example .env
```

`.env`ファイルを編集し、XServerのログイン情報を設定：

```.env
XSERVER_EMAIL=your-email@example.com
XSERVER_PASSWORD=your-password
```

Playwrightブラウザをインストール

```bash
npx playwright install
```

基本的なテスト実行

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
