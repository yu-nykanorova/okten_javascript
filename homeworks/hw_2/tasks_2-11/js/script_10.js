// 10) #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = 12;
let num2 = 11;
let max;

if (num1 !== num2) {
    num1 > num2 ? max = num1 : max = num2;
    console.log(max);
} else {
    console.log("Numbers are equal");
}