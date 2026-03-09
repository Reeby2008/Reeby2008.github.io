// Array/Object Notation Assignment
// Mehreeb Shahzad
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cards = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  homeScreen();
}

function homeScreen() {
  let rectSize = {
    x: width/2,
    y: height/2,
    w: 700,
    h: 700,
    r: 10,
  };

  background(0, 50, 0);
  fill(250, 250, 150);
  stroke(100, 150, 100);
  strokeWeight(10);
  rect(rectSize.x - rectSize.w/2, rectSize.y - rectSize.h/2, rectSize.w, rectSize.h, rectSize.r, rectSize.r, rectSize.r, rectSize.r);
  textSize(50);
  text("SOLITAIRE", rectSize.x, rectSize.y);
  // textSize(30);
  // text("Play", rectSize.x + 100, rectSize.y + 50);
}

function playScreen() {
  let cardSize = 50;

  background("green");
  rect(rectSize.x, rectSize.y, rectSize.w, rectSize.h);
}
