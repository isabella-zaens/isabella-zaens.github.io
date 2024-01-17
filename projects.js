// function toggleMode() {
//     const body = document.body;
//     const header = document.querySelector('header');
//     const rectangles = document.querySelectorAll('.rectangle');
//     const textboxes = document.querySelectorAll('.textbox');
//     const resumeTitle = document.querySelector('h1');
//     const homeText = document.querySelector('home');

//     const sections = document.querySelectorAll('section');
//     const h1Elements = document.querySelectorAll('h1');
//     const pElements = document.querySelectorAll('p');
//     const aElements = document.querySelectorAll('header a');

//     const currentBodyColor = getComputedStyle(body).backgroundColor;
//     const isDarkMode = currentBodyColor === 'rgb(0, 0, 0)';

//     // Toggle styles for the first set of elements (rectangles, textboxes, etc.)
//     body.style.backgroundColor = isDarkMode ? '#fff' : '#000';
//     header.style.backgroundColor = isDarkMode ? '#000' : '#fff';

//     rectangles.forEach(rectangle => {
//         rectangle.classList.toggle('dark-mode', isDarkMode);
//     });

//     textboxes.forEach(textbox => {
//         textbox.classList.toggle('dark-mode', isDarkMode);
//     });

//     resumeTitle.classList.toggle('dark-mode');

//     // Toggle styles for the second set of elements (sections, h1, p, etc.)
//     sections.forEach(section => {
//         section.classList.toggle('dark-mode', isDarkMode);
//     });

//     pElements.forEach(p => {
//         p.style.color = isDarkMode ? '#000' : '#fff';
//     });

//     aElements.forEach(a => {
//         a.style.color = isDarkMode ? '#000' : '#fff';
//     });

//     iElements.forEach(icon => {
//         icon.style.color = isDarkMode ? '#000' : '#fff';
//     });

//     // Toggle between sun and moon icons
//     const toggleIcon = document.getElementById('toggle-icon');
//     toggleIcon.classList.toggle('fa-sun');
//     toggleIcon.classList.toggle('fa-moon');

//     // Toggle curved rectangles colors and text in the opposite way
//     curvedRectangles.forEach(rectangle => {
//         rectangle.style.backgroundColor = isDarkMode ? 'white' : 'black';
//         rectangle.style.borderColor = isDarkMode ? 'black' : 'white';
//         rectangle.style.color = isDarkMode ? 'black' : 'white';
//     });
// }



// function goHome() {
//     window.location.href = "home.html";
// }

function toggleMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const h1Element = document.querySelector('h1');
    const h2Elements = document.querySelectorAll('.textbox h2');
    const pElements = document.querySelectorAll('.textbox p:not(.date-text)');
    const aElements = document.querySelectorAll('header a');
    const rectangles = document.querySelectorAll('.rectangle');
    const toggleIcon = document.getElementById('toggle-icon');

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

    // Toggle between sun and moon icons
    toggleIcon.classList.toggle('fa-sun', isDarkMode);
    toggleIcon.classList.toggle('fa-moon', !isDarkMode);
}

function goHome() {
    window.location.href = "index.html";
}
