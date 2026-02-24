// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let y = 95;
let fatness = 10;
let colour = "black";
let colours = ["red", "orange", "yellow", "green", "blue", "purple", "black", "gray"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw() {
  display();
  backgroundOptions();
  inkColour();
  drawing();
}

function drawing() {
  if (mouseIsPressed) {
    strokeWeight(fatness);
    stroke(colour);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyPressed() {
  if (key === "r") {
    clear();
    background("white");
    colour = "black";
    fatness = 10;
  }
}

function mouseClicked() {
  
  //Background colour
  if (mouseX >= 10 && mouseX <= 40 && mouseY >= height - 110 && mouseY <= height - 80) {
    background("red");
  }
  if (mouseX >= 45 && mouseX <= 75 && mouseY >= height - 110 && mouseY <= height - 80) {
    background("orange");
  }
  if (mouseX >= 80 && mouseX <= 110 && mouseY >= height - 110 && mouseY <= height - 80) {
    background("yellow");
  }
  if (mouseX >= 115 && mouseX <= 145 && mouseY >= height - 110 && mouseY <= height - 80) {
    background("green");
  }
  
  
  if (mouseX >= 10 && mouseX <= 40 && mouseY >= height - 70 && mouseY <= height - 40) {
    background("blue");
  }
  if (mouseX >= 45 && mouseX <= 75 && mouseY >= height - 70 && mouseY <= height - 40) {
    background("purple");
  }
  if (mouseX >= 80 && mouseX <= 110 && mouseY >= height - 70 && mouseY <= height - 40) {
    background("black");
  }
  if (mouseX >= 115 && mouseX <= 145 && mouseY >= height - 70 && mouseY <= height - 40) {
    background("gray");
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
  
  
  if (mouseX >= 450 && mouseX <= 500 && mouseY >= height - 95 && mouseY <= height - 70) {
    fatness++;
  }
  
  if (mouseX >= 450 && mouseX <= 500 && mouseY >= height - 70 && mouseY <= height - 45) {
    if (fatness > 1) {
      fatness--;
    }
  }
}

function display() {
  let y = height - 155;
  let x = 25;
  let word = ["Background:", "Line Colour:", "Thickness:", "r - resets the canvas"];
  
  fill ("white");
  strokeWeight(1);
  stroke("gray");
  rect(0, y, width, 155);
  
  //Display text
  x = 10;
  for (let i = 0; i <= 3; i++) {
    textSize(20);
    fill("black");
    text(word[i], x, y - 30);
    x += 190;
  }
  
  //Stroke size display
  fill(225);
  square(400, y + 60, 50);
  fill("black");
  text(fatness, 413, y + 90);
  
  //Stroke size arrows
  fill(225);
  rect(450, y + 60, 50, 25);
  rect(450, y + 85, 50, 25);
  
  strokeWeight(5);
  while (x <= 495) {
    line(x, height - y + 75, x + 20, height - y + 65);
  }
  // line(455, height - y + 75, 475, height - y + 65);
  // line(475, height - y + 65, 495, height - y + 75);
  
  // line(455, height - y + 95, 475, height - y + 105);
  // line(475, height - y + 105, 495, height - y + 95);
}

function backgroundOptions() {
  let x = 25;
  
  strokeWeight(1);
  for (let i = 0; i <= 3; i++) {
    fill(colours[i]);
    circle(x, height - y, 30);
    x += 35;
  }
  
  x = 25;
  for (i = 4; i <= 7; i++) {
    fill(colours[i]);
    circle(x, height - y + 40, 30);
    x += 35;
  }
}

function inkColour() {
  let x = 215;
  
  strokeWeight(1);
  for (let i = 0; i <= 3; i++) {
    fill(colours[i]);
    circle(x, height - y, 30);
    x += 35;
  }
  
  x = 215;
  for (i = 4; i <= 7; i++) {
    fill(colours[i]);
    circle(x, height - y + 40, 30);
    x += 35;
  }
}
