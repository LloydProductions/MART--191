function setup() {
  createCanvas(600, 700);
  Background(200, 40, 6);
}
  frameRate(1);

// variables to define ellipse position
var posX = 100;
var posY = 100;

var ellipseSize = 600;

function draw() {
  Background(200);

ellipse(width/2, height/2, ellipseSize, ellipseSize);

// get the current frame rate of the sketh
var currFrameRate;

currFrameRate = frameRate();

text(currFrameRate, 100, 100);
// using the eviornemnt variables using mouseX and Y
ellipse (posX, posY, 30, 30);


// update posX every frame
posX = posX + 1;
posY = posY + 1;

//


}
