// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectArea = (sideA, sideB) => sideA * sideB;

console.log(`Rectangle area is ${rectArea(4, 7)}`);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = Math.PI.toFixed(2);

let circleArea = (radius) => PI * Math.pow(radius, 2);

console.log(`Circle area is ${circleArea(5)}`);

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinderArea = (height, radius) => 2 * PI * radius * (radius + height);

console.log(`Cylinder area is ${cylinderArea(4, 5)}`);