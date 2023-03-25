console.log('contents.js first line executed')

const predefinedText = 'Your predefined text here';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'pastePredefinedText') {
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
      activeElement.value = predefinedText;
    }
  }
});
