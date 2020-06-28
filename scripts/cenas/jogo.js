class Jogo {

  constructor() {

    //this.inimigoAtual = 0;
    this.indice = 0;
    /**this.mapa = [{
        inimigo: 0,
        velocidade: 10
      },
      {
        inimigo: 2,
        velocidade: 30
      },
      {
        inimigo: 2,
        velocidade: 10
      },
      {
        inimigo: 2,
        velocidade: 15
      },
      {
        inimigo: 1,
        velocidade: 40
      },
      {
        inimigo: parseInt(random(0, 2)),
        velocidade: parseInt(random(10, 30))
      },


    ];**/

    this.mapa = fita.mapa;
  }

  setup() {

    
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
    //vida = new Vida(5, 5);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

    pontuacao = new Pontuacao();

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width - 52, 0, 200, 200, 400, 400, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);

    gameOver = false;
    
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

    somDoJogo.loop();
  }

  keyPressed(key) {
    if (!gameOver && key === "ArrowUp") {
      personagem.pula();
    }

    if (gameOver && key === "Enter") {
      window.location.reload();
    }
  }

  draw() {

    cenario.exibe();
    cenario.move();

    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual = this.mapa[this.indice];

    //const inimigo = inimigos[this.inimigoAtual];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;
    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {

      //this.inimigoAtual++;
      //if (this.inimigoAtual > 2) {
      //is.inimigoAtual = 0;
      inimigo.aparece();
      this.indice++;
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;

      }
      //inimigo.velocidade = parseInt(random(10, 20));
      

    }



    if (personagem.estaColidindo(inimigo)) {

      vida.perdeVida();
      personagem.ficaInvencivel();
      if (vida.vidas < 0) {
        image(imagemGameOver, width / 2 - 200, height / 3);
        noLoop()
        somDoJogo.stop();
        gameOver = true;
        
        
        textAlign(CENTER);
        textSize(25);
        text(
          "Press the <Enter> key to start the game",
          width / 2,
          height / 2 + 100
        );
       
        
       
      }
    }

    

    //inimigos.forEach(inimigo => {
    //    inimigo.exibe();
    //    inimigo.move();
    //   
    //   if (personagem.estaColidindo(inimigo)) {
    //   image(imagemGameOver,width/2 - 200, height/3);
    //   noLoop()
    //}


    //});
  }
  
   _botao() {
    botaoReiniciar.y = height / 7 * 5;
    botaoReiniciar.draw();
    
  }
}