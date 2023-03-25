console.log('background.js first line executed')
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'predefinedTextPaster',
    title: 'Paste predefined text',
    contexts: ['editable'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'predefinedTextPaster') {
    chrome.tabs.sendMessage(tab.id, {
      action: 'pastePredefinedText',
    });
  }
});
