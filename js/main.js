// main.js — nav, scroll reveal, contact form
// no libraries, just the platform

// --- header + mobile drawer ---

const header = document.querySelector('.site-header');
const menuBtn = document.getElementById('menu-btn');
const drawer = document.getElementById('drawer');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
});

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    drawer.classList.toggle('open');
});

// close the drawer when a link is tapped
drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        drawer.classList.remove('open');
    });
});

// --- theme toggle (dark by default; the boot script in index.html sets it early) ---

const themeBtn = document.getElementById('theme-btn');

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeBtn.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {
        // private mode / storage blocked — the toggle still works for this visit
    }
}

applyTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

themeBtn.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

// --- scroll animations (AOS) ---

AOS.init({
    duration: 700,
    offset: 80,
    once: true,
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
});

// --- contact form (emailjs) ---

emailjs.init({ publicKey: 't4TgoCFhm-FEeLQgt' });

const form = document.getElementById('contact-form');
const sendBtn = document.getElementById('send-btn');
const note = document.getElementById('form-note');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending…';
    note.textContent = '';

    try {
        await emailjs.send('service_vf9vosn', 'template_kqf2lgt', {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        });
        note.textContent = 'Thanks! I\'ll get back to you soon.';
        form.reset();
    } catch (err) {
        console.error(err);
        note.textContent = 'Something went wrong — mail me directly instead?';
    } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send message';
    }
});

// --- local time in the footer, because why not ---

const timeEl = document.getElementById('local-time');

function tick() {
    timeEl.textContent = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
    });
}

tick();
setInterval(tick, 30000);
