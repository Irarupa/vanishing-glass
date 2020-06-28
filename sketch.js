const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backImg 

function preload(){
    backImg = loadImage("sprites/back3.jpg");

}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    Glass1 = new Glass(700,320,70,70);
    Glass2 = new Glass(770,320,70,70);
    Glass3 = new Glass(840,320,70,70);
    Glass4 = new Glass(910,320,70,70);
    Glass5 = new Glass(980,320,70,70);
   
    platform1 = new Ground(840,240,400,20);
    Glass6 = new Glass(735,200,70,70);
    Glass7 = new Glass(805,200,70,70);
    Glass8 = new Glass(875,200,70,70);
    Glass9 = new Glass(945,200,70,70);
    platform2 = new Ground(840,120,300,20);

    Glass10 = new Glass(770,100,70,70);
    Glass11 = new Glass(840,100,70,70);
    Glass12 = new Glass(910,100,70,70);
     
    base = new Ground(150,300,150,170)


    
    
    stone = new Stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(stone.body,{x:200, y:50});
}

function draw(){
    background(backImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    Glass1.display();
    Glass2.display();
    Glass3.display();
    Glass4.display();
    Glass5.display();
   
    platform1.display();
    Glass6.display();
    Glass7.display();
    Glass8.display();
    Glass9.display();
    platform2.display();

    Glass10.display();
    Glass11.display();
    Glass12.display();
    base.display();

    
   
     
    stone.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.break();
}