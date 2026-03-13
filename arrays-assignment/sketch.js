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
  let size = {
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
  rect(size.x, size.y, size.w, size.h, size.r, size.r, size.r, size.r);

  textSize(100);
  textAlign(CENTER);
  fill(100, 150, 100);
  stroke(50, 100, 50);
  text("Solitaire", size.x, size.y);

  textSize(60);
  text("Play", size.x, size.y + 60);
}

function playScreen() {
  let cardPlaces = {
    x: width/2,
    y: height/4,
  };

  background(0, 50, 0);
  fill("white");
  rect(cardPlaces.x + 75, cardPlaces.y, 150, 200);
  rect(cardPlaces.x + 200, cardPlaces.y, 150, 200);
  rect(cardPlaces.x + 75, cardPlaces.y, 150, 200);
  rect(cardPlaces.x + 75, cardPlaces.y, 150, 200);
}

function mouseClicked() {
  let size = {
    x: width/2,
    y: height/2,
    w: 700,
    h: 700,
    r: 10,
  };
  
  if (mouseX <= size.x + textWidth("Play") && mouseX >= size.x - textWidth("Play") && mouseY <= size.y + 75 && mouseY >= size.y + 10) {
    playScreen();
  }
}