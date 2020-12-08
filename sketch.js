
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bucket1, bucket2, bucket3, ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,height,1200,20);
	bucket1=new Dustbin(759, 655,20,100);
	bucket2=new Dustbin(700, height, 100,20);
	bucket3=new Dustbin(639, 655,20,100);
	paper=new Paper(20,650,50,50);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
  paper.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}



