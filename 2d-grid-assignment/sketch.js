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
let input = [];
let nextColour = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  gameAnswer();
  gameDisplay();
}

function draw() {
}

function mousePressed() {
  for (let index = 0; index < 4; index++) {
    if (nextColour === colours.length) {
      nextColour = 0;
    }

    if (mouseX >= grid[index][0] && mouseX <= grid[index][0] + SQUARE_SIZE && mouseY >= grid[index][1] && mouseY <= grid[index][1] + SQUARE_SIZE) {
      fill(colours[nextColour]);
      square(grid[index][0], grid[index][1], SQUARE_SIZE);
      grid[index].push(colours[nextColour]);
      nextColour++;
    }
  }
}

function keyPressed() {
  // if (key === "ENTER") {
  //   input.push()
  // }
}

function gameDisplay() {
  for (let y = height/2 - SQUARE_SIZE * 2.5; y < height/2 + SQUARE_SIZE * 2.5; y += SQUARE_SIZE) {
    for (let x = width/2 - SQUARE_SIZE * 2; x < width/2 + SQUARE_SIZE * 2; x += SQUARE_SIZE) {
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