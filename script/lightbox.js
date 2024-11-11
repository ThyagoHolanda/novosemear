const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close-btn');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.imagem img');

let currentIndex = 0;

lightbox.style.display = 'none';

// Ativa o lightbox quando clicado em uma das imagens da lista images
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
        lightboxImg.parentElement.style.opacity = 1;
        currentIndex = index;
    });
});

// Criar um botão para fechar o lightbox
closeBtn.addEventListener('click', () => {
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
});

// Função para fechar o lightbox quando clicado fora da imagem
lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
        lightboxImg.parentElement.style.opacity = 0;
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    }
});

// Navegação pelas imagens usando setas do teclado
document.addEventListener('keydown', event => {
    if (lightbox.style.display === 'flex') {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImg.src = images[currentIndex].src;
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentIndex].src;
        }
    }
});