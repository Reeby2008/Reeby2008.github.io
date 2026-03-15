// Array/Object Notation Assignment
// Mehreeb Shahzad
// Wednesday, March 18, 2026

// Extra for Experts: Accessing specific parts of an image
// - Using image() to access specific parts of one image (like one specific card)

let deckOfCards;
let card = [];

function preload() {
  //Image source: https://stock.adobe.com/ca/images/playing-cards-full-deck-set-with-isolated-cards/559593180
  deckOfCards = loadImage("deck-of-cards.png");
}

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

  let destx = 100;
  let desty = 100;
  let x = 15;
  let y = 10;

  background(0, 50, 0);
  fill("white");
  rect(cardPlaces.x + 75, cardPlaces.y, 150, 200);
  rect(cardPlaces.x + 200, cardPlaces.y, 150, 200);
  rect(cardPlaces.x + 75, cardPlaces.y, 150, 200);
  rect(cardPlaces.x + 75, cardPlaces.y, 150, 200);

  //image(img, destination x, destination y, destination width, destination height, crop x, crop y, crop width, crop height)
  for (let cards = 0; cards <= 14; cards++) {
    card.push(deckOfCards.get(destx, desty, x, y));
    destx += 100;
    x += 69.5;
  }
  console.log(card);
}

function mouseClicked() {
  let size = {
    x: width/2,
    y: height/2,
    w: 700,
    h: 700,
    r: 10,
  };
  
  if (mouseX <= size.x + textWidth("Play")/2 && mouseX >= size.x - textWidth("Play")/2 && mouseY <= size.y + 75 && mouseY >= size.y + 10) {
    playScreen();
  }
}