const header = document.querySelector(".header-navbar");
const navbar = document.querySelector(".navbar-links");
const hamburger = document.querySelector(".navbar-hamburger");

let counter = 1;
hamburger.addEventListener("click", ()=> {
    counter++;
    if (counter % 2 == 0) {
        header.style.height = '30rem';
        navbar.style.display = 'block';
    } else {
        header.style.height = '6rem';
        navbar.style.display = 'none';
    }
})