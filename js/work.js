// const workItems = document.querySelectorAll(".work-item");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".menu-head a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});


gsap.registerPlugin(ScrollTrigger);

// Select all project cards and animate them on scroll
gsap.utils.toArray(".project-card").forEach((card) => {
  gsap.from(card, {
    y: 50, // Start 50px lower
    opacity: 0, // Start invisible
    duration: 0.9, // Animation lasts 0.8 seconds
    ease: "power2.out", // Smooth easing
    scrollTrigger: {
      trigger: card, // The element to watch
      start: "top 80%", // When top of card reaches 80% of viewport
      toggleActions: "play none none none", // Play once
    },
  });
});