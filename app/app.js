import { units, words } from './data.js'

(function() {

// VARIABLES

let currentUnit = 0;

const secOverview = document.getElementById('overview');
const secOutline = document.getElementById('outline');
const secFlashcards = document.getElementById('flashcards');

let cards = [];

// FUNCTIONS

function showOverview() {
    secOverview.style.display = 'block';
    secOutline.style.display = 'none';
    secFlashcards.style.display = 'none';
}

function showOutline() {
    secOverview.style.display = 'none'
    secOutline.style.display = 'block'

    document.getElementById('unitNameOutline').textContent = units[currentUnit];
    document.getElementById('words').textContent = Object.keys(words[currentUnit]).length;

    document.getElementById('unitSummary').replaceChildren()

    for (const word in words[currentUnit]) {
        let item = document.createElement('li');
        let desc = document.createElement('span');
        desc.textContent = words[currentUnit][word];
        item.textContent = word;
        item.appendChild(desc)
        document.getElementById('unitSummary').appendChild(item);
    };
};

function showFlashcards() {
    secFlashcards.style.display = 'block';
    secOutline.style.display = 'none';
    secOverview.style.display = 'none';

    document.getElementById('unitNameFlashcards').textContent = units[currentUnit];

    // PREPARE FLASHCARDS

};

// EVENT LISTENERS

document.getElementById('goToOverview').addEventListener('click', () => {
    showOverview();
    return;
});

document.getElementById('startFlashcards').addEventListener('click', () => {
    showFlashcards();
});

// RENDER FUNCTION

function render() {
    for (const unit in units) {
        let section = document.createElement('section');
        section.setAttribute('unit', unit);
        let heading = document.createElement('h2');
        heading.textContent = units[unit];
        let button = document.createElement('button');
        button.textContent = 'Learn'

        button.addEventListener('click', () => {
            currentUnit = section.getAttribute('unit')
            console.log(currentUnit);
            showOutline()
        });

        let span = document.createElement('span');
        span.textContent = 'Words: ' + Object.keys(words[unit]).length

        section.appendChild(heading);
        section.appendChild(span)
        section.appendChild(button);

        document.getElementById('overview').appendChild(section);
    };
};


render();
showOverview();
})();