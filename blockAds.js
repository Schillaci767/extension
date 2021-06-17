
   const defaultFilters = [
    "*://*.hackreactor.com/*",
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {     
    return { redirectUrl: 'https://youtu.be/hf5Ibp1Tc0M?t=1403' }},
    { urls: defaultFilters },
    ["blocking"])



chrome.browserAction.onClicked.addListener(clickButton)
    
function clickButton(tab) {
    //console.log("button clicked!");
    
    let msg = {txt: "hello"};
    chrome.tabs.sendMessage(tab.id, msg);
}
// 'https://youtu.be/hf5Ibp1Tc0M?t=1403'}

// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {     
//         return { cancel: true }},
//     { urls: ["<all_urls>"] },
//     ["blocking"]

// )



