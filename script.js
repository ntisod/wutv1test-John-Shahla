document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerContent = document.querySelector(".hamburger-content");

  hamburgerMenu.addEventListener("click", function () {
      hamburgerContent.classList.toggle("show");
  });

  // Dark mode toggle
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("change", function () {
      document.body.setAttribute(
          "data-theme",
          themeToggle.checked ? "dark" : "light"
      );
  });
});
