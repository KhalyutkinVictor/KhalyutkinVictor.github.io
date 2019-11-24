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
