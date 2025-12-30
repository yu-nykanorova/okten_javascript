// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let seasons = ["spring", "summer", "autumn", "winter"];

let showArray = (array) => {
    for (let item of array) {
        console.log(item);
    }
}
showArray(seasons);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

let createParag = (text) => document.write(`<p>${text}</p>`);

createParag("Hello, my dear friend! How are you?");