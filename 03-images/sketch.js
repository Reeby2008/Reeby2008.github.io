// Image Demo

let marioImg;

function preload() {
  marioImg = loadImage("mario-image.webp");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(marioImg, mouseX, mouseY, marioImg.width*0.5, marioImg.height*0.5);
}
