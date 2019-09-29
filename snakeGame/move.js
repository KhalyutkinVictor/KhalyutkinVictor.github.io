//Khalyutkin Victor

function keyPressed() {
    if (keyCode == 87 || keyCode == 38) {
        newSpeedY = -1;
        newSpeedX = 0;
    }
    if (keyCode == 83 || keyCode == 40) {
        newSpeedY = 1;
        newSpeedX = 0;
    }
    if (keyCode == 65 || keyCode == 37) {
        newSpeedX = -1;
        newSpeedY = 0;
    }
    if (keyCode == 68 || keyCode == 39) {
        newSpeedX = 1;
        newSpeedY = 0;
    }
}
