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

  // Language Translations
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

  const languageSelector = document.getElementById('languageSwitcher');
  const storedLanguage = localStorage.getItem('language') || 'en';
  languageSelector.value = storedLanguage;
  applyLanguage(storedLanguage);

  languageSelector.addEventListener('change', function () {
    const selectedLanguage = languageSelector.value;
    localStorage.setItem('language', selectedLanguage);
    applyLanguage(selectedLanguage);
  });

  function applyLanguage(language) {
    const translation = translations[language];
    document.getElementById('home-title').textContent = translation.homeTitle;
    document.getElementById('home-description').textContent = translation.homeDescription;
    document.getElementById('contact-title').textContent = translation.contactTitle;
    document.getElementById('send-message').textContent = translation.sendMessage;
    document.getElementById('learn-more').textContent = translation.learnMore;
  }
});
