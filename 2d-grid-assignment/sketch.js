// 2d Grids Assignment (Inspired by Mastermind from assignment exemplars)
// Mehreeb Shahzad
// Wednesday, April 15, 2026
//
// Extra for Experts: Background Music and Volume Control
// - Add background music to the game and be able to control the volume using a slider
// - Help from: https://youtu.be/Pn1g1wjxl_0?si=Cg6XolxG85dj3ZXf

const SQUARE_SIZE = 120;
const SQUARES_GAP = 10;
const ROW_SIZE = 4;
const VOL_POSITION = 100;
const SLIDER_INCREMENT = 0.1;
const MAX_VOLUME = 1;
let colours = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white"];
let grid = [];
let answer = [];
let userInput = [];
let nextColour = 0;
let previousRow = 0;
let guessesUsed = 1;
let guessesAvailable = 5;
let bgMusic;
let volumeControl;

function preload() {
  //https://pixabay.com/sound-effects/search/lofi%20music/
  bgMusic = loadSound("bgmusic.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Create the slider to control volume
  volumeControl = createSlider(0, MAX_VOLUME, MAX_VOLUME, SLIDER_INCREMENT);
  volumeControl.position(VOL_POSITION, VOL_POSITION);

  //Play and loop the music when it ends
  bgMusic.play();
  bgMusic.loop();
  
  gameAnswer();
  gameDisplay();
}

function draw() {
  //Display volume slider
  bgMusic.setVolume(volumeControl.value());

  //Display volume text
  stroke("white");
  textSize(25);
  fill("black");
  text("Volume", VOL_POSITION, VOL_POSITION);
}

function mousePressed() {
  //If a box is clicked on, change the colour
  //Note: the nextColour variable changes no matter what box is clicked so if a second box is clicked, it will fill with the next colour in the array, not the first colour
  for (let box = previousRow; box < ROW_SIZE + previousRow; box++) {
    //If user reaches last colour in the array, loop back to first colour
    if (nextColour === colours.length) {
      nextColour = 0;
    }
    
    if (guessesAvailable > 0 && mouseX >= grid[box][0] && mouseX <= grid[box][0] + SQUARE_SIZE && mouseY >= grid[box][1] && mouseY <= grid[box][1] + SQUARE_SIZE) {
      fill(colours[nextColour]);
      stroke("black");
      square(grid[box][0], grid[box][1], SQUARE_SIZE);

      //Push the colour of the boxes at the end of their x and y coordinates
      grid[box].pop();
      grid[box].push(colours[nextColour]);
      nextColour++;
    }
  }
}

function keyPressed() {
  //Locks in previous answer and pushes to a different array
  if (keyCode === ENTER) {
    //Remove previous guess from the array
    userInput.splice(0, ROW_SIZE);
    
    //Pushes the colours that were entered by the user into the userInput array
    for (let square = previousRow; square < ROW_SIZE + previousRow; square++) {
      userInput.push(grid[square][grid[square].length - 1]);
    }

    colourPlacement();
    endScreen();

    //Next row
    previousRow += ROW_SIZE;
    guessesUsed++;
    guessesAvailable--;
  }
}

function gameDisplay() {
  //Pushes the x and y values of each square into the grid array and displays the grid
  for (let y = height/2 - SQUARE_SIZE * 2.5; y < height/2 + SQUARE_SIZE * 2.5 + SQUARES_GAP * 3; y += SQUARE_SIZE) {
    for (let x = width/2 - SQUARE_SIZE * 2; x < width/2 + SQUARE_SIZE * 2 + SQUARES_GAP * 3; x += SQUARE_SIZE) {
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
  let noRepeat = structuredClone(colours);
  
  for (let answers = 0; answers < ROW_SIZE; answers++) {
    let randomIndex = int(random(noRepeat.length));
    
    answer.push(noRepeat[randomIndex]);

    //No repeating colours
    noRepeat.splice(randomIndex, 1);
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
  let textPos = {
    x: width/2 - 25,
    y: (height/2 - SQUARE_SIZE * 2.5)/2,
    centreX: 125,
    centreY: 30
  };

  //If user wins
  if (userInput[0] === answer[0] &&
      userInput[1] === answer[1] &&
      userInput[2] === answer[2] &&
      userInput[3] === answer[3]) {
    strokeWeight(0);
    textSize(25);
    fill("black");
    text("You Win!", textPos.x, textPos.y);
    text("You Guessed the Sequence in " + guessesUsed, textPos.x - textPos.centreX, textPos.y + textPos.centreY);
    guessesAvailable = 0;
  }

  //If user loses
  else if (previousRow === 16) {
    strokeWeight(0);
    textSize(25);
    fill("black");
    text("You Lose", textPos.x, textPos.y);
  }
}