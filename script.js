const schoolBtn = document.getElementById("schoolBtn");
const collegeBtn = document.getElementById("collegeBtn");
const schoolForm = document.getElementById("schoolForm");
const collegeForm = document.getElementById("collegeForm");

schoolBtn.addEventListener("click", () => {
  schoolBtn.classList.add("active");
  collegeBtn.classList.remove("active");
  schoolForm.classList.add("active");
  collegeForm.classList.remove("active");
});

collegeBtn.addEventListener("click", () => {
  collegeBtn.classList.add("active");
  schoolBtn.classList.remove("active");
  collegeForm.classList.add("active");
  schoolForm.classList.remove("active");
});

document.getElementById("schoolForm").addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.href = "./other/home/home.html"; 
});

document.getElementById("collegeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.href = "./other/home/home.html";
});

// Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav = document.querySelector('.carousel-dots');

// Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement('button');
    if (index === 0) dot.classList.add('active');
    dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);
let currentIndex = 0;

function updateCarousel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
}

nextButton.addEventListener('click', () => {
    let nextIndex = (currentIndex + 1) % slides.length;
    updateCarousel(nextIndex);
});

prevButton.addEventListener('click', () => {
    let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(prevIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateCarousel(index);
    });
});

// Auto slide every 5s
setInterval(() => {
    let nextIndex = (currentIndex + 1) % slides.length;
    updateCarousel(nextIndex);
}, 5000);
