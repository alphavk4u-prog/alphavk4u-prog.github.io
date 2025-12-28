function copyPrompt(id) {
  const textarea = document.getElementById(id);

  if (!textarea) {
    alert("Prompt not found ❌");
    return;
  }

  const text = textarea.value;

  navigator.clipboard.writeText(text).then(() => {
    alert("Prompt copied ✅");
  }).catch(() => {
    alert("Copy failed ❌");
  });
}
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
