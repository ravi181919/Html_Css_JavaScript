// const space = document.querySelector('.space')
// const printBtn = document.querySelector('.Print')

// printBtn.addEventListener('click', () => {
//     const cont = document.querySelector('.inputval').value
//     for (let i = 1; i <= 10; i++) {
//        const table = (cont * i).toString();
//        space.append(table)
//     }
// })


const space = document.querySelector('.space');
const printBtn = document.querySelector('.Print');

printBtn.addEventListener('click', () => {
    const cont = parseInt(document.querySelector('.inputval').value); // Ensure valid integer

    const table = document.createElement('table');
    table.classList.add('multiplication-table'); // Add class for styling

    const thead = document.createElement('thead');
    const theadRow = document.createElement('tr');

    // Create column headers
    const header1 = document.createElement('th');
    header1.textContent = 'Number';
    theadRow.appendChild(header1);

    const header2 = document.createElement('th');
    header2.textContent = 'Multiplication';
    theadRow.appendChild(header2);

    thead.appendChild(theadRow);
    table.appendChild(thead);

    for (let i = 1; i <= 10; i++) {
        const tableRow = document.createElement('tr');

        const cell1 = document.createElement('td');
        cell1.textContent = i;
        tableRow.appendChild(cell1);

        const cell2 = document.createElement('td');
        cell2.textContent = (cont * i).toString();
        tableRow.appendChild(cell2);

        table.appendChild(tableRow);
    }

    space.innerHTML = ''; // Clear existing content before adding new table
    space.appendChild(table);
});
