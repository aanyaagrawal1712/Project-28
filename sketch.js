
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground;
var boy, boyImage, tree, treeImage;


function preload(){
	boyImage= loadImage("boy.png");
	treeImage= loadImage("tree.png");
}	


function setup() {
	createCanvas(900, 550);

	engine = Engine.create();
	world = engine.world;

	boy= createSprite(150, 460, 10,10);
	boy.addImage(boyImage);
	boy.scale=0.12;

	tree= createSprite(700,300,10,10);
	tree.addImage(treeImage);
	tree.scale= 0.4;


	//Create the Bodies Here.
	groundObject= new Ground(450, 545, width, 20);
	stoneObject= new Stone(80, 390, 60);

	mango1= new Mango(580, 230, 50);
	mango2= new Mango(650, 150, 70);
	mango3= new Mango(650, 260, 70);
	mango4= new Mango(700, 200, 50);
	mango5= new Mango(740, 120, 70);
	mango6= new Mango(780, 200, 70);
	mango7= new Mango(810, 260, 50);
	mango8= new Mango(860, 210, 50);

	elasticConstraint= new ElasticConstraint(stoneObject.body, {x:90,y:395});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  	textSize(20);
	text("Press Space for a Second Chance to Play!",10,50);

	drawSprites();

  Engine.update(engine);

  groundObject.display();
  stoneObject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  elasticConstraint.display();

  detectCollision(stoneObject, mango1);
  detectCollision(stoneObject, mango2);
  detectCollision(stoneObject, mango3);
  detectCollision(stoneObject, mango4);
  detectCollision(stoneObject, mango5);
  detectCollision(stoneObject, mango6);
  detectCollision(stoneObject, mango7);
  detectCollision(stoneObject, mango8);
  

}


function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body, {x:mouseX, y:mouseY});
}


function mouseReleased(){
    elasticConstraint.fly();
}


function detectCollision(lstone, lmango){
	mangoBodyPosition= lmango.body.position;
	stoneBodyPosition= lstone.body.position;

	var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance<=lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}

}


function keyPressed(){

	if(keyCode===32){
		Matter.Body.setPosition(stoneObject.body, {x:80, y:390})
		elasticConstraint.attach(stoneObject.body);
	}
}