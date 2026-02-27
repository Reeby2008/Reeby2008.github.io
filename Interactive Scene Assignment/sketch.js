// Interactive Scene
// Mehreeb Shahzad
// Tuesday, March 3, 2026
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let strokeSize = 10;
let eraserSize = 10;
let colour = "black";
let bgColour = "white";
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
  display();
  backgroundDisplay();
  inkColourDisplay();
  drawing();
}

function drawing() {
  if (mouseIsPressed) {
    strokeWeight(strokeSize);
    stroke(colour);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyPressed() {
  if (key === "r") {
    clear();
    bgColour = "white";
    background(bgColour);
    colour = "black";
    strokeSize = 10;
    eraserSize = 10;
  }

  //Stroke Size
  if (keyCode === UP_ARROW) {
    eraserSize++;
  }

  if (keyCode === DOWN_ARROW && strokeSize > 1) {
    eraserSize--;
  }
}

function mouseClicked() {
  //Background colour
  if (mouseX >= 10 && mouseX <= 40 && mouseY >= height - 110 && mouseY <= height - 80) {
    bgColour = "red";
    background(bgColour);
  }
  if (mouseX >= 45 && mouseX <= 75 && mouseY >= height - 110 && mouseY <= height - 80) {
    bgColour = "orange";
    background(bgColour);
  }
  if (mouseX >= 80 && mouseX <= 110 && mouseY >= height - 110 && mouseY <= height - 80) {
    bgColour = "yellow";
    background(bgColour);
  }
  if (mouseX >= 115 && mouseX <= 145 && mouseY >= height - 110 && mouseY <= height - 80) {
    bgColour = "green";
    background(bgColour);
  }
  
  
  if (mouseX >= 10 && mouseX <= 40 && mouseY >= height - 70 && mouseY <= height - 40) {
    bgColour = "blue";
    background(bgColour);
  }
  if (mouseX >= 45 && mouseX <= 75 && mouseY >= height - 70 && mouseY <= height - 40) {
    bgColour = "purple";
    background(bgColour);
  }
  if (mouseX >= 80 && mouseX <= 110 && mouseY >= height - 70 && mouseY <= height - 40) {
    bgColour = "black";
    background(bgColour);
  }
  if (mouseX >= 115 && mouseX <= 145 && mouseY >= height - 70 && mouseY <= height - 40) {
    bgColour = "gray";
    background(bgColour);
  }
  
  //Stroke colour
  if (mouseX >= 200 && mouseX <= 230 && mouseY >= height - 110 && mouseY <= height - 80) {
    colour = "red";
  }
  if (mouseX >= 235 && mouseX <= 265 && mouseY >= height - 110 && mouseY <= height - 80) {
    colour = "orange";
  }
  if (mouseX >= 270 && mouseX <= 300 && mouseY >= height - 110 && mouseY <= height - 80) {
    colour = "yellow";
  }
  if (mouseX >= 305 && mouseX <= 335 && mouseY >= height - 110 && mouseY <= height - 80) {
    colour = "green";
  }
  
  
  if (mouseX >= 200 && mouseX <= 230 && mouseY >= height - 70 && mouseY <= height - 40) {
    colour = "blue";
  }
  if (mouseX >= 235 && mouseX <= 265 && mouseY >= height - 70 && mouseY <= height - 40) {
    colour = "purple";
  }
  if (mouseX >= 270 && mouseX <= 300 && mouseY >= height - 70 && mouseY <= height - 40) {
    colour = "white";
  }
  if (mouseX >= 305 && mouseX <= 335 && mouseY >= height - 70 && mouseY <= height - 40) {
    colour = "gray";
  }
  
  //Stroke Size
  if (mouseX >= 450 && mouseX <= 500 && mouseY >= height - 95 && mouseY <= height - 70) {
    strokeSize++;
  }
  
  if (mouseX >= 450 && mouseX <= 500 && mouseY >= height - 70 && mouseY <= height - 45 && strokeSize > 1) {
    strokeSize--;
  }

  //Eraser
  if (mouseX >= 580 && mouseX <= 580 + pixelEraser.width * 0.4 && mouseY >= 870 && mouseY <= 870 + pixelEraser.height * 0.4) {
    colour = bgColour;
  }

  //Eraser size
  if (mouseX >= 670 && mouseX <= 720 && mouseY >= height - 70 && mouseY <= height - 45) {
    eraserSize++;
    strokeWeight(eraserSize);
  }
  
  if (mouseX >= 670 && mouseX <= 720 && mouseY >= height - 45 && mouseY <= height - 20 && strokeSize > 1) {
    eraserSize--;
    strokeWeight(eraserSize);
  }
}

function display() {
  let y = height - 155;
  let x = 10;
  let word = ["Background:", "Line Colour:", "Thickness:", "r - resets the canvas"];
  
  fill ("white");
  strokeWeight(1);
  stroke("gray");
  rect(0, y, width, 155);
  
  //Display text
  for (let i = 0; i <= 3; i++) {
    textSize(20);
    fill("black");
    text(word[i], x, y + 30);
    x += 190;
  }
  text("Eraser and Eraser Size:", x - 190, y + 60);
  
  //Stroke size display
  fill(225);
  square(400, y + 60, 50);
  fill("black");
  text(strokeSize, 413, y + 90);
  
  //Stroke size arrows
  fill(225);
  rect(450, y + 60, 50, 25);
  rect(450, y + 85, 50, 25);
  
  strokeWeight(5);
  line(455, y + 75, 475, y + 65);
  line(475, y + 65, 495, y + 75);
  
  line(455, y + 95, 475, y + 105);
  line(475, y + 105, 495, y + 95);

  //Eraser size arrows
  strokeWeight(1);
  fill(225);
  square(620, y + 85, 50);
  fill("black");
  text(eraserSize, 633, y + 115);

  fill(225);
  rect(670, y + 85, 50, 25);
  rect(670, y + 110, 50, 25);
  
  strokeWeight(5);
  line(675, y + 100, 695, y + 90);
  line(695, y + 90, 715, y + 100);
  
  line(675, y + 120, 695, y + 130);
  line(695, y + 130, 715, y + 120);

  image(pixelEraser, x - 190, y + 90, pixelEraser.width * 0.4, pixelEraser.height * 0.4);
}

function backgroundDisplay() {
  let x = 25;
  let colours = ["red", "orange", "yellow", "green", "blue", "purple", "black", "gray"];
  
  strokeWeight(1);
  for (let i = 0; i <= 3; i++) {
    fill(colours[i]);
    circle(x, height - 95, 30);
    x += 35;
  }
  
  x = 25;
  for (let i = 4; i <= 7; i++) {
    fill(colours[i]);
    circle(x, height - 55, 30);
    x += 35;
  }
}

function inkColourDisplay() {
  let x = 215;
  let colours = ["red", "orange", "yellow", "green", "blue", "purple", "white", "gray"];
  
  strokeWeight(1);
  for (let i = 0; i <= 3; i++) {
    fill(colours[i]);
    circle(x, height - 95, 30);
    x += 35;
  }

  x = 215;
  for (let i = 4; i <= 7; i++) {
    fill(colours[i]);
    circle(x, height - 55, 30);
    x += 35;
  }
}
