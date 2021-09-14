var uno,dos

var tres,cuatro,cinco,seis;
var ob1,ob2;

function setup() {
  createCanvas(800,400);
  uno=createSprite(400,200,40,20);
  dos=createSprite(400,280,60,30);
  tres=createSprite(300,100,50,50);
  cuatro=createSprite(500,300,60,20);
  cinco=createSprite(300,200,20,20);
  seis=createSprite(100,200,30,60);
  uno.shapeColor="green";
  dos.shapeColor="green";
}
// podemos intentar estar más aqui en esto
//estamos haciendo mas pruebas
//muchas mas pruebas
function draw() {
  background(255,255,255);  
  dos.x=mouseX;//estamos realizando un cambio
  dos.y=mouseY;
  console.log(uno.x - dos.x); 
  console.log(uno.x);
  console.log(dos.x);
  if(isTouching(dos,cuatro)){
    cuatro.shapeColor="red";
    dos.shapeColor="red";
  }

  else{
    cuatro.shapeColor="green";
    dos.shapeColor="green";
  }
  
  drawSprites();
}


