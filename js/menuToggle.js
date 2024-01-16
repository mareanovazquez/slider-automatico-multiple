const menutoggle = document.getElementById("toggle");
const showMenu = document.getElementById("containerNavBar");
const menuItems = document.querySelectorAll(".itemMenuCelu");
const menuItemsRRSS = document.querySelectorAll(".itemMenuRRSS")

function deployMenu() {
    menutoggle.classList.toggle("active");
    showMenu.classList.toggle("showMenu");
}

function closeMenu() {
    menutoggle.classList.remove("active");
    showMenu.classList.remove("showMenu");
}

menutoggle.addEventListener("click", deployMenu);

// Agrega un controlador de eventos a cada elemento del menú para cerrar el menú cuando se hace clic
menuItems.forEach(item => {
    item.addEventListener("click", closeMenu);
});

menuItemsRRSS.forEach(item => {
    item.addEventListener("click", closeMenu);
});
