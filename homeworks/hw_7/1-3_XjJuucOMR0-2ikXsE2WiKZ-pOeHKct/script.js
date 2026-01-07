// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1, "John", "Malcovich", "malcovich@post.com", "+123456789012"),
    new User(2, "Allan", "Scopus", "scopus@post.com", "+123456789123"),
    new User(6, "Sam", "Cheek", "cheek@post.com", "+123456789567"),
    new User(7, "Timur", "Weller", "weller@post.com", "+123456789678"),
    new User(8, "Lara", "Samo", "samo_lara@post.com", "+123456789789"),
    new User(9, "Vika", "Lucky", "lucky@post.com", "+123456789890"),
    new User(3, "Lena", "Kot", "kot_lena@post.com", "+123456789234"),
    new User(4, "Lex", "Stolk", "stolk@post.com", "+123456789345"),
    new User(5, "Mila", "Lendy", "m_lendy@post.com", "+123456789456"),
    new User(10, "Manu", "Plant", "plant@post.com", "+123456789901")
];

console.log(users);

// #2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

const usersEvenId = users.filter(user => user.id % 2 === 0);
console.log(usersEvenId);

// #pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.sort((a, b) => a.id - b.id);
console.log(users);




