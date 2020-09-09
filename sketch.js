var fixed_rect, moving_rect;

function setup() {
  createCanvas(800,400);
  fixed_rect=createSprite(400, 200, 50, 50);
  fixed_rect.shapeColor = "blue";
  moving_rect=createSprite(400, 200, 100, 50);
  moving_rect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  moving_rect.x = mouseX;
  moving_rect.y = mouseY;

  if(moving_rect.x - fixed_rect.x <= fixed_rect.width/2 + moving_rect.width/2 && fixed_rect.x - moving_rect.x <= fixed_rect.width/2 + moving_rect.width/2
     && moving_rect.y - fixed_rect.y <= fixed_rect.width/2 + moving_rect.width/2 && fixed_rect.y - moving_rect.y <= fixed_rect.width/2 + moving_rect.width/2){
    moving_rect.shapeColor = "purple";
    fixed_rect.shapeColor = "purple";
  }
  else{
    moving_rect.shapeColor = "blue";
    fixed_rect.shapeColor = "blue";
  }

  drawSprites();
}