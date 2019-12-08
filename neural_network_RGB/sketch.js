//Khalyutkin Victor

let auto_train_button = new Button(600, 50, 50, 50);
let test_count = 0.0;
let sum = 0.0;
let ideal_ans = 0.0;
let ans = 0.0;
let backColor = {
    r: rand_color(),
    g: rand_color(),
    b: rand_color()
};
let mid = (backColor.r + backColor.g + backColor.b) / 3;

function setup() {
    frameRate(1000);
    createCanvas(800, 800);
    ini();
    newTest();
    synaps();
}

function draw() {
    background(backColor.r, backColor.g, backColor.b);
    drawText();
    strokeWeight(0);
    fill(int(mid));
    rect(350, 350, 100, 100);
    predict(nn_output());
    auto_train_button.draw();
    if (auto_train_button.is_turn) {
        autoTrain();
    }
}

function drawText() {
    fill(0);
    textSize(64);
    strokeWeight(0);
    text("EXAMPLE", 50 , 250);
    fill(255);
    text("EXAMPLE", 430, 250);
    strokeWeight(4);
    stroke((backColor.r + 120) % 255, (backColor.g + 120) % 255, (backColor.b + 120) % 255);
    line(400, 0, 400, 800);
}

function rand_color() {
    let max = 255;
    let min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function predict(is_right = true) {
    x = 200;
    if (is_right) {
        ans = 1.0;
        x = 600;
        redraw();
    } else {
        ans = 0.0;
    }
    strokeWeight(0);
    fill(0);
    circle(x, 600, 80);
    fill(255);
    circle(x, 600, 50);
}

function newTest() {
    test_count += 1;
    backColor = {
        r: rand_color(),
        g: rand_color(),
        b: rand_color()
    };
    mid = (backColor.r + backColor.g + backColor.b) / 3;
    neurons[1].input = backColor.r / 255;
    neurons[2].input = backColor.g / 255;
    neurons[3].input = backColor.b / 255;
    neurons[5] = new Neuron(2);
    neurons[6] = new Neuron(2);
    neurons[7] = new Neuron(3);
}

function mousePressed() {
    if (auto_train_button.clickCheck()) {
        auto_train_button.is_turn = !(auto_train_button.is_turn);
        return 0;
    }
    test_count++;
    if (mouseX < 400) {
        ideal_ans = 0.0;// 0 - mean LEFT
    } else {
        ideal_ans = 1.0;// 1 - mean RIGHT
    }
    newTest();
    synaps();
    //if (ans != nn_output()) { nn_study(); }
    nn_study();
    console.log('Error', nn_error());
    //console.log(neurons[7].output);
    return 0;
}

function autoTrain() {
    newTest();
    if (mid > 200) {
        ideal_ans = 1.0;// 1 - mean RIGHT
    } else {
        ideal_ans = 0.0;// 0 - mean LEFT
    }
    synaps();
    nn_study();
    //console.log(test_count);
    //console.log('Error', nn_error());
    //console.log('MID', mid);
}
