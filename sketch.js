const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var parkBG;


var bench1, bench2, benchImg1;
var trash1, trashImg1;
var rack1, rackImg1;
var bike1, bikeImg1;
var kid1, kidImg1;
var sign1, signImg1;
var lava1, lavaImg1;
var timer;
var START = 0;
var END = 1;
var gameState = START;

function preload() {

    parkBG = loadImage("images/park_3.png");

    benchImg1 = loadImage("images/bench_3.png");
    trashImg1 = loadImage("images/trash_2.png");
    bikeImg1 = loadImage("images/bike_2.png");
    kidImg1 = loadImage("images/kid_1.png");
    signImg1 = loadImage("images/busSign_2.png");
    lavaImg1 = loadImage("images/lava_2.png");
}

function setup(){

    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    bench1 = new Invis(200,570,200,10);

    trash1 = new Rec(380,580,90,160,trashImg1);
    bike1 = new Rec(700,600,220,150,bikeImg1);
    kid1 = new Char(200,500,100,140,kidImg1);
    sign1 = new Rec(1000,480,100,400,signImg1);
    lava1 = new Lava(600,1100,1200,800,lavaImg1);
    
    Engine.run(engine);
}

function draw(){

    background(parkBG);
    Engine.update(engine);
    
    image(benchImg1,100,500,200,160);
    bench1.display();

    console.log(gameState);

    trash1.display();
    bike1.display();
    sign1.display();
    kid1.display();
    lava1.display();

    if (gameState === START) {

        if (frameCount % 20 === 0) {
            lava1.body.position.y-=4;
        }
        timer = frameCount;


        if (kid1.body.position.y > lava1.body.position.y-300) {
            gameState = END;
        }
    }
    else if (gameState === END){

        textSize(100);
        stroke("black");
        strokeWeight(6);
        textAlign(CENTER);
        text("GAME OVER!",600,400);
    }

    textAlign(LEFT);
    stroke("black");
    strokeWeight(2);
    textSize(20);
    text("Time: " + timer,900,50);

    
 //   for (var i = )
    
    //Matter.Body.setPosition(kid1.body,{x:200,y:450});

    Matter.Body.applyForce(kid1.body,kid1.body.position,{x:0,y:30});

    drawSprites();
}

function keyPressed() {

    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(kid1.body,kid1.body.position,{x:0,y:-200});

        //Matter.Body.apply
    }

    if (keyCode === LEFT_ARROW) {

        Matter.Body.applyForce(kid1.body,kid1.body.position,{x:-100,y:0});
    }

    else if (keyCode === RIGHT_ARROW) {

        Matter.Body.applyForce(kid1.body,kid1.body.position,{x:100,y:0});
    }
}