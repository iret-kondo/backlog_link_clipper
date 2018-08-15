chrome.tabs.onUpdated.addListener((tabId) => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.includes('backlog.jp/view/')) {
      chrome.pageAction.show(tabId);
    }
  });
});

chrome.pageAction.onClicked.addListener(function(tab){
  var text_area = document.createElement('textarea');
  var title = tab.title.match(/\[.*\] (.*) \| 課題の表示.*/)

  text_area.value = "[" + title[1] + "](" + tab.url + ")";
  document.body.appendChild(text_area);

  text_area.select();
  document.execCommand('copy');
  document.body.removeChild(text_area);
});
