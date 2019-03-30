function drawSizeBar() {
  push();
  fill(180, 180, 180);
  noStroke();
  rect(width - barWidth, 0, barWidth, 500);
  pop();

  circle(width - barWidth/2, 83, 20);

  circle(width - barWidth/2, 249, 10);

  circle(width - barWidth/2, 415, 5);

  push();
  noFill();
  square(width - barWidth + 10, selectedSizeYCoordinate, 80);
  pop();

}

function updateSize() {
  if(mouseX > (width - barWidth) + 10 && mouseX < width - 10){
    console.log("a");
  	if(mouseY > 43 && mouseY < 123) {
      size = 20
      selectedSizeYCoordinate = 43;
    } else if(mouseY > 209 && mouseY < 289) {
      size = 10
      selectedSizeYCoordinate = 209;
    } else if(mouseY > 375 && mouseY < 455) {
      size = 5
      selectedSizeYCoordinate = 375;
    }
  }
}
