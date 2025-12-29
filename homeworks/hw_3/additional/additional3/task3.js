// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arrTen = [];
// let count = 0;
// while (arrTen.length < 10) {
//     arrTen[arrTen.length] = Math.floor(Math.random() * 100 + 1);
//     count++;
// }
// console.log(arrTen);
//
// for (let i = 0; i < arrTen.length; i++) {
//     if (arrTen[i] % 2 === 0) {
//         console.log(arrTen[i]);
//     }
// }
//
// let arrTenNew = [];
//
// for (let i = 0; i < arrTen.length; i++) {
//     arrTenNew[i] = arrTen[i];
// }
// console.log(arrTenNew);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arrStrings = [ 'a', 'b', 'c'];
// let wordFor = "";
// for (let i = 0; i < arrStrings.length; i++) {
//     wordFor += arrStrings[i];
// }
// console.log(`${wordFor} is ${typeof wordFor} (for loop)`);
//
// let wordWhile = "";
// let c = 0;
// while (c < arrStrings.length) {
//     wordWhile += arrStrings[c];
//     c++;
// }
// console.log(`${wordWhile} is ${typeof wordWhile} (while loop)`);
//
// let wordForOf = "";
// for (let letter of arrStrings) {
//     wordForOf += letter;
// }
// console.log(`${wordForOf} is ${typeof wordForOf} (for of loop)`);
