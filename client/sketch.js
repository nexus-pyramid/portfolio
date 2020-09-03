var canvas

var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0;      // Start angle at 0
var thet = -1.0;
var amplitude = 110.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var ovals;
var circles = []
function setup() {
  var canvas = createCanvas(displayWidth, 300);
  canvas.parent('sketch-holder')
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
  ovals = new Array(floor(w/xspacing));
  // ?fill('#00000000', 0)
  // console.log(yvalues, ovals)
}

function draw() {
   // fill('#00000000', 0)
   // background('#00000000', 0);
  // background(255, 255, 255, 0)
  // fill(255, 255, 255, 0)
  calcWave(0, 1);
  clear()
  renderWave();
  // clear()
    background(255, 255, 255, 0)

  // clear()
  // background('#00000000', 0);

  // background(255, 255, 255)

  // calcWave(1);
  // srenderWave();
}

function calcWave(num1, num2) {
   num1 = theta;
   num2 = thet;
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
    // num2 = thet;
  thet += 0.02;
   var a = thet;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
  // var a = num2;
  for(var i = 0; i < ovals.length; i++) {
    ovals[i] = sin(a)*amplitude;
    a+=dx;
  }

}

function renderWave() {
 // background('#00000000', 0)
    var c = color('#51FF33')
    var e = color('#15f4ee ')
  noStroke();
  // fill(255  fill(c));
// fill(c)

  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
    if(yvalues[x]<0){
      fill(c)
    } else {
      fill(e)
    }
    // clear()
  }
//   var c = color(255, 204, 0); // Define color 'c'
// fill(c)
// fill(e)

  for (var x = 0; x < ovals.length; x++) {
    ellipse(x*xspacing, height/2+ovals[x], 16, 16);
    // circles.push(hey);
     if(yvalues[x]>0){
      fill(c)
    } else {
      fill(e)
    }
    // clear()
  };

  // console.log(circles)
 // / var c = color('#FF4E50')
  // var e = color('#12FFF7')
  // var hey = map(yvalues, -400, 400,c, e)
  // fill(hey);
}