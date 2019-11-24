//Khalyutkin Victor

let eatNow = 0;

class Snakes {
    constructor(startX, startY) {
        this.x = [];
        this.y = [];
        this.xSpeed = [];
        this.ySpeed = [];
        this.x[0] = startX;
        this.y[0] = startY;
        this.xSpeed[0] = 0;
        this.ySpeed[0] = 0;
        this.len = 1;
    }

    show() {
        for (let i = this.len - 1; i >= 0; i--) {
            strokeWeight(0);
            if (!i) {
                fill(255, 0, 0);
            } else {
                fill(255);
            }
            if (this.x[i] == eat.x && this.y[i] == eat.y) {
                eat.spawn();
                eatNow = 1;
                this.add();
            } else {
                eatNow = 0;
            }
            if (!i) {
                this.x[i] = (this.x[i] + this.xSpeed[i] + 100) % (canvasSize.x / scl);
                this.y[i] = (this.y[i] + this.ySpeed[i] + 100) % (canvasSize.y / scl);
            } else {
                this.x[i] = this.x[i - 1];
                this.y[i] = this.y[i - 1];
            }
            rect(this.x[i] * scl, this.y[i] * scl, scl, scl);
        }
        this.update();
    }

    update() {
        for (let i = this.len - 1; i > 0; i--) {
            this.xSpeed[i] = this.xSpeed[i - 1];
            this.ySpeed[i] = this.ySpeed[i - 1];
        }
        this.xSpeed[0] = newSpeedX;
        this.ySpeed[0] = newSpeedY;
    }

    add() {
        this.x[this.len] = this.x[this.len - 1];
        this.y[this.len] = this.y[this.len - 1];
        this.xSpeed[this.len] = this.xSpeed[this.len - 1];
        this.ySpeed[this.len] = this.ySpeed[this.len - 1];
        this.len++;
    }

    hitTest() {
        for (let i = 0; i < this.len - eatNow; i++) {
            for (let j = 0; j < this.len - eatNow; j++) {
                if (i == j) {
                    continue;
                }
                if (this.x[i] == this.x[j] && this.y[i] == this.y[j]) {
                    return true;
                }
            }
        }
        return false;
    }

}
