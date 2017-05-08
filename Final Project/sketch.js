// Variables to call the snake, speed/grid and food
var snake;
var gri = 20;
var food;

function setup() {
  createCanvas(600, 600);
    snake = new Snake();
// slowed down the framrate to create an older, slower looking game
  frameRate(10);
    picklocation();
}
// picks the random location of the food
function picklocation(){
  var cols = floor(width/gri);
  console.log(cols);
  var rows = floor(height/gri);
  food = createVector(floor(random(cols))*gri, floor(random(rows))*gri);
  // food.mult(gri);
}

// draws the snake and shows it with all variables set
function draw() {
background(51);
  snake.update();
  snake.show();
// resets location of food if eaten
if (snake.eat(food)){
   picklocation();
}
  fill(51, 255, 51);
  rect(food.x, food.y, gri, gri);

}
// allows movement of the snake
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
    console.log('UP');
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}
