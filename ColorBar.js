let redTransparency = 64;
let greenTransparency = 64;
let blueTransparency = 64;
let blackTransparency = 256;

function drawColorBar() {
  push();
  fill(180, 180, 180);
  noStroke();
  rect(0, 0, barWidth, 500);
  pop();

  push();
  fill(255, 0, 0, redTransparency);
  square(10, 40, 80);
  pop();

  push();
  fill(0, 255, 0, greenTransparency);
  square(10, 150, 80);
  pop();

  push();
  fill(0, 0, 255, blueTransparency);
  square(10, 260, 80);
  pop();

  push();
  fill(0, 0, 0, blackTransparency);
  square(10, 370, 80);
  pop();
}

function updateColor() {
  if (mouseX > 10 && mouseX < 90) {
    if (mouseY > 40 && mouseY < 120) {
      red = 255;
      green = 0;
      blue = 0;
      redTransparency = 256;
      greenTransparency = 64;
      blueTransparency = 64;
      blackTransparency = 64;
    } else if (mouseY > 150 && mouseY < 230) {
      red = 0;
      green = 255;
      blue = 0;
      redTransparency = 64;
      greenTransparency = 256;
      blueTransparency = 64;
      blackTransparency = 64;
    } else if (mouseY > 260 && mouseY < 340) {
      red = 0;
      green = 0;
      blue = 255;
      redTransparency = 64;
      greenTransparency = 64;
      blueTransparency = 256;
      blackTransparency = 64;
    } else if (mouseY > 370 && mouseY < 450) {
      red = 0;
      green = 0;
      blue = 0;
      redTransparency = 64;
      greenTransparency = 64;
      blueTransparency = 64;
      blackTransparency = 256;
    }
  }
}
