//Khalyutkin Victor

let str;
let color = {
    r: 1,
    g: 1,
    b: 1
}

function setup() {
    frameRate(30);
    createCanvas(800, 800);
    background(20);
    rect(100, 30, 600, 600);
    push();
    translate(400, 330);
    for (let x = -300; x <= 300; x += 0.0100) {
        point(x, 0);
        point(0, -x);
    }
    pop();
    newColor();
}

let btnAdd = new Buttons(400 - 150, 650, 300, 100, "Добавить график", -25, 7, 25)

function draw() {
    fill(222);
    btnAdd.build();
}

function mousePressed() {
    if (btnAdd.clicked()) {
        inputString();
        drawGraph(str);
    }
    return false;
}

function newColor() {
    color.r = random(0, 255);
    color.g = random(0, 255);
    color.b = random(0, 255);
    while (color.g >= 200 && color.b >= 200 && color.r >= 180) {
        color.r = random(0, 255);
        color.g = random(0, 255);
        color.b = random(0, 255);
        console.log(1);
    }
}

function drawGraph(str) {
    push();
    translate(400, 330);
    strokeWeight(2);
    stroke(color.r, color.g, color.b, 200);
    for (let x = -300.000000000; x <= 300.000000; x += 0.010000) {
        y = eval(str);
        if (y >= -300 && y <= 300) {
            point(x, -y);
        }
    }
    newColor();
    pop();
}
