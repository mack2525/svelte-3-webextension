console.log('content script run!', browser);
browser.runtime.sendMessage(browser.app.id, { greeting: "hello from content" })
    .then((response) => {
        console.log('sent from content to extension', response);
    });

browser.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        // console.log(sender.tab ?
        //     "from a content script:" + sender.tab.url :
        //     "from the extension");
        // if (request.greeting == "hello")
        //     sendResponse({ farewell: "goodbye" });
        console.log('got meessage in content', request);
    });