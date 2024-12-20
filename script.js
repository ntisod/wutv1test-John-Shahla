document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerContent = document.querySelector(".hamburger-content");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  hamburgerMenu.addEventListener("click", function () {
    hamburgerContent.classList.toggle("show");
  });

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

  const storedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(storedTheme);
  themeToggle.checked = storedTheme === 'dark';

  themeToggle.addEventListener('change', function () {
    const theme = themeToggle.checked ? 'dark' : 'light';
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  });

  const translations = {
    en: {
      homeTitle: "Hello, I'm John",
      homeDescription: "Welcome to my personal website.",
      contactTitle: "Contact Me",
      sendMessage: "Send Message",
      learnMore: "About Me",
      aboutSite: "About Me",
      rightsSite: "Rights",
      logo: "JSH Website",
      webHistoryName: "Web History",
      aboutName: "About Me - John Shahla",
      background: "Background",
      thoughtsFuture: "Thoughts on the Future",
      favGames: "My Favorite Games",
      aboutDescription: "Welcome to my about page! I am John Shahla, a 17-year-old gamer, streamer, and programmer. Below, you'll find more about my journey, background, and plans for the future.",
      backgroundData1: "I began my programming journey in 2019 at the age of 12, starting with Node.js on my phone. Since then, I’ve explored game development, web development, and creating Discord bots. My passion for coding continues to grow every day.",
      backgroundData2: "I attend NTI Gymnasiet Södertälje because of their strong focus on tech and innovation. It’s a great environment to expand my skills in programming and development.",
      thoughtsFutureData: "In the future, I aim to continue honing my skills in game development and web programming. I’m particularly interested in building applications that can improve user experience, both in gaming and everyday life. I am excited about what the future holds in the tech world.",
      schoolData: "I currently attend NTI Gymnasiet Södertälje, which has been an amazing school that aligns perfectly with my interests in technology and innovation. Their focus on cutting-edge tech helps me grow as a developer.",
    },
    sv: {
      homeTitle: "Hej, jag är John",
      homeDescription: "Välkommen till min personliga webbplats.",
      contactTitle: "Kontakta Mig",
      sendMessage: "Skicka Meddelande",
      learnMore: "Om Mig",
      aboutSite: "Om Mig",
      rightsSite: "Rättigheter",
      logo: "JSH Webbplats",
      webHistoryName: "Webbhistorik",
      aboutName: "Om Mig - John Shahla",
      background: "Bakgrund",
      thoughtsFuture: "Tankar om Framtiden",
      favGames: "Mina Favoritspel",
      aboutDescription: "Välkommen till min om-sida! Jag är John Shahla, en 17-årig gamer, streamer och programmerare. Nedan hittar du mer om min resa, bakgrund och framtidsplaner.",
      backgroundData1: "Jag började min programmeringsresa 2019 vid 12 års ålder, med Node.js på min telefon. Sedan dess har jag utforskat spelutveckling, webbutveckling och att skapa Discord-botar. Min passion för kodning växer varje dag.",
      backgroundData2: "Jag går på NTI Gymnasiet Södertälje på grund av deras starka fokus på teknik och innovation. Det är en fantastisk miljö för att utveckla mina färdigheter inom programmering och utveckling.",
      thoughtsFutureData: "I framtiden planerar jag att fortsätta finslipa mina färdigheter inom spelutveckling och webbprogrammering. Jag är särskilt intresserad av att bygga applikationer som kan förbättra användarupplevelsen, både inom spel och i vardagen. Jag är spänd på vad framtiden har att erbjuda i teknikens värld.",
      schoolData: "Jag går för närvarande på NTI Gymnasiet Södertälje, som har varit en fantastisk skola som passar perfekt med mina intressen för teknik och innovation. Deras fokus på den senaste tekniken hjälper mig att växa som utvecklare."
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
    document.getElementById('about-site').textContent = translation.aboutSite;
    document.getElementById('rights-site').textContent = translation.rightsSite;
    document.getElementById('logo').textContent = translation.logo;
    document.getElementById('web-history-name').textContent = translation.webHistoryName;
    document.getElementById('about-name').textContent = translation.aboutName;
    document.getElementById('background').textContent = translation.background;
    document.getElementById('thoughts-future').textContent = translation.thoughtsFuture;
    document.getElementById('fav-games').textContent = translation.favGames;
    document.getElementById('about-description').textContent = translation.aboutDescription;
    document.getElementById('background-data-1').textContent = translation.backgroundData1;
    document.getElementById('background-data-2').textContent = translation.backgroundData2;
    document.getElementById('thoughts-future-data').textContent = translation.thoughtsFutureData;
    document.getElementById('school-data').textContent = translation.schoolData;
  }
});
