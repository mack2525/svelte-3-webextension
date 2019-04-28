<script>
  import browser from "webextension-polyfill";
  console.log("POPUP", browser);
  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    return new Promise((resolve) => {
      console.log('got a new message in popover',request);
      resolve('Message received in popover');
    })
  });

  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    console.log("found tab", tabs[0]);
    browser.tabs
      .sendMessage(tabs[0].id, { greeting: "message from background" })
      .then(response => {
        console.log("sent message in background");
      });
  });
</script>

<style>
</style>

<h1>POPUP</h1>
