function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  //currentGerm = new Germ();
  person = new Person(10, height - 20);
  house = new House();
  time = 0;
  allowance = 0;
  numberOfFloors = 7;

  background(backgroundColor);
  house.drawHouse();

  //currentGerm.showSelf();
  verticalDoorList = [];
  horizontalDoorList = [];
  verticalLineCollisionsList = [];
  horizontalLineCollisionsList = [];
  drawRooms();
  drawVerticalDoors();
  drawHorizontalDoors();
  //collisionAssignment();
  handSanatizer = loadImage("https://cdn.glitch.com/2b73ca13-3c00-4b6d-ab47-23ab28878de2%2Fhand-sanitizer.jpg?v=1596145954217");
  mask = loadImage("https://cdn.glitch.com/2b73ca13-3c00-4b6d-ab47-23ab28878de2%2Fmask.jpg?v=1596145955087");
  broom = loadImage("https://cdn.glitch.com/2b73ca13-3c00-4b6d-ab47-23ab28878de2%2Fbroom_PNG39.png?v=1596145934959");
  washingHands = loadImage("https://cdn.glitch.com/2b73ca13-3c00-4b6d-ab47-23ab28878de2%2Fwashing%20hands.jpg?v=1596145937442");
  
  //horizontalDoor = new HorizontalDoor(1);
  p = 0;
  q = 0;
  forwardX = 1;
  upY = 1;
  backwardX = 1;
  downY = 1;
  previousXPerson = 0;
  previousYPerson = 0;
  imageSizes = 30;
  handSanatizerX = random(0, width - imageSizes/2);
  handSanatizerY = random(0, height - imageSizes/2);
  maskX = random(0, width - imageSizes/2);
  maskY = random(0, height - imageSizes/2);
  broomX = random(0, width - imageSizes/2);
  broomY = random(0, height - imageSizes/2);
  washingHandsX = random(0, width - imageSizes/2);
  washingHandsY = random(0, height - imageSizes/2);
  
  collidingImages();
}


function draw() {
  background(backgroundColor);
  house.drawHouse();
  drawImages();
  drawRooms();
  time += 1;
  fill(38, 55, 83);
  person.drawPersonSideView();
  //noStroke();
  rect(0, 0, 80, 30);
  rect(width - 95, 0, 100, 30);
  fill(0, 0, 0);
  text(`time: ${time}`, 20, 20);
  text(`allowance: $${allowance}`, 310, 20);
  keyPressed();
  for (let i = 0; i < verticalDoorList.length; i++) {
    //console.log("ee");
    fill(360, 360, 360);
    verticalDoorList[i].showSelf();
    verticalDoorList[i].collision();
  }
  
  for (let i = 0; i < horizontalDoorList.length; i++) {
    fill(360, 360, 360);
    horizontalDoorList[i].showSelf();
    horizontalDoorList[i].collision();
  }
  //collisionAssignment();
  lineCollisionVertical();
  lineCollisionHorizontal();
  personCollidingImage();
}

class Person {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
  }
  drawPersonSideView() {
    fill(360, 360, 360);
    rect(this.x, this.y, this.width, this.height);
    ellipse(this.x + this.width / 2, this.y, this.width);
    fill(38, 55, 83);
  }

  drawPersonTopView() {
    fill(360, 360, 360);
    ellipse(this.x, this.y, this.width * 2);
  }

  movePersonForwardsSideView() {
    previousXPerson = this.x;
    this.x += forwardX;
  }
  movePersonBackwardsSideView() {
    previousXPerson = this.x;
    this.x -= backwardX;
  }
  movePersonUpwardsSideView() {
    previousYPerson = this.y;
    this.y -= upY;
  }
  movePersonDownwardsSideView() {
    previousYPerson = this.y;
    this.y += downY;
  }
}

function keyPressed() {
  //while (time < 5001){
  if (keyIsDown(39)) {
    person.movePersonForwardsSideView();
  }
  if (keyIsDown(37)) {
    person.movePersonBackwardsSideView();
  }
  if (keyIsDown(38)) {
    person.movePersonUpwardsSideView();
  }
  if (keyIsDown(40)) {
    person.movePersonDownwardsSideView();
  }
  //}
}

class House {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.width = width;
    this.height = height;
  }

  drawHouse() {
    fill(38, 55, 83);
    rect(0, 0, this.width, this.height);
  }
}

function collisionAssignment(){
  verticalLineCollisionsList.push(verticalCollisionLine1);
  verticalLineCollisionsList.push(verticalCollisionLine2);
  verticalLineCollisionsList.push(verticalCollisionLine3);
  verticalLineCollisionsList.push(verticalCollisionLine4);
  verticalLineCollisionsList.push(verticalCollisionLine5);
  verticalLineCollisionsList.push(verticalCollisionLine6);
  verticalLineCollisionsList.push(verticalCollisionLine7);
  verticalLineCollisionsList.push(verticalCollisionLine8);
  verticalLineCollisionsList.push(verticalCollisionLine9);
  verticalLineCollisionsList.push(verticalCollisionLine10);
  verticalLineCollisionsList.push(verticalCollisionLine11);
  verticalLineCollisionsList.push(verticalCollisionLine12);
  verticalLineCollisionsList.push(verticalCollisionLine13);
  verticalLineCollisionsList.push(verticalCollisionLine14);
  verticalLineCollisionsList.push(verticalCollisionLine15);
  verticalLineCollisionsList.push(verticalCollisionLine16);
  verticalLineCollisionsList.push(verticalCollisionLine17);
  verticalLineCollisionsList.push(verticalCollisionLine18);
  verticalLineCollisionsList.push(verticalCollisionLine19);
  verticalLineCollisionsList.push(verticalCollisionLine20);
  verticalLineCollisionsList.push(verticalCollisionLine21);
  
  horizontalLineCollisionsList.push(horizontalCollisionLine0);
  horizontalLineCollisionsList.push(horizontalCollisionLine1);
  horizontalLineCollisionsList.push(horizontalCollisionLine2);
  horizontalLineCollisionsList.push(horizontalCollisionLine3);
  horizontalLineCollisionsList.push(horizontalCollisionLine4);
  horizontalLineCollisionsList.push(horizontalCollisionLine5);
  horizontalLineCollisionsList.push(horizontalCollisionLine6);
}



function drawRooms() {
  for (let i = 0; i < numberOfFloors; i++) {
    line(0, (height * i) / numberOfFloors, width, (height * i) / numberOfFloors);
  }
  
  fill(0, 0, 0);
  line(width / 4, (height * 0) / numberOfFloors, width / 4, (height * 1) / numberOfFloors);
  line(width / 2, (height * 0) / numberOfFloors, width / 2, (height * 1) / numberOfFloors);
  line((width * 3) / 4, (height * 0) / numberOfFloors, (width * 3) / 4, (height * 1) / numberOfFloors);
  
  line(width / 4 - 20, (height * 1) / numberOfFloors, width / 4 - 20, (height * 2) / numberOfFloors);
  line(width / 2 - 30, (height * 1) / numberOfFloors, width / 2 - 30, (height * 2) / numberOfFloors);
  line((width * 3) / 4 + 50, (height * 1) / numberOfFloors, (width * 3) / 4 + 50, (height * 2) / numberOfFloors);
  
  line(width / 4, (height * 2) / numberOfFloors, width / 4, (height * 3) / numberOfFloors);
  line(width / 2, (height * 2) / numberOfFloors, width / 2, (height * 3) / numberOfFloors);
  line((width * 3) / 4, (height * 2) / numberOfFloors, (width * 3) / 4, (height * 3) / numberOfFloors);
  
  line(width / 4 - 30, (height * 3) / numberOfFloors, width / 4 - 30, (height * 4) / numberOfFloors);
  line(width / 2 + 50, (height * 3) / numberOfFloors, width / 2 + 50, (height * 4) / numberOfFloors);
  line((width * 3) / 4 + 20, (height * 3) / numberOfFloors, (width * 3) / 4 + 20, (height * 4) / numberOfFloors);
  
  line(width / 4 + 20, (height * 4) / numberOfFloors, width / 4 + 20, (height * 5) / numberOfFloors);
  line(width / 2, (height * 4) / numberOfFloors, width / 2, (height * 5) / numberOfFloors);
  line((width * 3) / 4 + 30, (height * 4) / numberOfFloors, (width * 3) / 4 + 30, (height * 5) / numberOfFloors);
  
  line(width / 4 - 30, (height * 5) / numberOfFloors, width / 4 - 30, (height * 6) / numberOfFloors);
  line(width / 2, (height * 5) / numberOfFloors, width / 2, (height * 6) / numberOfFloors);
  line((width * 3) / 4, (height * 5) / numberOfFloors, (width * 3) / 4, (height * 6) / numberOfFloors);
  
  line(width / 4, (height * 6) / numberOfFloors, width / 4, (height * 7) / numberOfFloors);
  line(width / 2, (height * 6) / numberOfFloors, width / 2, (height * 7) / numberOfFloors);
  line((width * 3) / 4, (height * 6) / numberOfFloors, (width * 3) / 4, (height * 7) / numberOfFloors);
  
  verticalCollisionLine1 = collideLineRect(width / 4, (height * 0) / numberOfFloors, width / 4, (height * 1) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine2 = collideLineRect(width / 2, (height * 0) / numberOfFloors, width / 2, (height * 1) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine3 = collideLineRect((width * 3) / 4, (height * 0) / numberOfFloors, (width * 3) / 4, (height * 1) / numberOfFloors, person.x, person.y, person.width, person.width);

  verticalCollisionLine4 = collideLineRect(width / 4 - 20, (height * 1) / numberOfFloors, width / 4 - 20, (height * 2) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine5 = collideLineRect(width / 2 - 30, (height * 1) / numberOfFloors, width / 2 - 30, (height * 2) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine6 = collideLineRect((width * 3) / 4 + 50, (height * 1) / numberOfFloors, (width * 3) / 4 + 50, (height * 2) / numberOfFloors, person.x, person.y, person.width, person.width);
  
  verticalCollisionLine7 = collideLineRect(width / 4, (height * 2) / numberOfFloors, width / 4, (height * 3) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine8 = collideLineRect(width / 2, (height * 2) / numberOfFloors, width / 2, (height * 3) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine9 = collideLineRect((width * 3) / 4, (height * 2) / numberOfFloors, (width * 3) / 4, (height * 3) / numberOfFloors, person.x, person.y, person.width, person.width);
  
  verticalCollisionLine10 = collideLineRect(width / 4 - 30, (height * 3) / numberOfFloors, width / 4 - 30, (height * 4) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine11 = collideLineRect(width / 2 + 50, (height * 3) / numberOfFloors, width / 2 + 50, (height * 4) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine12 = collideLineRect((width * 3) / 4 + 20, (height * 3) / numberOfFloors, (width * 3) / 4 + 20, (height * 4) / numberOfFloors, person.x, person.y, person.width, person.width);
  
  verticalCollisionLine13 = collideLineRect(width / 4 + 20, (height * 4) / numberOfFloors, width / 4 + 20, (height * 5) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine14 = collideLineRect(width / 2, (height * 4) / numberOfFloors, width / 2, (height * 5) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine15 = collideLineRect((width * 3) / 4 + 30, (height * 4) / numberOfFloors, (width * 3) / 4 + 30, (height * 5) / numberOfFloors, person.x, person.y, person.width, person.width);
  
  verticalCollisionLine16 = collideLineRect(width / 4 - 30, (height * 5) / numberOfFloors, width / 4 - 30, (height * 6) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine17 = collideLineRect(width / 2, (height * 5) / numberOfFloors, width / 2, (height * 6) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine18 = collideLineRect((width * 3) / 4, (height * 5) / numberOfFloors, (width * 3) / 4, (height * 6) / numberOfFloors, person.x, person.y, person.width, person.width);
  
  verticalCollisionLine19 = collideLineRect(width / 4, (height * 6) / numberOfFloors, width / 4, (height * 7) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine20 = collideLineRect(width / 2, (height * 6) / numberOfFloors, width / 2, (height * 7) / numberOfFloors, person.x, person.y, person.width, person.width);
  verticalCollisionLine21 = collideLineRect((width * 3) / 4, (height * 6) / numberOfFloors, (width * 3) / 4, (height * 7) / numberOfFloors, person.x, person.y, person.width, person.width);  
  
  horizontalCollisionLine0 = collideLineCircle(0, (height * 0) / numberOfFloors, width, (height * 0) / numberOfFloors, person.x + person.width / 2, person.y, person.width);
  horizontalCollisionLine1 = collideLineCircle(0, (height * 1) / numberOfFloors, width, (height * 1) / numberOfFloors, person.x + person.width / 2, person.y, person.width);
  horizontalCollisionLine2 = collideLineCircle(0, (height * 2) / numberOfFloors, width, (height * 2) / numberOfFloors, person.x + person.width / 2, person.y, person.width);
  horizontalCollisionLine3 = collideLineCircle(0, (height * 3) / numberOfFloors, width, (height * 3) / numberOfFloors, person.x + person.width / 2, person.y, person.width);
  horizontalCollisionLine4 = collideLineCircle(0, (height * 4) / numberOfFloors, width, (height * 4) / numberOfFloors, person.x + person.width / 2, person.y, person.width);
  horizontalCollisionLine5 = collideLineCircle(0, (height * 5) / numberOfFloors, width, (height * 5) / numberOfFloors, person.x + person.width / 2, person.y, person.width);
  horizontalCollisionLine6 = collideLineCircle(0, (height * 6) / numberOfFloors, width, (height * 6) / numberOfFloors, person.x + person.width / 2, person.y, person.width);
  
  
  
  collisionAssignment();
}

class VerticalDoor {
  constructor(x, i) {
    this.x = x;
    this.i = i;
    this.y = random(
      (height * this.i) / numberOfFloors,
      (height * (this.i + 1)) / numberOfFloors - person.height
    );
    this.width = 5;
    this.height = person.height;
    this.color = 230;
  }
  showSelf() {
    fill(this.color, 100, 100);
    rect(this.x, this.y, this.width, this.height);
  }
  collision() {
    if(collideRectRect(this.x, this.y, this.width, this.height, person.x, person.y, person.width, person.height)) {
      if (q < 30){
        this.width = person.height;
        this.height = 5;
        q += 1;
        console.log(q);
      } 
      return true;
    }
    if (!collideRectRect(this.x, this.y, this.width, this.height, person.x, person.y, person.width, person.height)){
      this.width = 5;
      this.height = person.height;
      q = 0;
      return false;
    }
    
    
    }
}

function drawVerticalDoors() {
  fill(360, 360, 360);
  door1 = new VerticalDoor(width / 4, 0);
  door2 = new VerticalDoor(width / 2, 0);
  door3 = new VerticalDoor((width * 3) / 4, 0);

  door4 = new VerticalDoor(width / 4 - 20, 1);
  door5 = new VerticalDoor(width / 2 - 30, 1);
  door6 = new VerticalDoor((width * 3) / 4 + 50, 1);

  door7 = new VerticalDoor(width / 4, 2);
  door8 = new VerticalDoor(width / 2, 2);
  door9 = new VerticalDoor((width * 3) / 4, 2);

  door10 = new VerticalDoor(width / 4 - 30, 3);
  door11 = new VerticalDoor(width / 2 + 50, 3);
  door12 = new VerticalDoor((width * 3) / 4 + 20, 3);

  door13 = new VerticalDoor(width / 4 + 20, 4);
  door14 = new VerticalDoor(width / 2, 4);
  door15 = new VerticalDoor((width * 3) / 4 + 30, 4);

  door16 = new VerticalDoor(width / 4 - 30, 5);
  door17 = new VerticalDoor(width / 2, 5);
  door18 = new VerticalDoor((width * 3) / 4, 5);

  door19 = new VerticalDoor(width / 4, 6);
  door20 = new VerticalDoor(width / 2, 6);
  door21 = new VerticalDoor((width * 3) / 4, 6);

  verticalDoorList.push(door1);
  verticalDoorList.push(door2);
  verticalDoorList.push(door3);
  verticalDoorList.push(door4);
  verticalDoorList.push(door5);
  verticalDoorList.push(door6);
  verticalDoorList.push(door7);
  verticalDoorList.push(door8);
  verticalDoorList.push(door9);
  verticalDoorList.push(door10);
  verticalDoorList.push(door11);
  verticalDoorList.push(door12);
  verticalDoorList.push(door13);
  verticalDoorList.push(door14);
  verticalDoorList.push(door15);
  verticalDoorList.push(door16);
  verticalDoorList.push(door17);
  verticalDoorList.push(door18);
  verticalDoorList.push(door19);
  verticalDoorList.push(door20);
  verticalDoorList.push(door21);
}

class HorizontalDoor {
  constructor(i) {
    this.x = random(0, width);
    this.i = i;
    this.y = (height * i) / numberOfFloors;
    this.width = 5;
    this.height = person.height;
  }
  showSelf() {
    fill(0)
    rect(this.x, this.y, this.width, this.height);
  }
  collision() {
    if (collideRectCircle(this.x, this.y, this.width, this.height, person.x + person.width / 2, person.y, person.width)) {
      if (p < 30){
        this.width = person.height;
        this.height = 5;
        p += 1;
        console.log("this is q", p);
      } 
      return true;
    }
    if (!collideRectCircle(this.x, this.y, this.width, this.height, person.x + person.width / 2, person.y, person.width)){
      this.width = 5;
      this.height = person.height;
      p = 0;
      return false;
    }
  }
}

function drawHorizontalDoors(){
  horizontalDoor1 = new HorizontalDoor(1);
  horizontalDoor2 = new HorizontalDoor(2);
  horizontalDoor3 = new HorizontalDoor(3);
  horizontalDoor4 = new HorizontalDoor(4);
  horizontalDoor5 = new HorizontalDoor(5);
  horizontalDoor6 = new HorizontalDoor(6);
  
  horizontalDoorList.push(horizontalDoor1);
  horizontalDoorList.push(horizontalDoor2);
  horizontalDoorList.push(horizontalDoor3);
  horizontalDoorList.push(horizontalDoor4);
  horizontalDoorList.push(horizontalDoor5);
  horizontalDoorList.push(horizontalDoor6);
}

function lineCollisionVertical(){
  for (let i = 0; i < verticalDoorList.length; i++){
    if(verticalCollisionLine1 && !verticalDoorList[i].collision()){
        //console.log("yeet")
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine2 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine3 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine4 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine5 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine6 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine7 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine8 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine9 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine10 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine11 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine12 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine13 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine14 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
        backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine15 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine16 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine17 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine18 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine19 && !verticalDoorList[i].collision()){
      console.log("yeet")
        if (previousXPerson > person.x){
          console.log("yeet2")
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          console.log("yeet2")
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          console.log("yeet2")
          downY = 0;
        }
        if (previousYPerson > person.y){
          console.log("yeet2")
          upY = 0;
        }
      }
    else if(verticalCollisionLine20 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
        backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(verticalCollisionLine21 && !verticalDoorList[i].collision()){
        if (previousXPerson > person.x){
        backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else{
      backwardX = 1;
      forwardX = 1;
      //downY = 1;
      //upY = 1;
    }
  }
}

function lineCollisionHorizontal(){
  for (let i = 0; i < horizontalDoorList.length; i++){
    if(horizontalCollisionLine0 && !horizontalDoorList[i].collision()){
      if (previousXPerson > person.x){
        backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(horizontalCollisionLine1 && !horizontalDoorList[i].collision()){
      if (previousXPerson > person.x){
        backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(horizontalCollisionLine2 && !horizontalDoorList[i].collision()){
      if (previousXPerson > person.x){
        backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(horizontalCollisionLine3 && !horizontalDoorList[i].collision()){
      console.log("qwer")
      if (previousXPerson > person.x){
        backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(horizontalCollisionLine4 && !horizontalDoorList[i].collision()){
      if (previousXPerson > person.x){
        backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(horizontalCollisionLine5 && !horizontalDoorList[i].collision()){
      if (previousXPerson > person.x){
        backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else if(horizontalCollisionLine6 && !horizontalDoorList[i].collision()){
      if (previousXPerson > person.x){
        backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
    else{
      //backwardX = 1;
      //forwardX = 1;
      downY = 1;
      upY = 1;
    }
  }
}

function drawImages(){
  image(handSanatizer, handSanatizerX, handSanatizerY, imageSizes, imageSizes);
  image(mask, maskX, maskY, imageSizes, imageSizes);
  image(broom, broomX, broomY, imageSizes, imageSizes);
  image(washingHands, washingHandsX, washingHandsY, imageSizes ,imageSizes);
}

function collidingImages(){
  if(handSanatizerX == maskX || handSanatizerX == broomX || handSanatizerX == washingHandsX || maskX == broomX || maskX == washingHandsX || broomX == washingHandsX){
    handSanatizerX = random(0, width);
    maskX = random(0, width);
    broomX = random(0, width);
    washingHandsX = random(0, width);
    collidingImages();
  }
  if(handSanatizerY == maskY || handSanatizerY == broomY || handSanatizerY == washingHandsY || maskY == broomY || maskY == washingHandsY || broomY == washingHandsY){
    handSanatizerY = random(0, height);
    maskY = random(0, height);
    broomY = random(0, height);
    washingHandsY = random(0, height);
    collidingImages();
  }
}

function personCollidingImage(){
  handSanatizerRect = collideRectRect(handSanatizerX, handSanatizerY, imageSizes, imageSizes, person.x, person.y, person.width, person.height)
  maskRect = collideRectRect(maskX, maskY, imageSizes, imageSizes, person.x, person.y, person.width, person.height)
  broomRect = collideRectRect(broomX, broomY, imageSizes, imageSizes, person.x, person.y, person.width, person.height)
  washingHandsRect = collideRectRect(washingHandsX, washingHandsY, imageSizes ,imageSizes, person.x, person.y, person.width, person.height)
  
  handSanatizerCircle = collideRectCircle(handSanatizerX, handSanatizerY, imageSizes, imageSizes, person.x + person.width / 2, person.y, person.width)
  maskCircle = collideRectCircle(maskX, maskY, imageSizes, imageSizes, person.x + person.width / 2, person.y, person.width)
  broomCircle = collideRectCircle(broomX, broomY, imageSizes, imageSizes, person.x + person.width / 2, person.y, person.width)
  washingHandsCircle = collideRectCircle(washingHandsX, washingHandsY, imageSizes, person.x + person.width / 2, person.y, person.width);
  
  if (handSanatizerRect || maskRect || broomRect || washingHandsRect || handSanatizerCircle || maskCircle || broomCircle || washingHandsCircle){
    allowance += 1;
    handSanatizerX = random(0, width - imageSizes/2);
    handSanatizerY = random(0, height - imageSizes/2);
    maskX = random(0, width - imageSizes/2);
    maskY = random(0, height - imageSizes/2);
    broomX = random(0, width - imageSizes/2);
    broomY = random(0, height - imageSizes/2);
    washingHandsX = random(0, width - imageSizes/2);
    washingHandsY = random(0, height - imageSizes/2);
  
  }
}

/*for (let j = 0; j < verticalLineCollisionsList.length; j++){
      //console.log(verticalLineCollisionsList[j]);
      if (!verticalDoorList[i].collision() && verticalLineCollisionsList[j]){
        console.log("yeet");
        if (previousXPerson > person.x){
          backwardX = 0;
        }
        if (previousXPerson < person.x){
          forwardX = 0;
        }
        if (previousYPerson < person.y){
          downY = 0;
        }
        if (previousYPerson > person.y){
          upY = 0;
        }
      }
      else if {
        backwardX = 1;
        forwardX = 1;
        downY = 1;
        upY = 1;
    }
    }*/
