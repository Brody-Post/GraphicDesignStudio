let angle=0
let art
let pic

let txt = name
var input
var button

let inp;


//function preload(){
	//pic=loadImage('heart.jpg')
//}

function setup() {
  createCanvas(400, 400,WEBGL);
  art=createGraphics(400,400)
  
  inp = createInput();
  inp.position(0, 0);
  inp.size(100);
  inp.input(myInputEvent);
  
  button = createButton('submit');
  button.position(105,0);
  button.mousePressed(drawName);
  
    createCanvas(windowWidth,windowHeight,WEBGL);
  detailY = createSlider(1, 16, 1);
  detailY.position(10, height + 5)
  detailY.style('width','80px');
  
  //art.background(pic)
  
  frameRate = 30;
  
}

function draw() {
  background(50)
  
  push()
  rotateX(angle)
  rotateY(angle)
  rotateZ(angle)
  texture(art)
  
  strokeWeight(2)
  stroke(5)
  box(200)
  angle+=0.003
  pop()
  
  push()
  //art.stroke('red')
  //art.strokeWeight(5)
  art.textSize(100);
  art.textLeading(50);
  art.textAlign(CENTER,CENTER);
  art.textFont('Georgia');
  art.fill('yellow');
  art.text(txt,200,200);
  pop()
  
    orbitControl();
  rotateY(100);
  rotateX(100);
  rotateZ(100);
  //box(180,300);
  
  push()

  //art.stroke(random(0,255),random(0,255),random(0,255))
  art.strokeWeight(5)
  art.noFill()
 // art.line(width/2,height/2,mouseX,mouseY)
  
  pop()
}

function myInputEvent() {
  art.clear();
  txt = inp.value();
  
  console.log('you are typing: ', this.value());
}

function keyPressed(){
  if (keyCode === ENTER){
    clear (txt);
    background (50);
  } 
}

function drawName() {
  background(art.txt);
  textSize(30);
  var name = txt;
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
