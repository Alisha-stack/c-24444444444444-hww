const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper1;
var box1,box2,box3;
var ox1,ox2,ox3,bol;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow";


	
	box1=createSprite(350,650,200,20);
	box2=createSprite(440,600,20,100);
	box3=createSprite(260,600,20,100);
	
	box2.shapeColor="white";
	box1.shapeColor="white";
	box3.shapeColor="white";
	
	ox1= Bodies.rectangle(650, 650, 200, 20,{isStatic:true});
	
	ox2= Bodies.rectangle(760, 600, 20, 100,{isStatic:true});
	ox3= Bodies.rectangle(540, 600, 20, 100,{isStatic:true});
	
	
	paper1 = new paper(90,320,30);
	
	
	
	
	
	World.add(world,ox1);
	World.add(world,ox2);
	World.add(world,ox3);
	
	
	
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  box1.x=ox1.position.x
  box1.y=ox1.position.y
  box2.x=ox2.position.x
  box2.y=ox2.position.y
  box3.x=ox3.position.x
  box3.y=ox3.position.y

  paper1.display();
 keyPressed();
 
	drawSprites();
}
 
 
 


function keyPressed(){

if(keyCode === UP_ARROW){

	//Matter.Body.applyForce(ball1.body,ball1.position.x,{x:105,y:-105})
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65});

}


}

