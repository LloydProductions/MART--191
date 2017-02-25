var xMidLine1 = 900;
var xMidline2 = 900;
var xMidLine3 = 900;
var xMidLine4 = 900;
var xMidLine5 = 900;

var yValue_Only = 570;

function setup() {
  createCanvas(700, 700);
  frameRate(100);
}

function draw() {
  background(20, 160, 255);

push();
strokeWeight(1);

  // Bulding Yellow
  fill(255, 204, 0);
  rect(5, 150, 135, 250);

// Building Windows
  fill(255,255,255);
// Left Row
  rect(15, 160, 15, 25);
  rect(15, 190, 15, 25);
  rect(15, 220, 15, 25);
  rect(15, 250, 15, 25);
  rect(15, 280, 15, 25);
  rect(15, 310, 15, 25);
  rect(15, 340, 15, 25);
// Left Center Row
  rect(40, 340, 15, 25);
  rect(40, 310, 15, 25);
  rect(40, 280, 15, 25);
  rect(40, 250, 15, 25);
  rect(40, 220, 15, 25);
  rect(40, 190, 15, 25);
  rect(40, 160, 15, 25);
// Center Row
  rect(65, 340, 15, 25);
  rect(65, 310, 15, 25);
  rect(65, 280, 15, 25);
  rect(65, 250, 15, 25);
  rect(65, 220, 15, 25);
  rect(65, 190, 15, 25);
  rect(65, 160, 15, 25);
// Right Center
  rect(90, 340, 15, 25);
  rect(90, 310, 15, 25);
  rect(90, 280, 15, 25);
  rect(90, 250, 15, 25);
  rect(90, 220, 15, 25);
  rect(90, 190, 15, 25);
  rect(90, 160, 15, 25);
// Right Row
  rect(115, 340, 15, 25);
  rect(115, 310, 15, 25);
  rect(115, 280, 15, 25);
  rect(115, 250, 15, 25);
  rect(115, 220, 15, 25);
  rect(115, 190, 15, 25);
  rect(115, 160, 15, 25);
// Door
  fill(20, 20, 60, 60);
  rect(65, 375, 15, 25);
pop();

push();
// Red Buildling
  fill('red');
  rect(490, 300, 100, 100);

// Windows
  fill(51);
// left Side
  rect(495, 310, 15, 25);
  rect(495, 340, 15, 25);
  rect(495, 370, 15, 25);
// left Center
  rect(515, 340, 15, 25);
  rect(515, 310, 15, 25);
// Right Center
  rect(550, 310, 15, 25);
  rect(550, 340, 15, 25);
// Right
  rect(570, 340, 15, 25);
  rect(570, 310, 15, 25);
  rect(570, 370, 15, 25);
// Door
  fill(255, 255, 0);
  rect(535, 375, 15, 25);

push();
// Tree's
  strokeWeight(0);
  fill('rgb(0, 255, 0)');
// Tree Left
  ellipse(163, 335, 30, 20);
  ellipse(180, 325, 30, 20);
  ellipse(180, 345, 30, 20);
  ellipse(195, 335, 30, 20);
// Tree Right
  ellipse(600, 325, 30, 20);
  ellipse(615, 335, 30, 20);
  ellipse(585, 335, 30, 20);
  ellipse(600, 345, 30, 20);
pop();

// Tree Trunks
push();
  fill(51, 25, 0);
  strokeWeight(0);
  rect(175, 355, 10, 50);
  rect(595, 355, 10, 50);
pop();

push();
// Street and side walk
  fill(32, 32, 32);
  rect(0, 415, 700, 405);
  fill(160, 160, 160);
  rect(0, 400, 700, 35);
  pop();






// Center Lines
push();

rect(xMidLine1, yValue_Only, 30, 5);
rect(xMidline2-200, yValue_Only, 30, 5);


xMidLine1 = xMidLine1-1;
xMidline2 = xMidline2-1;



if(frameCount %1800 === 0) {xMidLine1 = 900;}


push();
// Skateboard
fill(102, 51, 0);
rect(mouseX-35, mouseY-15, 70, 5);

// Wheels
fill(204, 0, 102);
ellipse(mouseX-25, mouseY-5, 10, 10);
ellipse(mouseX+25, mouseY-5, 10, 10);

// SkateBoarder

// Legs
fill(0, 0, 0);
rect(mouseX+0, mouseY-45, 8, 30);
rect(mouseX-15, mouseY-45, 8, 30);
// Body
ellipse(mouseX-3, mouseY-60, 35, 50);
// Head
ellipse(mouseX-3, mouseY-95, 30, 30);
// Arms
fill(0, 0, 204);
rect(mouseX+13, mouseY-65, 35, 6);
rect(mouseX-55, mouseY-65, 35, 6);
pop();
}
