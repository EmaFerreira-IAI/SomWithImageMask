let photo;
let maskImage;

function preload() {
  photo = loadImage('imagem.png');
  backimg = loadImage('GriffithObservatory.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Criar graphics com o tamanho do canvas
  maskImage = createGraphics(windowWidth, windowHeight);
}

function draw() {
  imageMode(CORNERS);
  background(backimg); // Fundo preto

  // Desenhar na máscara - acumular os círculos

  // para limpar a máscara e ela não acumular ellipses
  // maskImage.clear(); 

  maskImage.fill(255);
  maskImage.noStroke();
  maskImage.ellipse(mouseX, mouseY, 500, 500);

  // Criar cópia da foto
  let img = photo.get();

  // Aplicar a máscara
  img.mask(maskImage);

  // Mostrar a imagem
  imageMode(CENTER);
  image(img, width / 2, height / 2, width / 2, width / 2 * photo.height / photo.width);
}