// Array/Object Notation Assignment
// Mehreeb Shahzad
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cards = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  homeScreen();
}

function draw() {
  
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
  rectMode(CENTER);
  rect(rectSize.x, rectSize.y, rectSize.w, rectSize.h, rectSize.r, rectSize.r, rectSize.r, rectSize.r);

  textSize(100);
  textAlign(CENTER);
  fill(100, 150, 100);
  stroke(50, 100, 50);
  text("SOLITAIRE", rectSize.x, rectSize.y);

  textSize(60);
  text("Play", rectSize.x, rectSize.y + 60);
}

function playScreen() {
  background("green");
}

function mouseClicked() {
  let rectSize = {
    x: width/2,
    y: height/2,
    w: 700,
    h: 700,
    r: 10,
  };

  if (mouseX <= rectSize.x + 60 && mouseX >= rectSize.x - 60 && mouseY <= rectSize.y + 75 && mouseY >= rectSize.y + 10) {
    clear();
    playScreen();
  }
}