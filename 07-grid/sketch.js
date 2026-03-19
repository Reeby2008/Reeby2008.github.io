// Grid Demo
// Learning 3d Arrays

// let grid = [[0, 0, 1, 0],
//             [1, 0, 1, 0],
//             [0, 1, 0, 0],
//             [0, 1, 0, 1]];
// const SQUARE_DIMENSIONS = grid.length;

//Use this to randomize the grid
let grid;
const SQUARE_DIMENSIONS = 10;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height) {
    cellSize = width/SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height/SQUARE_DIMENSIONS;
  }
  grid = generateRandomGrid(SQUARE_DIMENSIONS, SQUARE_DIMENSIONS);
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

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  toggleCell(x, y);
}

function toggleCell(x, y) {
  if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  else {
    grid[y][x] = 1;
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  
  for (let y = 0; y < rows: y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }

  return newGrid;
}