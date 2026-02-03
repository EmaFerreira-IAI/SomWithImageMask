let photo;
let maskImage;

// Load the images.
function preload() {
  photo = loadImage('imagem.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255)
  noStroke();

  fill(255)
  maskImage = ellipse(mouseX, mouseY, 100, 100)
  // Apply the mask.
  photo.mask(maskImage);

  // Display the image.
  imageMode(CENTER)
  image(photo, width / 2, height / 2, width / 2);

  describe('An image of a mountain landscape. The right side of the image has a faded patch of white.');

}