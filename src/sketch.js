let xOtter = -400;
let clicked = false;
let ro = 0;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}
function draw() {
  drawBackground(100,100)
  
  drawSeaotter(xOtter,0);
  
   if (xOtter > 0) {
    ro += 0.1;
  }
  
  if (clicked){
  if (xOtter > 0) {
    xOtter = 0;
  }
  xOtter = xOtter + 5;
  }
  // pacman
  drawPacman(269,65);
  
  drawUmbrella(270, 100, ro);

}

function drawSeaotter(x,y) {
  push();
  translate(x,y);
  
  push();
  translate(200,200);
  scale(0.6);
  
  fill(115,94,89)
  //hind
  ellipse(15,90,225,135); //leg 2
  ellipse(125,100,75,150); //foot 2
  ellipse(175,200,300,150); //tail
  
  //body
  fill(174,162,152)
  ellipse(-90,160,425,250); //body 2
  ellipse(-200,70,250,425); //body 1
  
  //limbs
  fill(115,94,89)
  ellipse(-275,25,70,140); //bicept 1
  push();
    translate(-45,200)
    rotate(PI/4);
    ellipse(-245,35,50,100); //forearm 1
  pop();
  ellipse(-125,25,70,140); //bicept 2
  push();
    translate(-220,200)
    rotate(3*PI/4);
    ellipse(-150,55,50,100); //forearm 2
  pop();
  ellipse(-225,200,150); //upper leg 1
  ellipse(-125,225,250,150); //leg 1
  ellipse(-15,200,75,160); //foot 1
 
  //head
  ellipse(-290,-250,70); //left ear
  ellipse(-110,-250,70); //right ear
  fill(174,162,152)
  ellipse(-200,-175,250); //head
  fill(255)
  ellipse(-250,-200,50); //left eye
  ellipse(-150,-200,50); //right eye
  fill(0)
  ellipse(-245,-205,30); //left eye pupil
  ellipse(-145,-205,30); //right eye pupil
  line(-200,-140,-235,-105) //left whisker
  line(-200,-140,-165,-105) //right whisker
  fill(209,73,91)
  arc(-200,-140,100,65,PI/4,3*PI/4) //mouth
  fill(115,94,89)
  ellipse(-200,-150,50,25); //nose
  
  pop();
  
  pop();
}

function drawUmbrella(x,y,ro) {
  push()
  translate(x,y)
  scale(0.35)
  rotate(ro)
  
  //umbrella
  fill(200)
  rect(-20,0,40,300)
  fill(150)
  rect(-25,200,50,100)
  
  noStroke();
  fill(255,50,70)
  arc(0,0,500,400,PI,0)
  triangle(-250,0,-250,20,-150,0)
  triangle(-150,0,-100,20,-50,0)
  triangle(-50,0,0,20,50,0)
  triangle(50,0,100,20,150,0)
  triangle(150,0,250,20,250,0)
  stroke(0);
  line(0,-200,-180,5)
  line(0,-200,0,20)
  line(0,-200,180,5)
  
  pop()
}

function drawBackground(x,y) {
  push()
  translate(x,y);
  // background
  background(20,130,200);
  //clouds
  drawCloud2(x,y,0.5)
  drawCloud1(x,y,0.5)
  pop()
}

function drawCloud1(x,y,s){  //left cloud
  push()
  translate(x,y)
  scale(s)
  
  fill(255)
  beginShape();
    curveVertex(-400,-200)
    curveVertex(-325,-180)
    curveVertex(-250,-200)
    curveVertex(-130,-220)
    curveVertex(-80,-275)
    curveVertex(30,-330)
    curveVertex(30,-400)
    vertex(-400,-400)
  endShape(CLOSE);
  
  pop()
}

function drawCloud2(x,y,s){  //right cloud
  push()
  translate(x,y)
  scale(s)
  
  fill(255)
  beginShape();
    curveVertex(-30,-300)
    curveVertex(50,-275)
    curveVertex(100,-290)
    curveVertex(160,-270)
    curveVertex(220,-280)
    curveVertex(300,-250)
    curveVertex(400,-260)
    vertex(400,-400)
    vertex(-30,-400)
  endShape(CLOSE);
 
  pop()
}

function mouseClicked() //umbrella handle
{
  if(mouseX>0&&mouseX<225&&mouseY<100&&mouseY>0)
  clicked = !clicked;      
  
}
function drawPacman(x,y){
  fill('#F0E35E');
  arc(x,y,65,65,0,7*PI/4);
}
