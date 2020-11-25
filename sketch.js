
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground;
var block1,block2,block3;
var polygon;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  //ground
  ground = new Ground(400,380,800,15);

  //stand
  stand = new Ground(600,300,200,2);

  //block1
  block1 = new Box(575,280,40,40);

  //block2
  block2 = new Box(625,280,40,40);

  //block3
  block3 = new Box(600,240,40,40);

  //polygon
  polygon = Bodies.circle(50,200,30,{density: 1,restitution: 0.4});
  World.add(world,polygon);

  //slingshot
  sling = new Slingshot(polygon,{x:100,y:100});
  
}

function draw() {
  background(0); 
  rectMode(CENTER);
  Engine.update(engine);
  ground.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,15,15);
  sling.display();

  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon,{x : mouseX, y : mouseY});
}

function mouseReleased()
{
    sling.fly();
}