/* global createCanvas, colorMode, HSB, frameRate, background, width, height, 
stroke, noFill, rect, noStroke, console, UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW,
keyCode */

let backgroundColor, playerSnake, currentApple, score
var song;

//function preload(){
 // song = loadSound('movie_1.mp3');
//}

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  frameRateValue = 5;
  frameRate(frameRateValue);
  playerSnake = new Snake();
  currentApple = new Apple();
  score = 0;
  count = 0;
  countApple = 0;
}

function draw() {
  background(backgroundColor);
  //song.play();
  // The snake performs the following four methods:
  playerSnake.moveSelf();
  playerSnake.showSelf();
  playerSnake.checkCollisions();
  playerSnake.checkApples();
  //playerSnake.checkCollisions();
  // The apple needs fewer methods to show up on screen.
  currentApple.showSelf();
  countApple++;
  if (countApple % 50 == 0){
    currentApple = new Apple();
  }
  // We put the score in its own function for readability.
  displayScore();
}

//shows the players score
function displayScore() {
  fill(0);
  text(`Score is: ${score}`, 20, 20);
}

//creating the snake
class Snake {
  constructor() {
    this.size = 10;
    this.x = width/2;
    this.y = height - 10;
    this.direction = 'N';
    this.speed = 12;
    this.tail = [new TailSegment(this.x, this.y)]
    this.color = random(0, 360);
  }

 //how the snake moves, continuous motion
  moveSelf() {
    if (this.direction === "N") {
      this.y -= this.speed;
    } else if (this.direction === "S") {
      this.y += this.speed;
    } else if (this.direction === "E") {
      this.x += this.speed;
    } else if (this.direction === "W") {
      this.x -= this.speed;
    } else {
      console.log("Error: invalid direction");
    }
    //unshift() adds an item to the front of the array, do this because removing from back and pushing forward which makes the snake seem like its moving
    this.tail.unshift(new TailSegment(this.x, this.y));
    //do this.x and this.y because rectangle starts at this.x and this.y (left corner)
    //pop() removes the last item of the array
    this.tail.pop();
  }
  
//shows the snake and its tail segment
  showSelf() {
    stroke(this.color, 100, 100);
    noFill();
    //rect(this.x, thi s.y, this.size, this.size);
    for (let i = 0; i<this.tail.length; i++){
      this.tail[i].showSelf();
    }
    noStroke();
  }

 //checks if the snake collides with the apple. If it does, create a new apple and place it in a random spot.
  checkApples() {
    if (collideRectRect(this.x, this.y, this.size, this.size, currentApple.x, currentApple.y, currentApple.size, currentApple.size)){
      score ++;
      currentApple = new Apple();
      this.extendTail();
      countApple = 1;
      count += 1;
      if (count % 5 == 0){
        frameRateValue += 1;
        frameRate(frameRateValue);
      }
      
    }
  }

 //if the snake collides with its own tail then the game ends
  checkCollisions() {
    for (let i = 1; i < this.tail.length; i++){
      if (this.x == this.tail[i].x && this.y == this.tail[i].y){
        gameOver();
      }
    }
  }

 //adds a tail segment to the snake
  extendTail() {
    let lastTailSegment = this.tail[this.tail.length - 1];
    this.tail.push(new TailSegment(lastTailSegment.x, lastTailSegment.y));
  }
}

//tailsegment of the snake
class TailSegment{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 10;
    this.color = 0;
  }
  showSelf(){
    if (this.color == 360){
      this.color = 0;
    }
    this.color += 10;
    fill(this.color, 100, 100);
    rect(this.x, this.y, this.size, this.size)
  }
}

//creates the apple, if placement collides with where the snake is, place the apple someplace else
class Apple {
  constructor() {
    this.x = random(width - 10);
    this.y = random(height - 10);
    for (let i = 0; i < playerSnake.tail.length; i++){
      if (playerSnake.tail[i].x == this.x && playerSnake.tail[i].y == this.y){
        this.x = random(width - 10);
        this.y = random(height - 10);
      }
    }

    this.size = 10;
  }
 
//shows the apple
  showSelf() {
    fill(0, 80, 80);
    rect(this.x, this.y, this.size, this.size);
  }
}

//correlates the keys with the appropriate action to move the snake
function keyPressed() {
  console.log("key pressed: ", keyCode)
  if (keyCode === UP_ARROW && playerSnake.direction != 'S') {
    playerSnake.direction = "N";
  } else if (keyCode === DOWN_ARROW && playerSnake.direction != 'N') {
    playerSnake.direction = "S";
  } else if (keyCode === RIGHT_ARROW && playerSnake.direction != 'W') {
    playerSnake.direction = "E";
  } else if (keyCode === LEFT_ARROW && playerSnake.direction != 'E') {
    playerSnake.direction = "W";
  } 
  else if (keyCode == 32){
    restartGame();
  }
  else {
    console.log("wrong key");
  }
}

//function to restart everything and get ready for a new game
function restartGame() {
  score = 0;
  playerSnake = new Snake();
  currentApple = new Apple();
  loop();
}

//What to do when the game is over
function gameOver() {
  noStroke();
  text("GAME OVER", 20, 40);
  text("Press the space bar to play again", width/2, height/2)
  noLoop();
}
