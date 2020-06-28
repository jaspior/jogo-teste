function setup() {
  createCanvas(windowWidth, windowHeight);

  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo:jogo,
    telaInicial:telaInicial
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2)
  botaoReiniciar = new BotaoGerenciador('Tente de novo', width / 2, height / 2)
  frameRate(40)

}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {

  cenas[cenaAtual].draw();
  //if(cenaAtual === 'jogo'){
  //  jogo.draw();
  //}
}