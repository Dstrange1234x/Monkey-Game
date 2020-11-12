
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400)
monkey=createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400, 350, 900, 10)
  ground.velocityX=-4;
  
  console.log(ground.x)
}


function draw() {
background("white")
 
  if (keyDown("space")&& monkey.y>=100){
    monkey.velocityY=-10;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide (ground)
  ground.x=ground.width/2;
  
  food();
  obstacles();
  drawSprites();
}

function food(){
   if (frameCount % 80 === 0) {
     banana = createSprite(600,100,40,10);
     banana.y = Math.round(random(120,200));
     banana.addImage("bananaImage", bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -3;
     banana.lifetime=400;
   }
   banana=monkey.depth;
  monkey.depth=monkey.depth+1;
}

 function obstacles(){
   if (frameCount % 300 === 0) {
     obstacle = createSprite(600,320,40,10);
     
     obstacle.addImage("obstacleImage", obstacleImage);
     obstacle.scale = 0.2;
     obstacle.velocityX = -3;
     obstacle.lifetime=400;
   }
   }


