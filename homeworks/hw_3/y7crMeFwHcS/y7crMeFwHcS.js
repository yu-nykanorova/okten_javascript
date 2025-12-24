// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let books = [
    "The Time Machine",
    "The War of the Worlds",
    "The Invisible Man",
    "The Island of Doctor Moreau",
    "The First Men in the Moon",
    "The Shape of Things to Come",
    "The Sleeper Awakes",
    "The Food of the Gods",
    "The History of Mr. Polly",
    "The World Set Free"
];

for (let i = 0; i < books.length; i++) {
    document.write(
        `<div>${books[i]}</div>`
    );
}