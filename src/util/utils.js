export function sendMessageToActiveTabContent(browser, message) {
    browser.tabs.query({ active: true, currentWindow: true })
        .then(tabs => {
            console.log('active tab', tabs[0]);
            if (tabs[0].url.startsWith('http')) {
                browser.tabs.sendMessage(tabs[0].id, message)
                    .then((response) => {
                        console.log('sent message in background', message);
                    });
            }

        });
}

export function sendMessageToExtension(browser, message) {
    browser.runtime.sendMessage(browser.extension.id, message).then(response => {
        console.log("sent from new tab to extension", response);
    });
}