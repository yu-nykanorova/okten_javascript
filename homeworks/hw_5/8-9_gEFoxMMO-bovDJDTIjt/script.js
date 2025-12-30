// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let mixedArray = ["tulip", false, 54, 11, "Adam", 17, true, 4, "cycle"];

let createArrayList = (array) => {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
createArrayList(mixedArray);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let usersArray = [
    {id: 1, name: "Kira", age: 22,},
    {id: 2, name: "Oleksii", age: 25,},
    {id: 3, name: "Nadiia", age: 23,},
    {id: 4, name: "Prospero", age: 30,},
    {id: 5, name: "Inna", age: 24,}
];

let showUsers = (users) => {
    for (let user of users) {
        document.write(`
            <div class="user">
                <h3>${user.name}</h3>
                <p>${user.age} y.o.</p>
            </div>
        `);
    }
}

showUsers(usersArray);