var survivialtime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
monkey=createSprite(80,180,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
 ground=createSprite(400,350,900,10);
 ground.velocityX=-4;
  ground.x=ground.width/2;
 
  
  
}  
function food(){
  if(frameCount% 80===0){
    var banana=createSprite(200,120,30,40);
        banana.scale=0.1;
    banana.velocityX=-3;
    
    banana.addImage(bananaImage);
banana.lifetime=100;
    position=Math.round(random(120,200));
  } 
}
  function obstacle(){
    if(frameCount%300===0){
      var obstacle=createSprite(150,340,20,10);
     obstacle.addImage(obstacleImage);
     obstacle.lifetime=100;
      obstacle.scale=0.1;
    }
  }



function draw() {
  background("white");
console.log(frameCount);
 stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivialtime=Math.ceil(frameCount/frameRate())
  text("Survivial Time:"+survivialtime,100,50);
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
 monkey.velocityY=monkey.velocityY+0.6; 
  monkey.collide(ground);
food();
  obstacle();
  
  drawSprites();
}






