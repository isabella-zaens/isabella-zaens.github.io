import confetti from "https://esm.run/canvas-confetti@1";

document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById("download-button");

  if (downloadButton) {
    downloadButton.addEventListener("click", () => {
      confetti({
        particleCount: 150,
        spread: 60
      });
    });
  }
});

function toggleMode() {
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
}

function goHome() {
    window.location.href = "index.html";
}
