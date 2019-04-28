<script>
  import browser from "webextension-polyfill";
  import { sendMessageToActiveTabContent } from "../../util/utils";

  let value = "Message";
  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    return new Promise(resolve => {
      resolve("Message received in popover");
    });
  });

  function sendMessage() {
    sendMessageToActiveTabContent(browser, value);
  }
</script>

<style>
</style>

<input bind:value>
<button on:click={sendMessage}>send message</button>
