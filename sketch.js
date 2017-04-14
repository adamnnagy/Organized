var rectangles = [];
var defaultHeight = 50;
var numberOfRectangles = 5;

function setup(){

  createCanvas(600*0.71, 600);
	rectMode(CENTER);

  // noStroke();

  for (var i = 0; i < numberOfRectangles; i++) {
    rectangles[i] = new Rectangle(defaultHeight*numberOfRectangles*i);
    console.log(rectangles[i].width);
  }

}

function draw() {

  background(250);

  translate(width/2, height/2);

  rect(0, 0, defaultHeight, defaultHeight);
  rect(0, 0, rectangles[1].height, rectangles[1].width);


for (var i = rectangles.length - 1; i > 0; i--) {
  // noStroke();

  //map the color!
  
  fill(27, 76, 90*(i%255));
  // scale(i);
  rectangles[i].update();
  rectangles[i].display();
}

	//could analyze sound in the final project -- and do the coloring according to that.
	//also playing the instrument: nature
	//rotate rectangle 1

}
