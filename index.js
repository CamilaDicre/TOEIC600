const CAROUSEL = document.getElementById('carousel');

const WORD_BANK = ['Commensurate', 'Tax', 'Account', 'Balance', 'Overdraft', 'Book', 'Return'];
let currentWord = 0;

function startTimer() {
    let timer = setInterval(() => {
        currentWord += 1;
        if (currentWord >= WORD_BANK.length) {
            currentWord = 0;
        }
        CAROUSEL.textContent = WORD_BANK[currentWord];
    }, 3000)
}

CAROUSEL.textContent = WORD_BANK[currentWord];
startTimer();