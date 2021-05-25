function setup() {
  createCanvas(400, 400);
}
function draw() {
  var xPos = 40;
  var x =0;
  var y =270;
  var x2= 0;
  var cor = 255;
  var final;
  draw = function(){
  background(255,255,230);
  //floor
    fill(50);
    rect(0,100,400,225);
  //rects of floor
    fill(255,255,0);
    rect(xPos,200,40,10);rect(xPos +90,200,40,10);
    rect(xPos+180,200,40,10);rect(xPos+270,200,40,10);
    noStroke();
  //car 1
    fill(cor,0,0);
    rect(x+7,y, 50,20);
    rect(x+7,y-20, 35,20);
    fill(200);
    triangle(x+42,y,x+42,y-20,x+57,y);
  //car 2
    fill(110,cor,0);
    rect(x2+7,y - 110, 50,20);
    rect(x2+7,y-130, 35,20);
    fill(200);
    triangle(x2+42,y-110,x2+42,y-130,x2+57,y-110);
  //wheels car 1
    fill(0);
    ellipse(x+20,y+20,15,15); ellipse(x+40,y+20,15,15);
  //wheels car 2
    fill(0);
    ellipse(x2+20,y-90,15,15); ellipse(x2+40,y-90,15);
  //Spoiler 2
    fill(110,cor,0);
    rect(x2+9,132,4,13);

  //lights 
    fill(255,255,255);
    ellipse(x+55,y+10,10,10);
    ellipse(x2+55,y-101,10,10);
    x += Math.floor(Math.random() *2)+1;
    x2 += Math.floor(Math.random() *2)+1;
    if(x>=400 && x2<=399 && x>x2  ){
      fill(0);
      text('Carro Vermelho Ganhou!',100,50);
    }else if(x<=399 && x2>=400 && x2>x){
      fill(0)
      text('Carro Verde Ganhou!',100,50);
    }else if (x<400 && x2<400){
      fill(0)
      text('Corrida!',150,50);
      textSize(20);
    }else{
      x = -100;
      x2 = -100;
  }
}
}
