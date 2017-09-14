chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "safesetup.html"}, function (tab) {
        console.log("New tab launched with safesetup.html");
    });
});
