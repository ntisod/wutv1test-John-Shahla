document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerContent = document.querySelector(".hamburger-content");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Hamburger Menu Toggle
  hamburgerMenu.addEventListener("click", function () {
    hamburgerContent.classList.toggle("show");
  });

  // Function to apply theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark');
      body.classList.remove('light');
      body.setAttribute("data-theme", "dark");
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
      body.setAttribute("data-theme", "light");
    }
  }

  // Get theme from local storage
  const storedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(storedTheme);
  themeToggle.checked = storedTheme === 'dark';

  // On theme change
  themeToggle.addEventListener('change', function () {
    const theme = themeToggle.checked ? 'dark' : 'light';
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  });

  // Scroll to Top Button
  const tocSection = document.getElementById('toc');
  const navBar = document.getElementById('nav');
  const scrollToTopButton = document.querySelector('.scroll-to-top-button');

  window.addEventListener('scroll', () => {
    if (!isElementInViewport(tocSection) || !isElementInViewport(navBar)) {
      scrollToTopButton.style.display = 'block'; 
    } else {
      scrollToTopButton.style.display = 'none'; 
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    scrollToTopButton.style.display = 'none';
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

  // Smooth Scrolling for Anchors
  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      var target = document.querySelector(this.hash);
      var top = target.offsetTop;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            homeTitle: "Hello, I'm John",
            homeDescription: "Welcome to my personal website.",
            contactTitle: "Contact Me",
            sendMessage: "Send Message",
            learnMore: "About Me",
        },
        sv: {
            homeTitle: "Hej, jag är John",
            homeDescription: "Välkommen till min personliga webbplats.",
            contactTitle: "Kontakta Mig",
            sendMessage: "Skicka Meddelande",
            learnMore: "Om Mig",
        },
    };

    function updateLanguage(lang) {
        document.getElementById('home-title').textContent = translations[lang].homeTitle;
        document.getElementById('home-description').textContent = translations[lang].homeDescription;
        document.getElementById('contact-title').textContent = translations[lang].contactTitle;
        document.getElementById('send-message').textContent = translations[lang].sendMessage;
        document.getElementById('learn-more').textContent = translations[lang].learnMore;
    }

    const languageSwitcher = document.getElementById('languageSwitcher');
    const storedLanguage = localStorage.getItem('language') || 'en';
    languageSwitcher.value = storedLanguage;
    updateLanguage(storedLanguage);

    languageSwitcher.addEventListener('change', function () {
        const selectedLanguage = this.value;
        console.log('Selected Language:', selectedLanguage); // Debugging line
        updateLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    });
});
});