const hamburger = document.querySelector(".header__hamburger");
const navLinks = document.querySelector(".header__nav--links");
const links = document.querySelectorAll(".header__nav--links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});
