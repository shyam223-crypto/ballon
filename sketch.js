var bow , arrow,  scene;
var redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(displayWidth, displayHeight);
  
  //creating background
 // image(backgroundImage,-displayWidth*4,0,displayWidth*5, displayHeight);
  //scene.addImage(backgroundImage);
 // scene.scale = 10
  
  // creating bow to shoot arrow
  bow = createSprite(displayWidth-20,displayHeight/2,20,50);
  bow.addImage(bowImage); 
  bow.scale = 2;
  
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {
  background("blue");
  // moving ground
   // scene.velocityX = -3 

   /* if (scene.x < 0){
      scene.x = scene.width/2;
    }*/
  
  //moving bow
  bow.y = World.mouseY

  camera.position.x=bow.x
  camera.position.y=bow.y
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  if (keyDown("space")){
    createArrow();
  }
  
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach()
    arrowGroup.destroyEach()
    score=score+3
    
  }
  
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach()
    arrowGroup.destroyEach()
    score=score+4
  }
  
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach()
    arrowGroup.destroyEach()
    score=score+2
  }
  
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach()
    arrowGroup.destroyEach()
    score=score+3
  }
  
  drawSprites();
    
  drawSprites();
  text("Score: "+ score, 300,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = displayWidth/3;
  red.scale = 0.1;
  //camera.position.x=red.x
  //camera.position.y=red.y
  
  redB.add(red);
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = displayWidth/3;;
 // camera.position.x=blue.x
 // camera.position.y=blue.y
  blue.scale = 0.1;
   
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = displayWidth/3;;
  green.scale = 0.1;
 // camera.position.x=green.x
 // camera.position.y=green.y
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = displayWidth/3;;
  pink.scale = 1
 // camera.position.x=pink.x
 // camera.position.y=pink.y
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = bow.x;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = displayWidth/4;
  arrow.scale = 0.3;
  // camera.position.x=arrow.x
  // camera.position.y=arrow.y
  arrowGroup.add(arrow);
   
   
}
