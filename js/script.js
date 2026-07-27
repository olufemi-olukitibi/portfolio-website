const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});