
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
const formSubmit = document.querySelector('.submit-button');
const readMore = document.querySelector(".expand-btn");



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
    if (event.target == formSubmit) {
        document.body.classList.add('form-shut');
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

//Preventing Fomrsubmit redirection after submit form
var form = document.querySelector(".my-form");

async function handleSubmit(event) {
    event.preventDefault();   
    var status = document.querySelector(".status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.body.classList.add('success');
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    document.body.classList.add('error');
                    status.innerHTML = "Oops! There was a problem"
                }
            })
        }
    }).catch(error => {
        document.body.classList.add('error');
        status.innerHTML = "Oops! There was a problem"
    });
}
form.addEventListener("submit", handleSubmit)

//READ MORE portfolio description button feature


