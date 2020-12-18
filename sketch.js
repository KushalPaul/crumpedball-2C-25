
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin, dustbin2, dustbin3, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(150,660,50)
   dustbin = new Dustbin(600,655,160,10)
   dustbin2 = new Dustbin(520,580,10,150)
   dustbin3 = new Dustbin(680,580,10,150)
   ground = new Ground(0,665,10000,10)

   Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
 //keyPressed();
  drawSprites();
 
}
 function keyPressed(){
   if (keyCode === UP_ARROW){

     Matter.Body.applyForce(paper.body,paper.body.position,{x:42,y:-45});
   }
 }


