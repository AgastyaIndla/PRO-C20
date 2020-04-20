
var r = 0;
var g = 50;
var b =255;

function setup(){

  createCanvas(1200,400);

}


function draw(){
  background("white");


  // change the value of Red based on the mouse movement about the X axis
  let r=map(mouseX,0,1200,0,255);

  // change the value of Green based on the mouse movement about the X axis
  let g=map(mouseX,0,1200,255,5);

  // change the value of Blue based on the mouse movement about the X axis
  let b=map(mouseX,0,1200,25,50);

  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);

  // Create an ellipse that will move around with you mouse about the X axis.
ellipse(mouseX,mouseY,50,50);

}