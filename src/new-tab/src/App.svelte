<script>
  import browser from "webextension-polyfill";

  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // console.log(sender.tab ?
    //     "from a content script:" + sender.tab.url :
    //     "from the extension");
    // if (request.greeting == "hello")
    //     sendResponse({ farewell: "goodbye" });
    console.log("got message in new tab", request);
  });
  let value = "Message";

  function sendMessage() {
    browser.runtime.sendMessage(browser.extension.id, value).then(response => {
      console.log("sent from new tab to extension", response);
    });
  }
</script>

<style>
</style>
<input bind:value>
<button on:click={sendMessage}>send message</button>
