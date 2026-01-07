// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client
//

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(1, "John", "Malcovich", "malcovich@post.com", "+123456789012", [{title: "banana", price: 5}, {title: "tomato", price: 8}, {title: "tea", price: 10}]),
    new Client(2, "Allan", "Scopus", "scopus@post.com", "+123456789123", [{title: "cabbage", price: 2}, {title: "tomato", price: 8}, {title: "cucumber", price: 9}, {title: "cream", price: 4}]),
    new Client(6, "Sam", "Cheek", "cheek@post.com", "+123456789567", [{title: "coffee", price: 11}, {title: "garlic", price: 4}]),
    new Client(7, "Timur", "Weller", "weller@post.com", "+123456789678", [{title: "mango", price: 7}, {title: "carrot", price: 3}, {title: "banana", price: 5}]),
    new Client(8, "Lara", "Samo", "samo_lara@post.com", "+123456789789", [{title: "cheese", price: 10}]),
    new Client(9, "Vika", "Lucky", "lucky@post.com", "+123456789890", [{title: "tea", price: 10}, {title: "garlic", price: 4}, {title: "cream", price: 4}]),
    new Client(3, "Lena", "Kot", "kot_lena@post.com", "+123456789234", [{title: "banana", price: 5}, {title: "meat", price: 12}]),
    new Client(4, "Lex", "Stolk", "stolk@post.com", "+123456789345", [{title: "cheese", price: 10}, {title: "carrot", price: 3}, {title: "cucumber", price: 9}]),
    new Client(5, "Mila", "Lendy", "m_lendy@post.com", "+123456789456", [{title: "coffee", price: 11}, {title: "mango", price: 7}]),
    new Client(10, "Manu", "Plant", "plant@post.com", "+123456789901", [{title: "meat", price: 12}, {title: "tomato", price: 8}, {title: "tea", price: 10}])
];

// #8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length);

console.log(clients);
