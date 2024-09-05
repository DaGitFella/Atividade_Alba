const pagesHeader = document.querySelector('.pages');
const booksHeader = document.querySelector('.books');
const greenColumn = document.querySelectorAll('.green');
const blueColumn = document.querySelectorAll('.blue');

booksHeader.addEventListener('click', () => {
    blueColumn.forEach((item) => {
        item.classList.toggle('active');
    })
})

pagesHeader.addEventListener('click', () => {
    greenColumn.forEach((item) => {
        item.classList.toggle('active');
    })
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});