// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

const colors = ["red", "blue", "green", "yellow"];
const shapes = ["Circle", "Square", "Rectangle", "Triangle", "Oval"];
const items = [];
let counter = 0;

for (let i = 0; i < 5; i++) {
    for (const color of colors) {
        let box = "";
        switch (color) {
            case "red": box = "R";
                break;
            case "green": box = "G";
                break;
            case "blue": box = "B";
                break;
            case "yellow": box = "Y";
                break;
        }
        for (const shape of shapes) {
            items.push({
                id: counter + 1,
                color: color,
                shape: shape.toLowerCase(),
                box: box
            });
            counter++;
        }
    }
}
console.log(items);

let startFrom = 0;
const itemsAmount = 10;
const itemsBox = document.getElementById("itemsBox");
const buttonPrev = document.getElementById("buttonPrev");
const buttonNext = document.getElementById("buttonNext");

function createItemCard(item) {
    const itemCard = document.createElement("div");
    itemCard.classList.add("item-card");
    const id = document.createElement("p");
    const color = document.createElement("div");
    const shape = document.createElement("p");
    const box = document.createElement("p");

    let colorClass = "";

    switch (item.color) {
        case "red": colorClass = "red";
            break;
        case "green": colorClass = "green";
            break;
        case "blue": colorClass = "blue";
            break;
        case "yellow": colorClass = "yellow";
            break;
    }

    color.classList.add(colorClass);

    id.innerText = `ID: ${item.id}`;
    color.innerText = `Color: ${item.color}`;
    shape.innerText = `Shape: ${item.shape}`;
    box.innerText = `Box: "${item.box}"`;
    itemCard.append(id, color, shape, box);
    itemsBox.appendChild(itemCard);
}

function createItemsList(array, start, amount) {

    array.slice(start, start + amount).forEach(item => createItemCard(item));
}

function showPage() {
    if (startFrom < itemsAmount) {
        buttonPrev.style.display = "none";
    } else {
        buttonPrev.style.display = "block";
    }
    itemsBox.innerText = "";
    createItemsList(items, startFrom, itemsAmount);
    if (startFrom + itemsAmount >= items.length) {
        buttonNext.style.display = "none";
    } else {
        buttonNext.style.display = "block";
    }
}

showPage()

buttonNext.addEventListener("click", () => {
    startFrom += itemsAmount;
    showPage();
});

buttonPrev.addEventListener("click", () => {
    startFrom -= itemsAmount;
    showPage();
});







