let slideIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('fade-in');
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();
