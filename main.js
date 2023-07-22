// JavaScript for image sliding effect
const imageSlider = document.getElementById('imageSlider');
let currentSlide = 0;

function slideImages() {
  const slides = imageSlider.getElementsByTagName('li');
  const slideCount = slides.length;
  currentSlide = (currentSlide + 1) % slideCount;
  imageSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(slideImages, 3000);

// Navigation background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

