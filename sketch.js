var dustbin1,dustbin2,dustbin3;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 550);
	
	engine = Engine.create();
	world = engine.world;

paper1 = new Paper(200,400,30,30) 
ground = new Ground(400,height,800,10);

dustbin1 = createSprite(700, 500, 10, 90);
dustbin1.shapeColor = color("green");

dustbin2 = createSprite(500, 500, 10, 90);
dustbin2.shapeColor = color("green");

dustbin3 = createSprite(600, 540, 200, 10);
dustbin3.shapeColor = color("green");

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper1.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body, paper1.body.position,{x:50,y:-30});
	}
}
