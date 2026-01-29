let img;
let maskLayer;

function preload() {
  // Carregar imagem aqui
  img = loadImage('./imagem.png');
}

function setup() {
  createCanvas(400, 400);
  // Criar o graphics para a máscara
  maskLayer = createGraphics(400, 400);
}

function draw() {
  background(200);

  // 1. Limpar e desenhar a forma na camada da máscara
  maskLayer.clear();
  maskLayer.fill(255); // Branco para mostrar, preto/transparente para esconder
  maskLayer.noStroke();
  maskLayer.ellipse(width/2, height/2, mouseX, mouseY); // Círculo segue o rato

  // 2. Aplicar a máscara à imagem
  let maskedImg = img.get(); // Criar uma cópia para não estragar a original
  maskedImg.mask(maskLayer);

  // 3. Desenhar a imagem com a máscara
  image(maskedImg, 0, 0);
}
