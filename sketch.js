var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);

  if(keyDown("right")){
    box.position.x+=5;
    box.shapeColor = "blue";
  }
  if(keyDown("left")){
    box.position.x-=5;
    box.shapeColor = "green";
  }
  if(keyDown(UP_ARROW)){
    box.position.y-=5;
    box.shapeColor = "red";
  }
  if(keyDown(DOWN_ARROW)){
    box.position.y+=5;
    box.shapeColor = "yellow";
  }
  
  
  

  drawSprites();
  
}




