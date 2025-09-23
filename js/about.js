//  GSAP animation for About Section
 window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".about-img img", {
    x: -120,
    opacity: 0,
    duration: 1.9,
    ease: "power3.out",
  });

  gsap.from(".about-text", {
    x: 120,
    opacity: 0,
    duration: 1.9,
    ease: "power3.out",
    delay: 0.8,
  });
});

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Image Animation
gsap.from(".about-img img", {
  x: -120,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-container",
    start: "top 80%",   // jab container viewport ke 80% pe aayega
    toggleActions: "play none none reverse" 
  }
});

// Text Animation
gsap.from(".about-text", {
  x: 120,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.2,
  scrollTrigger: {
    trigger: ".about-container",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
