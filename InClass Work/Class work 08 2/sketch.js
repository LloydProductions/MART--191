function setup() {
  // Number 1 thing to do
    createCanvas(500, 500);
    background(0, 253, 242);

push();
// example with push pop
// AKA the Head
translate(250, 100);
fill(0, 255, 0);
ellipse(0, 0, 300, 120);
pop();

// The Eyes
push();
translate(0, -30);
fill(0);
ellipse(-20, 0, 30, 20);
ellipse(20, 0, 30, 20);
pop();

 // The Mouth
push();
line(-75, -10, 75, -10);
pop();

// The Nose
push();
fill(30, 200, 10);
triangle(0, -30, 0, 10, 30, 20);
pop();
}
