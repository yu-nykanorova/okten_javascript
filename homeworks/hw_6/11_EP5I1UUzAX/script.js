// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
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

const cardsOrderedBySuit = cards.reduce((acc, card) => {
    switch (card.cardSuit) {
        case "spade": acc.spades.push(card);
        break;
        case "clubs": acc.clubs.push(card);
        break;
        case "heart": acc.hearts.push(card);
        break;
        case "diamond": acc.diamonds.push(card);
        break;
    }
    return acc;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(cardsOrderedBySuit);


