var redbone;
var playTime;
var loadTime;

function preload() {
  redbone = loadSound("redbone.mp3");
}

function setup() {
  if (redbone.isLoaded()) {
    loadTime = millis();
    print(loadTime);
    redbone.play();
  }
}

function draw() {
  playTime = millis() - loadTime;
  print(playTime);
}