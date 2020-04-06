
//create an empty array called balls

let b;
let snows = [];

function setup() {
  createCanvas(600, 400);
 b = new Ball (0,200,"white",10);

}

function draw(){
	background("lightblue");
  b.drawBall();
  b.moveBall();

for (let i = 0; i < snows.length; i++) {
    snows[i].drawSnow();
    snows[i].moveSnow();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let s = new Snow(50,50);
  snows.push(s);
  console.log(snows);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("white");
		    ellipse(this.x,this.y,15,15);
        ellipse(this.x,this.y+20,25,25)
        ellipse(this.x,this.y+50,35,35)
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+1;
		this.y = this.y;
	}


}

class Snow {

  constructor(x,y){ //every ball needs an x value and a y value
        this.x = x;
        this.y = y;
  }

  drawSnow(){  // draw a ball on the screen at x,y
        stroke(0);
        fill("white");
        ellipse(this.x,this.y,6,6);
        ellipse(this.x+21,this.y+20,6,6)
        ellipse(this.x+70,this.y,6,6)
        ellipse(this.x+50,this.y+20,6,6)
        ellipse(this.x+80,this.y,6,6)
        ellipse(this.x+100,this.y,6,6)
        ellipse(this.x+120,this.y,6,6)
        ellipse(this.x+140,this.y,6,6)
        ellipse(this.x+150,this.y+20,6,6)
        ellipse(this.x+170,this.y,6,6)
        ellipse(this.x+190,this.y,6,6)
        ellipse(this.x+200,this.y+40,6,6)
        ellipse(this.x+210,this.y,6,6)
        ellipse(this.x+230,this.y+30,6,6);
        ellipse(this.x+250,this.y,6,6)
        ellipse(this.x+270,this.y+30,6,6)
        ellipse(this.x+280,this.y,6,6)
        ellipse(this.x+290,this.y,6,6)
        ellipse(this.x+310,this.y+40,6,6)
        ellipse(this.x+330,this.y,6,6)
        ellipse(this.x+340,this.y,6,6)
        ellipse(this.x+360,this.y,6,6)
        ellipse(this.x+380,this.y+30,6,6)
        ellipse(this.x+390,this.y,6,6)
        ellipse(this.x+410,this.y+10,6,6)
        ellipse(this.x+420,this.y,6,6)
  }

  moveSnow(){ //update the location of the ball, so it moves across the screen
    this.x = this.x;
    this.y = this.y+3;
  }
}
