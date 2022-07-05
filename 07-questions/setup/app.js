//using selectors inside the element

const articles = document.querySelectorAll('.question');


articles.forEach((article) => {
    const button = article.querySelector('.question-btn');
    button.addEventListener('click', () => {
        article.classList.toggle('show-text');
        articles.forEach((question) => {
            if (question !== article) {
                question.classList.remove('show-text');
            }
        });
    })
})

// traversing the dom

// const buttons = document.querySelectorAll('.question-btn');
// const articles = document.querySelectorAll('.question');

// buttons.forEach((button) => {
//     button.addEventListener('click', (evt) => {
//         const question = evt.currentTarget.parentElement.parentElement;
//         articles.forEach((article) => {
//             if (article !== question) {
//                 article.classList.remove('show-text');
//             }
//         });
//         question.classList.toggle('show-text');
//     });
// });
