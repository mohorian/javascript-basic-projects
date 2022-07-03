const value = document.getElementById('value');
const decreaseButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset');
const increaseButton = document.querySelector('.increase');

let counter = 0;

function changeColor(counter) {
    if (counter < 0) {
        color = 'red';
    } else if (counter > 0) {
        color = 'green';
    } else if (counter === 0) {
        color = 'rgb(16, 42, 66)';
    }
    return color
}

decreaseButton.addEventListener('click', () => {
    counter += -1
    value.textContent = counter;
    value.style.color = changeColor(counter);
})

resetButton.addEventListener('click', () => {
    counter = 0
    value.textContent = counter;
    value.style.color = changeColor(counter);
})

increaseButton.addEventListener('click', () => {
    counter += 1
    value.textContent = counter;
    value.style.color = changeColor(counter);
})