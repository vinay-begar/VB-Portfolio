let splash = document.querySelector(".splash");
let main = document.querySelector(".main");
let magnet = document.querySelector(".mouse-magnet");

document.body.addEventListener("mousemove", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  const x = e.clientX;
  const y = e.clientY;

  magnet.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
});

// gsap.to(splash, {
//   y: "-100%", // slide out to the left
//   duration: 2.5, // animation duration
//   delay: 1,
//   ease: "power2.inOut", // smooth easing
//   onComplete: () => {
//     splash.style.display = "none"; // hide splash after animation
//     gsap.fromTo(
//       main,
//       { opacity: 0 }, // start invisible
//       {
//         opacity: 1, // fade in
//         duration: 1,
//         display: "block", // make visible smoothly
//         ease: "power2.inOut",
//       }
//     );
//   },
// });
 
const letters = document.querySelectorAll(".loading-text span");

gsap.to(letters, {
  opacity: 1,
  duration: 1.2,
  stagger: 0.15,
  onUpdate: function () {
    letters.forEach((el, i) => {
      gsap.to(el, {
        color: "#ffffff",
        duration: 0.2,
        delay: i * 0.15,
      });
      gsap.to(el, {
        color: "rgba(255,255,255,0.1)",
        duration: 0.2,
        delay: i * 0.15 + 0.4,
      });
      gsap.to(el.querySelector("::after"), {
        opacity: 1,
        duration: 0.2,
        delay: i * 0.15,
      });
    });
  },
  onComplete: () => {
    gsap.to("#loading", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      onComplete: () => {
        document.getElementById("loading").style.display = "none";
      },
    });
  },
});