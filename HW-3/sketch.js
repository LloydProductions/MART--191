function setup() {
// Basic Backdrop and Elements
  createCanvas(700, 550);
  background('red');


// Naming Me
push();
  textAlign(CENTER);
  textSize(20);
  text("Jeremy Johnson's Self Portrait by Jeremy Johnson", 350, 600);
pop();

// Body
push();
  translate(250, 250);
  rectMode(CENTER);
  fill(51);
  rect(15, 60, 160, 300);
  line(15, -90, 15, 210);
  fill(0);
  rect(15, -60, 18, 15);
  rect(15, -30, 25, 15);
  rect(15, 0, 18, 15);
  rect(15, 30, 25, 15);
  rect(15, 60, 18, 15);
  rect(15, 90, 25, 15);
  rect(15, 120, 18, 15);
pop();

// Arms with Hands
push();
  translate(250, 250);
  strokeWeight(15);
  line(100, -85, 140, 40);
  line(142, 45, 140, 190);
  fill(0, 0, 0);
  rect(130, 200, 15, 15);
  line(-60, -85, -90, 40);
  line(-142, -45, -90, 40);
  rect(-148, -65, 15, 15);
pop();

// Peace out... brah
push();
  translate(250, 250);
  strokeWeight(6);
  line(-140, -65, -140, -90);
  line(-145, -60, -160, -90);
pop();


// Neck
push();
  translate(250,250);
  rectMode(CENTER);
  fill(0);
  rect(15, -110, 30, 40);
pop();


// Head
push();
  translate(300,300);
  fill(51);
  ellipse(-35, -220, 120, 130);

// Eyes Left then Right
  fill(250, 250, 250);
  ellipse(-58, -235, 25, 15);
  fill(0, 0, 0);
  ellipse(-58, -235, 15, 15);
  fill(250, 250, 250);
  ellipse(-10, -235, 25, 15);
  fill(0, 0, 0);
  ellipse(-10, -235, 15, 15);

pop();

// Mouth
push();
  fill(0, 0, 255);
  arc(105, 180, 50, 25, 0, PI, CHORD);

// Nose
  fill(0, 0, 0);
  triangle(-33, -215, -33, -195, -50, -190);
pop();

// Legs
push();
  translate(400, 400);
  fill(0, 0, 255);
  triangle(-135, 60, -55, 60, 80, 260);
  triangle(-215, 60, -310, 240, -135, 60);
pop();

}

function draw() {

}
