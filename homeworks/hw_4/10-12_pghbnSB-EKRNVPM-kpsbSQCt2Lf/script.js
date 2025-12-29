// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function min (array) {
    let min = 0;
    for (let item of array) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}
let minResult = min([2, 15, -6, 47, 90, -40]);
console.log(minResult);

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum (array) {
    let sum = 0;
    for (let item of array) {
        sum += item;
    }
    return sum;
}
let sumResult = sum([2, 15, -6, 40]);
console.log(sumResult);

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap (array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

let swapResult = swap([3, 76, 14, 198], 2, 3);
console.log(swapResult);