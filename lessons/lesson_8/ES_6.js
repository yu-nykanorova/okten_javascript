//ES6 features

//1) Короткий синтаксис поля об'єкта:

let name1 = "vasya";
let age1 = 31;
let user1 = {
    name1,
    age1
};

//2) Синтаксичний запис методу об'єкта:

let name2 = "vasya";
let age2 = 31;
let user2 = {
    name2,
    age2,
    method() {
        console.log("Hello");
    }
};

//3) Деструктуризація (можливість витягнути з об'єкта характеристику в окрему змінну для подальшого використання):

//3.1)

let user3 = {
    name3: "vasya",
    age3: 31,
    foo() {
        console.log("Hello");
    },
    wife: {
        name: "anna",
    }
}

let {name3} = user3;
console.log(name3); // vasya

//або переназвати:

let {name3: userName3, wife:{name: wifeName}} = user3;
console.log(userName3); // vasya
console.log(wifeName); // anna

//3.2)

function fun({name}) {
    console.log(name);
}

fun({id: 12, name: "vasya"}); // vasya

//3.3)

let numbers = [11, 22, 33];
let [a, b] = numbers;
console.log(a, b); // 11, 22
let [d, , e] = numbers;
console.log(d, e); // 11, 33

//3.4)

let users = [
    {name: "kolya", age: 31, status: false},
    {name: "olya", age: 35, status: true},
    {name: "sonya", age: 28, status: false},
    {name: "tonya", age: 41, status: true},
    {name: "danya", age: 30, status: false}
];

let [{name4, age4, status}, user4] = users;

//4) Оператор spread:

//4.1) Копія об'єкта:

let user5 = {
    name: "vasya",
    age: 31
};

let user5Copy = {...user5};

//4.2) Копія масиву:

let numbers2 = [11, 22, 33];
let numbers2Copy = [...numbers2];
