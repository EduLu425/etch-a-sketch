const container = document.querySelector('.container');
const row = document.querySelector('.row');
const column = document.querySelector('.column');

function createGrid() {
    for (i = 0; i < 16; i++) {
        row.appendChild(column.cloneNode(true));
}

    for (i = 0; i < 15; i++) {
        container.appendChild(row.cloneNode(true));
    }


}

createGrid();

const newColumns = document.querySelectorAll('.column');

for (const element of newColumns) {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = 'black';
    })
}