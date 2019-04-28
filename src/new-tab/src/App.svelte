<script>
  import browser from "webextension-polyfill";
  import { sendMessageToExtension } from "../../util/utils";

  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("got message in new tab", request);
  });
  let value = "Message";

  function sendMessage() {
    sendMessageToExtension(browser, value);
  }
</script>

<style>
</style>
<input bind:value>
<button on:click={sendMessage}>send message</button>
