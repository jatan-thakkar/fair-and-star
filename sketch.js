var fairy,fairyimage
var backgroundimage
var star,starimage

function preload(){
//preload the images here
fairyimage= loadAnimation("images/fairy1.png","images/fairy2.png");
backgroundimage=loadImage("images/starnight.png")
starimage=loadImage("images/star.png")






}
function setup() {
  createCanvas(800, 750);
  fairy = createSprite(130,520)
  fairy.addAnimation("flyingfairy",fairyimage)
  fairy.scale=0.25

  star = createSprite(650,30)
  star.addImage(starimage)
  star.scale=0.2




}



function draw(){
  background(backgroundimage);
drawSprites();

}


function keyPressed(){

  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x + 20;
}
if(keyCode === LEFT_ARROW){
fairy.x = fairy.x - 20;
}
if(keyCode === DOWN_ARROW){
Matter.Body.setStatic(star, false)
}







}

















