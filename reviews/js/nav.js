/* Copyright © by Muhammad Erag Goshih, iErTA */

const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");

function toggleMenu(){
    menu.classList.remove("menu-active");
    bars.classList.add("fa-active");
    times.classList.remove("fa-active");
}

burger.addEventListener("click", () => {
    bars.classList.toggle("fa-active");
    times.classList.toggle("fa-active");
    menu.classList.toggle("menu-active");
});

const contents = document.querySelectorAll(".content");
contents.forEach((content) => {
    content.addEventListener("click", toggleMenu);
});

menu.addEventListener("click", toggleMenu);

// Smooth scroll offset
const scroll = new SmoothScroll('a[href*="#"]', {
    header: 'nav',
    speed:50
});