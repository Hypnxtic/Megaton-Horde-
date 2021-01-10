var bg;
var Roze;
var Megaton;
var bullet,bulletImage;

function preload(){
    bg1=loadImage("zombies.jpg")
    Roze1 = loadImage("Roze.png");
    Megaton1 = loadImage("Megaton.png");
    bulletImage = loadImage("bullet1.png");
zombiessound = loadSound("zombies-sounds.mp3")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    zombiessound.play();

bg = createSprite(100,100,50,50);
bg.addImage(bg1);
bg.scale = 1.5;

Roze = createSprite(100,100,50,50);
Roze.addImage(Roze1);
Roze.setCollider("rectangle",0,0,150,300);


zombiegroup = new Group ();
bulletgroup = new Group ();
score = 0;

}


function draw(){
background(0);
zombiessound.play();

if (keyDown("w")){
Roze.y=Roze.y-5;

}
if (keyDown("s")){
    Roze.y=Roze.y+5;
}

if (keyDown("d")){
    Roze.x=Roze.x+5
}
if (keyDown("a")){
    Roze.x=Roze.x-5;

}
if (frameCount%10===0){

if (keyWentDown("e")){
    shoot ();
}
}
if (bulletgroup.isTouching(zombiegroup)){
    score = score+1;
zombiegroup.destroyEach();
bulletgroup.destroyEach();

}

zombies();
drawSprites();
if (zombiegroup.isTouching(Roze)){
    background(0);
    fill ("yellow");
    textSize(40);
    text("Game Over",displayWidth/2,displayHeight/2)
}
textSize(25);
fill ("Blue")
text ("score= "+score,displayWidth-150,50);
}

function zombies(){
    if (frameCount%120===0){
        Megaton = createSprite(displayWidth,100,50,50);
        Megaton.addImage(Megaton1);
        Megaton.scale = 0.5;
        Megaton.y=random(100,displayHeight-100);
        Megaton.velocityX=-6;
        Megaton.lifetime=700;

       
    Megaton.setCollider("rectangle",0,0,160,300);
      zombiegroup.add(Megaton)  
    }
}

function shoot(){
    bullet = createSprite(100,50,10,10);
    bullet.addImage(bulletImage);
    bullet.scale = 0.2;
    bullet.x=Roze.x+20;
    bullet.y=Roze.y+10;
    bullet.velocityX = 3;
    bullet.lifetime = 500;
    bulletgroup.add(bullet);

}
