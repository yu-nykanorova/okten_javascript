// Масиви та об'єкти
// 2) #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// 3) #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: "The Expanse: Leviathan Wakes",
    pageCount: 592,
    genre: "science fiction",
    authors: [
        {
            name: "Daniel Abraham",
            age: 55
        },
        {
            name: "Ty Franck",
            age: 49
        }
    ]
}

let book2 = {
    title: "The Whole-Brain Child",
    pageCount: 192,
    genre: "psychology",
    authors: [
        {
            name: "Daniel J. Siegel",
            age: 66
        },
        {
            name: "Tina Payne Bryson",
            age: 54
        }
    ]
}

let book3 = {
    title: "Good Omens",
    pageCount: 432,
    genre: "fantasy",
    authors: [
        {
            name: "Terry Pratchett",
            age: 66
        },
        {
            name: "Neil Gaiman",
            age: 64
        }
    ]
}
