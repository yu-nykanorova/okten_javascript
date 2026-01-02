// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
//
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

const cardsSuit = ["spade", "clubs", "heart", "diamond",];
const cardsValue = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
const cards = [];

for (let suit of cardsSuit) {
    for (let value of cardsValue) {
        const card = {
            cardSuit: suit,
            value: value,
            color: (suit === "spade" || suit === "clubs") ? "black" : "red",
        };
        cards.push(card);
    }
}

console.log(cards);
