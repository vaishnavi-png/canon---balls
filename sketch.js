const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine,world;
var tanker;
var canonball,Shootball;
var ball1,ball2;
var base,base2;
var ground;
var angle = 0;
var flag = "start";
var launcherX, launcherY;
var wall;

function setup() {
    var canvas = createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, 390, width, 10);
    tanker = new Tanker(100, height - 105, 100, 25);

    ball1 = new Ball(500,150,30);
    ball2 = new Ball(600,200,30); 

    base = new Ground(500,490,60,20);
    base2 = new Ground(600,490,60,20);

    canonBall = new CanonBall(50, 50);
    hit = new ShootBall(canonBall.body, { x: 70, y: height -250 });

    if (keyIsDown(LEFT_ARROW)) {
        hit.attach(canonBall.body);
    }
   
}

function draw() {
    background(240,170,162);
    strokeWeight(4);
    Matter.Engine.update(engine);

    ground.display();
    tanker.display();

    ball1.display();
    ball2.display();

    base.display();
    base2.display();

    canonBall.display();
    hit.display();

    fill(203,44,26);
    textSize(15);
    text("use the UP and the DOWN arrow to set the position of the canon", 50,30);
    text("use the RIGHT ARROW key to shoot", 50, 50);

    textSize(20);
    text("you will only have one try to shoot the balls",200,100);

}

 function keyReleased() {
    if (keyCode === RIGHT_ARROW) {
        flag = "launch";
        hit.shoot();
    }
}



 