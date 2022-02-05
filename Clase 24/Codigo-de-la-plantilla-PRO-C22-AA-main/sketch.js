const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var fondo;
var torre;
var cannonobj;
var angle;
var mbalas=[];

function preload() {
  fondo=loadImage("assets/background.gif");
  torre=loadImage("assets/tower.png");

}

function setup() {
  createCanvas(1200, 600);
  engine=Engine.create();
  world=engine.world
  angleMode(DEGREES);
  angle=15;
  cannonobj=new Cannon(150, 170, 190, 140, angle);
  //ballobj=new Bullets(cannonobj.x, cannonobj.y);
}

function draw() {
  Engine.update(engine);
  image(fondo, 0, 0, width, height);
  image(torre, 60, 200, width/6, height/1.8);
  cannonobj.display();
  //ballobj.display();
  for(var i=0; i<mbalas.length;i++){
    shootbullets(mbalas[i]);
    console.log("for");
  }

}

function keyPressed(){
  if(keyIsDown(DOWN_ARROW)){
    var bulletobj;
    bulletobj=new Bullets(cannonobj.x, cannonobj.y);
    console.log("genera bala");
    Matter.Body.setAngle(bulletobj.body, cannonobj.angle);
    mbalas.push(bulletobj);
    console.log("llenado de matriz");
  }
}

function shootbullets(mbalas){
  if(mbalas){
    mbalas.display()
    console.log("showbullets");
  }
}

function keyReleased(){
  if(keyIsDown(DOWN_ARROW)){
    mbalas[mbalas.lenght-1].shoot();
    console.log("keyReleased");
  }
}

/*var matriz=[6, 7, 9, 3]
console.log(matriz)
var matriz2=["pelota", 5, true]
console.log(matriz2)

var mmatrices=[[2, 7], [3, 0]]
console.log(mmatrices)
//console.log(mmatrices[0][1])
mmatrices.push("bala")
console.log(mmatrices)
mmatrices.pop()
console.log(mmatrices)*/