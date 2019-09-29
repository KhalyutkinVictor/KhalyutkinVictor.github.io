//Khalyutkin Victor
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
        for (let i = 0; i < this.len; i++) {
            strokeWeight(0);
            if (!i) {
                fill(255, 0, 0);
            } else {
                fill(255);
            }
            if (this.x[i] == eat.x && this.y[i] == eat.y) {
                console.log("eat");
                eat.spawn();
                this.add();
            }
            this.x[i] = (this.x[i] + this.xSpeed[i] + 100) % (canvasSize.x / scl);
            this.y[i] = (this.y[i] + this.ySpeed[i] + 100) % (canvasSize.y / scl);
            rect(this.x[i] * scl, this.y[i] * scl, scl, scl);
        }
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
        console.log(this.len);
    }
}
