console.log('background script run!', browser);

browser.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        // console.log(sender.tab ?
        //     "from a content script:" + sender.tab.url :
        //     "from the extension");
        // if (request.greeting == "hello")
        //     sendResponse({ farewell: "goodbye" });
        console.log('got message in background', request);
    });

browser.tabs.query({ active: true, currentWindow: true })
    .then(tabs => {
        console.log('found tab', tabs[0]);
        if (tabs[0].url.startsWith('http')) {
            browser.tabs.sendMessage(tabs[0].id, { greeting: "message from background" })
                .then((response) => {
                    console.log('sent message in background');
                });
        }

    });