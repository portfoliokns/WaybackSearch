# このアプリケーションについて
これはyoutubeの動画がwayback上にアーカイブされているかを検索するための拡張です。機能は検索機能のみとなります。

# 事前準備
## Google Chromeをインストールしてください
ほとんどの方がChromeを使用していると思うので、インストール手順は省略。

## 拡張機能のファイルをダウンロード
以下のコマンドを実行し、WaybackSearchExtensionをクローンしてください。
```
git clone https://github.com/portfoliokns/WaybackSearchExtension.git
```

「WaybackSearchExtension」フォルダの中に、以下のファイルがあればダウンロード完了となります。
- manifest.json
- wayback_search.js

## 拡張機能のインストール
1. Google Chromeを開いて、「設定 > 拡張機能」を開いてください。
2. 「デベロッパー モード」のチェックをONにしてください。
3. 「パッケージ化されていない拡張機能を読み込む」をクリックしてください。
4. 先ほどダウンロードした「WaybackSearchExtension」フォルダを選択してください。
5. 「すべての拡張機能」の中に、Wayback検索が追加されていることを確認してください。
6. YouTubeを開き、動画を右クリックして、メニューの中に「Wayback検索」が表示されていることを確認してください。

# 使い方
- Wayback検索したいYouTubeの動画のリンクを右クリックしてください。
- メニューの中の「Wayback検索」をクリックしてください。
- クリック後、Wayback Machineのページが表示されます。もしアーカイブされている動画があれば、その動画が表示されます。

# 免責事項
- この拡張機能はGitHub上で公開されています。この拡張機能を使用したことにより発生した被害や損害について、このアプリの開発者は一切関与致しません。
