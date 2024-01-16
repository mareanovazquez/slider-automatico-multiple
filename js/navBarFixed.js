document.addEventListener("scroll", function() {
    let navBar = document.querySelector(".navBar");
    let principal = document.getElementById("principal");
    let logotipoGris = document.getElementById('imgLogotipoGris');
    let logotipoNegro = document.getElementById('imgLogotipoNegro');

    // Calcula la posición de principal
    let principalRect = principal.getBoundingClientRect();

    // Agrega o quita la clase según la posición de scroll
    if (window.scrollY > principalRect.bottom) {
        navBar.classList.add("fixed");
        logotipoGris.style.display = 'block';
        logotipoNegro.style.display = 'none';
    } else {
        navBar.classList.remove("fixed");
        logotipoNegro.style.display = 'block';
        logotipoGris.style.display = 'none';
    }
});
