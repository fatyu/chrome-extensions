function setEeditable() {
 chrome.tabs.executeScript(null,
      {code:"document.body.contentEditable='true'"});
}
chrome.browserAction.onClicked.addListener(setEeditable);
setEeditable();
