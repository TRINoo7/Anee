const images = document.querySelectorAll('.image-container');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.getElementsByClassName('close')[0];

let currentImageIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index;
        modal.style.display = 'block';
        modalImage.src = images[index].querySelector('img').src;
        modalCaption.innerHTML = `Poem ${index + 1}`;
        modalCaption.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable scrolling
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
});

function showRandomCaption() {
    const randomIndex = Math.floor(Math.random() * images.length);
    modalCaption.innerHTML = `Poem ${randomIndex + 1}`;
}

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex].querySelector('img').src;
    showRandomCaption();
}, 5000);
