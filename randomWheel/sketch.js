//Khalyutkin Victor

console.log('Privet');

let canvas = {
    x: 1200,
    y: 800
};
let total = 0;
let s = {
    arr: [],
    size: 0
}
let str = '';
let rollFlag = false;
let rollRotate = 0; // na skolko gradusov budet povernut krug
let rollAngle = 0; // total kol-vo gradusov na kotoroe budet povernut krug
let rollSpeed = 20; // rotate speed degrees
let rollTotal = 0; //

let crcl = new Crcl(canvas.y / 3, canvas.y / 3, 500);
let btnInput = new Buttons(crcl.centerX - crcl.rad / 2 + 50, crcl.centerY + crcl.rad / 2 + 70, crcl.rad - 100, crcl.rad / 4, 'Add position', -10, 15);
let btnRoll = new Buttons(btnInput.x + btnInput.width + 100, btnInput.y, btnInput.width, btnInput.height, 'ROLL', 50, 15);

function setup() {
    createCanvas(canvas.x, canvas.y);
    frameRate(60);
}

function draw() {
    background(50);
    if (rollFlag) {
        roll();
    }
    crcl.show();
    btnInput.build();
    btnRoll.build();
    triangleDraw();
}

function triangleDraw() {
    fill(255, 166, 224);
    stroke(255, 166, 224);
    triangle(crcl.centerX + crcl.rad / 2 - 30, crcl.centerY, crcl.centerX + crcl.rad / 2 + 20, crcl.centerY - 30, crcl.centerX + crcl.rad / 2 + 20, crcl.centerY + 30);
}

function roll() {
    angleMode(DEGREES);
    crcl.show();
    if (rollSpeed < random(0.1, 0.3)) {
        rollFlag = false;
        return;
    }
    rollRotate += rollSpeed;
    rollTotal += rollSpeed;
    rollRotate %= 360;
    if (rollSpeed < 1.5) {
        rollSpeed *= 0.995;
    } else {
        rollSpeed *= 0.99;
    }
}

function mousePressed() {
    if (btnInput.clickCheck() && !rollFlag) {
        inputString();
    }
    if (btnRoll.clickCheck() && !rollFlag && total > 0) {
        rollAngle = random(1200, 3600);
        rollTotal = 0;
        rollSpeed = rollAngle * 0.05;
        rollFlag = true;
    }
}
