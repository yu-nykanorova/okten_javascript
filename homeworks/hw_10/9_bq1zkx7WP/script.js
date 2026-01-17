// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const counterBox = document.querySelector("#counter");

window.addEventListener("load", () => {
    let counterValue = +localStorage.getItem("count") || 100;
    const savedTime = +localStorage.getItem("time");
    const currentTime = Date.now();

    if (savedTime) {
        const timeInterval = (currentTime - savedTime) / 1000;

        if (timeInterval >= 10) {
            counterValue += 10;
            localStorage.setItem("count", counterValue);
        }
    }

    counterBox.textContent = `${counterValue} UAH`;
    localStorage.setItem("time", currentTime);
});