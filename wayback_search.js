chrome.contextMenus.removeAll(() => {
  chrome.contextMenus.create({
    id: "searchWaybackforYoutube",
    title: "Wayaback検索",
    contexts: ["link"],
    targetUrlPatterns: ["*://*.youtube.com/watch*"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchWaybackforYoutube") {
      // YouTube動画リンクから動画ID（11文字）を抽出
      const url = new URL(info.linkUrl);
      const videoId = url.searchParams.get("v");

      // 動画IDが存在するか確認
      const videoIdLength = 11;
      if (videoId && videoId.length === videoIdLength) {
          // URLを生成
          const customURL = `https://web.archive.org/web/2oe_/http://wayback-fakeurl.archive.org/yt/${videoId}`;
          
          // 新しいタブでカスタムURLを開く
          chrome.tabs.create({ 
            url: customURL, 
            active: false // フォーカスさせない
        });
      } else {
          console.error("動画IDが見つかりませんでした。");
      }
  }
});