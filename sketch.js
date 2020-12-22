
var monkey, monkey_running
var banana ,bananaImage,obstacle, obstacleImage
var bananaGroup, obstacleGroup
var ground
var score

function preload(){
  
  
  monkey_running= loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
createCanvas(600, 400);  

bananaGroup = createGroup();
obstacleGroup= createGroup();
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;
  
ground= createSprite(400,350,1080,10);
ground.velocityX=-4;
console.log(ground.x);
  
score=0;
  
}


function draw() {

background(225);

text("Survival time: "+ score, 400 ,50);
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
if(keyDown("space")) {
        monkey.velocityY = -12;
    }
  
monkey.velocityY = monkey.velocityY + 0.8

score = score + Math.round(getFrameRate()/65);
  
monkey.collide(ground);

food();
  
spawnObstacles();
  
drawSprites(); 
}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.08;
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    bananaGroup.add(banana);
}
    }

function spawnObstacles(){
  //spawing an obstacle every 60 frame count
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,332,10,10);
   obstacle.velocityX = -6
  obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
 }
}

