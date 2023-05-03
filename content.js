console.log('contents.js first line executed')

const predefinedText = 'Please use the Socratic method to teach me *all* of the following content; please do *NOT* ask more than one question PER REPLY and please do *NOT* answer your own questions:\n\n';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'pastePredefinedText') {
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
      activeElement.value = predefinedText;
    }
  }
});
