//create an empty array called balls
let balls = [];
let tree;
let anothertree;
let t;
let me;
let mySound;

function preload(){
  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('oneclap.wav')
}

function setup() {
  createCanvas(500, 400);
  me = new Avatar(width/2, 300, 3);
  tree = new Tree (100,120,"brown")
  anothertree = new Tree (400,300,"green")
  t= new Tree (350,50,"lightgreen")
}

function draw(){
	background(220);
  me.drawMe();
  me.moveMe();
  tree.drawTree();
  anothertree.drawTree();
  t.drawTree();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("black");
        strokeWeight(2);
    		fill("pink");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }

    if(keyIsDown(LEFT_ARROW)){
      this.x -=this.speed;
    }

    if(keyIsDown(RIGHT_ARROW)){
      this.x +=this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("lightblue");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y-1;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            mySound.setVolume(0.1);
            mySound.play();
    		}

        if(this.x >= tree.x-15 && this.x <= tree.x+15 && this.y > tree.y-40 && this.y < tree.y+40){
      			this.speed = -this.speed;
          }

        if(this.x >= anothertree.x-15 && this.x <= anothertree.x+15 && this.y > anothertree.y-40 && this.y < anothertree.y+40){
      			this.speed = -this.speed;
          }

        if(this.x >= t.x-15 && this.x <= t.x+15 && this.y > t.y-40 && this.y < t.y+40){
      			this.speed = -this.speed;
          }
    }
}

class Tree {

  constructor(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
  }

  drawTree(){
    stroke(0);
    fill(this.color);
  	rect(this.x,this.y,10,60);
    fill(this.color);
    triangle(this.x+5,this.y-50,this.x+25,this.y,this.x-15,this.y)
  }
}
