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

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Function to apply theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }

    document.querySelectorAll('.toc-section, .navbar, .about-section, .background-section, .future-section, .games-section, .school-section')
      .forEach(section => {
        if (section) {
          if (theme === 'dark') {
            section.classList.add('dark');
            section.classList.remove('light');
          } else {
            section.classList.add('light');
            section.classList.remove('dark');
          }
        }
      });
  }

  // Get theme from local storage
  const storedTheme = localStorage.getItem('theme') || 'light';
  console.log('Stored theme:', storedTheme); // Log theme
  applyTheme(storedTheme);
  themeToggle.checked = storedTheme === 'dark';

  // On theme change
  themeToggle.addEventListener('change', function () {
    const theme = themeToggle.checked ? 'dark' : 'light';
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  });
});

// Add this to your script.js file
const tocSection = document.getElementById('toc');
const scrollToTopButton = document.querySelector('.scroll-to-top-button');

window.addEventListener('scroll', () => {
  if (!isElementInViewport(tocSection)) {
    scrollToTopButton.style.display = 'block'; // show the button
  } else {
    scrollToTopButton.style.display = 'none'; // hide the button
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top of page
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener('DOMContentLoaded', function() {
  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      var target = document.querySelector(this.hash);
      var top = target.offsetTop;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });
  });
});