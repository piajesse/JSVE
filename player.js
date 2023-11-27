

var c = document.getElementById("display");
var ctx = c.getContext("2d");
function drawPlayer(x, y) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 20, y);
    ctx.lineTo(x+ 20, y + 40)
    ctx.lineTo(x, y + 40)
    ctx.lineTo(x, y)
    ctx.stroke();
}