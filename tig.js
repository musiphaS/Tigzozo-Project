function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
};

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const vector = document.querySelector('.darkmode');

    if (body.classList.contains('dark-mode')) {
        vector.src = 'darkmode-light.svg.svg'
    }
    else {
        vector.src = 'Vector.svg'
    }

    // const darkModeimage = document.getElementById('toggle-dark-mode-image');
    darkModeimage.addEventListener('click', toggleDarkMode);
}