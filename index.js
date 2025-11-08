const CAROUSEL = document.getElementById('carousel');

const WORD_BANK = ['Commensurate', 'Tax', 'Account', 'Balance', 'Overdraft', 'Book', 'Return'];
let currentWord = 0;

CAROUSEL.textContent = WORD_BANK[currentWord];
CAROUSEL.style.animationName = 'fadeOut';

CAROUSEL.addEventListener('animationend', (event) => {
    if (CAROUSEL.style.animationName == 'fadeOut') {
        currentWord += 1;
        if (currentWord >= WORD_BANK.length) {
            currentWord = 0;
        }
        CAROUSEL.textContent = WORD_BANK[currentWord];
        CAROUSEL.style.animationName = 'fadeIn';
    } else {
        CAROUSEL.style.animationName = 'fadeOut';
    }
});