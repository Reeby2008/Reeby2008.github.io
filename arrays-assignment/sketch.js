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
    x: width/2 - 50,
    y: height/2 - 100,
    w: 100,
    h: 200,
  };

  background("black");
  fill("white");
  textSize(50);
  text("SOLITAIRE", rectSize.x, rectSize.y);
  textSize(30);
  text("Play", rectSize.x + 50, rectSize.y + 50);
}

function playScreen() {
  let cardSize = 50;

  rect(rectSize.x, rectSize.y, rectSize.w, rectSize.h);
}
