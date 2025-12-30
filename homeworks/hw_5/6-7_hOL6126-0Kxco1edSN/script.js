// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

let createList = (text) => {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`);
}
createList("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

let createMultiList = (text, n) => {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createMultiList("Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 10);