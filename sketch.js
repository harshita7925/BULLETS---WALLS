var wall, thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
 
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  speed=random(223,321);
  weight=random(30,52)
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-bullet.x<(bullet.width+wall.width/2))
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0.250,0);
    }

    if(hasCollided(bullet, wall))
    {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);
      }

      if(damage<10)
      {
        wall.shapeColor=color(0,255,0);
      }
    }
  }
  hasCollided();
  drawSprites();
}

function hasCollided(cartridge, wall)
{
  bulletRightEdge=cartridge.x + cartridge.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
}