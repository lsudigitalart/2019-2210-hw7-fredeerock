var redbone;
var playTime, loadTime;
var amp, level;
var bgcolor;
var fft;

function preload() {
  redbone = loadSound("redbone.mp3");
}

function setup() {
  createCanvas(800, 600);

  if (redbone.isLoaded()) {
    loadTime = millis();
    print(loadTime);
    redbone.play();
  }

  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function draw() {
  background(255);
  noStroke();
  playTime = millis() - loadTime;
  // print(playTime);
  level = amp.getLevel();
  // print(level);

  mappedColor = map(level, 0, 1, 0, 255);

  cSize = map(level, 0, 1, 0, width);

  let lerping = lerpColor(color("red"), color("blue"), level)
  // fill(lerping);


  // strokeWidth(10);
  if (playTime > 6000) {
    for (var i = 0; i < width; i++) {
      // grad1 = lerpColor(color("purple"), color("yellow"), map(i, 0, width, 0, 1));
      grad1 = lerpColor(color("purple"), color("yellow"), level);
      stroke(grad1);
      line(i, 0, i, height);
    }
  }

  fill(0);
  // background(mappedColor);
  circle(width / 2, height / 2, cSize);

  var spectrum = fft.analyze();
  var trebleVol = fft.getEnergy("treble");
  var midVol = fft.getEnergy("mid");
  var bassVol = fft.getEnergy("bass");


  fill(255);
  circle(250 / 2, height - (250 / 2), trebleVol);
  circle(width / 2, height - (250 / 2), midVol);
  circle(width - 250 / 2, height - (250 / 2), bassVol);


}