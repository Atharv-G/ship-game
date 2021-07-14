var ship,ship_moving
var sea,bg

function preload(){
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png" , "ship-4.png");
  sea = loadImage("sea.png");
}

function setup(){
  createCanvas(500,400);

  //create sea
  bg = createSprite(500,200);
  bg.addImage(sea);
  bg.scale=0.3
  bg.velocityX = -4

  //create ship
  ship = createSprite(150,160,20,50);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.25;

 
}

function draw() {
  background("blue");

  if (bg.x < 0) {
    bg.x = bg.width / 8
  }

  drawSprites();
}