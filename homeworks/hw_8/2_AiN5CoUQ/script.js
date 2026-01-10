// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
//     Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function copyObject (object) {
    if (object === null || object === undefined || Number.isNaN(object) || typeof object !== "object") {
        return null;
    }

    const copy = JSON.parse(JSON.stringify(object));
    for (const key in object) {
        if (typeof object[key] === 'function') {
            copy[key] = object[key].bind(copy);
        }
    }
    return copy;
}

const obj = {
    title: "banana",
    price: 60,
    eatMe: function() {
        console.log("Eat me!");
    }
}

console.log(obj);
obj.eatMe();
const newObj = copyObject(obj);
console.log(obj === newObj);
newObj.price = 65;
newObj.eatMe = function() {
    console.log("Eat new one!");
}
console.log(newObj);
newObj.eatMe();

const wrongObj = copyObject("string");
console.log(wrongObj);