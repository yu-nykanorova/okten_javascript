// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectArea (a, b) {
    return a * b;
}

let rectangle = `Rectangle area is ${rectArea(5, 7)}`;
console.log(rectangle);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = Math.PI.toFixed(2);

function circleArea (r) {
    return PI * Math.pow(r, 2);
}
let circle = `Circle area is ${circleArea(4)}`;
console.log(circle);

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea (h, r) {
    return 2 * PI * r * (r + h);
}
let cylinder = `Cylinder area is ${cylinderArea(4, 4)}`;
console.log(cylinder);