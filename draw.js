var c = document.getElementById("display");
var ctx = c.getContext("2d");
playerX = 0;
playerY = 0;
frameNumber = 0;
function draw() {
    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, c.width, c.height);
    if (inputRight) {
        playerX += 1;
    } else if (inputLeft) {
        playerX -= 1;
    }
  
    if (inputDown) {
        playerY += 1;
    } else if (inputUp) {
        playerY -= 1;
    }
    drawPlayer(playerX, playerY);
    frameNumber++
    requestAnimationFrame(draw);
}
draw();