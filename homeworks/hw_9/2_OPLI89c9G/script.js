// #OPLI89c9G
// – Є масив:

const menuItems = ["Main", "Products", "About us", "Contacts"];

// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const menuBox = document.getElementById("menu");
const menu = document.createElement("ul");
menuBox.appendChild(menu);

for (const menuItem of menuItems) {
    const menuLi = document.createElement("li");
    menuLi.innerText = menuItem;
    menu.appendChild(menuLi);
}