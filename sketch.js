let som; // variável onde vou alojar o meu som
let playSom = false;

let maskLayer;
let img;
let amp;

function preload() {
  // tal como com as imagens, fazemos load do som no preload
  som = loadSound('./bach.mp3')
  // Carregar imagem aqui
  img = loadImage('./imagem.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  // class do p5 para a amplitude
  amp = new p5.Amplitude()
}

function draw() {
  background(255)

  // mudar o rate (velocidade de reprodução), conforme o mouseX
  let myRate = map(mouseX, 0, width, 0.1, 3.)
  som.rate(myRate)

  // mudar o volume conforme o mouseY – o volume de 0. a 1.
  let myVolume = map(mouseY, 0, height, 0., 1.)
  som.setVolume(myVolume)

  //desenhar uma ellipse conforme a amplitude da música
  let level = amp.getLevel();

  // mapear o valor da amplitude para usar noutras coisas
  level = map(level, 0, 1, 10, 600)
  console.log(level)
  fill(0)
  ellipse(width / 2, height / 2, level, level)


  // 1. Limpar e desenhar a forma na camada da máscara
  maskLayer.clear();
  maskLayer.fill(255); // Branco para mostrar, preto/transparente para esconder
  maskLayer.noStroke();
  maskLayer.ellipse(width / 2, height / 2, level, mouseY); // Círculo segue o rato

  // 2. Aplicar a máscara à imagem
  let maskedImg = img.get(); // Criar uma cópia para não estragar a original
  maskedImg.mask(maskLayer);

  // 3. Desenhar a imagem com a máscara
  image(maskedImg, 0, 0);
}

// Precisamos de ter uma interação ou condição que ative o som. 
// O som não pode reproduzir automáticamente quando se entra no site/sketch
function mousePressed() {
  if (playSom == false) {
    // toca do início ao fim
    som.play();

    // tocar do início e quando chega ao fim recomeça
    // som.loop(); 

    playSom = true;
  } else if ((playSom == true)) {
    // pára e coloca a timeline no início
    // som.stop(); 

    // faz apenas pausa na música, ao fazermos play, começa onde parou
    som.pause();

    playSom = false;
  }
}

function keyPressed() {

  //saltar para partes específicas do ficheiro de som
  // dizemos para que segundo queremos saltar e quantos segundos devem ser reproduzidos apartir desse ponto
  // se não específicarmos quantos segundos devem ser reproduzidos, vai até ao fim
  if (keyCode == ENTER) {
    som.jump(2, 1)
  }

  if (keyCode == DOWN_ARROW) {
    som.jump(6, 1)
  }

  if (keyCode == UP_ARROW) {
    som.jump(9, 1)
  }

}
