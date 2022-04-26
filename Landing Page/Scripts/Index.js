
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const clickClose = document.querySelector('section')
const modalOpen = document.querySelector('.about__button');
const modalClose = document.querySelector('.exit-button');
var modalContainer = document.querySelector('.modal-container');

modalOpen.addEventListener('click', () => {
    document.body.classList.add('show');
})

modalClose.addEventListener('click', () => {
    document.body.classList.remove('show');
})


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

clickClose.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
})
