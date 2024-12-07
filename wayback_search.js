const searchWaybackforYoutube = "searchWaybackforYoutube"
const searchWaybackforWebSite = "searchWaybackforWebSite"

chrome.contextMenus.removeAll(() => {
  chrome.contextMenus.create({
    id: searchWaybackforYoutube,
    title: "YouTube検索",
    contexts: ["link"],
    targetUrlPatterns: ["*://*.youtube.com/watch*"]
  });

  chrome.contextMenus.create({
    id: searchWaybackforWebSite,
    title: "Webサイト検索",
    contexts: ["link"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === searchWaybackforYoutube) {
    youtubeSearch(info.linkUrl)
  }

  if (info.menuItemId === searchWaybackforWebSite) {
    websiteSearch(info.linkUrl)
  }
});

function youtubeSearch(linkUrl) {
  // YouTube動画リンクから動画ID（11文字）を抽出
  const url = new URL(linkUrl);
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

function websiteSearch(linkUrl) {
  const today = new Date();
  const year = today.getFullYear();
  const customURL = `https://web.archive.org/web/${year}0000000000*/${linkUrl}`;

  chrome.tabs.create({ 
    url: customURL, 
    active: true
  });
}