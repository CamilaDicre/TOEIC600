import { units, words } from './data.js'

(function() {

let currentUnit = 0;

const secOverview = document.getElementById('overview');
const secOutline = document.getElementById('outline');

function showOverview() {
    secOverview.style.display = 'block'
    secOutline.style.display = 'none'
}

function showOutline() {
    secOverview.style.display = 'none'
    secOutline.style.display = 'block'
};

document.getElementById('goToOverview').addEventListener('click', () => {
    showOverview();
    return;
});

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


render()
})();