import {words} from './app/data.js'

const CAROUSEL = document.getElementById('carousel');

let WORD_BANK = [];
let currentWord = 0;


function getWords(object) {
    for (const unit in object) {
        WORD_BANK = WORD_BANK.concat(Object.keys(object[unit]));
    }
    for (const value in WORD_BANK) {
        WORD_BANK[value] = capitalizeString(WORD_BANK[value]);
    }
}

function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

getWords(words);


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