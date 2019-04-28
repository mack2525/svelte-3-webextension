console.log('content script run!', browser);
import { sendMessageToExtension } from '../util/utils';

browser.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log('got message in content', request);
    });

function sendMessage(message) {
    sendMessageToExtension(browser, message);
}