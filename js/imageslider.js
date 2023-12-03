const slider = document.querySelector('.image-slider');
const images = slider.children;
let currentImage = 0;

function switchImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  images[currentImage].classList.add('active');
  images[currentImage - 1].classList.remove('active');
}

switchImage();

setInterval(switchImage, 3000); // Change image every 3 seconds