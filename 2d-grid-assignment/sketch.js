// 2d Grids Assignment
// Mehreeb Shahzad
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const SQUARE_SIZE = 120;
const NEXT_ROW = 4;
let colours = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white"];
let grid = [];
let answer = [];
let userInput = [];
let temporaryArray = [];
let nextColour = 0;
let previousRow = 0;
//let correctColour = "black";

function setup() {
  createCanvas(windowWidth, windowHeight);

  gameAnswer();
  gameDisplay();
}

function draw() {
}

function mousePressed() {
  //If a box is clicked on, change the colour
  //Note: the nextColour variable changes no matter what box is clicked so if a second box is clicked, it will fill with the next colour in the array, not the first colour
  //Note: at the end of the game the code starts throwing errors when any box is clicked
  for (let index = previousRow; index < NEXT_ROW + previousRow; index++) {
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
  //Locks in previous answer and pushes to a different array
  if (keyCode === ENTER) {
    //Remove previous guess from the array
    userInput.splice(0, 4);

    //Pushes the colours that were entered by the user
    for (let i = previousRow; i < NEXT_ROW + previousRow; i++) {
      userInput.push(grid[i][grid[i].length - 1]);
    }
    previousRow += 4;

    colourPlacement();
  }
}

function gameDisplay() {
  //Pushes the x and y values of each square into the grid array and displays the grid
  for (let y = height/2 - SQUARE_SIZE * 2.5; y < height/2 + SQUARE_SIZE * 2.5; y += SQUARE_SIZE) {
    for (let x = width/2 - SQUARE_SIZE * 2; x < width/2 + SQUARE_SIZE * 2; x += SQUARE_SIZE) {
      //stroke(correctColour);
      strokeWeight(5);
      square(x, y, SQUARE_SIZE);
      grid.push([x, y]);
    }
  }

  //Displays the answer bar
  // for (let y = height/2 - SQUARE_SIZE * 3.75; y < height/2 - SQUARE_SIZE * 2.75; y += SQUARE_SIZE) {
  //   for (let x = width/2 - SQUARE_SIZE * 2; x < width/2 + SQUARE_SIZE * 2; x += SQUARE_SIZE) {
  //     square(x, y, SQUARE_SIZE);
  //   }
  // }
}

function gameAnswer() {
  //Picks random colours to be the answer to the "wordle"
  for (let answers = 0; answers < 4; answers++) {
    let randomColour = colours[int(random(0, colours.length - 1))];
    
    answer.push(randomColour);
  }
}

function colourPlacement() {
  temporaryArray.splice(0, NEXT_ROW);

  for (let sequence = 0; sequence < answer.length; sequence++) {
    //If the colours are in the right spot

    if (userInput[sequence] === answer[sequence]) {
      //correctColour = "green";
      temporaryArray.push(true);
    }
    else {
      //correctColour = "black";
      temporaryArray.push(false);
    }

    //If the colours are correct, but in the wrong spot
    for (let correctColour = 0; correctColour < answer.length; correctColour++) {
      if (userInput[sequence] === answer[correctColour]) {
        temporaryArray.push("right");
      }

      else {
        temporaryArray.push(false);
      }
    }
  }

  console.log(temporaryArray);
}