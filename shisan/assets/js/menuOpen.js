const hamburger = document.querySelector('.hamburger');
const headerMenu = document.querySelector('.header-menu');
const headerItems = document.querySelectorAll('.header-list__item');
const body = document.body;

function toggleMenu() {
    headerMenu.classList.toggle('active');

    if (headerMenu.classList.contains('active')) {
        body.classList.add('no-scroll');
        hamburger.classList.add('active');
    } else {
        body.classList.remove('no-scroll');
        hamburger.classList.remove('active');
    }
}

hamburger.addEventListener('click', toggleMenu);

headerItems.forEach(item => {
    item.addEventListener('click', () => {
        headerMenu.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});



