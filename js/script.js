// DARK THEME IS WORKING
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// PREVIOUSLY SELECTED TOPIC (checking from local storage)
const selectTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light';
const detCurrentIcon = () => document.body.classList.contains(iconTheme)? 'uil-moon': 'uil-sun';

// We need to validate if the user has previously chosen a topic
if (selectTheme) {
  document.body.classList[selectTheme === 'dark'? 'add': 'remove'](darkTheme);
  themeButton.classList[selectIcon === 'uil-moon'? 'add': 'remove'](darkTheme);
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user has chosen
  localStorage.setItem('selectTheme', getCurrentTheme());
  localStorage.setItem('selected-icon', detCurrentIcon());
});

// MENU SHOW Y HIDDEN
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// MENU SHOW 
// Validate if the constant exists
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}


// MENU REMOVE
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// TYPEWRITER EFFECT LOGICS

new Typewriter('#typewritter', {
  strings: ['Thao Nguyen.', 'a Computer Science Undergraduate.', 'a Web Developer.', 'a Mobile Developer.', 'a Competitive Programming Participant.'],
  autoStart: true,
  loop: true,
  cursor: "|"
});

// SCROLL UP
function scrollUp() {
  const scrollup = document.getElementById('scroll-up');
  // When the scroll higher than 560 viewpoint, then 
  // the scrow up icon should appear and on clicking
  // should go to the top
  if (this.scrollY >= 560) scrollup.classList.add('show-scroll');
  else {
    scrollup.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

// SCROLL SECTION ACTIVE HIGHLIGHT

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset
  sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
  })
}


window.addEventListener('scroll', scrollActive);
