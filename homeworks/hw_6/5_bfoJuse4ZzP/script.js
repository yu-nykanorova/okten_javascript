// #bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

function stringToArray (str) {
    if (str) {
        const arr = str.split(" ");
        return arr;
    }
    return [""];
}

let str = "Ревуть воли як ясла повні";

console.log(stringToArray(str));