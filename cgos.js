var bullet1,bullet2,bullet3,bullet4,wall,barrier;
var speed,weight;
function setup() {

  createCanvas(1600,400);

  bullet1 = createSprite(100, 50, 20, 20);
  bullet1.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
  wall = createSprite(1200,55,10,60);
  wall.shapeColor="gray";
  barrier = createSprite(800,100,1600,16);
  barrier.shapeColor="white";
 

  bullet2 = createSprite(50, 150, 20, 20);
  bullet2.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
  wall = createSprite(1200,155,10,60);
  wall.shapeColor="gray";
  barrier = createSprite(800,200,1600,16);
  barrier.shapeColor="white";
  

  bullet3 = createSprite(50, 250, 20, 20);
  bullet3.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
  wall = createSprite(1200,255,10,60);
  wall.shapeColor="gray";
  barrier = createSprite(800,300,1600,16);
  barrier.shapeColor="white";


  bullet4 = createSprite(50, 350, 20, 20);
  bullet4.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
  wall = createSprite(1200,355,10,60);
  wall.shapeColor="gray";
 
  

}

function draw() {
  background(0,0,0);  

  if(hasCollided(bullet2,wall))
  {
    bullet2.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
      
    }
    if(deformation<10)
    {
      wall.shapeColor=color(0,255,0);
      bullet1.x=1190;
    }
  }



  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
      return false;

}