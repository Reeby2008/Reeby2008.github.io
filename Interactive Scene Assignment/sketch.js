// Interactive Scene
// Mehreeb Shahzad
// Tuesday, March 3, 2026
// Extra for Experts: Hovering text
// - When the mouse hovers over the different colours, the name of the colour appears above it.


let strokeSize = 10;
let colour = "black";
let bgColour = "white";
let colours1 = ["red", "orange", "yellow", "green", "blue", "purple", "black", "gray"];
let colours2 = structuredClone(colours1);
let pixelEraser;

function preload() {
  //Image from https://www.shutterstock.com/image-vector/eraser-pixel-art-icon-design-sticker-2097008146?trackingId=8fdaa0bf-5960-44f6-904d-7f0853f6fe95&listId=searchResults
  pixelEraser = loadImage("pixel-eraser-icon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");

  //Replace the black colour with white
  colours2[6] = "white";
}

function draw() {
  drawing();
  display();
  backgroundDisplay();
  inkColourDisplay();
}

function drawing() {
  //Draws a line from previous mouse location to current mouse location
  if (mouseIsPressed) {
    strokeWeight(strokeSize);
    stroke(colour);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function display() {
  let x = 10;
  let word = ["Background:", "Line Colour:", "Stroke Size:", "r - resets the canvas"];
  
  //Menu display
  fill ("white");
  strokeWeight(1);
  stroke("gray");
  rect(0, height - 155, width, 155);
  
  //Display text
  for (let i = 0; i <= 3; i++) {
    textSize(20);
    fill("black");
    text(word[i], x, height - 125);
    x += 190;
  }
  
  //Stroke size boxes
  fill(225);
  square(400, height - 95, 50);

  rect(450, height - 95, 50, 25);
  rect(450, height - 70, 50, 25);

  fill("black");
  text(strokeSize, 413, height - 65);
  
  //Stroke size arrows
  strokeWeight(5);
  line(455, height - 80, 475, height - 90);
  line(475, height - 90, 495, height - 80);
  
  line(455, height - 60, 475, height - 50);
  line(475, height - 50, 495, height - 60);

  //Eraser icon
  image(pixelEraser, x - 190, height - 95, pixelEraser.width * 0.4, pixelEraser.height * 0.4);
}

function backgroundDisplay() {
  let x = 25;
  
  strokeWeight(1);
  for (let i = 0; i < colours1.length; i++) {
    //Top
    if (i <= 3) {
      fill(colours1[i]);
      circle(x, height - 95, 30);
    }

    //Bottom
    if (i > 3) {
      fill(colours1[i]);
      circle(x - 140, height - 55, 30);
    }
    x += 35;
  }
}

function inkColourDisplay() {
  let x = 215;
  
  strokeWeight(1);
  for (let i = 0; i < colours2.length; i++) {
    //Top
    if (i <= 3) {
      fill(colours2[i]);
      circle(x, height - 95, 30);
    }

    //Bottom
    if (i > 3) {
      fill(colours2[i]);
      circle(x - 140, height - 55, 30);
    }
    x += 35;
  }
}

function keyPressed() {
  //Resets the whole canvas
  if (key === "r") {
    clear();
    bgColour = "white";
    background(bgColour);
    colour = "black";
    strokeSize = 10;
  }
}

function mouseClicked() {
  let x = 10;

  //Background colours
  for (let i = 0; i <= 7; i++) {
    //Top
    if (mouseX >= x && mouseX <= x + 30 && mouseY >= height - 110 && mouseY <= height - 80 && i <= 3) {
      bgColour = colours1[i];
      background(bgColour);
    }

    //Bottom
    if (mouseX >= x - 140 && mouseX <= x - 110 && mouseY >= height - 70 && mouseY <= height - 40 && i > 3) {
      bgColour = colours1[i];
      background(bgColour);
    }
    x += 35;
  }
  
  //Pen colours
  x = 200;
  for (let i = 0; i <= 7; i++) {
    //Top
    if (mouseX >= x && mouseX <= x + 30 && mouseY >= height - 110 && mouseY <= height - 80 && i <= 3) {
      colour = colours2[i];
    }
    
    //Bottom
    if (mouseX >= x - 140 && mouseX <= x - 110 && mouseY >= height - 70 && mouseY <= height - 40 && i > 3) {
      colour = colours2[i];
    }
    x += 35;
  }
  
  //Increase stroke size
  if (mouseX >= 450 && mouseX <= 500 && mouseY >= height - 95 && mouseY <= height - 70) {
    strokeSize++;
  }
  
  //Decrease stroke size
  if (mouseX >= 450 && mouseX <= 500 && mouseY >= height - 70 && mouseY <= height - 45 && strokeSize > 1) {
    strokeSize--;
  }

  //Eraser
  //Note: to change the size of the eraser, you need to change the stroke size
  if (mouseX >= 580 && mouseX <= 580 + pixelEraser.width * 0.4 && mouseY >= 840 && mouseY <= 840 + pixelEraser.height * 0.4) {
    colour = bgColour;
  }
}