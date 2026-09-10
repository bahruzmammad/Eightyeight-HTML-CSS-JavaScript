const menuButton = document.getElementById("menu-btn");
const navigationLinks = document.getElementById("nav-links");
const menuIcon = menuButton.querySelector("i");
menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");
  const menuIsOpen = navigationLinks.classList.contains("open");
  menuIcon.setAttribute(
    "class",
    menuIsOpen ? "ri-close-line" : "ri-menu-4-line",
  );
});
navigationLinks.addEventListener("click", () => {
  navigationLinks.classList.remove("open");
  menuIcon.setAttribute("class", "ri-menu-4-line");
});
/* Scroll Reveal */ const revealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".hero-content .section-title", { ...revealOptions });
/* Gallery Slider */ const gallerySlider = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: { rotate: 0, depth: 0, modifier: 1, scale: 0.9, stretch: 0 },
});
/* Services */ ScrollReveal().reveal(".services-section .section-subtitle", {
  ...revealOptions,
});
ScrollReveal().reveal(".services-section .section-title", {
  ...revealOptions,
  delay: 500,
});
ScrollReveal().reveal(".service:nth-child(odd) img", {
  ...revealOptions,
  origin: "left",
});
ScrollReveal().reveal(".service:nth-child(even) img", {
  ...revealOptions,
  origin: "right",
});
ScrollReveal().reveal(".service-content h4", { ...revealOptions, delay: 500 });
ScrollReveal().reveal(".service-content p", { ...revealOptions, delay: 1000 });
ScrollReveal().reveal(".services-button", { ...revealOptions, delay: 1500 });
/* Instagram */ const instagramImages =
  document.querySelector(".instagram-images");
const instagramItems = Array.from(instagramImages.children);
instagramItems.forEach((item) => {
  const duplicateItem = item.cloneNode(true);
  duplicateItem.setAttribute("aria-hidden", "true");
  instagramImages.appendChild(duplicateItem);
});
