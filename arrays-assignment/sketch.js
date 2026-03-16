// Array/Object Notation Assignment
// Mehreeb Shahzad
// Wednesday, March 18, 2026

// Extra for Experts: Accessing specific parts of an image
// - Using .get() to access specific parts of one image (like one specific card)

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
  let nextRow = 300;
  let cardSize = {
    w: 69.5,
    h: 100,
  };

  background(0, 50, 0);
  fill(50, 100, 50);
  rect(width/2 - 25, 290, cardSize.w * 1.75, cardSize.h * 1.75, 5, 5, 5, 5);
  rect(width/2 + 125, 290, cardSize.w * 1.75, cardSize.h * 1.75, 5, 5, 5, 5);
  rect(width/2 + 275, 290, cardSize.w * 1.75, cardSize.h * 1.75, 5, 5, 5, 5);
  rect(width/2 + 425, 290, cardSize.w * 1.75, cardSize.h * 1.75, 5, 5, 5, 5);

  //Pushing all of the cards into the array
  for (let x = 15; x <= 918.5; x += 69.5) {
    card.push(deckOfCards.get(x, 10, 69.5, 100));
  }

  for (let x = 84.5; x <= 918.5; x += 69.5) {
    card.push(deckOfCards.get(x, 110, 69.5, 100));
  }

  for (let x = 84.5; x <= 918.5; x += 69.5) {
    card.push(deckOfCards.get(x, 210, 69.5, 100));
  }

  for (let x = 84.5; x <= 918.5; x += 69.5) {
    card.push(deckOfCards.get(x, 310, 69.5, 100));
  }

  //Setting up the 7 columns
  for (let y = 400; y <= 540; y += 20) {
    for (let x = 1212; x >= nextRow; x -= 152) {
      let i = 0;
      image(card[i], x, y, card[i].width * 2, card[i].height * 2);
    }
    nextRow += 152;
  }

  image(card[0], 300, 190, card[0].width * 2, card[0].height * 2);
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