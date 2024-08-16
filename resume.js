window.toggleMode = function() {
  const body = document.body;
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section');
  const pElements = document.querySelectorAll('p');
  const aElements = document.querySelectorAll('header a');
  const toggleIcon = document.getElementById('toggle-icon');
  
  const isDarkMode = body.classList.toggle('dark-mode');

  body.style.backgroundColor = isDarkMode ? '#000' : '#fff';
  body.style.color = isDarkMode ? '#fff' : '#000';
  header.style.backgroundColor = isDarkMode ? '#000' : '#fff';

  sections.forEach(section => {
      section.classList.toggle('dark-mode', isDarkMode);
  });

  pElements.forEach(p => {
      p.style.color = isDarkMode ? '#fff' : '#000';
  });

  aElements.forEach(a => {
      a.style.color = isDarkMode ? '#fff' : '#000';
  });

  // Toggle between sun and moon icons
  toggleIcon.classList.toggle('fa-sun', isDarkMode);
  toggleIcon.classList.toggle('fa-moon', !isDarkMode);
};

window.goHome = function() {
  window.location.href = "index.html";
};

