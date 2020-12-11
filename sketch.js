const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,
box14,box15,box16,box17,box18,box19,box20
var ball
var rope
function setup(){
    createCanvas(3000,620);
    engine = Engine.create()
    world = engine.world
    //creating a ground object//
    ground = new Ground(1500,600,3000,50);
    ball = new Ball(750,250,50)
    rope = new SlingShot(ball.body, {x:750, y:100})
    //right side buildings//
    box1 = new Box(1000,500,50,100);
    box2 = new Box(1000,450,50,100);
    box3 = new Box(1000,400,50,100);
    box4 = new Box(1000,350,50,100);
    box5 = new Box(1000,300,50,100);

    //left side buildings//
    fill("blue")
    box6 = new Box(500,500,50,100);
    box7 = new Box(500,450,50,100);
    box8 = new Box(500,400,50,100);
    box9 = new Box(500,350,50,100);
    box10 = new Box(500,300,50,100);


    // building set - 2//
    box11 = new Box(1200,500,50,100);
    box12 = new Box(1200,450,50,100);
    box13 = new Box(1200,400,50,100);
    box14 = new Box(1200,350,50,100);
    box15 = new Box(1200,300,50,100);
    box16 = new Box(300,500,50,100);
    box17 = new Box(300,450,50,100);
    box18 = new Box(300,400,50,100);
    box19 = new Box(300,350,50,100);
    box20 = new Box(300,300,50,100);






}

function draw(){
    background("black")
    Engine.update (engine)

    ground.display();

    //right side buildings//
     fill("pink")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    //left side buildings//
     fill("cyan")
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    //building set - 2//
    fill("purple")
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    ball.display();
    rope.display();
} 

//movement of ball//
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});

}