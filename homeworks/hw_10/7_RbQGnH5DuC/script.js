// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

const products = [{name: "banana", price: 60}, {name: "cucumber", price: 80}, {name: "cabbage", price: 30}];

const users = [{id: 111, name: "Tom", city: "Denver"}, {id: 121, name: "Eva", city: "Paris"}, {id: 133, name: "Leam", city: "Ottawa"}];

if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
}
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

function addToLocalStorage(arrayName, objToAdd) {
    let arr = JSON.parse(localStorage.getItem(arrayName)) || [];

    if (typeof objToAdd === "object") {
        arr.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

const newProduct = {name: "tea", price: 120};
const newUser = {id: 313, name: "Ken", city: "Zurich"};
const newFlower = {name: "rose", season: "summer"};

addToLocalStorage("products", newProduct);
addToLocalStorage("users", newUser);