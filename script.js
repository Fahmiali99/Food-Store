const menuTogle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuTogle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
