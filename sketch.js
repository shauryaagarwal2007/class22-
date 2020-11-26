const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld,ground,ball;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();  //.world
  myworld = myengine.world;

  var goption = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,380,400,40,goption);
  World.add(myworld,ground);
  
  var doption = {
    restitution: 0.4
  }

  ball = Bodies.circle(200,20,30,doption);
  World.add(myworld,ball);
}

function draw() {
  background("yellow");  

  Engine.update(myengine);

  fill("purple");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);
}