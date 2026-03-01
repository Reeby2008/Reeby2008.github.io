// Interactive Scene
// Mehreeb Shahzad
// Tuesday, March 3, 2026
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let strokeSize = 10;
let colour = "black";
let bgColour = "white";
let colours1 = ["red", "orange", "yellow", "green", "blue", "purple", "black", "gray"];
let colours2 = ["red", "orange", "yellow", "green", "blue", "purple", "white", "gray"];
let pixelEraser;

function preload() {
  //Image from https://www.shutterstock.com/image-vector/eraser-pixel-art-icon-design-sticker-2097008146?trackingId=8fdaa0bf-5960-44f6-904d-7f0853f6fe95&listId=searchResults
  pixelEraser = loadImage("pixel-eraser-icon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw() {
  drawing();
  display();
  backgroundDisplay();
  inkColourDisplay();
}

function drawing() {
  if (mouseIsPressed) {
    strokeWeight(strokeSize);
    stroke(colour);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function display() {
  let x = 10;
  let word = ["Background:", "Line Colour:", "Thickness:", "r - resets the canvas"];
  
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
  
  //Stroke size box
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
  for (let i = 0; i <= 3; i++) {
    fill(colours1[i]);
    circle(x, height - 95, 30);
    x += 35;
  }
  
  x = 25;
  for (let i = 4; i <= 7; i++) {
    fill(colours1[i]);
    circle(x, height - 55, 30);
    x += 35;
  }
}

function inkColourDisplay() {
  let x = 215;
  
  strokeWeight(1);
  for (let i = 0; i <= 3; i++) {
    fill(colours2[i]);
    circle(x, height - 95, 30);
    x += 35;
  }

  x = 215;
  for (let i = 4; i <= 7; i++) {
    fill(colours2[i]);
    circle(x, height - 55, 30);
    x += 35;
  }
}

function keyPressed() {
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
    if (mouseX >= x && mouseX <= x + 30 && mouseY >= height - 110 && mouseY <= height - 80 && i <= 3) {
      bgColour = colours1[i];
      background(bgColour);
    }

    if (mouseX >= x - 140 && mouseX <= x - 110 && mouseY >= height - 70 && mouseY <= height - 40 && i > 3) {
      bgColour = colours1[i];
      background(bgColour);
    }
    x += 35;
  }
  
  //Pen colours
  x = 200;
  for (let i = 0; i <= 7; i++) {
    if (mouseX >= x && mouseX <= x + 30 && mouseY >= height - 110 && mouseY <= height - 80 && i <= 3) {
      colour = colours2[i];
    }

    if (mouseX >= x - 140 && mouseX <= x - 110 && mouseY >= height - 70 && mouseY <= height - 40 && i > 3) {
      colour = colours2[i];
    }
    x += 35;
  }
  
  //Stroke Size
  if (mouseX >= 450 && mouseX <= 500 && mouseY >= height - 95 && mouseY <= height - 70) {
    strokeSize++;
  }
  
  if (mouseX >= 450 && mouseX <= 500 && mouseY >= height - 70 && mouseY <= height - 45 && strokeSize > 1) {
    strokeSize--;
  }

  //Eraser
  //Note: to change the size of the eraser, you need to change the thickness
  if (mouseX >= 580 && mouseX <= 580 + pixelEraser.width * 0.4 && mouseY >= 840 && mouseY <= 840 + pixelEraser.height * 0.4) {
    colour = bgColour;
  }
}