const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

let counter = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        const styles = evt.currentTarget.classList;
        if (styles.contains('decrease')) {
            counter--;
        } else if (styles.contains('increase')) {
            counter++;
        } else {
            counter = 0;
        }
        if (counter < 0) {
            value.style.color = 'red';
        } else if (counter > 0) {
            value.style.color = 'green';
        } else if (counter === 0) {
            value.style.color = 'rgb(16, 42, 66)';
        }
        value.textContent = counter;
    });
});
