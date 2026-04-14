// Walker OOP Demo

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.d = 2;
    this.colour = "red";
    this.speed = 5;
  }

  display() {
    fill(this.colour);
    stroke(this.colour);
    circle(this.x, this.y, this.d);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //Move up
      this.y -= this.speed;
    }

    else if (choice < 50) {
      //Move down
      this.y += this.speed;
    }

    else if (choice < 75) {
      //Move left
      this.x -= this.speed;
    }

    else {
      //Move right
      this.x += this.speed;
    }
  }
}

let tyler;
let audrey;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tyler = new Walker(width/2, height/2);
  audrey = new Walker(300, 500);
  audrey.colour = "blue";
}

function draw() {
  tyler.move();
  audrey.move();
  tyler.display();
  audrey.display();
}
