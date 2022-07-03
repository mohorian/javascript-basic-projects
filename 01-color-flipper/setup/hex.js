const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomColor(array) {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += array[Math.floor(Math.random() * array.length)]
    }
    return hexColor
}

button.addEventListener('click', () => {
    const randomColor = getRandomColor(hex);
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})