// Recursive Circles Demo


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircle(width/2, width/2);
}

function drawCircle(x, r) {
  let fillColor = map(r, width/2, 2, 255, 50);
  fill(fillColor);
  circle(x, height/2, r * 2);
  //Exit clause
  if (r > 2) {
    drawCircle(x - r/2, r/2);
    drawCircle(x + r/2, r/2);
  }
}