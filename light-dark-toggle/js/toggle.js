const bodyEL = document.getElementById('body');
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', toggleTheme);

function toggleTheme() {
    bodyEL.classList.toggle('dark');
}