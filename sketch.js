function setup() {
  frameRate(240);
  createCanvas(400, 400);
}

let i = 0;

function draw() {
  angleMode(DEGREES);
  background(0, 165, 80);
  var xc = height / 2,
    yc = width / 2,
    d = 100;
  i++;
  if (i > 360)
    i = 0;
  fill(120, 220, 120);
  circle(height / 2, width / 2, 200);
  var x1 = xc - d * cos(90 + i),
    y1 = yc + d * cos(i),
    x2 = xc + d * cos(90 + i),
    y2 = yc - d * cos(i);
  drawLine(x1, y1, x2, y2);


}

function drawLine(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
  strokeWeight(7);
  stroke(0, 165, 80);
}
