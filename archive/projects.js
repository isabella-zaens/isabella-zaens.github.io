function toggleMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const h1Element = document.querySelector('h1');
    const h2Elements = document.querySelectorAll('.textbox h2');
    const pElements = document.querySelectorAll('.textbox p:not(.date-text)');
    const aElements = document.querySelectorAll('header a');
    const rectangles = document.querySelectorAll('.rectangle');
    const toggleIcon = document.getElementById('toggle-icon');
    const ulElements = document.querySelectorAll('.textbox ul'); // Add this line

    const isDarkMode = body.classList.toggle('dark-mode');

    body.style.backgroundColor = isDarkMode ? '#000' : '#fff';
    body.style.color = isDarkMode ? '#fff' : '#000';
    header.style.backgroundColor = isDarkMode ? '#000' : '#fff';
    h1Element.style.color = isDarkMode ? '#fff' : '#000';
    h1Element.style.backgroundColor = isDarkMode ? '#000' : '#fff';

    h2Elements.forEach(h2 => {
        h2.style.color = isDarkMode ? '#fff' : '#000';
    });

    pElements.forEach(p => {
        p.style.color = isDarkMode ? '#fff' : '#000';
    });

    aElements.forEach(a => {
        a.style.color = isDarkMode ? '#fff' : '#000';
    });

    rectangles.forEach(rectangle => {
        rectangle.style.backgroundColor = isDarkMode ? '#000' : '#fff';
        rectangle.style.borderColor = isDarkMode ? '#fff' : '#000';
    });

    ulElements.forEach(ul => { // Add this block
        ul.style.color = isDarkMode ? '#fff' : '#000';
    });

    // Toggle between sun and moon icons
    toggleIcon.classList.toggle('fa-sun', isDarkMode);
    toggleIcon.classList.toggle('fa-moon', !isDarkMode);
}

function goHome() {
    window.location.href = "index.html";
}
