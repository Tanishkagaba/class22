const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;
function setup() {   
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options ={
    isStatic :true
  }
  ground=Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);
  
var balloptions={
  restitution:0.4
}
  ball=Bodies.circle(200,100,20,balloptions);
  World.add(world,ball);
}         

function draw() {
  background("pink"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}



