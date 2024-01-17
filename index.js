function toggleMode() {
    const body = document.body;
    const header = document.querySelector('header');

    const sections = document.querySelectorAll('section');
    const h1Elements = document.querySelectorAll('h1');
    const pElements = document.querySelectorAll('p');
    const aElements = document.querySelectorAll('header a');
    const iElements = document.querySelectorAll('.contact-icons i'); 
    const currentBodyColor = getComputedStyle(body).backgroundColor;
    const isDarkMode = currentBodyColor === 'rgb(0, 0, 0)';
    const curvedRectangles = document.querySelectorAll('.curved-rectangle'); 
    const contactHandles = document.querySelectorAll('.contact-handle');


    body.style.backgroundColor = isDarkMode ? '#fff' : '#000';
    body.style.color = isDarkMode ? '#000' : '#fff';
    header.style.backgroundColor = isDarkMode ? '#fff' : '#000';

    sections.forEach(section => {
        section.classList.toggle('dark-mode', isDarkMode);
    });

    pElements.forEach(p => {
        p.style.color = isDarkMode ? '#000' : '#fff';
    });

    aElements.forEach(a => {
        a.style.color = isDarkMode ? '#000' : '#fff';
    });

    iElements.forEach(icon => {
        icon.style.color = isDarkMode ? '#000' : '#fff';
    });

    // Add logic to toggle between dark and light mode
    document.body.classList.toggle('dark-mode');

    // Toggle between sun and moon icons
    const toggleIcon = document.getElementById('toggle-icon');
    toggleIcon.classList.toggle('fa-sun');
    toggleIcon.classList.toggle('fa-moon');

    // Toggle curved rectangles colors and text in the opposite way
    curvedRectangles.forEach(rectangle => {
        rectangle.style.backgroundColor = isDarkMode ? 'white' : 'black';
        rectangle.style.borderColor = isDarkMode ? 'black' : 'white';
        rectangle.style.color = isDarkMode ? 'black' : 'white';
    });

     // Toggle styles for contact handles
     contactHandles.forEach(handle => {
        handle.style.color = isDarkMode ? 'black' : 'white'; 
    }); 
}

function goHome() {
    window.location.href = "index.html";
}

function copyToClipboard(text) {
    const input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Copied to clipboard');
}