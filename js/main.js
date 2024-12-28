AOS.init({
    duration: 700,
    mirror: true,
});

(function () {
    emailjs.init({
        publicKey: "t4TgoCFhm-FEeLQgt",
    });
})();

const handleForm = async (e) => {
    try {
        const templateParams = {
            name: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };
        await emailjs.send('service_vf9vosn', 'template_kqf2lgt', templateParams);
        alert('email sent!');
        document.getElementById("contact-form").reset();
    } catch (error) {
        console.error(error);
        alert('Failed to send email');
    }
};

const mobileMenu = document.getElementById('mobile-menu');
const navClose = document.getElementById('nav-close');
const sideMenu = document.querySelector('.side-menu');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');

mobileMenu.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

navClose.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

