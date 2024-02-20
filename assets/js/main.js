/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav__menu");
navToggle = document.getElementById("nav__toggle");
navClose = document.getElementById("nav__close");

// menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
//*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link"); // Changed to querySelectorAll
const linkAction = () => {
  const navMenu = document.getElementById("nav__menu");
  navMenu.classList.remove("show-menu");
};
navLinks.forEach((n) => n.addEventListener("click", linkAction)); // Changed navLink to navLinks

/*=============== SWIPER WACTHES ===============*/
const swiperWatches = new Swiper(".home__swiper", {
  // Corrected selector
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__images", 1.5, { opacity: 0, y: 150, delay: 0.1 });
gsap.from(".home__data", 1.8, { opacity: 0, x: -100, delay: 0.8 });
gsap.from(".home__info", 1.5, { opacity: 0, x: -100, delay: 0.1 });
