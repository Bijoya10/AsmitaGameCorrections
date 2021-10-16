function start(){
  textSize(30)
  fill("black")
  text("Hello, This is Asmita's game", width/2-200,100)
  text("This game is a runner game where you run to collect points", width/2-400,140)
  fill("red")
  text("Controls- ", width/2-100,250)
  text("Press up arrow to jump", width/2-200,280)
}


// play function or level 0
function play() {
  console.log(score)
  bg.velocityX=-10
  if (bg.x < 150) {
    bg.x = width / 2;
  }
  spawnObstaclesLevel1();
  spawnCoinslevel1();

  if (keyDown("UP_ARROW") && player.collide(ground)) {
    player.velocityY = -20;
  }
  if (keyDown("RIGHT_ARROW")) {
    player.x += 5;
  }
  for(var i=0;i<coinGroup.length;i++){
    if (coinGroup.get(i).isTouching(player)) {
        coinGroup.get(i).destroy();
        score++;
    }
  }
  player.velocityY += 0.6;
  player.collide(ground);

  if (player.isTouching(obstacleGroup)) {
    gameState="lost"
  }
  villain.velocityY += 0.6;
  villain.collide(ground);
  
 if (score >= 5) {
    textSize(30)
   // text("Proceed to next level?", windowWidth/2, windowHeight/2);
   /* nextButton.addImage("next",nextImg);
    nextButton.visible = true;
    nextButton.scale=0.2;
    if (mousePressedOver(nextButton)) {
      gameState = "level1";

      nextButton.visible = false;
    }*/
    gameState="end";
  }
}

//  level 1
function level1(){
  bg.changeImage("background2", bgImg2);
  
}
