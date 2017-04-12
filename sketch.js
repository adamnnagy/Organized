var rectangles = [];

function setup(){

  createCanvas(600*0.71, 600);

  noStroke();


}

function draw() {
  fill(27, 76, 90);
  rect(0, 0, height, height);

  translate(mouseX*2, mouseY*2);
  scale(0.5);
  rotate(2*PI/3);
  rect(0, 0, height, height);


}


function animatingRectangle() {
  this.width
}
