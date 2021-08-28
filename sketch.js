var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf;
var appleImage, leavesImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leavesImage = loadImage("leaf.png");
  appleImage = loadImage("apple.png")

}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  var select_sprites = Math.round(random(1,2))

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else {
      createLeaves();
    }
  }

  drawSprites();
}



function createLeaves() {
  leaf = createSprite(200,20,10,10)

  leaf.addImage(leavesImage)

  leaf.scale = 0.08

  leaf.velocityY = 4

  leaf.lifetime = 100

  leaf.x = Math.round(random(20,380))
}



function createApples() {
  apple = createSprite(200,20,10,10)

  apple.addImage(appleImage)

  apple.velocityY = 4

  apple.scale = 0.08

  apple.lifetime = 100

  apple.x = Math.round(random(20,380))
}