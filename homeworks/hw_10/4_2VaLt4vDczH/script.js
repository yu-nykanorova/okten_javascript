// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const counterBlock = document.getElementById("counter-block");

window.addEventListener("load", () => {
    let counterAmount = +localStorage.getItem("counter") || 0;

    counterAmount += 1;

    localStorage.setItem("counter", String(counterAmount));
    counterBlock.textContent = String(counterAmount);
});