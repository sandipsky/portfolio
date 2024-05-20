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
const darkModeIcon = document.querySelector(".dark-mode-icon");


menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
})

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeIcon.classList.toggle('bx-sun');
    darkModeIcon.classList.toggle('bx-moon'); 
})

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
