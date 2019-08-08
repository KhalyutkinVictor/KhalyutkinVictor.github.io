//Khalyutkin Victor

var array = [];
var flag = false;
var n = 200;

function setup() {
    createCanvas(400, 800);
    frameRate(300);
}

function draw() {
    background(50);
    generate();
    strokeWeight(2);
    show(-1, -1);
    update();
}

function generate() {
    if (!flag) {
        for (i = 0; i < n; i++) {
            array[i] = random(100, 750);
        }
        flag = true;
    }
}

function show(first, second) {
    stroke(120);
    for (i = 0; i < n; i++) {
        line(i * 2, 800, i * 2, 800 - array[i]);
    }
    if (first != -1 && second != -1) {
        stroke(242, 68, 225);
        line(first * 2, 800, first * 2, 800 - array[first]);
        line(second * 2, 800, second * 2, 800 - array[second])
    }
}

function update() {
    for (i = 0; i < n; i++) {
        for (j = 1; j < n; j++) {
            if (array[j - 1] > array[j]) {
                show(i, j);
                x = array[j - 1];
                array[j - 1]  = array[j];
                array[j] = x;
                break;
            } else {
                show(-1, -1);
            }
        }
    }
}
