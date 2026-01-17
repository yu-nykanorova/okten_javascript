// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const form = document.getElementById("formCreateTable");
const table = document.getElementById("table");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const rowsValue = +document.getElementById("rows").value;
    const columnsValue = +document.getElementById("cols").value;
    const dataValue = document.getElementById("data").value;
    table.textContent = "";
    if (rowsValue <= 0 || columnsValue <= 0) {
        alert("Amount should be greater than 0");
        return;
    } else if (dataValue.trim() === "") {
        alert("Fill in the data field");
        return;
    }
    for (let i = 0; i < rowsValue; i++) {
        const tableRow = document.createElement("tr");
        for (let j = 0; j < columnsValue; j++) {
            const tableCell = document.createElement("td");
            tableCell.textContent = dataValue;
            tableRow.appendChild(tableCell);
        }
        table.appendChild(tableRow);
    }
    form.reset();
});