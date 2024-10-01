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
    console.log('DOM fully loaded and parsed');
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