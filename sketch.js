var rectangles = [];

var a = 200;

function setup(){

  createCanvas(600*0.71, 600);

  // noStroke();


}

function draw() {
  fill(27, 76, 90);

  //rect(0, 0, height, height);

  // translate(width/2, height/2);
  // scale(0.5);
  // // rotate(2*PI/3);
  // rect(mouseX, mouseY, height, height);


  translate(width/2, height/2);
  rect(mouseX, mouseY, a, a);

  // scale(2/3);
  rotate(PI/3);

  rect(mouseX, mouseY, a, a);
}

function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
		text(y, 1, y+12);
	}
}

function animatingRectangle() {
  this.width
}
