// Array/Object Notation Assignment
// Mehreeb Shahzad
// Wednesday, March 18, 2026

// Extra for Experts: Accessing specific parts of an image
// - Using .get() to access specific parts of one image (like one specific card)

let deckOfCards;
let card = [];
let extras = [];
let extrasIndex = 0;

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
  let secondNum = 52;
  let nextRow = width/2 - 549.5;
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
  for (let x = 15; x <= 918.5; x += cardSize.w) {
    card.push(deckOfCards.get(x, 10, cardSize.w, cardSize.h));
  }

  for (let x = 84.5; x <= 918.5; x += cardSize.w) {
    card.push(deckOfCards.get(x, 110, cardSize.w, cardSize.h));
  }

  for (let x = 84.5; x <= 918.5; x += cardSize.w) {
    card.push(deckOfCards.get(x, 210, cardSize.w, cardSize.h));
  }

  for (let x = 84.5; x <= 918.5; x += cardSize.w) {
    card.push(deckOfCards.get(x, 310, cardSize.w, cardSize.h));
  }

  //Top left extra cards display
  image(card[0], nextRow, 190, card[0].width * 2, card[0].height * 2);

  //Setting up the 7 columns
  for (let y = 400; y <= 540; y += 20) {
    for (let x = width/2 + 362.5; x >= nextRow; x -= 152) {
      let i = 0;
      image(card[i], x, y, card[i].width * 2, card[i].height * 2);
    }
    nextRow += 152;
  }

  //Picks a random card to put inside of a different array. This is for the cards on the top left
  for (let cardInExtras = 0; cardInExtras < 24; cardInExtras++) {
    let i = random(1, secondNum);
    i = int(i);

    extras.push(card[i]);
    card.splice(i, 1);
    secondNum--;
  }
}

function mouseClicked() {
  let size = {
    x: width/2,
    y: height/2,
    w: 700,
    h: 700,
    r: 10,
  };
  
  //Switches to the game when "Play" is pressed
  if (mouseX <= size.x + textWidth("Play")/2 && mouseX >= size.x - textWidth("Play")/2 && mouseY <= size.y + 75 && mouseY >= size.y + 10) {
    playScreen();
  }

  //Flips the card from the extras deck
  if (mouseX <= card[0].width * 2 + width/2 - 549.5 && mouseX >= width/2 - 549.5 && mouseY <= card[0].height * 2 + 190 && mouseY >= 190 && extrasIndex !== 23) {
    image(extras[extrasIndex], width/2 - 539.5 + extras[extrasIndex].width * 2, 190, extras[extrasIndex].width * 2, extras[extrasIndex].height * 2);
    image(card[0], width/2 - 549.5, 190, card[0].width * 2, card[0].height * 2);
    extrasIndex++;
  }

  //Resets the extras deck back to normal
  //Note: after resetting it flips the top card of the deck automatically
  if (mouseX <= card[0].width * 2 + width/2 - 549.5 && mouseX >= width/2 - 549.5 && mouseY <= card[0].height * 2 + 190 && mouseY >= 190 && extrasIndex === 23) {
    noStroke();
    rectMode(CORNER);
    fill(0, 50, 0);
    rect(width/2 - 549.5, 190, card[0].width * 2, card[0].height * 2);
    image(extras[extrasIndex], width/2 - 539.5 + extras[extrasIndex].width * 2, 190, extras[extrasIndex].width * 2, extras[extrasIndex].height * 2);
    extrasIndex = 0;
  }
}

function flipDetector() {
  //Useful link maybe?: https://youtu.be/XATr_jdh-44?si=jjYWf3unSNKQGQoH
  // for (let i = 0; i <= 53; i++) {
  //   if ()
  // }
}