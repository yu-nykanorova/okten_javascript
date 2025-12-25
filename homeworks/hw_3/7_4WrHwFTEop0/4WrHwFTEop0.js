// - є масив. за допомогою циклу вивести:
//     – користувачів зі статусом true
//     – користувачів зі статусом false
//     – користувачів, які старші за 30 років

let users = [
    {name: "vasya", age: 31, status: false},
    {name: "petya", age: 30, status: true},
    {name: "kolya", age: 29, status: true},
    {name: "olya", age: 28, status: false},
    {name: "max", age: 30, status: true},
    {name: "anya", age: 31, status: false},
    {name: "oleg", age: 28, status: false},
    {name: "andrey", age: 29, status: true},
    {name: "masha", age: 30, status: true},
    {name: "olya", age: 31, status: false},
    {name: "max", age: 31, status: true}
];

const usersTrueList = document.querySelector("#users-true_list ul");
const usersFalseList = document.querySelector("#users-false_list ul");
const usersElderList = document.querySelector("#users-elder_list ul");

for (let i = 0; i < users.length; i++) {
    if (users[i].status) {
        const userTrue = document.createElement("li");
        userTrue.textContent = users[i].name;
        usersTrueList.append(userTrue);
    }
    if (!users[i].status) {
        const userFalse = document.createElement("li");
        userFalse.textContent = users[i].name;
        usersFalseList.append(userFalse);
    }
    if (users[i].age >= 30) {
        const userElder = document.createElement("li");
        userElder.innerHTML = `${users[i].name} <span>(age is ${users[i].age})</span>`;
        usersElderList.append(userElder);
    }
}