// Array/Object Notation Assignment
// Mehreeb Shahzad
// Wednesday, March 18, 2026

// Extra for Experts: Accessing specific parts of an image
// - Using .get() to push specific parts of one image (like one specific card) into an empty array and use noSmooth() to make the cropped images clearer

let deckOfCards;
let card = [];
let extras = [];
let movingCards = [];
let yValues = [];
let xValues = [];
let extrasIndex = 0;
let initialScreen = true;

function preload() {
  //Image source: https://stock.adobe.com/ca/images/playing-cards-full-deck-set-with-isolated-cards/559593180
  deckOfCards = loadImage("deck-of-cards.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();

  homeScreen();
}

function homeScreen() {
  let size = {
    x: width/2,
    y: height/2,
    w: 700,
    h: 700,
    r: 10,
  };
  
  //Displays the screen before game starts
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
  let nextRow = width/2 - 549.5;
  let secondNum = 52;
  let cardSize = {
    w: 69.5,
    h: 100,
  };

  //Display where the cards should be piled
  background(0, 50, 0);
  fill(50, 100, 50);
  for (let x = width/2 - 25; x <= width/2 + 425; x += 150) {
    rect(x, 290, cardSize.w * 1.75, cardSize.h * 1.75, 5, 5, 5, 5);
  }

  //Pushing all of the cards into the array
  for (let x = 15; x <= 918.5; x += cardSize.w) {
    card.push(deckOfCards.get(x, 10, cardSize.w, cardSize.h));
  }

  for (let y = 110; y <= 310; y += 100) {
    for (let x = 84.5; x <= 918.5; x += cardSize.w) {
      card.push(deckOfCards.get(x, y, cardSize.w, cardSize.h));
    }
  }

  //Top left extra cards display
  image(card[0], nextRow, 190, card[0].width * 2, card[0].height * 2);

  //Pushing x and y values of the set up cards into different arrays
  for (let y = 400; y <= 520; y += 20) {
    for (let x = width/2 + 362.5; x >= nextRow; x -= 152) {
      xValues.push(x);
    }
    yValues.push(y);
    nextRow += 152;
  }

  //Picks a random card to put inside of a different array. This is for the cards on the top left
  for (let cardInExtras = 0; cardInExtras < 24; cardInExtras++) {
    let i = int(random(1, secondNum));

    extras.push(card[i]);
    card.splice(i, 1);
    secondNum--;
  }

  gameSetup();
}

function gameSetup() {
  let num = 29;
  let columns = 7;
  
  //Set up of the game
  for (let yIndex = 0; yIndex < 7; yIndex++) {
    for (let xIndex = 0; xIndex < columns; xIndex++) {
      if (xIndex !== columns - 1) {
        //If the cards don't need to be flipped, display the unflipped version of the cards
        image(card[0], xValues[xIndex], yValues[yIndex], card[0].width * 2, card[0].height * 2);
      }
      else {
        let flippedCard = int(random(1, num));
  
        image(card[flippedCard], xValues[xIndex], yValues[yIndex], card[flippedCard].width * 2, card[flippedCard].height * 2);

        //Pushes random flipped cards into a different array with their location and size information and gets rid of these cards from the original card array to prevent duplicates
        movingCards.push({card: card[flippedCard],
                          x: xValues[xIndex],
                          y: yValues[yIndex],
                          w: card[0].width * 2,
                          h: card[0].height * 2});
        card.splice(flippedCard, 1);
        num--;
      }
    }
    columns--;
  }
}

function moveCards() {
  let moving = false;

  //Detects if the flipped cards have been clicked, print true if they are clicked.
  for (let i = 0; i < movingCards.length; i++) {
    if (mouseX < movingCards[i].x + movingCards[i].w && mouseX > movingCards[i].x && mouseY < movingCards[i].y + movingCards[i].h && mouseY > movingCards[i].y) {
      moving = true;
      console.log(true);
    }
    else {
      moving = false;
    }
  }
}

function mousePressed() {
  let buttonSize = {
    rightSide: width/2 + textWidth("Play")/2,
    leftSide: width/2 - textWidth("Play")/2,
    top: height/2 + 75,
    bottom: height/2 + 10
  };

  moveCards();

  //Switches to the game when "Play" is pressed
  if (mouseX <= buttonSize.rightSide && mouseX >= buttonSize.leftSide && mouseY <= buttonSize.top && mouseY >= buttonSize.bottom && initialScreen) {
    playScreen();
    initialScreen = false;
  }

  //Flips the card from the extras deck
  if (!initialScreen && mouseX <= card[0].width * 2 + width/2 - 549.5 && mouseX >= width/2 - 549.5 && mouseY <= card[0].height * 2 + 190 && mouseY >= 190 && extrasIndex !== 23) {
    image(extras[extrasIndex], width/2 - 539.5 + extras[extrasIndex].width * 2, 190, extras[extrasIndex].width * 2, extras[extrasIndex].height * 2);
    extrasIndex++;

    //Draws over the blank space in the corner so it looks like the cards are being reset
    image(card[0], width/2 - 549.5, 190, card[0].width * 2, card[0].height * 2);
  }

  //Resets the extras deck back to normal
  //Note: after resetting it flips the top card of the deck automatically
  if (!initialScreen && mouseX <= card[0].width * 2 + width/2 - 549.5 && mouseX >= width/2 - 549.5 && mouseY <= card[0].height * 2 + 190 && mouseY >= 190 && extrasIndex === 23) {
    noStroke();
    rectMode(CORNER);
    fill(0, 50, 0);
    rect(width/2 - 549.5, 190, card[0].width * 2, card[0].height * 2);
    image(extras[extrasIndex], width/2 - 539.5 + extras[extrasIndex].width * 2, 190, extras[extrasIndex].width * 2, extras[extrasIndex].height * 2);

    //Loop back to the first card
    extrasIndex = 0;
  }
}
