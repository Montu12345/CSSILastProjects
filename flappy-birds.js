function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  background(180, 100, 100);
  count = 0;
  pole = new Pole();
  bird = new Bird();
  poleSpeed = 1;
  poleList = []
  poleList.push(pole);
  rate = 0; 
  birdImage = loadImage("https://cdn.glitch.com/2b73ca13-3c00-4b6d-ab47-23ab28878de2%2Fkisspng-flappy-bird-app-store-sprite-scratch-5ac321829754e9.0109309915227375386199.jpg?v=1595469302417");
  time = 0;
  rrate = 30;
}

function draw() {
  background(180, 100, 100);
  
  for (let i = 0; i < poleList.length; i++){
    poleList[i].showSelf();
    poleList[i].movePole();
  }
  
  rate += 1;
  if (rate % rrate == 0){
    newPole();
  }
  bird.showSelf();
  spacePressed();
  bird.moveDown();
  
  if(bird.y < 10 || bird.y > height){
     gameOver();
     }
  for (let i = 0; i < poleList.length; i++){
    if (collideRectRect(poleList[i].x, poleList[i].y, poleList[i].xSize, poleList[i].ySize, bird.x, bird.y, 20, 20)){
      gameOver();
    }
  }
  timeCount();
  
}

class Pole {
  constructor() {
    this.x = width;
    this.xSize = 20;
    count += 1;
    if (count % 2 == 0) {
      this.location = "up";
    } else {
      this.location = "down";
    }
    if (this.location == "up") {
      this.y = 0;
      this.ySize = random(100, (height / 2) - 25);
    } else {
      this.ySize = random((height / 2) + 25, height - 100);
      this.y = this.ySize;
    }
  }

  showSelf() {
    fill(90, 100, 100);
    rect(this.x, this.y, this.xSize, this.ySize);
  }

  movePole() {
    this.x -= poleSpeed;
  }
}

function newPole() {
  nextPole = new Pole();
  poleList.push(nextPole);
}

class Bird{
  constructor(){
    this.x = 50;
    this.y = height/2;
  }
  moveUp(){
    this.y -= 7;
  }
  moveDown(){
    this.y += 1;
  }
  showSelf(){
    image(birdImage, this.x, this.y, 20, 20);
    
  }
}

function spacePressed() {
  if (keyIsDown(32)) {
    bird.moveUp();
}
}

function gameOver(){
  background(0);
  textSize(13);
  textAlign(CENTER);
  fill(360,0,100);
  text("Game Over! Press 'R' to restart!", width/2, height/2);
  //textAlign(LEFT);
  text(`Time: ${time}`, width/2, height/2 - 20);
  noLoop();
}

function restart(){
  setup();
  loop();
}

function keyPressed(){
  if (keyCode == 82){
    restart();
  }
}

function timeCount(){
  time += 1;
  fill(0,0,0);
  textAlign(LEFT);
  text(`Time: ${time}`, 20, 20);
  if (time % 1000 == 0){
    poleSpeed += 1;
    if (rrate == 5){
      rrate = 5;
    }
    else{
      rrate -= 5;
    }
  }
}
