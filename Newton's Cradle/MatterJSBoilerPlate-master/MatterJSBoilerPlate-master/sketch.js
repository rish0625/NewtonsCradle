const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var string1, string2, string3, string4, string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 125, 600, 50);

	bobObject1 = new Ball(190, 450, 100);
	bobObject2 = new Ball(295, 450, 100);
	bobObject3 = new Ball(400, 450, 100);
	bobObject4 = new Ball(505, 450, 100);
	bobObject5 = new Ball(610, 450, 100);

	string1 = new String(bobObject1.body, roof.body, -210, 0);
	string2 = new String(bobObject2.body, roof.body, -105, 0);
	string3 = new String(bobObject3.body, roof.body, 0, 0);
	string4 = new String(bobObject4.body, roof.body, 105, 0);
	string5 = new String(bobObject5.body, roof.body, 210, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  drawSprites();
}



