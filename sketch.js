
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constaint;

var tree,treeImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var child ,childImage;
var chain ;
var rock ;

function preload()
{
	treeImage=loadImage("sprites/tree.png")
	childImage=loadImage("sprites/boy.png")
}

function setup() {

	createCanvas(1200, 600);

	engine=Engine.create();
	world=engine.world;

	tree = createSprite(1000,300,30,150);
	tree.addImage(treeImage)
	tree.scale=0.4;

	mango1 = new Mango(900,200,40,40);
	mango2 = new Mango(900,250,40,40);
	mango3 = new Mango(950,200,40,40);
	mango4 = new Mango(900,300,40,40);
	mango5 = new Mango(950,250,40,40);
	mango6 = new Mango(950,300,40,40);
	mango7 = new Mango(850,200,40,40);
	mango8 = new Mango(950,110,40,40);
	mango9 = new Mango(1000,230,40,40);
	mango10 = new Mango(1100,270,40,40);
	mango11 = new Mango(1100,200,40,40);

	child = createSprite(200,500,80,240);
	child.addImage(childImage)
	child.scale=0.1;

	rock = new Stone(400,200,30,30);
	
	chain = new Rope (rock.body,{ x: 200, y:50});

	engine = Engine.create(580,350,600,10);
	world = engine.world;

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  chain.display();
 // rock.display;
 child.display();

}

  
function mouseDragged(){

    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

    rope.fly();
}



