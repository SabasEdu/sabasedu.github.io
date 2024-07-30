const contact_btn = document.querySelector('.contact-btn');
const close_btn = document.querySelector('.close-btn');
const contact_container = document.querySelector('.contact-container');
contact_btn.addEventListener('click', () => {
    contact_container.classList.toggle('visible')
});
close_btn.addEventListener('click', () => {
    contact_container.classList.remove('visible')
});