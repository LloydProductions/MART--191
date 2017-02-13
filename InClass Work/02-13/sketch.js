// To Create a Variable use the keyword "VAR"

 //this declares to the computer a new piece of reserved memory
//this memeory is reference by the namespace "myFirstVar"

var myFirstVar;

// Assign a value to the Variable
// Said "myFirstVar *gets* 60"
myFirstVar = 70;
myFirstVar = myFirstVar - 60;





// A variable outside of
function setup() {

  createCanvas(800, 400);
  background(200);


  translate(400, 200);
  ellipse(0, 0, myFirstVar, myFirstVar);
  ellipse(0, 0, myFirstVar, myFirstVar);

}

function draw() {

}
