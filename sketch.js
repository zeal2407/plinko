const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const  Bodies = Matter.Bodies;
 
//var particles = [];
//var plinko = [];
//var division =[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new ground(240,800,800,20);

  
  for (var k = 0; k <=width; k = k + 80) {
    division.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
  }



    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  ground.display();

}