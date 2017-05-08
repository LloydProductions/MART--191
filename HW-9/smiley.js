function Smiley(init_x, init_y) {
  this.pos = {
    x: init_x,
    y: init_y
  };
  this.rot = random(0, 360);
    this.vel = {
      x: random(0.5, 4),
      y: random(0.5, 4)
  };
  this.rad = 25;
}

Smiley.prototype.display = function() {
  push();
  noStroke();
    translate(this.pos.x, this.pos.y);
    angleMode(degrees);
    rotate(this.rot);
// Smiley BODY
  strokeWeight(2);
    fill(255, 248, 4);
    ellipse(115, 120, 75, 75);
//  EYES
  strokeWeight(0);
    fill(255, 255, 255);
    ellipse(105, 107, 20, 20);
    ellipse(125, 107, 20, 20);
    // Inner EYES
      fill(0);
      ellipse(104, 107, 8, 8);
      ellipse(124, 107, 8, 8);
fill(0);
arc(115, 130, 50, 30,0,PI,CHORD);
pop();
};

Smiley.prototype.move = function() {
  this.pos.x += this.vel.x;
  this.pos.y += this.vel.y;

  if(this.pos.x >= width) {

    this.vel.x *= -1;
    consol.log("BOUNCE");

  } else if (this.pos.x <= 0) {

    this.vel.x *= -1;
    console.log("BOUNCE");
  }
  if (this.pos.y >= height) {

    this.vel.y *= -1;
    console.log("BOUNCE");

  } else if (this.pos.y <= 0) {

    this.vel.y *= -1;
    console.log("BOUNCE");
    }
};

Smiley.prototype.collisionCheck = function(smileyArr, myIdx) {

  var maxDist, distance, otherSmiley;


    for(var i = 0; i < smileyArr.length; i++) {

      var collision = false;

      otherSmiley = smileyArr[i];

      if (i !== myIdx) {
        distance = dist(this.pos.x, this.pos.y, otherSmiley.pos.x, otherSmiley.pos.y);
        maxDist = this.rad + otherSmiley.rad;

        if (distance <= maxDist) {
          collision = true;

        }

        if (collision) {
          this.vel.x *= -1;
          this.vel.y *= -1;
        }

      }

    }

  };
