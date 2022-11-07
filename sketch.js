var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png");
  boyImg = loadAnimation ("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200, 180, 400, 100) 
 path.addImage = ("pathImg")
path.velocityX = -5;
path.scale=1.2;

boy = createSprite (50, 50, 60, 60)
boy.addAnimation = ("running", boyImg);
boy.scale=0.5;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary, rightBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
