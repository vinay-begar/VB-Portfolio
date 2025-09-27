let magnet = document.querySelector(".mouse-magnet");

document.body.addEventListener("mousemove", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  const x = e.clientX;
  const y = e.clientY;

  magnet.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
});

//  GSAP animation for About Section

gsap.from(".about-img img", {
  x: -120,
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "power3.out",
});

gsap.from(".about-text", {
  x: 120,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 1,
});
