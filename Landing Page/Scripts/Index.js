
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const clickClose = document.querySelector('section')
const modalOpen = document.querySelector('.about__button');
const openSpace = document.querySelector('.modal-container');
const closeButton = document.querySelector('.exit-button');
const linkClose = document.querySelector('.project-link');
const formOpen = document.querySelector('.form-popup');
const formOpenSpace = document.querySelector('.form-container');
const formExit = document.querySelector('.form-exit-button');



function alertMsg() {
    alert("Successful!");
}

formOpen.addEventListener('click', () => {
    document.body.classList.add('show-form');
})

modalOpen.addEventListener('click', () => {
    document.body.classList.add('show');
})

window.onclick = function (event) {
    if (event.target == openSpace || event.target == closeButton || event.target == linkClose) {
        document.body.classList.remove('show');
    }
    if (event.target == formOpenSpace || event.target == formExit) {
        document.body.classList.remove('show-form');
    }
}

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
