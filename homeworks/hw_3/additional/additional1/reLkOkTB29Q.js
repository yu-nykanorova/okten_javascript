// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// - знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

let books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        pagesCount: 281,
        authors: ["Harper Lee"],
        genres : ["Literary Fiction"]
    },
    {
        id: 2,
        title: "Good Omens",
        pagesCount: 432,
        authors: ["Terry Pratchett", "Neil Gaiman"],
        genres : ["Fantasy", "Humor"]
    },
    {
        id: 3,
        title: "1984",
        pagesCount: 328,
        authors: ["George Orwell"],
        genres : ["Dystopian", "Science Fiction", "Political Fiction"]
    },
    {
        id: 4,
        title: "The Hobbit",
        pagesCount: 310,
        authors: ["J.R.R. Tolkien"],
        genres : ["Fantasy"]
    },
    {
        id: 5,
        title: "The Martian",
        pagesCount: 369,
        authors: ["Andy Weir"],
        genres : ["Science Fiction", "Adventure"]
    },
    {
        id: 6,
        title: "The Art of War",
        pagesCount: 273,
        authors: ["Sun Tzu"],
        genres : ["Philosophy", "Military Strategy"]
    },
    {
        id: 7,
        title: "The Girl with the Dragon Tattoo",
        pagesCount: 465,
        authors: ["Stieg Larsson"],
        genres : ["Crime", "Thriller"]
    },
    {
        id: 8,
        title: "The Name of the Wind",
        pagesCount: 662,
        authors: ["Patrick Rothfuss"],
        genres : ["Fantasy", "Coming-of-Age"]
    },
    {
        id: 9,
        title: "The Cuckoo’s Calling",
        pagesCount: 464,
        authors: ["Robert Galbraith (J.K. Rowling)", "Charles Smith†"],
        genres : ["Mystery", "Crime Fiction"]
    },
    {
        id: 10,
        title: "Sapiens: A Brief History of Humankind",
        pagesCount: 498,
        authors: ["Yuval Noah Harari"],
        genres : ["Nonfiction", "History", "Anthropology"]
    }
];

const biggestBookBox = document.getElementById("biggest-book");
const multigenreBooksBox = document.getElementById("multigenre-book");
const longestTitleBookBox = document.getElementById("longest-title-book");
const twoAuthorsBooksBox = document.getElementById("two-authors-book");
const singleAuthorBooksBox = document.getElementById("single-author-book");

let maxPagesAmount = 0;
let maxPagesAmountBook = "";
let maxGenresAmount = 0;
let longestTitleBook = "";

// основний цикл перебору книжок для пошуку заданих умовою задачі значень
for (let book of books) {
    if (book.pagesCount > maxPagesAmount) {
        maxPagesAmount = book.pagesCount;
        maxPagesAmountBook = book.title;
    }
    if (book.genres.length > maxGenresAmount) {
        maxGenresAmount = book.genres.length;
    }
    if (book.title.length > longestTitleBook.length) {
        longestTitleBook = `"${book.title}"`;
    }
    if (book.authors.length === 2) {
        const twoAuthorsBook = document.createElement("p");
        twoAuthorsBook.innerHTML = `- "${book.title}" (Authors: ${book.authors.join(" & ")}.`;
        twoAuthorsBooksBox.append(twoAuthorsBook);
    }
    if (book.authors.length === 1) {
        const singleAuthorBook = document.createElement("p");
        singleAuthorBook.innerHTML = `- "${book.title}" (Author: ${book.authors[0]}.`;
        singleAuthorBooksBox.append(singleAuthorBook);
    }
}

// найбільша книжка
const biggestBook = document.createElement("p");
biggestBook.innerHTML = `The book "${maxPagesAmountBook}" has ${maxPagesAmount} pages`;
biggestBookBox.append(biggestBook);

// мультижанрові книжки

let count = 0;
for (let book of books) {
    if (book.genres.length === maxGenresAmount) {
        const multigenreBook = document.createElement("p");
        multigenreBook.innerHTML = `${count + 1}) "${book.title}" - ${book.genres.join(", ")}.`;
        multigenreBooksBox.append(multigenreBook);
        count++;
    }
}

// книжка з найдовшою назвою
longestTitleBookBox.append(longestTitleBook);



