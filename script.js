let splash = document.querySelector(".splash");
let main = document.querySelector(".main");
let magnet = document.querySelector(".mouse-magnet");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

document.body.addEventListener("mousemove", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  const x = e.clientX;
  const y = e.clientY;

  magnet.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
});
 
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
  // onComplete: () => {
  //   gsap.to("#loading", {
  //     opacity: 0,
  //     duration: 1,
  //     onComplete: () => {
  //       document.getElementById("loading").style.display = "none";

  //     },
  //   });

  // },
  onComplete: () => {
    gsap.to("#loading", {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        document.getElementById("loading").style.display = "none";

        // After splash completes, show the hamburger on small screens
        const hamburger = document.getElementById("hamburger");
        if (window.innerWidth <= 480) {
          hamburger.classList.add("show");
        }
      },
    });
  },
});

// Responsive menu toggle


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when any link inside .menu-head clicked
document.querySelectorAll(".menu-head a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

