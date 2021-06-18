
// window.addEventListener('click', (event) => {

chrome.runtime.onMessage.addListener(recival)
// var count=0
function recival(req,sender,sendRes){
    if(req !== null){

var popi
while(!popi){ 
popi = window.prompt("Enter the word you want to search for")
}
console.log("in script");
// document.getElementById("btn1").addEventListener("click", input);

// var popi;
// function input(){
//     popi = document.getElementById("word1").value

// }
// var popi = globalVariable.popi


console.log(popi)
if(popi !== undefined){ 

findWord(document.body)
function findWord(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(findWord)
    }
    else if(element.nodeType === Text.TEXT_NODE){
        // element.textContent = element.textContent.replace(/with/gi,
        // '█████')
        // var sword = 'word'
        var sword = new RegExp(popi,'gi')
        // var temp = "sword";
        if(element.textContent.match(sword)){
            // count++;
            // console.log(count)
            const newEle = document.createElement('span')
            // var re = /(\w+)\s(\w+)/;
            // sword.replace(re, '$2, $1');
            
            var MyVar = element.textContent.match(sword)
            newEle.innerHTML = element.textContent.replace(sword , `<span id="highlight">${popi}</span>`)
            
            element.replaceWith(newEle);
            
        }
    }
}
}
// });
// console.log(count)
// alert("Number of matches : " + count)
}

}
