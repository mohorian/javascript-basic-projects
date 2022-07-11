// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();
// ********** close links ************
const toggleButton = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');

toggleButton.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links');
});
// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const navbarHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navbarHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    };

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});
// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');
const fixedNavbarHeight = navbar.getBoundingClientRect().height;

scrollLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
        evt.preventDefault();
        linksContainer.classList.remove('show-links');
        const id = link.getAttribute('href').slice(1);
        const section = document.getElementById(id);
        let position = section.offsetTop;
        if (!navbar.classList.contains('fixed-nav')) {
            position += - navbar.getBoundingClientRect().height - fixedNavbarHeight;
        } else {
            position += - fixedNavbarHeight;
        };
        window.scrollTo(0, position);
    })
})

