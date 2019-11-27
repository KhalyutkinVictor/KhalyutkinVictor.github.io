//Khalyutkin Victor

let canvasSize = {
    x: 800,
    y: 800
};
let scl = 8;
let newSpeedX = 0, newSpeedY = 0;
let start = true;
let snake = new Snakes(50, 50);
let eat = new Eats();
let moveButtonLeft = new moveButtons(canvasSize.x - 220, canvasSize.y - 160, 50, 0, '<');
let moveButtonRight = new moveButtons(canvasSize.x - 70, canvasSize.y - 160, 50, 0, '>');
let moveButtonUp = new moveButtons(canvasSize.x - 145, canvasSize.y - 260, 50, 0, '^');
let moveButtonDown = new moveButtons(canvasSize.x - 145, canvasSize.y - 65, 50, 0, 'v');

function setup() {
    createCanvas(canvasSize.x, canvasSize.y);
    frameRate(15);
}

function restartGame() {
    snake = new Snakes(50, 50);
    eat = new Eats();
}

function draw() {

    if (start) {
        startScreen();
        return;
    }
    if (snake.hitTest()) {
        loseScreen();
    } else {
        background(44, 171, 93);
        snake.show();
        eat.show();
        moveButtonLeft.show();
        moveButtonRight.show();
        moveButtonUp.show();
        moveButtonDown.show();
    }

}

function startScreen() {
    background(207, 66, 66);
    textSize(64);
    fill(235, 206, 206);
    text('PRESS SPACE TO START', canvasSize.x / 8 - 90, canvasSize.y / 2);
}

function loseScreen() {
    background(207, 66, 66);
    textSize(64);
    fill(235, 206, 206);
    text('YOU LOSE', canvasSize.x / 4 + 40, canvasSize.y / 2);
    textSize(48);
    fill(79, 67, 67);
    text('PRESS SPACE TO RESTART', canvasSize.x / 8 - 30, canvasSize.y / 2 + 50);
}

function mousePressed() {
    mx = mouseX;
    my = mouseY;
    if ((mx - moveButtonLeft.x) * (mx - moveButtonLeft.x) + (my - moveButtonLeft.y) * (my - moveButtonLeft.y) <= moveButtonLeft.r * moveButtonLeft.r) {
        move.left();
    }
    if ((mx - moveButtonRight.x) * (mx - moveButtonRight.x) + (my - moveButtonRight.y) * (my - moveButtonRight.y) <= moveButtonRight.r * moveButtonRight.r) {
        move.right();
    }
    if ((mx - moveButtonUp.x) * (mx - moveButtonUp.x) + (my - moveButtonUp.y) * (my - moveButtonUp.y) <= moveButtonUp.r * moveButtonUp.r) {
        move.up();
    }
    if ((mx - moveButtonDown.x) * (mx - moveButtonDown.x) + (my - moveButtonDown.y) * (my - moveButtonDown.y) <= moveButtonDown.r * moveButtonDown.r) {
        move.down();
    }
    return false;
}
