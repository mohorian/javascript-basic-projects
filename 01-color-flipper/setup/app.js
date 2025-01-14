const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomColor(array) {
    return array[Math.floor(Math.random() * array.length)]
}

button.addEventListener('click', () => {
    const randomColor = getRandomColor(colors);
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})
