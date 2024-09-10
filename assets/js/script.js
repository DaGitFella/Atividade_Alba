// 1. Element Selection
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
const navItems = document.querySelectorAll('.nav-item');
const questionOne = document.querySelector('#question-1');
const questionTwo = document.querySelector('#question-2');
const questionThree = document.querySelector('#question-3');

// Nav Script
navItems.forEach((navItem,index) => {
    navItem.addEventListener('click', () => {
        switch (index) {
            case 0:
                questionOne.scrollIntoView({behavior: 'smooth'});
                break;
            case 1:
                questionTwo.scrollIntoView({behavior: 'smooth'});
                break;
            case 2:
                questionThree.scrollIntoView({behavior: 'smooth'});
                break;
            case 3:
                let mainSections = document.querySelectorAll('main section');
                let surprise = document.querySelector('.surprise');

                mainSections.forEach((mainSection) => {
                    mainSection.classList.toggle('opacity-0');
                });

                const surpriseSrc = surprise.src.split('/').pop();

                if (surpriseSrc === 'mistar_thulho.jpeg') {
                    surprise.src = '';
                } else {
                    surprise.src = 'assets/img/mistar_thulho.jpeg';
                    surprise.scrollIntoView({behavior: 'smooth'});
                }
                break;
        }
    })
})

// Question 1
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

// Question 2
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    for(let i = 0; i < Number(myFormSelect.value); i++) {
    let textField = document.createElement('input');
    textField.type = 'text';
    textField.classList.add('form-control', 'mt-5');

    textFieldContainer.appendChild(textField);

    }
})

// Question 3
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

// Star Creation Function for Parallax Effect
const starField = document.querySelector('.star-field');

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;

    const duration = Math.random() * 1 + 0.5;
    star.style.animation = `twinkle ${duration}s infinite`;

    starField.appendChild(star);

    star.addEventListener('animationend', () => {
        star.remove();
    });
}

for (let i = 0; i < 100; i++) { // Adjust the number of stars
    createStar();
}

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    starField.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Adjust parallax effect
});

// Tooltip Initialization (Bootstrap)
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

