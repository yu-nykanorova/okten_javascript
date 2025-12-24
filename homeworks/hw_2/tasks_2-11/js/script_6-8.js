// 6) #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if (x !== 0) {
    console.log("Right!");
} else {
    console.log("Wrong!");
}

// 7) #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = 17;
if (time >= 0 && time <= 14) {
    console.log("First quarter");
} else if (time >= 15 && time <= 29) {
    console.log("Second quarter");
} else if (time >= 30 && time <= 44) {
    console.log("Third quarter");
} else if (time >= 45 && time <= 59) {
    console.log("Fourth quarter");
} else {
    console.log("Wrong value!");
}

// 8) #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 21;
if (day >= 1 && day <= 10) {
    console.log("First decade");
} else if (day >= 11 && day <= 20) {
    console.log("Second decade");
} else if (day >= 21 && day <= 31) {
    console.log("Third decade");
} else {
    console.log("Wrong value!");
}

