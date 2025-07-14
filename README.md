# XServer Renew Test

XServerの無料VPSサービスの契約を自動的に延長するためのPlaywrightテストスクリプトです。手動での延長作業を自動化し、VPSサービスの継続利用を支援します。

## セットアップ

`不審なログイン時の認証` を「無効」に設定変更してください
https://secure.xserver.ne.jp/xapanel/myaccount/account/loginsecurity/input

<img src="https://private-user-images.githubusercontent.com/71738/465796639-ede29051-41e0-44fc-911d-95501e70a5fd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI0OTc2MzEsIm5iZiI6MTc1MjQ5NzMzMSwicGF0aCI6Ii83MTczOC80NjU3OTY2MzktZWRlMjkwNTEtNDFlMC00NGZjLTkxMWQtOTU1MDFlNzBhNWZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzE0VDEyNDg1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMyYmQxZDFkNjcxMTBmNWViNjQxODcxZDU4NGU5ODFkZDA3MTUxZWY3ZDAzODU5NzUzNGE0Y2U0ZjIyN2UwN2EmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.1mIJdu6Uodrt6YAJRs-IO2-qN-uMOqlb6iPb5qvtwMY" width="800">

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
