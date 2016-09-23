var myNoise;
var myEnv;

function setup() {
  createCanvas(600,600);
  myNoise = new p5.Noise();
  myNoise.start();
  myNoise.amp(0);

  myEnv = new p5.Env();
  myEnv.setADSR(.01, .5, 0, .01);
  myEnv.setExp(true);
}

function draw() {
  ;
}

function mousePressed()
{
  //we'll change the decay time of the envelope with the mouse position
  var myDecayTime = map(mouseX, 0, width, 0.01, 2.0);
  myEnv.setADSR(.01, myDecayTime, 0.0, .1);
  myEnv.triggerAttack(myNoise);
}

function mouseReleased()
{
  //myEnv.triggerRelease(mySine);
}
