//Khalyutkin Victor

class Button {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.is_turn = false;
    }

    draw() {
        strokeWeight(3);
        rect(this.x, this.y, this.width, this.height);
    }

    clickCheck() {
        let x = mouseX,
            y = mouseY;
        if (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height)
            return true;
        else
            return false;
    }
}