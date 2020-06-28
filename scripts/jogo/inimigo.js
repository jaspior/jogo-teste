class Inimigo extends Animacao {
  //constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,velocidade,delay) 
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,velocidade) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    
    this.velocidade = velocidade;
    //this.delay = delay;
    //this.x = width + delay;
    this.x = width;
  }
  
  move() {
    this.x = this.x - this.velocidade
    
    //if(this.x < -this.largura - this.delay){
    //if(this.x < - this.largura){
    //  this.x = width
    //}
    }
  
  aparece(){
    
    this.x = width;
  
  }
  
}