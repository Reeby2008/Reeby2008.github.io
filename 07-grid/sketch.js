// Grid Demo
// Learning 3d Arrays

let grid = [[0, 0, 1, 0],
            [1, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 1]];
const SQUARE_DIMENSIONS = grid.length;

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height) {
    cellSize = width/SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height/SQUARE_DIMENSIONS;
  }
}

function draw() {
  background(220);
  showGrid();
}

function showGrid() {
  for (let y = 0; y < SQUARE_DIMENSIONS; y++) {
    for (let x = 0; x < SQUARE_DIMENSIONS; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      if (grid[y][x] === 0) {
        fill("white");
      }
      square(x * cellSize, y * cellSize, 50);
    }
  }
}
