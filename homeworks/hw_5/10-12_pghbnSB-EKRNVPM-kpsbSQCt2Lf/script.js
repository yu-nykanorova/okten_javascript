// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let min = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
let minResult = min([120, -2, 15, 0, -47, 90, 40]);
console.log(minResult);

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (array) => {
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

let swap = (array, index1, index2) => {
    if (index1 < array.length && index2 < array.length) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    } else return "This array hasn't such index";
}

let swapResult = swap([3, 76, 14, 198, 11], 1, 3);
console.log(swapResult);