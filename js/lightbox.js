// lightbox.js

// ==========================
// Gallery lightbox
// ==========================
const galleryImages = document.querySelectorAll('.gallery img');
const galleryLightbox = document.getElementById('lightbox');
const galleryLightboxImg = galleryLightbox.querySelector('.lightbox-img');
const galleryCloseBtn = galleryLightbox.querySelector('.close');
const prevBtn = galleryLightbox.querySelector('.prev');
const nextBtn = galleryLightbox.querySelector('.next');
const galleryCaption = galleryLightbox.querySelector('.lightbox-caption');

let currentIndex = 0;

function showGalleryImage(index) {
  currentIndex = index;

  const img = galleryImages[index];
  const fullSrc = img.dataset.full || img.src;

  galleryLightboxImg.src = fullSrc;
  galleryLightboxImg.alt = img.alt || '';
  galleryCaption.textContent = img.alt || '';
  galleryLightbox.style.display = 'flex';
}

galleryImages.forEach((img, i) => {
  img.addEventListener('click', () => showGalleryImage(i));
});

galleryCloseBtn.addEventListener('click', () => {
  galleryLightbox.style.display = 'none';
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showGalleryImage((currentIndex - 1 + galleryImages.length) % galleryImages.length);
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showGalleryImage((currentIndex + 1) % galleryImages.length);
});

galleryLightbox.addEventListener('click', (e) => {
  if (e.target === galleryLightbox) {
    galleryLightbox.style.display = 'none';
  }
});

// ==========================
// Single image lightbox
// ==========================
const singleImage = document.querySelector('.clickable-image');
const singleLightbox = document.getElementById('single-lightbox');
const singleLightboxImg = singleLightbox.querySelector('.lightbox-img');
const singleCloseBtn = singleLightbox.querySelector('.close');

if (singleImage) {
  singleImage.addEventListener('click', () => {
    const fullSrc = singleImage.dataset.full || singleImage.src;
    singleLightboxImg.src = fullSrc;
    singleLightboxImg.alt = singleImage.alt || '';
    singleLightbox.style.display = 'flex';
  });
}

singleCloseBtn.addEventListener('click', () => {
  singleLightbox.style.display = 'none';
});

singleLightbox.addEventListener('click', (e) => {
  if (e.target === singleLightbox) {
    singleLightbox.style.display = 'none';
  }
});

// ==========================
// Keyboard controls
// ==========================
document.addEventListener('keydown', (e) => {
  const galleryOpen = galleryLightbox.style.display === 'flex';
  const singleOpen = singleLightbox.style.display === 'flex';

  if (galleryOpen) {
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'Escape') galleryLightbox.style.display = 'none';
  }

  if (singleOpen) {
    if (e.key === 'Escape') singleLightbox.style.display = 'none';
  }
});