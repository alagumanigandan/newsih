// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
function openTask1() {
  window.location.href = "./others/task1/task1.html";
}
function openTask2() {
  window.location.href = "./others/task2/task2.html";
}
function openTask3() {
  window.location.href = "./others/task 3/task3.html";
}
function openTask4() {
  window.location.href = "./others/task4/task4.html";
}
function openTask5() {
  window.location.href = "./others/task5/task5.html";
}
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");
    const dotsNav = document.createElement("div");
    dotsNav.classList.add("carousel-dots");
    document.querySelector(".carousel").appendChild(dotsNav);

    let currentIndex = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement("button");
        if (index === 0) dot.classList.add("active");
        dotsNav.appendChild(dot);
    });
    const dots = Array.from(dotsNav.children);

    // Function to move carousel
    function updateCarousel(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Prev button
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(currentIndex);
    });

    // Next button
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    // Auto-play (optional, every 3s)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    }, 3000);
});