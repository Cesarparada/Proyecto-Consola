let button1Btn = document.getElementById("button1");
let startBtn = document.getElementById("start");
let imgchange = document.getElementById("imgchange");

button1Btn.onclick = function () {
    imgchange.src = "/multimedia/theminiscap.gif";
}
startBtn.onclick = function () {
    imgchange.src = "/multimedia/linkgif.gif";
}
