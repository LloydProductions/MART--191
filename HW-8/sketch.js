var zip = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 500; i++)  {
      zip[i] = new Zip();
    }
}

function draw() {
  background(0);
    for (var i = 0; i < 400; i++) {
      zip[i].move();
      zip[i].display();
    }
}
