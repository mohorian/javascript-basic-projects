// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const video = document.querySelector('.video-container');
const switchButton = document.querySelector('.switch-btn');
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
})

switchButton.addEventListener('click', () => {
    if (!switchButton.classList.contains('slide')) {
        switchButton.classList.add('slide');
        video.pause();
    } else {
        switchButton.classList.remove('slide');
        video.play();
    }
})