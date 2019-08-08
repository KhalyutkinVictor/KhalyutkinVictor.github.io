//Khalyutkin Victor

function setup() {
  createCanvas(800, 800);
  textSize(width / 10);
  textAlign(CENTER, CENTER);
  frameRate(1000);
}

var bckR = 0,
  bckG = 0,
  bckB = 0,
  screen = 0,
  millisec = 0,
  timeBefore = 0,
  timeStart = 0,
  timeNow = 0,
  timeSleep = 0,
  totalTimeSum = 0,
  totalTries = 0,
  previousTryTime = -1;


function startScreen() {
  bckR = 136;
  bckG = 219;
  bckB = 219;
  fill(61, 115, 115);
  text('Click on screen\nwhen you\'re ready\nSTART', width / 2, height / 3 + 100);
}

function draw() {
  background(bckR, bckG, bckB);
  if (!screen) {
    startScreen();
  }
  if (screen == 1) {
    screen_1();
  }
  if (screen == 2) {
    screen_2();
  }
  if (screen == 3) {
    screen_3();
  }
  if (screen == 4) {
    screen_4();
  }
  if (screen == 5) {
    screen_5();
  }

}

function mousePressed() {
  if (screen == 0) {
    screen_1();
    screen++;
    return false;
  }
  if (screen == 1) {
    screen = 2;
    timeStart = millis();
    timeSleep = random(800, 3000);
    return false;
  }
  if (screen == 2) {
    screen = 5;
    return false;
  }
  if (screen == 3) {
    screen = 4;
    totalTimeSum += int(millisec - timeBefore);
    totalTries++;
    return false;
  }
  if (screen == 4) {
    previousTryTime = int(millisec - timeBefore);
    screen = 1;
    return false;
  }
  if (screen == 5) {
    screen = 2;
    timeStart = millis();
    timeSleep = random(800, 3000);
    return false;
  }
  return false;
}

function screen_1() {
  bckR = 136;
  bckG = 219;
  bckB = 219;
  fill(61, 115, 115);
  text('Click,\nwhen you\'re ready', width / 2, height / 3 + 100);
  millisec = millis();
}

function screen_2() {
  bckR = 255;
  bckG = 79;
  bckB = 103;
  fill(120, 41, 51);
  text('Prepare to click', width / 2, height / 3 + 100);
  if (millis() - timeStart >= timeSleep) {
    screen = 3;
    timeBefore = millis();
    return;
  }
}

function screen_3() {
  bckR = 119;
  bckG = 237;
  bckB = 146;
  fill(50, 117, 66);
  text('CLICK NOW\n' + int(millis() - timeBefore) + ' ms', width / 2, height / 3 + 100);
  millisec = millis();
}

function screen_4() {
  bckR = 136;
  bckG = 219;
  bckB = 219;
  fill(61, 115, 115);
  text('You reaction time\nis ' + int(millisec - timeBefore) + ' ms', width / 2, height / 3 + 100);
  if (previousTryTime != -1) {
    textSize(width / 20);
    text('Previous try time is ' + int(previousTryTime) + ' ms\n', width / 2, height / 3 + 260);
    text('Average of ' + int(totalTries) + ' tries is ' + int(totalTimeSum / totalTries) + ' ms', width / 2, height / 3 + 280);
  }
  textSize(width / 20);
  text('Click to try again', width / 2, height / 3 + 400);
  textSize(width / 10);
}

function screen_5() {
  bckR = 255;
  bckG = 79;
  bckB = 103;
  fill(120, 41, 51);
  text('To soon\nClick to try again', width / 2, height / 3 + 100);
}
