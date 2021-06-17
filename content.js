console.log("hi there")

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
  if (message.txt == "hello") {
    let paragraphs = document.getElementsByTagName('p');
    for (let el of paragraphs) {
      el.style['background-color'] = 'magenta';
    }
  }
}

function changeBackgroundColor () {
let count = 0;
const arrayOfColors = ["blue", "green", "yellow", "orange", "red", "blank"]
setInterval(function () {
    document.body.style.backgroundColor = arrayOfColors[count];
    count += 1;
    if (count === arrayOfColors.length - 1) {
        count = 0;
    }
}, 500);
}


changeBackgroundColor();

// for (let i = 0; i < arrayOfColors.length; i++) {
// changeBackgroundColor(i);
// }
