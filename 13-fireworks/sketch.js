// Fireworks OOP

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.radius = 3;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.opacity = 255;
  }

  update() {
    //Fade away overtime
    this.opacity--;

    //Move
    this.x += this.dx;
    this.y += this.dy;
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.opacity);
    circle(this.x, this.y, this.radius * 2);
  }

  isDead() {
    return this.opacity <= 0;
  }
}

const NO_OF_SPARKS = 100;
let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  for (let someFirework of theFireworks) {
    if (someFirework.isDead()) {
      //Remove it
      let index = theFireworks.indexOf(someFirework);

      theFireworks.splice(index, 1);
    }
    else {
      someFirework.update();
      someFirework.display();
    }
  }

  //mousePressed();
}

function mousePressed() {
  for (let i = 0; i < NO_OF_SPARKS; i++) {
    let aFirework = new Particle(mouseX, mouseY);
    theFireworks.push(aFirework);
  }
}