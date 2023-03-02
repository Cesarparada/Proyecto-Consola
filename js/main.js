let selectBtn = document.getElementById("select");
let button1Btn = document.getElementById("button1");
let startBtn = document.getElementById("start");
let imgchange = documen.getElementById("imgchange");

selectBtn.onclick = function (){
    imgchange.src = "/multimedia/nintendo.gif";
}
button1Btn.onclick = function () {
    imgchange.src = "/multimedia/theminiscap.gif";    
}
startBtn.onclick = function (){
    imgchange.src = "/multimedia/linkgif.gif";
}