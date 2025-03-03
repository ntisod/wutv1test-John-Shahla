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
      pageTitle: "John Shahla's Website",
      homeTitle: "Hello, I'm John",
      homeDescription: "Welcome to my personal website.",
      contactTitle: "Contact Me",
      sendMessage: "Send Message",
      learnMore: "About Me",
      aboutSite: "About Me",
      rightsSite: "Rights",
      logo: "JSH Website",
      webHistoryName: "Web History",
      tocTitle: "Table of Contents",
      aboutName: "About Me - John Shahla",
      background: "Background",
      thoughtsFuture: "Thoughts on the Future",
      favGames: "My Favorite Games",
      schoolInfo: "NTI Gymnasiet",
      aboutTitle: "About Me - John Shahla",
      aboutDescription: "Welcome to my about page! I am John Shahla, a 17-year-old gamer, streamer, and programmer. Below, you'll find more about my journey, background, and plans for the future.",
      backgroundTitle: "Background",
      backgroundData1: "I began my programming journey in 2019 at the age of 12, starting with Node.js on my phone. Since then, I’ve explored game development, web development, and creating Discord bots. My passion for coding continues to grow every day.",
      backgroundData2: "I attend NTI Gymnasiet Södertälje because of their strong focus on tech and innovation. It’s a great environment to expand my skills in programming and development.",
      thoughtsFutureTitle: "Thoughts on the Future",
      thoughtsFutureData: "In the future, I aim to continue honing my skills in game development and web programming. I’m particularly interested in building applications that can improve user experience, both in gaming and everyday life. I am excited about what the future holds in the tech world.",
      favGamesTitle: "My Favorite Games",
      schoolInfoTitle: "NTI Gymnasiet",
      schoolData: "I currently attend NTI Gymnasiet Södertälje, which has been an amazing school that aligns perfectly with my interests in technology and innovation. Their focus on cutting-edge tech helps me grow as a developer.",
      formTitle: "Dating App Registration",
      nameLabel: "Full Name",
      emailLabel: "Email",
      ageLabel: "Age",
      genderLabel: "Gender",
      interestsLabel: "Interests",
      profilePictureLabel: "Profile Picture",
      bioLabel: "Short Bio",
      locationLabel: "Location",
      preferencesLabel: "Dating Preferences",
      occupationLabel: "Occupation",
      hobbiesLabel: "Hobbies",
      relationshipStatusLabel: "Relationship Status",
      lookingForLabel: "Looking For",
      tosLabel: "I agree to the Terms of Service",
      registerButton: "Register",
      disclaimerTitle: "Disclaimer",
      disclaimerText: "This text was created by an AI language model (Gemini) and is not protected by copyright. The information in the text is intended to be informative but should not be considered legal advice.",
      copyrightTitle: "Copyright Law: A Simple Explanation",
      copyrightDescription: "Copyright law is designed to protect what is created, whether it is a book, a song, a film, a website, or an image. It gives the creator, i.e., the author, the exclusive right to decide how this work may be used.",
      question1Title: "What is protected by copyright?",
      question1Description: "When you create something new and original, such as:",
      question1Item1: "Writing a text: A novel, an article, a blog post",
      question1Item2: "Composing a song: A melody, a text",
      question1Item3: "Painting a picture: A work of art",
      question1Item4: "Taking a picture: A photograph",
      question1Item5: "Writing code: A computer program, an app, a website",
      question1Summary: "...you automatically get copyright for what you have created.",
      question2Title: "Why is copyright important?",
      question2Item1: "Protects creativity: Copyright stimulates creativity by giving creators economic incentives and recognition.",
      question2Item2: "Prevents unauthorized use: It protects creators from others using their work without permission.",
      question2Item3: "Ensures fairness: It ensures that creators get paid for their work.",
      question3Title: "What does it mean for you?",
      question3Item1: "As a creator: You have the right to decide over your work and can give permission for others to use it under certain conditions.",
      question3Item2: "As a user: You must have permission from the author before using someone's work. However, there are exceptions, such as quotes in research or teaching (fair use).",
      question4Title: "Important to remember",
      question4Item1: "Copyright arises automatically: You do not need to register your copyright. The protection lasts a long time: Copyright lasts for 70 years after the author's death.",
      question4Item2: "The protection lasts a long time: Copyright lasts for 70 years after the author's death.",
      question4Item3: "There are exceptions: There are certain limitations to copyright, such as to enable research and teaching.",
      tosTitle: "Terms of Service",
      tosDescription: "By using this website and submitting your information, you agree to the following terms and conditions:",
      tosItem1: "Your information will be stored securely and will not be shared with third parties without your consent.",
      tosItem2: "You have the right to request the deletion of your information at any time.",
      tosItem3: "We will use your information to provide a better user experience and to improve our services.",
    },
    sv: {
      pageTitle: "John Shahlas Webbplats",
      homeTitle: "Hej, jag är John",
      homeDescription: "Välkommen till min personliga webbplats.",
      contactTitle: "Kontakta Mig",
      sendMessage: "Skicka Meddelande",
      learnMore: "Om Mig",
      aboutSite: "Om Mig",
      rightsSite: "Rättigheter",
      logo: "JSH Webbplats",
      webHistoryName: "Webbhistorik",
      tocTitle: "Innehållsförteckning",
      aboutName: "Om Mig - John Shahla",
      background: "Bakgrund",
      thoughtsFuture: "Tankar om Framtiden",
      favGames: "Mina Favoritspel",
      schoolInfo: "NTI Gymnasiet",
      aboutTitle: "Om Mig - John Shahla",
      aboutDescription: "Välkommen till min om-sida! Jag är John Shahla, en 17-årig gamer, streamer och programmerare. Nedan hittar du mer om min resa, bakgrund och framtidsplaner.",
      backgroundTitle: "Bakgrund",
      backgroundData1: "Jag började min programmeringsresa 2019 vid 12 års ålder, med Node.js på min telefon. Sedan dess har jag utforskat spelutveckling, webbutveckling och att skapa Discord-botar. Min passion för kodning växer varje dag.",
      backgroundData2: "Jag går på NTI Gymnasiet Södertälje på grund av deras starka fokus på teknik och innovation. Det är en fantastisk miljö för att utveckla mina färdigheter inom programmering och utveckling.",
      thoughtsFutureTitle: "Tankar om Framtiden",
      thoughtsFutureData: "I framtiden planerar jag att fortsätta finslipa mina färdigheter inom spelutveckling och webbprogrammering. Jag är särskilt intresserad av att bygga applikationer som kan förbättra användarupplevelsen, både inom spel och i vardagen. Jag är spänd på vad framtiden har att erbjuda i teknikens värld.",
      favGamesTitle: "Mina Favoritspel",
      schoolInfoTitle: "NTI Gymnasiet",
      schoolData: "Jag går för närvarande på NTI Gymnasiet Södertälje, som har varit en fantastisk skola som passar perfekt med mina intressen för teknik och innovation. Deras fokus på den senaste tekniken hjälper mig att växa som utvecklare.",
      formTitle: "Registrering för Dating App",
      nameLabel: "Fullständigt Namn",
      emailLabel: "E-post",
      ageLabel: "Ålder",
      genderLabel: "Kön",
      interestsLabel: "Intressen",
      profilePictureLabel: "Profilbild",
      bioLabel: "Kort Biografi",
      locationLabel: "Plats",
      preferencesLabel: "Dating Preferenser",
      occupationLabel: "Yrke",
      hobbiesLabel: "Hobbies",
      relationshipStatusLabel: "Relationsstatus",
      lookingForLabel: "Söker",
      tosLabel: "Jag godkänner Användarvillkoren",
      registerButton: "Registrera",
      disclaimerTitle: "Ansvarsfriskrivning",
      disclaimerText: "Denna text är skapad av en AI-språkmodell (Gemini) och är inte skyddad av upphovsrätt. Informationen i texten är avsedd att vara informativ men bör inte ses som juridisk rådgivning.",
      copyrightTitle: "Upphovsrättslagen: En enkel förklaring",
      copyrightDescription: "Upphovsrättslagen är till för att skydda det som är skapat, oavsett om det är en bok, en låt, en film, en webbplats eller en bild. Den ger den som skapat något, alltså upphovspersonen, en exklusiv rätt att bestämma hur detta verk får användas.",
      question1Title: "Vad skyddas av upphovsrätten?",
      question1Description: "När du skapar något nytt och originellt, t.ex.:",
      question1Item1: "Skriver en text: En roman, en artikel, en bloggpost",
      question1Item2: "Komponerar en låt: En melodi, en text",
      question1Item3: "Målar en tavla: Ett konstverk",
      question1Item4: "Tar en bild: Ett fotografi",
      question1Item5: "Skriver kod: Ett datorprogram, en app, en webbplats",
      question1Summary: "...så får du automatiskt upphovsrätt till det du skapat.",
      question2Title: "Varför är upphovsrätten viktig?",
      question2Item1: "Skyddar kreativitet: Upphovsrätten stimulerar till kreativitet genom att ge skapare ekonomiska incitament och erkännande.",
      question2Item2: "Förhindrar olovlig användning: Den skyddar skapare från att andra använder deras verk utan tillstånd.",
      question2Item3: "Säkerställer rättvisa: Den ser till att skapare får betalt för sitt arbete.",
      question3Title: "Vad innebär det för dig?",
      question3Item1: "Som skapare: Du har rätt att bestämma över ditt verk och kan ge tillstånd för andra att använda det under vissa villkor.",
      question3Item2: "Som användare: Du måste ha tillstånd från upphovspersonen innan du använder någons verk. Det finns dock undantag, som t.ex. citat i forskning eller undervisning (fair use).",
      question4Title: "Viktigt att komma ihåg",
      question4Item1: "Upphovsrätten uppstår automatiskt: Du behöver inte registrera din upphovsrätt. Skyddet varar länge: Upphovsrätten gäller i 70 år efter att upphovspersonen dött.",
      question4Item2: "Skyddet varar länge: Upphovsrätten gäller i 70 år efter att upphovspersonen dött.",
      question4Item3: "Det finns undantag: Det finns vissa begränsningar i upphovsrätten, t.ex. för att möjliggöra forskning och undervisning.",
      tosTitle: "Användarvillkor",
      tosDescription: "Genom att använda denna webbplats och skicka in din information godkänner du följande villkor:",
      tosItem1: "Din information kommer att lagras säkert och kommer inte att delas med tredje part utan ditt samtycke.",
      tosItem2: "Du har rätt att begära radering av din information när som helst.",
      tosItem3: "Vi kommer att använda din information för att ge en bättre användarupplevelse och för att förbättra våra tjänster.",
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
    document.getElementById('page-title').textContent = translation.pageTitle;
    document.getElementById('home-title').textContent = translation.homeTitle;
    document.getElementById('home-description').textContent = translation.homeDescription;
    document.getElementById('contact-title').textContent = translation.contactTitle;
    document.getElementById('send-message').textContent = translation.sendMessage;
    document.getElementById('learn-more').textContent = translation.learnMore;
    document.getElementById('about-site').textContent = translation.aboutSite;
    document.getElementById('rights-site').textContent = translation.rightsSite;
    document.getElementById('logo').textContent = translation.logo;
    document.getElementById('web-history-name').textContent = translation.webHistoryName;

    document.getElementById('toc-title').textContent = translation.tocTitle;
    document.getElementById('about-name').textContent = translation.aboutName;
    document.getElementById('background-toc').textContent = translation.background;
    document.getElementById('thoughts-future-toc').textContent = translation.thoughtsFuture;
    document.getElementById('fav-games').textContent = translation.favGames;
    document.getElementById('school-info-toc').textContent = translation.schoolInfo;
    document.getElementById('about-title').textContent = translation.aboutTitle;
    document.getElementById('about-description').textContent = translation.aboutDescription;
    document.getElementById('background-title').textContent = translation.backgroundTitle;
    document.getElementById('background-data-1').textContent = translation.backgroundData1;
    document.getElementById('background-data-2').textContent = translation.backgroundData2;
    document.getElementById('thoughts-future-title').textContent = translation.thoughtsFutureTitle;
    document.getElementById('thoughts-future-data').textContent = translation.thoughtsFutureData;
    document.getElementById('fav-games-title').textContent = translation.favGamesTitle;
    document.getElementById('school-info-title').textContent = translation.schoolInfoTitle;
    document.getElementById('school-data').textContent = translation.schoolData;

    document.getElementById('form-title').textContent = translation.formTitle;
    document.getElementById('name-label').textContent = translation.nameLabel;
    document.getElementById('email-label').textContent = translation.emailLabel;
    document.getElementById('age-label').textContent = translation.ageLabel;
    document.getElementById('gender-label').textContent = translation.genderLabel;
    document.getElementById('interests-label').textContent = translation.interestsLabel;
    document.getElementById('profile-picture-label').textContent = translation.profilePictureLabel;
    document.getElementById('bio-label').textContent = translation.bioLabel;
    document.getElementById('location-label').textContent = translation.locationLabel;
    document.getElementById('preferences-label').textContent = translation.preferencesLabel;
    document.getElementById('occupation-label').textContent = translation.occupationLabel;
    document.getElementById('hobbies-label').textContent = translation.hobbiesLabel;
    document.getElementById('relationship-status-label').textContent = translation.relationshipStatusLabel;
    document.getElementById('looking-for-label').textContent = translation.lookingForLabel;
    document.getElementById('tos-label').textContent = translation.tosLabel;
    document.getElementById('register-button').textContent = translation.registerButton;

    document.getElementById('disclaimer-title').textContent = translation.disclaimerTitle;
    document.getElementById('disclaimer-text').innerHTML = translation.disclaimerText;
    document.getElementById('copyright-title').textContent = translation.copyrightTitle;
    document.getElementById('copyright-description').textContent = translation.copyrightDescription;
    document.getElementById('question1-title').textContent = translation.question1Title;
    document.getElementById('question1-description').textContent = translation.question1Description;
    document.getElementById('question1-item1').textContent = translation.question1Item1;
    document.getElementById('question1-item2').textContent = translation.question1Item2;
    document.getElementById('question1-item3').textContent = translation.question1Item3;
    document.getElementById('question1-item4').textContent = translation.question1Item4;
    document.getElementById('question1-item5').textContent = translation.question1Item5;
    document.getElementById('question1-summary').textContent = translation.question1Summary;
    document.getElementById('question2-title').textContent = translation.question2Title;
    document.getElementById('question2-item1').textContent = translation.question2Item1;
    document.getElementById('question2-item2').textContent = translation.question2Item2;
    document.getElementById('question2-item3').textContent = translation.question2Item3;
    document.getElementById('question3-title').textContent = translation.question3Title;
    document.getElementById('question3-item1').textContent = translation.question3Item1;
    document.getElementById('question3-item2').textContent = translation.question3Item2;
    document.getElementById('question4-title').textContent = translation.question4Title;
    document.getElementById('question4-item1').textContent = translation.question4Item1;
    document.getElementById('question4-item2').textContent = translation.question4Item2;
    document.getElementById('question4-item3').textContent = translation.question4Item3;
    document.getElementById('tos-title').textContent = translation.tosTitle;
    document.getElementById('tos-description').textContent = translation.tosDescription;
    document.getElementById('tos-item1').textContent = translation.tosItem1;
    document.getElementById('tos-item2').textContent = translation.tosItem2;
    document.getElementById('tos-item3').textContent = translation.tosItem3;
  }

  // Form validation for förmular.html
  const registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      const form = event.target;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const age = form.age.value.trim();
      const gender = form.gender.value;
      const interests = form.interests.value.trim();
      const profilePicture = form['profile-picture'].files[0];
      const bio = form.bio.value.trim();
      const location = form.location.value.trim();
      const preferences = form.preferences.value.trim();
      const occupation = form.occupation.value.trim();
      const hobbies = form.hobbies.value.trim();
      const relationshipStatus = form['relationship-status'].value;
      const lookingFor = form['looking-for'].value;
      const tos = form.tos.checked;

      if (!name || !email || !age || !gender || !interests || !profilePicture || !bio || !location || !preferences || !occupation || !hobbies || !relationshipStatus || !lookingFor) {
        alert('Please fill out all fields.');
        return;
      }

      if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        return;
      }

      if(age < 18) { 
        alert('You must be at least 18 years old to register.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      if (!tos) {
        alert('You must agree to the Terms of Service.');
        return;
      }

      alert('Form submitted successfully!');
      form.submit(); // Submit the form if validation passes
    });

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  }
});
