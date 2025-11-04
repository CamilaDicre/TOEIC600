import { units, words } from './data.js'

(function() {

// VARIABLES

let currentUnit = 0;

const secOverview = document.getElementById('overview');
const secOutline = document.getElementById('outline');
const secFlashcards = document.getElementById('flashcards');

const container = document.getElementById('flashcardsContainer');
const ui = document.getElementById('ui');

let cards = [];
let currentCard = 0;

// FUNCTIONS

function showOverview() {
    secOverview.style.display = 'block';
    secOutline.style.display = 'none';
    secFlashcards.style.display = 'none';
}

function showOutline() {
    secOverview.style.display = 'none'
    secOutline.style.display = 'block'
    secFlashcards.style.display = 'none'

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

function renderFlashcard() {
    container.replaceChildren();
    container.appendChild(cards[currentCard]);
    container.firstElementChild.textContent = cards[currentCard].getAttribute('word');
}

function showFlashcards() {
    secFlashcards.style.display = 'block';
    secOutline.style.display = 'none';
    secOverview.style.display = 'none';

    document.getElementById('unitNameFlashcards').textContent = units[currentUnit];

    // CREATE FLASHCARDS

    console.log(currentUnit);

    for (const word in Object.keys(words[currentUnit])) {
        let card = document.createElement('div')
        card.setAttribute('definition', words[currentUnit][Object.keys(words[currentUnit])[word]]);
        card.setAttribute('word', Object.keys(words[currentUnit])[word]);
        card.setAttribute('showing', false);
        card.setAttribute('learnt', false);
        card.addEventListener('click', () => {
            card.getAttribute('showing') == "false" ? card.setAttribute('showing', true) : card.setAttribute('showing', false);
            card.getAttribute('showing') == "false" ? card.textContent = card.getAttribute('word') : card.textContent = card.getAttribute('definition')
        });
        cards.push(card);
    };

    currentCard = 0;

    // RENDER THE FIRST FLASHCARD
    renderFlashcard();
    ui.style.display = 'block';
};

function endFlashcards() { // CLEANS THE FLASHCARD PLAYGROUND
    container.replaceChildren();
    cards = [];
}

// EVENT LISTENERS

document.getElementById('goToOverview').addEventListener('click', () => {
    showOverview();
    endFlashcards();
    return;
});

document.getElementById('startFlashcards').addEventListener('click', () => {
    showFlashcards();
});

document.getElementById('review').addEventListener('click', () => {
    currentCard += 1;
    if (currentCard >= cards.length) {
        currentCard = 0;
    };
    console.log(currentCard);
    renderFlashcard();
});

document.getElementById('learnt').addEventListener('click', () => {
    cards[currentCard].setAttribute('learnt', true);
    cards.splice(currentCard,1);

    if (cards.length <= 0) {
        endFlashcards();
        document.getElementById('flashcardsContainer').textContent = 'Congrats! You finished all the flashcards!';
        ui.style.display = 'none';
        return;
    };

    currentCard += 1;
    if (currentCard >= cards.length) {
        currentCard = 0;
    };

    console.log(currentCard);
    renderFlashcard();
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