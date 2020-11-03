var car,wall;
var speed,weight;
var object1,object2;


function setup() {
  createCanvas(1600,400);
  
  


 
  
  speed=random(55,90);
  weight=(400,1500);
}

function draw() {
  background(255,255,255);
  for (var i = 400; i < 1600; i=i+50) {
    var car = createSprite(50,i,50,50);
     car.shapeColor="green" ;
     //car.velocityX=speed; 
   
      
    }
    for (var i = 400; i < 1600; i=i+50) {
      var wall = createSprite(1500,i,60,height/2);
      wall.shapeColor=color(80,80,80);
    
        
      }
   
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation=180){
      car.shapeColor=color(225,0,0);

    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);

    }
    if(deformation<100){
      car.shapeColor=color(0,225,0);
    }
  }
  
  
 
  
  drawSprites();
}