// lightbox.js

const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.lightbox .prev');
const nextBtn = document.querySelector('.lightbox .next');
const caption = document.querySelector('.lightbox-caption');

let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  lightboxImg.src = images[index].src;
    caption.textContent = images[index].alt || '';
  lightbox.style.display = 'flex';
}

images.forEach((img, i) => {
  img.addEventListener('click', () => showImage(i));
});

closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
prevBtn.addEventListener('click', () => {
  showImage((currentIndex - 1 + images.length) % images.length);
});
nextBtn.addEventListener('click', () => {
  showImage((currentIndex + 1) % images.length);
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'Escape') lightbox.style.display = 'none';
  }
});
