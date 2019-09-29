//Khalyutkin Victor

class Buttons {
    constructor(x, y, w, h, s, txtX, txtY, txtSize) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.str = s;
        this.txtX = this.x + this.width / 4 + txtX;
        this.txtY = this.y + this.height / 2 + txtY;
        this.txtSize = txtSize;
    }

    build() {
        strokeWeight(4);
        stroke(222);
        fill(20);
        rect(this.x, this.y, this.width, this.height, 20);
        strokeWeight(0);
        fill(222);
        textSize(this.txtSize);
        text(this.str, this.txtX, this.txtY);
    }

    clicked() {
        let x = mouseX,
            y = mouseY;
        if (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height)
            return true;
        else
            return false;
    }
}
