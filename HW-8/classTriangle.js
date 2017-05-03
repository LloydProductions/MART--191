function Zip (){

  this.x = random(0, 500);
  this.y = random(0, 600);
  this.size = random(10, 40);
  this.r = random(60, 72);
  this.g = random(50, 205);
  this.b = random(50, 205);
  this.a = random(50, 255);

  this.rotation = 0;

  this.speed = random(0.01, 0.5);

  this.display = function () {


    push();

    translate(this.x, this.y);

    rotate(this.rotation);

    noStroke();
    fill(this.r, this.g, this.b, this.a);
    triangle(this.size * -0.5, this.size * 0, this.size * 0.5, this.size * -0.5, this.size * 0.5,this.size * 0.5);


    pop();
  };

  this.move = function() {

    this.rotation = this.rotation + this.speed;
  };

}
