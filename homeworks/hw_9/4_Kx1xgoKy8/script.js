// #Kx1xgoKy8
// – Є масив

let coursesAndDurationArray = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.

const coursesList = document.getElementById("courses-list");

for (let course of coursesAndDurationArray) {
    const courseItem = document.createElement("div");
    courseItem.classList.add("item");
    const courseTitle = document.createElement("h2");
    courseTitle.classList.add("heading");
    const courseDescription = document.createElement("p");
    courseDescription.classList.add("description");
    courseTitle.innerText = course.title;
    courseDescription.innerText = `course duration: ${course.monthDuration} month(s)`;
    courseItem.append(courseTitle, courseDescription);
    coursesList.append(courseItem);
}