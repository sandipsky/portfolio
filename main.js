let typed = new Typed(".text", {
    strings: ['Frontend Developer', 'Backend Developer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const darkModeToggle = document.querySelector(".dark-mode-toggle");

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
})

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
})