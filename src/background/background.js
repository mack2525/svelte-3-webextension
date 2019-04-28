console.log('background script run!', browser);

browser.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log('got message in background', request, sender, sendResponse);
    });
