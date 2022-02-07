var boat;
var boat, boat_running;
var ground 
var sea

function preload(){
boat_running=loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
sea=createSprite (20,20)
  boat =createSprite (100,250,20,20);
 boat.addAnimation ("Sailing", boat_running);
 boat.scale = .2;
 seaImg= loadImage("sea.png");

}

function draw() {
sea.addImage (seaImg)




 drawSprites();

}