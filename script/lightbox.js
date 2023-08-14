const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close-btn');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.casa img');

lightbox.style.display = 'none';

images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
        lightboxImg.parentElement.style.opacity = 1;
    });
});

closeBtn.addEventListener('click', () => {
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
});

lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
        lightboxImg.parentElement.style.opacity = 0;
       
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    }
});