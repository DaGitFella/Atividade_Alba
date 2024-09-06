const pagesHeader = document.querySelector('.pages');
const booksHeader = document.querySelector('.books');
const greenColumn = document.querySelectorAll('.green');
const blueColumn = document.querySelectorAll('.blue');
const myForm = document.getElementById('create-text-fields');
const myFormSelect = document.querySelector('#select');
const textFieldContainer = document.querySelector('.text-fields-container');

booksHeader.addEventListener('click', () => {
    blueColumn.forEach((item) => {
        item.classList.add('active');
        item.addEventListener('click', () => {
            blueColumn.forEach((item) => {
                item.classList.remove('active');
            })
        })
    })
})

pagesHeader.addEventListener('click', () => {
    greenColumn.forEach((item) => {
        item.classList.add('active');
        item.addEventListener('click', () => {
            greenColumn.forEach((item) => {
                item.classList.remove('active');
            })
        })
    })
})

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let textField = document.createElement('input');
    textField.type = 'text';
    textField.setAttribute('class', 'form-control');

    textFieldContainer.appendChild(textField);
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});