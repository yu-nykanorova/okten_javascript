// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const personalDataForm = document.getElementById('personal-data_form');
const inputName = document.getElementById("name");
const inputSurname = document.getElementById("surname");
const inputAge = document.getElementById("age");
const responseBox = document.getElementById("response");

personalDataForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.createElement("p");
    const surname = document.createElement("p");
    const age = document.createElement("p");
    name.textContent = `Name is: ${inputName.value}`;
    surname.textContent = `Surname is: ${inputSurname.value}`;
    age.textContent = `Age is: ${inputAge.value}`;
    responseBox.style.display = "flex";
    responseBox.replaceChildren(name, surname, age);
});


