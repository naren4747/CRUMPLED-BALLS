
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	box1 = new Dustbins (530,630,40,125)
	box2= new Dustbins  (650,680,200,30)
	box3 =new Dustbins (770,630,40,125)
	ground= new Ground (500,700,1000,10)
	paper = new Paper (100,630,20)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  ground.display()
  paper.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce (paper.body,paper.body.position,{x:65,y:-65})
	}
}


