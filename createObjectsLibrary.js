function createInitialGameObjects() {
  startButton.hide();
  bg = createSprite(width / 2, height / 2);
  bg.addImage("background", bgImg);
  bg.addImage("background2", bgImg2);
  bg.scale = 2.5;
  bg.velocityX = -2;
  gameState = "play";
  ground = createSprite(width / 2, height - 50, width, 30);
  ground.visible=false
  player = createSprite(100, height - 100, 100, 50);
  player.addAnimation("player",playerImg);
  player.addImage("playerEnd",playEnd);
  //player.debug=true
  player.setCollider("rectangle",-10,0,50,100)
  villain = createSprite(width - 100, height - 100, 100, 50);
  villain.addAnimation("villain", villainImg);
  villain.addImage("villainEnd", villainEnd);
  obstacleGroup = new Group();
  coinGroup = new Group();
  nextButton = createSprite(windowWidth/2,windowHeight/2+50, 50, 20);
  nextButton.visible = false;
}

function spawnObstaclesLevel1() {
  if (frameCount % 95 === 0) {
    var obstacle = createSprite(width, height - 135, 20, 20);
    obstacle.velocityX = -10;
    obstacleGroup.add(obstacle);
    rand = Math.round(random(1, 3));

    obstacle.lifetime = 1000;
    if (rand === 1) {
      obstacle.addImage("cactus1", cactusImg1);
    } else if (rand === 2) {
      obstacle.addImage("cactus2", cactusImg2);
    } else obstacle.addImage("cactus3", cactusImg3);

    obstacle.scale=0.5
    //obstacle.debug=true
  }
}

function spawnCoinslevel1() {
  if (frameCount % 50 === 0) {
    var coin = createSprite(width, height - 350, 20, 20);
    coin.velocityX = -10;
    coin.lifetime=1000;
    coinGroup.add(coin);
    coin.addImage("coin",coinImg);
    coin.scale=0.5;
   // coin.debug=true
    coin.setCollider("circle",0,0,70)
    /*
        rand=Math.round(random(1,3));
        console.log(rand);
        if(rand===1){
         gun.addImage("cactus1",cactusImg1);
        }
        else if(rand===2){
          gun.addImage("cactus2",cactusImg2);
        }
        else 
          gun.addImage("cactus3",cactusImg3);
    
          gun.scale=0.1;
          */
  }
}
