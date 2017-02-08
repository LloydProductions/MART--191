function setup() {
  // Number 1 thing to do
    createCanvas(500, 500);
    background(0, 253, 242);
}

// This is an example comment
// commenst are preceded by 2 forward slashes, like in this line!


/*
  This is a "Block Comment"

  Everything between the two stars, is comments out (i.e *....*)
*/

// Ellipse 1
// this is a purple Ellipse in the middle of the screen
  fill(240, 0, 198);
  stroke(255);
  strokeWeight(16);
  ellipse(150, 200, 300 ,120);


  fill(0, 0, 198);
  stroke(0);
  strokeWeight(16);
  ellipse(250, 250, 300, 120);


  fill(0, 100, 0);
  stroke(150);
  strokeWeight(16);
  ellipse(350, 350, 300, 120);
}
