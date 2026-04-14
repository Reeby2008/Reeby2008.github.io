// 2d Grids Assignment
// Mehreeb Shahzad
// Wednesday, April 15, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const SQUARE_SIZE = 120;
const SQUARES_GAP = 10;
const NEXT_ROW = 4;
let colours = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white"];
let grid = [];
let answer = [];
let userInput = [];
let nextColour = 0;
let previousRow = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  gameAnswer();
  gameDisplay();
}

function mousePressed() {
  //If a box is clicked on, change the colour
  //Note: the nextColour variable changes no matter what box is clicked so if a second box is clicked, it will fill with the next colour in the array, not the first colour
  //Note: even after the sequence of colours is guessed correctly, the next row can still be clicked on and changed
  for (let index = previousRow; index < NEXT_ROW + previousRow; index++) {
    //If user reaches last colour in the array, loop back to first colour
    if (nextColour === colours.length) {
      nextColour = 0;
    }
    
    if (index < grid.length && mouseX >= grid[index][0] && mouseX <= grid[index][0] + SQUARE_SIZE && mouseY >= grid[index][1] && mouseY <= grid[index][1] + SQUARE_SIZE) {
      fill(colours[nextColour]);
      stroke("black");
      square(grid[index][0], grid[index][1], SQUARE_SIZE);

      //Push the colour of the boxes at the end of their x and y coordinates
      grid[index].pop();
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
    
    //Pushes the colours that were entered by the user into the userInput array
    for (let i = previousRow; i < NEXT_ROW + previousRow; i++) {
      userInput.push(grid[i][grid[i].length - 1]);
    }

    colourPlacement();
    endScreen();

    //Next row
    previousRow += 4;
  }
}

function gameDisplay() {
  //Pushes the x and y values of each square into the grid array and displays the grid
  for (let y = height/2 - SQUARE_SIZE * 2.5; y < height/2 + SQUARE_SIZE * 2.5 + SQUARES_GAP * 4; y += SQUARE_SIZE) {
    for (let x = width/2 - SQUARE_SIZE * 2; x < width/2 + SQUARE_SIZE * 2 + SQUARES_GAP * 4; x += SQUARE_SIZE) {
      strokeWeight(5);
      square(x, y, SQUARE_SIZE);
      grid.push([x, y, "white"]);
      x += SQUARES_GAP;
    }
    y += SQUARES_GAP;
  }
}

function gameAnswer() {
  //Picks random colours to be the answer to the game
  for (let answers = 0; answers < 4; answers++) {
    let randomColour = colours[int(random(0, colours.length))];
    
    answer.push(randomColour);
  }
}

function colourPlacement() {
  //Check which colours are right
  for (let sequence = 0; sequence < userInput.length; sequence++) {
    //If the colours are in the right spot
    if (userInput[sequence] === answer[sequence]) {
      //Redraw box with correct outline
      fill(grid[sequence + previousRow][2]);
      stroke(0, 190, 0);
      square(grid[sequence + previousRow][0], grid[sequence + previousRow][1], SQUARE_SIZE);
    }

    //If the colours are correct, but in the wrong spot
    else if (userInput[sequence] === answer[0] ||
             userInput[sequence] === answer[1] ||
             userInput[sequence] === answer[2] ||
             userInput[sequence] === answer[3]) {
      //Redraw box with correct outline
      fill(grid[sequence + previousRow][2]);
      stroke(190, 190, 0);
      square(grid[sequence + previousRow][0], grid[sequence + previousRow][1], SQUARE_SIZE);
    }
  }
}

function endScreen() {
  //If user wins
  if (userInput === answer) {
    text("You Win!", width/2, height/2);
  }

  //If user loses
  if (previousRow === 16 && userInput !== answer) {
    text("You Lose", width/2, height/2);
  }
}