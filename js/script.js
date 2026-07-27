const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");

const experienceButton = document.getElementById("experience-button");
const experienceSection = document.getElementById("experience");


menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const menuIsOpen = navLinks.classList.contains("active");

    menuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );
});


navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });
});


experienceButton.addEventListener("click", function () {
    const experienceIsHidden =
        experienceSection.hasAttribute("hidden");

    if (experienceIsHidden) {
        experienceSection.removeAttribute("hidden");
        experienceSection.classList.add("show");

        experienceButton.textContent = "Hide Experience";
        experienceButton.setAttribute("aria-expanded", "true");

        experienceSection.setAttribute("aria-hidden", "false");

        setTimeout(function () {
            experienceSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    } else {
        experienceSection.classList.remove("show");
        experienceSection.setAttribute("hidden", "");

        experienceButton.textContent = "Experience";
        experienceButton.setAttribute("aria-expanded", "false");

        experienceSection.setAttribute("aria-hidden", "true");
    }
});