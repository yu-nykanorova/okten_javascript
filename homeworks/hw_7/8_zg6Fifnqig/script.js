// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let cinderellas = [
    new Cinderella("Elina", 17, 34),
    new Cinderella("Seraphina", 18, 35),
    new Cinderella("Mirabel", 16, 33.5),
    new Cinderella("Adelina", 19, 35),
    new Cinderella("Florina", 15, 34),
    new Cinderella("Liora", 17, 33),
    new Cinderella("Kassandra", 18, 35.5),
    new Cinderella("Izolda", 20, 37),
    new Cinderella("Violetta", 16, 36),
    new Cinderella("Estel", 17, 34.5),
];

const prince = new Prince("Irvin", 20, 33);

console.group("for...of loop result");
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe) {
        console.log(`Cinderella ${cinderella.name} should be with prince ${prince.name}`);
    }
}
console.groupEnd();

console.group("find() method result");
const cinderella = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
console.log(`Cinderella ${cinderella.name} should be with prince ${prince.name}`)
console.groupEnd();