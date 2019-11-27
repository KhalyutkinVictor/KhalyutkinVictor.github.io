//Khalyutkin Victor

function keyPressed() {

    if (keyCode == 87 || keyCode == 38) {
        move.up();
    }
    if (keyCode == 83 || keyCode == 40) {
        move.down();
    }
    if (keyCode == 65 || keyCode == 37) {
        move.left();
    }
    if (keyCode == 68 || keyCode == 39) {
        move.right()
    }
    if (keyCode == 32) {
        if (start) {
            start = false;
        }
        restartGame();
    }

}



class moveSomewhere {
    left() {
        newSpeedX = -1;
        newSpeedY = 0;
    }
    right() {
        newSpeedX = 1;
        newSpeedY = 0;
    }
    up() {
        newSpeedY = -1;
        newSpeedX = 0;
    }
    down() {
        newSpeedY = 1;
        newSpeedX = 0;
    }
}

class moveButtons {
    constructor(x, y, r, code, text) {
        this.code = code;
        this.x = x;
        this.y = y;
        this.r = r;
        this.text = text;
    }
    show() {
        fill(255, 255, 255, 50);
        circle(this.x, this.y, this.r * 2);
        textSize(32);
        fill(255, 255, 255, 120);
        text(this.text, this.x - 10, this.y + 11);
    }
}

let move = new moveSomewhere();
