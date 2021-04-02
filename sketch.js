
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var hammer;
var stone;
var plane;
var rubber;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;
    plane=new Plane(600,height,1200,20)
	stone1=new Stone(450,700,70,30)
	stone= new Stone(610,700,70,70);
	
	
	rubber= new Rubber(700,700,70);
	hammer=new Hammer(600,100,100,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display();
  stone.display();
  stone1.display();
  plane.display();
  rubber.display();
  drawSprites();
 
}



