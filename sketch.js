const barWidth = 100;
let red = 0;
let green = 0;
let blue = 0;
let size = 10;
let selectedSizeYCoordinate = 209;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  drawColorBar();
  drawSizeBar();

  if(isOverCanvas()) {
    push();
    fill(red, green, blue);
    noStroke();
    circle(mouseX, mouseY, size);
    pop();
  }

}

function isOverCanvas() {
	return mouseX < width - barWidth && mouseX > barWidth;
}

function mousePressed() {
	if (isOverColorBar()) {
    updateColor();
  } else if (isOverSizeBar()) {
    updateSize();
  }
}

function isOverColorBar() {
	return mouseX < barWidth;
}

function isOverSizeBar() {
	return mouseX > width - barWidth;
}
