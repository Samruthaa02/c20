function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 100);
  movingrect=createSprite(400,200,100,50);
  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
  fixedrect.debug=true;
  movingrect.debug=true;
  bounceoff();
}

function draw() {
  background(0);  

  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="blue";
    movingrect.shapeColor="blue";
  }
  else{
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }

  drawSprites();
}
function bounceoff(){
  toprect=createSprite(100,100,50,100);
  bottomrect=createSprite(100,300,50,100);
  toprect.shapeColor="orange";
  bottomrect.shapeColor="yellow";
  toprect.velocityY=+2;
  bottomrect.velocityY=-2;
  if(toprect.x-bottomrect.x<toprect.width/2+bottomrect.width/2&&
     bottomrect.x-toprect.x<toprect.width/2+bottomrect.width/2){
     toprect.velocityX=toprect.velocityX*(-1);
     bottomrect.velocityX=bottomrect.velocityX*(-1);
  
    }

  if(toprect.y-bottomrect.y<toprect.height/2+bottomrect.height/2&&
     bottomrect.y-toprect.y<toprect.height/2+bottomrect.height/2){
     toprect.velocityY=toprect.velocityY*(-1);
     bottomrect.velocityY=bottomrect.velocityY*(-1);
    
      }
}
