//Khalyutkin Victor

let canvasSize = {
    x: 800,
    y: 800
};
let scl = 8;
let newSpeedX = 0, newSpeedY = 0;


function setup() {
    createCanvas(canvasSize.x, canvasSize.y);
    frameRate(30);
}

let snake = new Snakes(50, 50);
let eat = new Eats();

function draw() {
    background(44, 171, 93);
    snake.show();
    eat.show();
}
