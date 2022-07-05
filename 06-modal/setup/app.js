// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openButton = document.querySelector('.modal-btn');
const closeButton = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');

openButton.addEventListener('click', () => {
    modal.classList.add('open-modal');
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('open-modal');
});