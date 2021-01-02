
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player,playerImage
var pickaxe,pickaxeImage
var stone,stoneGroup,stoneImage

function preload()
{
	playerImage=loadImage("MyGame/Miner.jpg")
	stoneImage=loadImage("MyGame/Stone.png")
	pickaxeImage=loadImage("MyGame/Pickaxe.png")
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
	player=createSprite(500,900,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(RIGHT_ARROW)){
	player.x=player.x+10
  }
  if(keyDown(LEFT_ARROW)){
	player.x=player.x-10
  }
  drawSprites();
 
}



