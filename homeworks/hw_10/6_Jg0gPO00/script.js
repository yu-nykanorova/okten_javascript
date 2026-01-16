// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input = document.getElementById("weightKg");
const output = document.getElementById("output");

input.addEventListener("input", () => {
    const result = input.value*2.20462;
    output.textContent = result.toFixed(2);
})