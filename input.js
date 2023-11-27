var c = document.getElementById("display");
var ctx = c.getContext("2d");
inputLeft = false;
inputRight = false;
inputUp = false;
inputDown = false;

window.addEventListener("onkeydown", keyDownListener, false);

function keyDownListener(event) {
    console.log("'" + event.code + "' was pressed")
    if (event.code === "ArrowLeft") {
        inputLeft = true;
    } else if (event.code === "ArrowRight") {
        inputRight = true;
    } else if (event.code === "ArrowUp") {
        inputUp = true;
    }else if (event.code === "ArrowDown") {
        inputDown = true;
}}
window.addEventListener("onkeyup", keyUpListener, false);

function keyUpListener(event) {
    if (event.code === "ArrowLeft") {
        inputLeft = false;
    } else if (event.code === "ArrowRight") {
        inputRight = false;
    } else if (event.code === "ArrowUp") {
        inputUp = false;
    }else if (event.code === "ArrowDown") {
        inputDown = false;
}}
