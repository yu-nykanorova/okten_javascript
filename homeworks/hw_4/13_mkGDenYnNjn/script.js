// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange (sumUAH, currencyValues, exchangeCurrency) {
    let result = 0;
    for (let currency of currencyValues) {
        if (exchangeCurrency === currency.name) {
            result = sumUAH / currency.value;
            break;
        }
    }
    return result.toFixed(2);
}

let currencies = [
    {name: "USD", value: 42.35},
    {name: "EUR", value: 49.33}
];

let exchangeResultUSD = exchange(25000, currencies, "USD");
let exchangeResultEUR = exchange(25000, currencies, "EUR");

console.log("Exchange result UAH to USD is:", exchangeResultUSD);
console.log("Exchange result UAH to EUR is:", exchangeResultEUR);
