// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const button = document.getElementById('button');
const responseBox = document.getElementById('response');

button.addEventListener('click', () => {
    const ageInputValue = +document.getElementById('age').value;

    if (Number.isNaN(ageInputValue) || ageInputValue <= 0) {
        responseBox.textContent = "Wrong value!";
    } else if (ageInputValue < 18) {
        responseBox.textContent = "Your age is not suitable";
    } else {
        responseBox.textContent = "Your age is ok";
    }
});
