var x = 0;

function setup(){
  createCanvas(200, 200);
  // setTimeout(printLog, 4000);
  setInterval(printLog, 1000);
}

function printLog(){
  console.log("counting");
}

function draw(){
  background(51);
  stroke(255);
  line(x,0,x,height);

  x = x + 3;
  if(x > width){
    x = 0;
  }
}