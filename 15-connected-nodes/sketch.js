// Connected Nodes OOP Demo

let nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  //Draw the lines first
  for (let node of nodes) {
    node.update();
    node.connectTo(nodes);
  }
  
  //Draw the circles after
  for (let node of nodes) {
    node.display();
  }
}

function mousePressed() {
  let somePoint = new MovingPoint(mouseX, mouseY);
  nodes.push(somePoint);
}

class MovingPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.05;
    this.r = 15;
    this.speed = 5;
    this.colour = color(random(255), random(255), random(255));
    this.reach = 200;
    this.minR = 15;
    this.maxR = 50;
  }

  display() {
    noStroke();
    fill(this.colour);
    circle(this.x, this.y, this.r * 2);
  }

  update() {
    this.move();
    this.wrapAroundScreen();
    this.adjustSizeByMouse();
  }

  adjustSizeByMouse() {
    let mouseDistance = dist(this.x, this.y, mouseX, mouseY);
    if (mouseDistance < this.reach) {
      let theSize = map(mouseDistance, 0, this.reach, this.maxR, this.minR);
      this.r = theSize;
    }
    else {
      this.r = this.minR;
    }
  }

  connectTo(nodesArray) {
    for (let otherNode of nodesArray) {
      if (this !== otherNode) {
        let distanceAway = dist(this.x, this.y, otherNode.x, otherNode.y);
        if (distanceAway < this.reach) {
          stroke(this.colour);
          line(this.x, this.y, otherNode.x, otherNode.y);
        }
      }
    }
  }

  wrapAroundScreen() {
    if (this.x < 0) {
      this.x += width;
    }

    if (this.x > width) {
      this.x -= width;
    }

    if (this.y < 0) {
      this.y += height;
    }

    if (this.y > height) {
      this.y -= height;
    }
  }

  move() {
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);

    //Scale from 0-1 to movement speed
    dx = map(dx, 0, 1, -this.speed, this.speed);
    dy = map(dy, 0, 1, -this.speed, this.speed);

    //Move the point
    this.x += dx;
    this.y += dy;

    //Move on the time axis
    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
  }
}