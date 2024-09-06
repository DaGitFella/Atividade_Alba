const pagesHeader = document.querySelector('.pages');
const booksHeader = document.querySelector('.books');
const greenColumn = document.querySelectorAll('.green');
const blueColumn = document.querySelectorAll('.blue');
const myForm = document.getElementById('create-text-fields');
const myFormSelect = document.querySelector('#select');
const textFieldContainer = document.querySelector('.text-fields-container');
const zoomIn = document.querySelector('.bi-zoom-in');
const zoomOut = document.querySelector('.bi-zoom-out');
const images = document.querySelectorAll('.img-container img');

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
    for(let i = 0; i < Number(myFormSelect.value); i++) {
    let textField = document.createElement('input');
    textField.type = 'text';
    textField.classList.add('form-control', 'mt-5');

    textFieldContainer.appendChild(textField);

    }
})

zoomIn.addEventListener('click', () => {
    images.forEach(image => {
        image.style.transform = 'scale(1.5)';
    })
})

zoomOut.addEventListener('click', () => {
    images.forEach(image => {
        image.style.transform = 'scale(1)';
    })
})



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

