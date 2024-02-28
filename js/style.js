document.addEventListener('DOMContentLoaded', function() {
  // Select the theme switch checkbox and the mode status element
  const themeSwitch = document.getElementById('theme-switch-checkbox');
  const modeStatus = document.getElementById('mode-status');

  // Function to toggle theme and update text
  function toggleTheme() {
      if (themeSwitch.checked) {
          // If the checkbox is checked, enable dark mode and change text
          document.body.classList.add('dark-mode'); // Add your dark mode class
          modeStatus.innerText = 'Enable Light Mode!';
      } else {
          // If the checkbox is not checked, disable dark mode and change text
          document.body.classList.remove('dark-mode'); // Remove your dark mode class
          modeStatus.innerText = 'Enable Dark Mode!';
      }
  }

  // Add an event listener to change the theme when the checkbox is clicked
  themeSwitch.addEventListener('change', toggleTheme);

  // Optional: Call toggleTheme on page load if the checkbox is already checked
  // This is useful if you're saving the theme preference and setting the checkbox state on page load
  if(themeSwitch.checked) {
      toggleTheme();
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



