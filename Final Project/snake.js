
// Created a Class for better look
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
this.tot = 0;
this.tail = [createVector()];





// Set the speed in which the snake will move
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };
// resets the food once the snake eats it, continues appearing
  this.eat = function(pos) {
    var di = dist(this.x, this.y, pos.x ,pos.y);
    if (di < 1) {
        this.tot++;
      return true;
    }else {
      return false;
    }
  };
// this is the set function for how fast the snake will actually move
  this.update = function() {
    this.x = this.x + this.xspeed*gri;
    this.y = this.y + this.yspeed*gri;
// makes sure the snake stays on the window and doesn't go off
    this.x = constrain(this.x, 0, width-gri);
    this.y = constrain(this.y, 0, height-gri);
  };
// calls and shows the function on the screen, which sets the speed of X and Y)
  this.show = function() {
    fill(255);
    rect(this.x, this.y, gri, gri);
  };
}
