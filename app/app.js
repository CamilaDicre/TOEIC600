import { units, words } from './data.js'

(function() {

function render() {
    for (const unit in units) {
        let section = document.createElement('section');
        section.setAttribute('unit', unit);
        let heading = document.createElement('h2');
        heading.textContent = units[unit];
        let button = document.createElement('button');
        button.textContent = 'Learn'
        let span = document.createElement('span');
        span.textContent = 'Words: ' + Object.keys(words[unit]).length

        section.appendChild(heading);
        section.appendChild(span)
        section.appendChild(button);

        document.querySelector('main').appendChild(section);
    };
}


render()
})();