const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
var box1,box2,box3,box4;
var ball
var rope;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 380, 800, 20);
  box1 = new Box(600,370, 40, 40);
  box2 = new Box(600,330, 40, 40);
  box3 = new Box(600,290, 40, 40);
  box4 = new Box(600,250, 40, 40);
  ball = new Ball(400, 200, 30);
  rope = new Rope(ball.body, {x: 500, y: 150})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ball.display();
  rope.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
