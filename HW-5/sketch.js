var r = 0;
var g = 0;
var b = 0;
var bk = 0;

var trix1 = 60;
var triy1 = 90;
var trix2 = 700;
var triy2 = -50;
var trix3 = 700;
var triy3 = 700;



function setup() {
createCanvas(700, 700);
background(255);

// Hands, Head, Body
  strokeWeight(1);
  fill(255, 178, 102);
  ellipse(35, 77, 20, 20);
  ellipse(35, 100, 20, 20);
  ellipse(0, 50, 40, 40);
  ellipse(0, 110, 33, 80);

// Fingers
  strokeWeight(6);
  line(40, 70, 60, 60);
  line(40, 70, 55, 55);
  line(40, 85, 55, 90);
  line(40, 95, 55, 90);
  line(40, 107, 55, 115);
  line(40, 108, 55, 123);


// Arms and Legs
  strokeWeight(10);
  line(23, 100, 0, 100);
  line(23, 77, 15, 80);
  line(0, 195, 0, 155);

// feet
  strokeWeight(1);
  ellipse(0, 195, 40, 10);

// Trunks
  fill(255, 148, 6);
  strokeWeight(1);
  rect(-5, 132, 20,40);

// Hair


var pwrrelease;
pwrrelease = frameRate(15);



}

function draw() {

noStroke();
fill(r, g, b, bk);
triangle(trix1, triy1, trix2, triy2, trix3, triy3);

trix1 = trix1;
triy1 = trix1 + triy1;
trix2 = random( width % 1800);
triy2 = max(87 / 35);
trix3 = noise(0.3 * 0.2);
triy3 = random(1500 / 0.3);


r = random(0, 255);
g = random(0, 255);
b = random(0, 255);
bk = random(200, 255);

}
