//Khalyutkin Victor

class Eats {
    constructor() {
        this.x = -1 * scl;
        this.y = -1 * scl;
        this.spawn();
    }

    spawn() {
        this.x = Math.floor(Math.random() * (canvasSize.x / scl));
        this.y = Math.floor(Math.random() * (canvasSize.y / scl));
    }

    show() {
        while (this.x * scl >= 525 && this.y * scl >= 481) {
            this.spawn();
        }
        strokeWeight(0);
        fill(0, 30, 255);
        rect(this.x * scl, this.y * scl, scl, scl);
    }
}
