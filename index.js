const navScroll = {
    aboutMe: '#about-me',
    portfolio: '#portfolio',
    contact: '#contact-info'
}

function aboutMeButton() {
    console.log('Hi');
    document.querySelector('nav #nav-about-me').addEventListener('click', function(e) {
        const id = e.currentTarget.id
        document.getElementById('about-me').scrollIntoView({
            behavior: 'smooth'
        })
    })
}

function portfolioButton() {
    console.log('Hi');
    document.querySelector('nav #nav-portfolio').addEventListener('click', function(e) {
        const id = e.currentTarget.id
        document.getElementById('portfolio').scrollIntoView({
            behavior: 'smooth'
        })
    })
}

function contactButton() {
    console.log('Hi');
    document.querySelector('nav #nav-contact').addEventListener('click', function(e) {
        const id = e.currentTarget.id
        document.getElementById('content-info').scrollIntoView({
            behavior: 'smooth'
        })
    })
}

(function () {
    aboutMeButton();
    portfolioButton();
    contactButton();
})()

