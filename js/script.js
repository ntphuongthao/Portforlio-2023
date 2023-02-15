// DARK THEME IS WORKING
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const icon = 'uil-sun';

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

console.log('MY THEME SETTING IS WORKING');