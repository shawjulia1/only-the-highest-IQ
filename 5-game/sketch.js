function setup(){
  createCanvas(800, 800);
}
let value = 255
function draw(){
  background("white");
  snowglobes();
  stroke(value);
  fill("clear")
  ellipse(600,635,100);



  noStroke();
  rules();
  snowman();
  fish();
}

function mousePressed() {
  if(mouseX>=540 && mouseX<=640 && mouseY>=600 && mouseY<=650){
   if (value === 255) {
     value = "green";
   } else {
     value = 255;
   }
 }
}



function rules(){
  textSize(32);
  fill("black");
  text('FIND:',10,30);
  text('apple',10,60);
  text('banana',10,90);
  text('snowman',10,120);
  text('horseshoe',10,150);
  text('fish',10,180);
  text('teacup',10,210);
  text('cherries',10,240);
  stroke("black");
  line(0,250,170,250);
  line(170,0,170,250);
}

function snowman(){
  fill("white");
  stroke("black");
  ellipse(600,600,20);
  ellipse(600,625,30);
  ellipse(600,660,40);
  fill("orange");
  triangle(597,600,603,600,580,620);
  fill("black");
  ellipse(597,597,3);
  ellipse(603,597,3);
  ellipse(600,620,3);
  ellipse(600,633,4);
  ellipse(600,650,5);
  }

function fish(){
  fill("lightblue");
  noStroke();
  ellipse(100,500,60);
  triangle(120,500,160,465,160,535);
  fill("black");
  ellipse(87,490,5)
  fill("pink")
  ellipse(70,498,6);
  ellipse(70,502,6);
}

function snowglobes(){
  stroke("grey");
  strokeWeight(5)
  fill("clear");
  ellipse(600,635,150);
  line(550,690,510,740);
  line(650,690,690,740);
  line(510,740,690,740);
  ellipse(400,635,150);
  line(350,690,310,740);
  line(450,690,490,740);
  line(310,740,490,740);
  ellipse(200,635,150);
  line(150,690,110,740);
  line(250,690,290,740);
  line(110,740,290,740);
  strokeWeight(1)
  stroke("orange")
  fill("yellow")
  triangle(370,670,430,670,400,590)
  fill("red")
  ellipse(390,650,5)
  ellipse(410,640,5)
  ellipse(405,618,5)
  ellipse(400,665,5)
  ellipse(395,630,5)
  ellipse(415,660,5)
}
