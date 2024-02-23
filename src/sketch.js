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