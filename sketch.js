var ground;
var player, villain;
var rand, bg, bgImg, bgImg2,cactusImg1, cactusImg2, cactusImg3, playerImg,coinImg, nextImg,playEnd, villainEnd;
var time,lives = 3,score = 0;
var coinGroup,obstacleGroup;
var startButton,nextButton;

var gameState = "start";

function preload() {
  villainImg = loadAnimation("images/boy/boy1.png","images/boy/boy2.png","images/boy/boy3.png","images/boy/boy4.png","images/boy/boy5.png");
  cactusImg1 = loadImage("images/cactus1.png");
  cactusImg2 = loadImage("images/cactus2.png");
  cactusImg3 = loadImage("images/cactus3.png");
  bgImg = loadImage("images/bg2.jpg");
  bgImg2 = loadImage("images/Australian_Grasslands.jpg");
  coinImg=loadImage("images/coin.png");
  nextImg=loadImage("images/nextButton.png");
  villainEnd=loadImage("images/boy/boy1.png")
  playEnd=loadImage("images/cuteGirl2/tile000.png")
  playerImg = loadAnimation("images/cuteGirl2/tile000.png", "images/cuteGirl2/tile001.png", "images/cuteGirl2/tile002 .png", "images/cuteGirl2/tile003.png", "images/cuteGirl2/tile004.png", "images/cuteGirl2/tile005.png", "images/cuteGirl2/tile006.png", "images/cuteGirl2/tile007.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  startButton= createButton("Start");
  startButton.position(windowWidth/2-50,windowHeight/2);
  startButton.mousePressed(() => {
    createInitialGameObjects();
  });
}

function draw() {
  background("skyblue");
  drawSprites();
  if(gameState==="start"){
    start()
  }
  if (gameState === "play") {
    play();
    textSize(40);
    stroke("orange");
    fill("orange");
    text("SCORE:"+score,100,100);

  }
  if (gameState === "level1") {
    level1()
  }
  if(gameState=="end" || gameState=="lost"){
    if(gameState=="end"){
    stroke("blue");
    fill("blue");
    textSize(100)
    text("You Won!",width/2-200,height/2-100);
    }
    if(gameState=="lost"){
      stroke("blue");
      fill("blue");
      textSize(100)
      text("You Lose!",width/2-200,height/2-100);
      }
    bg.velocityX=0;
    ground.velocityX=0
    coinGroup.setVelocityEach(0,0)
    coinGroup.setLifetimeEach(-1)
    obstacleGroup.setVelocityEach(0,0)
    obstacleGroup.setLifetimeEach(-1)
    player.collide(ground)
    villain.collide(ground)
    player.changeImage("playerEnd",playEnd);
    villain.changeImage("villainEnd", villainEnd);
    player.velocityY=0
    villain.velocityY=0
    
  }
}
