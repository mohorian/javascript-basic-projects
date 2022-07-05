//using selectors inside the element
// traversing the dom

const buttons = document.querySelectorAll('.question-btn');
const articles = document.querySelectorAll('.question');

buttons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        const question = evt.currentTarget.parentElement.parentElement;
        articles.forEach((article) => {
            if (article !== question) {
                article.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});
