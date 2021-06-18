document.addEventListener('DOMContentLoaded', ()=> { 
chrome.browserAction.onClicked.addListener(buttonClicked)

// document.body.innerHTML = bodyHTML;
function buttonClicked(tab){
//     document.body.innerHTML = bodyHTML;
// console.log(bodyHTML)
    // if(document.body.innerHTML === bodyHTML){ 
    chrome.tabs.sendMessage(tab.id, "here i am !")
    // }
}
})