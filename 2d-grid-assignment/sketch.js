// 2d Grids Assignment
// Mehreeb Shahzad
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colours = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
let grid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  gameDisplay();
}

function draw() {
}

function gameDisplay() {
  //rectMode(CENTER);
  for (let x = 0; x <= 600; x += 120) {
    for (let y = 0; y <= 700; y += 120) {
      let randomColour = colours[int(random(0, 6))];
      rect(x, y, 120, 120);
      grid.push([randomColour, x, y]);
      console.log(grid);
    }
  }
  //rect(width/2, height/2, 600, 700);
}
