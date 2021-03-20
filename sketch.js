
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob , bob2 , bob3 , bob4 ;
var roof;
var slingshoot;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(300,240,50,50);
  roof = new Roof();
   slingshoot = new Rope (bob.body,{x:100,y:100});
  
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob.display();
  roof.display();
  slingshoot.display();
  
  
  drawSprites();
 
}



