
  const themeSwitchCheckbox = document.getElementById('theme-switch-checkbox');
  themeSwitchCheckbox.addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');
  });

  // Function to toggle theme variables
  function toggleTheme(isDark) {
    const root = document.documentElement;
    root.style.setProperty('--primary-bg-color', isDark ? root.style.getPropertyValue('--dark-primary-bg-color') : '#f4f4f4');
    root.style.setProperty('--secondary-bg-color', isDark ? root.style.getPropertyValue('--dark-secondary-bg-color') : '#fff');
    root.style.setProperty('--primary-text-color', isDark ? root.style.getPropertyValue('--dark-primary-text-color') : '#333');
    root.style.setProperty('--secondary-text-color', isDark ? root.style.getPropertyValue('--dark-secondary-text-color') : '#555');
    root.style.setProperty('--border-color', isDark ? root.style.getPropertyValue('--dark-border-color') : '#ddd');
    root.style.setProperty('--box-shadow-color', isDark ? root.style.getPropertyValue('--dark-box-shadow-color') : 'rgba(0, 0, 0, 0.1)');
  }

  // Listen for the toggle event to switch themes
  themeSwitchCheckbox.addEventListener('change', function(event) {
    toggleTheme(event.target.checked);
  });

