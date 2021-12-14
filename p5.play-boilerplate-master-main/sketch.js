var retFixo, retMovendo;
function setup() {
  createCanvas(1200, 800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 200, 80, 30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
}
function draw() {
  background(0, 0, 0);
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
 if (instouching(retMovendo,retFixo)){
   retMovendo.shapeColor ="black"
   retFixo.shapeColor ="yellow"
   
 }
 else{
  retFixo.shapeColor = "green";
  retMovendo.shapeColor = "green";
 }
  drawSprites();
}
  
