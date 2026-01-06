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

const cardsSuit = ["spade", "clubs", "heart", "diamond"];
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

//  – знайти піковий туз
const spadeAce = cards.find(card => card.cardSuit === "spade" && card.value === "ace");
console.log(spadeAce);

//  – знайти всі шістки
const sixes = cards.filter(card => card.value === "6");
console.log(sixes);

//  – знайти всі червоні карти
const redCards = cards.filter(card => card.color === "red");
console.log(redCards);

//  – знайти всі буби
const diamondCards = cards.filter(card => card.cardSuit === "diamond");
console.log(diamondCards);

//  – знайти всі трефи від 9 та більше
const highValues = cardsValue.slice(3);
const clubsHighValues = cards.filter(card => card.cardSuit === "clubs" && highValues.includes(card.value));
console.log(clubsHighValues);
