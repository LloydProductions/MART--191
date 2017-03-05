var exy = 15;
var state = false;
var click = 10;
var d = 20;

function setup() {
createCanvas(700, 700);
background(0, 204, 204);

fill(224, 224, 224);
strokeWeight(1);
rect(325, 0, 15, 650);
rect(250, 650, 600, 50);
rect(0, 10, 325, 15);

fill(255, 222, 0);
strokeWeight(1);
rect(340, 250, 45, 5);
rect(340, 220, 45, 5);
rect(10, 5, 36, 70);
rect(363, 218, 49, 49);
rect(294, 78, 36, 70);

rect(340, 290, 45, 5);
rect(340, 320, 45, 5);
rect(363, 290, 49, 49);


fill(0);
rect(367, 222, 42, 42);
rect(297, 80, 30, 65);
rect(13, 8, 30, 65);
rect(367, 294, 42, 42);

fill(32);
rect(0, 670, 250, 35);

fill(128, 128, 128);
rect(325, 450, 15,25);
}

function draw() {
if (state) {

fill(255, 0, 0);
ellipse(28, 23, exy, exy);
ellipse(312, 93, exy, exy);

strokeWeight(1);
ellipse(389, 240, 5,23);
ellipse(383, 240, 5, 20);
ellipse(394, 240, 5, 18);
ellipse(399, 240, 5, 15);
ellipse(380, 250, 15, 5);
strokeWeight(0);
ellipse(390, 250, 20, 15);



} else {
  fill(0, 204, 0);
  ellipse(28, 60, exy, exy);
  ellipse(312, 133, exy, exy);

  fill(255);
  strokeWeight(1);
  rect(375, 310, 15, 5);
  rect(383, 323, 5, 10);
  rect(386, 310, 15, 5);
  rect(387, 323, 5, 10);
  rect(385, 310, 5, 15);
  ellipse(388, 304, 13, 13);
  }
ellipse(333, 460, click, click);
}

function mousePressed() {
  if (dist(mouseX, mouseY, click, click) < d / 2) {
    state = !state;
      }
  }
