// 2d Grids Assignment
// Mehreeb Shahzad
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const SQUARE_SIZE = 120;
let colours = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "black"];
let grid = [];
let answer = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  gameAnswer();
}

function draw() {
  gameDisplay();
}

function mousePressed() {
  //if ()
}

function gameDisplay() {
  for (let x = 0; x < SQUARE_SIZE * 4; x += SQUARE_SIZE) {
    for (let y = 0; y < SQUARE_SIZE * 5; y += SQUARE_SIZE) {
      square(x, y, SQUARE_SIZE);
      grid.push([x, y]);
    }
  }
}

function gameAnswer() {
  for (let answers = 0; answers < 4; answers++) {
    let randomColour = colours[int(random(0, 7))];

    answer.push(randomColour);
  }
}