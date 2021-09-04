var uno,dos



function setup() {
  createCanvas(800,400);
  uno=createSprite(400,200,40,20);
  dos=createSprite(400,280,60,30);
  uno.shapeColor="green";
  dos.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  dos.x=mouseX;
  dos.y=mouseY;
  console.log(uno.x - dos.x); 
  console.log(uno.x);
  console.log(dos.x);

  if( dos.x - uno.x < uno.width/2 + dos.width/2 &&
      uno.x - dos.x < uno.width/2 + dos.width/2 &&
      dos.y- uno.y <  uno.height/2 + dos.height/2 &&
      uno.y - dos.y < uno.height/2 + dos. height/2){

    uno.shapeColor="red";
    dos.shapeColor="red";

  }
  else{
    uno.shapeColor="green";
    dos.shapeColor="green";

  }
  drawSprites();
}