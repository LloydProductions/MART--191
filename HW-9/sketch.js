var smiley = [];
var arrNum = 10;


function setup() {
  createCanvas(800, 600);
    for ( var i = 0; i < arrNum; i++) {
        smiley.push( new Smiley(
            random(1, 800),
            random(1, 600)
        )
      );
    }

}

function draw() {
  background(0);

    for (var i = 0; i < smiley.length; i++) {
        smiley[i].display();
        smiley[i].move();
        smiley[i].collisionCheck(smiley,i);
    }


}
