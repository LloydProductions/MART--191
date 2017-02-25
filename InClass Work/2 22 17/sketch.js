var result;
var textPos_X;
var tetPos_Y;
function setup() {

  createCanvas(800, 600);
    textPos_X = width * 0.5;
    textPos_Y = width * 0.5;

    frameRate(2);
}

function draw() {
background(40, 70, 245);


// DO SOME Math
// itselft + 1
// result = result + 1

// display math results
textSize(36);
fill(255);
text(result, textPos_X, textPos_Y);




}
