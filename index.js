const toggleButton = document.getElementById("toggle-button");
const moreProjects = document.getElementById("more-projects");
let expanded = false;

toggleButton.addEventListener("click", () => {
    expanded = !expanded;
    moreProjects.style.maxHeight = expanded ? moreProjects.scrollHeight + "px" : "0px";
    moreProjects.style.opacity = expanded ? "1" : "0";
    toggleButton.textContent = expanded ? "Show Less" : "Show More";
});

window.addEventListener("DOMContentLoaded", () => {
    moreProjects.style.maxHeight = "0px";
    moreProjects.style.overflow = "hidden";
    moreProjects.style.transition = "max-height 0.5s ease, opacity 0.5s ease";
    moreProjects.style.opacity = "0";
});
