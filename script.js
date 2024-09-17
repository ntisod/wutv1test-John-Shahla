document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const socialMenu = document.querySelector(".social-menu");

  hamburgerMenu.addEventListener("click", function() {
      navLinks.classList.toggle("show");
      socialMenu.classList.toggle("show");
  });
});
