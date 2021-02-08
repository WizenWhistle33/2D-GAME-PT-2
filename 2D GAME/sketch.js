var Defender, Attacker,Attackerimg, Defenderimg;  
var gameState;
var backgroundImg;
var Bomb,Bombimg;

var gameState=0;

function preload(){
Attackerimg=loadAnimation("Drun1.png","Drun2.png","Drun3.png","Attacker4.png" , "Attacker7.png", "Attacker8.png", "Attacker9.png","Attacker10.png", "Attacker11.png");
Defenderimg=loadAnimation("Defender1.png","Defender2.png","Defender3.png","Defender4.png")


backgroundImg=loadImage("map.jpg")

Bombimg=loadImage("bomb-removebg-preview.png")
}

function setup(){
  createCanvas(1200,800);
Attacker=createSprite(1040,500,50,50);
Attacker.addAnimation("Attacker",Attackerimg);
Attacker.scale=0.3;
Defender=createSprite(160,415,50,50);
Defender.addAnimation("Defender",Defenderimg);
Defender.scale=0.3;
Bomb=createSprite(200,200,20,20);
Bomb.addImage(Bombimg);
Bomb.scale=0.03  ;
Bomb.visible=false;
//var gameState= Math.round(random(1,2)); //1 or 2
//console.log(gameState)

}





function draw(){
  background(backgroundImg)
  if (this.seconds===0){
    gameState=1;
  }
  
  if(gameState===1){
    controls()
  }

  textSize(10);
  fill("white");
  text("Time Left:"+this.seconds,Attacker.x-25,Attacker.y-25);
  text("Time Left:"+this.seconds,Defender.x-25,Defender.y-25);
  



  console.log(Attacker.x);
  console.log(Attacker.y);
  //console.log(Defender.x);
  //console.log(Defender.y);

  //console.log(this.seconds);

  //console.log(gameState);
  
  timer();

drawSprites();
}


function controls(){
  Bomb.x=Attacker.x;
  Bomb.y=Attacker.y;

  if(keyDown("right")){
    Attacker.x=Attacker.x+1
  }
  if(keyDown("left")){
    Attacker.x=Attacker.x-1
  }
  if(keyDown("up")){
    Attacker.y=Attacker.y-1
  }
  if(keyDown("down")){
    Attacker.y=Attacker.y+1
  }
if (keyDown("a")){
  Defender.x=Defender.x-1
}

if (keyDown("s")){
  Defender.y=Defender.y+1
}

if (keyDown("w")){
  Defender.y=Defender.y-1
}

if (keyDown("d")){
  Defender.x=Defender.x+1
}
}

function timer(){
  this.date=new Date()
  this.seconds=this.date.getSeconds();
  
}