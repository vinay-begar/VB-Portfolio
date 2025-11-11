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

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = `New message from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Change this to your email:
    window.location.href = `mailto:vinaybbegar@gmail.com?subject=${subject}&body=${body}`;
  });

