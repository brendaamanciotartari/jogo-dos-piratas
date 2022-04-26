const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,chao;
var fundo;
var torre;
var torreImg;

var canhao;
var ang;
var bala;
var navio;

var balas = [];
var navios = [];


function preload() {
 fundo = loadImage("./assets/background.gif");
 torreImg = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 chao= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,chao);

 torre = Bodies.rectangle(160,350,160,310,options);
 World.add(world,torre);
 
 angleMode(DEGREES);
 ang = 20;
 canhao = new Canhao(180, 120, 130, 100, ang);

}

function draw() {
  background(189);
  image(fundo, 0, 0, 1200, 600);

  Engine.update(engine);
 
 rect(chao.position.x, chao.position.y,width*2,1);

 push();
 imageMode(CENTER);
 image(torreImg,torre.position.x, torre.position.y, 160, 310);
 pop();
  
 canhao.mostrar();
 mostrarNavios();

 for(var i = 0; i<balas.length; i++){
   mostrarBalas(balas[i], i);
 }



}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    balas[balas.length -1].atirar();
  }

}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
  var bala = new Bala(canhao.x, canhao.y);
  balas.push(bala);
  }
}

function mostrarBalas(bala,i){
  if (balas){
    bala.mostrar();
  } 
}

function mostrarNavios(){
  if (navios.length>0){
    if (navios[navios.length-1] === undefined || navios[navios.length-1].corpo.position.x < width -300){
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var  navio = new Navio(width, height-60, 170, 170, position);
      navios.push(navio);
    } 
    
    for(var i = 0; i<navios.length; i++){
      if (navios[i]){
        Matter.Body.setVelocity(navios[i].corpo, {x:-0.9,y:0});
        navios[i].mostrar();
      }
    }
  } else {
    var  navio = new Navio(width, height-60, 170, 170, -60);
    navios.push(navio);
  }
}


//Exemplos de matrizes
var matriz1 = [1,2,3,4];
//console.log(matriz1);

var matriz2 = [1, "Melissa", true];
//console.log(matriz2[1]);

var matriz3 = [matriz1, matriz2];
//console.log(matriz3[1][2]);

matriz1.push(5);
//console.log(matriz1);

matriz1.pop();
//console.log(matriz1);