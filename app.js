console.log('worked');

// form->input-> button

const rootEl = document.getElementById('root')

const links = [];

const addFormEl = document.createElement('form');
addFormEl.innerHTML = `
<input data-id="link">
<button>Ok</button>
`;
const linkEl = addFormEl.querySelector('[data-id=link]');

addFormEl.onsubmit = function (ev) {
    console.log(ev);
    console.log('submit');
    ev.preventDefault();
    console.dir(linkEl);
    const value = linkEl.value;
    links.push({
        value,
        done: false,
    });
    console.log(links)
    linkEl.value = '';
    console.log(linksEl, links);
    rebuildList(linksEl, links);
};
// ul -> unordered list

const linksEl = document.createElement('ul');

rootEl.appendChild(addFormEl);

function rebuildList(cotainerEl, items) {
    containerEl.innerHTML = ''; // вычищаем предыдушее
    for (const item of items) {
        const liEl = document.createElement('li');
        liEl.innerHTML = `
        <a href="${item.value}">Ссылка</a>
        <button data-action="Up">Up</button>
        <button data-action="Down">Down</button>
        <button data-action="Remove">Remove</button>
        `;

    }

    linkEl.oncklik = function(){
        item.done = !item.done;
    }
    containerEl.appendChild(liEl);

}
}