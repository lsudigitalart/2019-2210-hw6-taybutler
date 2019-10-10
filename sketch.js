var girl;
var img2;
var img3;
var img4;

var ocean;
var sunflower;
var fish;
var fire;
var lightning;

var paint;

//canvas size
var x = 900;
var y = 700;


function preload() {
  img2 = loadImage('leaves.jpg');
  img3 = loadImage('pank.png');
  img4 = loadImage('sky.jpg');
  girl = loadImage('girlred.png');

  ocean = loadImage('ocean.jpg');
  sunflower = loadImage('sunflower.jpg');
  fish = loadImage('fish.jpg');
  fire = loadImage('fire.jpg');
  lightning = loadImage('lightning.jpg');
 
  paint = loadImage('paint.png');


}

function setup() {
createCanvas(700, y);
background(100);

}

function draw() {
  frameRate(3);

  //background images
  push();
  let words1 = [ocean, sunflower, fish, fire, lightning];
  let word1 = random(words1);
  image(word1, 0, 0, x, y);
  pop();

  push();
  let words2 = [img2, img3, img4];
  let word2 = random(words2);
  image(word2, 45, 50, x - 300, y - 100);
  pop();

  //eyes
  push();
  let words = [ocean, sunflower, fish, fire, lightning];
  let word = random(words);
  image(word, 183, 250, 40, 25);
  image(word, 255, 226, 40, 25);
  pop();

  //girl
  image(girl, 100,50, 600,800);

  //graphics
  image(paint, 50, 50, 200,200);

  fill(235, 152, 149);
  noStroke();
  circle(575, 400, 200, 200);
    
}