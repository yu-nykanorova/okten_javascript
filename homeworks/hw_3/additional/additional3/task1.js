// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arr1 = [];

for (let i = 0; i < 50; i++) {
    arr1[i] = i * 2;
}
for (let i = 0; i < 50; i++) {
    arr1[arr1.length] = i * 2 + 1;
}

for (let i = 0; i < 20; i++) {
    arr1[arr1.length] = Math.floor(Math.random() * 100);
}

for (let i = 0; i < 20; i++) {
    arr1[arr1.length] = Math.floor(Math.random() * (732 - 8 + 1) + 8);
}

console.log(arr1);


// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 2; i < arr1.length; i+=3) {
//     console.log(arr1[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 2; i < arr1.length; i+=3) {
//     if (arr1[i] % 2 === 0) {
//         console.log(arr1[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr2 = [];
// for (let i = 2; i < arr1.length; i+=3) {
//     if (arr1[i] % 2 === 0) {
//         arr2[arr2.length] = arr1[i];
//     }
// }
// console.log(arr2);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i + 1] % 2 === 0) {
//         console.log(arr1[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let prices = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < prices.length; i++) {
//     sum += prices[i];
// }
// let average = sum / prices.length;
// console.log(average.toFixed(2));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arrRand = [];
// let arrMulti = [];
//
// for (let i = 0; i < 20; i++) {
//     arrRand[i] = Math.floor(Math.random() * 100 + 1);
// }
// console.log(arrRand);
// for (let i = 0; i < arrRand.length; i++) {
//     arrMulti[i] = arrRand[i] * 5;
// }
// console.log(arrMulti);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arrMix = ["blue", 58, false, 4, 17, "orange", true, [], 96];
// let arrNum = [];
// for (let i = 0; i < arrMix.length; i++) {
//     if (typeof arrMix[i] === "number") {
//         arrNum[arrNum.length] = arrMix[i];
//     }
// }
// console.log(arrNum);

