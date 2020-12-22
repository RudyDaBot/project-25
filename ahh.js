
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let paper, dustbin1, dustbin2, dustbin3;


function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(500,390,1000,10)

	//Create the Bodies Here.
    paper = new Ball(50,300,30);  
  
    //dustbin thingies

    dustbin1=new Dustbin(650,345,10,80);
    dustbin2=new Dustbin(750,345,10,80);
    dustbin3=new Dustbin(700,380,90,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:38,y:-38});
  }
}



