let cor;
let posicaoHorizontal;//x
let posicaoVertical;//y

function setup() {
  
  createCanvas(700,500);
  background("pink");
  cor= color ("black")
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw(){
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 80);
  
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal--;
  }
  
   if(mouseX > posicaoHorizontal){
    posicaoHorizontal++
   }
  
  if(mouseY < posicaoVertical){
    posicaoVertical--;
  }
  
  if(mouseY > posicaoVertical){
    posicaoVertical++;
  }
  
  if(mouseIsPressed){
    cor = color (random(0, 455), (0, 20), (0, 324));
  }
  
  
}