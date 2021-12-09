var img//from: https://rickrossmoonwalk.tumblr.com/post/48801297519
var n = 0
function preload(){
  url = "rickross.gif"
  img = loadImage(url)
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(255);
  
  n ++
  image(img,   n, height/2)
  
  if (n > width){
    n = -100
  }
}