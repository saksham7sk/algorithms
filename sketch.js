var fixedRect, movingRect;

var ball1, ball2;


function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(200, 200, 237, 97);
  movingRect = createSprite(500, 200, 123, 46);

  ball1 = createSprite(500, 10, 20, 30);
  ball1.shapeColor = "purple"
  ball2 = createSprite(500, 390, 30, 20);
  ball2.shapeColor = "hotpink"
  ball1.velocityY = 2;
  ball2.velocityY = -2;

  ball3 = createSprite(10, 300, 20, 20);
  ball3.shapeColor = "brown"
  ball4 = createSprite(600, 300, 20, 20);
  ball4.shapeColor = "tan"
  ball3.velocityX = 3;
  ball4.velocityX = -3
}

function draw() {
  background("lightblue");

  movingRect.x = mouseX
  movingRect.y = mouseY

  if (movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width) / 2
    && fixedRect.x - movingRect.x <= (movingRect.width + fixedRect.width) / 2
    && movingRect.y - fixedRect.y <= (movingRect.height + fixedRect.height) / 2
    && fixedRect.y - movingRect.y <= (movingRect.height + fixedRect.height) / 2) {
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "green"
  }
  else {
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }


  if (ball1.y - ball2.y <= (ball1.height + ball2.height) / 2
    && ball2.y - ball1.y <= (ball1.height + ball2.height) / 2) {
    ball1.velocityY = ball1.velocityY * (-1);
    ball2.velocityY = ball2.velocityY * (-1);
  }

  if (ball3.x - ball4.x <= (ball3.width + ball4.width) / 2
    && ball4.x - ball3.x <= (ball3.width + ball4.width) / 2) {
      ball3.velocityX = ball3.velocityX * (-1)
      ball4.velocityX = ball4.velocityX * (-1);
  }



  drawSprites();
}
