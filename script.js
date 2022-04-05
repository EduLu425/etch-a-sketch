var container = document.querySelector('.container');
const row = document.querySelector('.row');
const column = document.querySelector('.column');

const btn = document.querySelector('#btn');

let input = 100;

function getInput() {
    input = prompt('Enter a number up to 100 to change the size of the drawing board.');
    return input;
}


function createGrid(x) {
    for (i = 0; i < x; i++) {
        row.appendChild(column.cloneNode(true));
    }

    for (i = 0; i < x; i++) {
        container.appendChild(row.cloneNode(true));
    }
}

createGrid(input);

let columns = document.querySelectorAll('.column');


let rows = document.querySelectorAll('.row');

for (const element of columns) {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = 'black';
    })
}

function createCustomGrid() {
    columns.forEach(column => column.remove());
    rows.forEach(row => row.remove());
    getInput();
    createGrid(input);
    console.log(input);
    columns = document.querySelectorAll('.column');
    rows = document.querySelectorAll('.row');
    container = document.querySelector('.container');
    for (const element of columns) {
        element.addEventListener('mouseenter', ()=> {
            element.style.backgroundColor = 'black';
        })
    }
    
}

btn.addEventListener('click', () => {
    createCustomGrid();
});

function changeColor() {
    element.style.backgroundColor = 'black'
}


