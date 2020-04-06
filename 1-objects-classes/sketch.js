//create a variable to hold one ball
let b;
let anotherBall;
let c;
let s;
let anothers;

function setup() {
  createCanvas(800, 400);
  b = new Star(0, 100,"red", 10); //make a new ball from the Ball class and call it b.
  anotherBall = new Star(200,20,"green", 40);
  c = new Star(0,300,"purple", 30)
  s = new Snowman(300,0,"white",20)
  anothers = new Snowman(500,0,"grey",20)
}


function draw(){
	background(220);
    b.drawStar(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveStar(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawStar();
    anotherBall.moveStar();
    c.drawStar();
    c.moveStar();
    s.drawSnowman();
    s.moveSnowman();
    anothers.drawSnowman();
    anothers.moveSnowman();

}


//ball class from which to create new balls with similar properties.
class Star {

	constructor(x,y,color, diameter){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.diameter= diameter
	}
	drawStar(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,this.diameter,10);
	}
	moveStar(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}

class Snowman {

   constructor(x,y,color,outline){
     this.x=x;
     this.y = y;
      this.color= color;
      this.outline= outline
}
drawSnowman(){  // draw a ball on the screen at x,y
     stroke(this.outline);
     fill(this.color);
     ellipse(this.x,this.y+10,20,20)
     ellipse(this.x,this.y+30,30,30)
     ellipse(this.x,this.y+60,40,40)

}
moveSnowman(){ //update the location of the ball, so it moves across the screen
 this.x = this.x-5;
 this.y = this.y+.5;

   }
}
