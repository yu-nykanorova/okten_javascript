// #jeBqHV525U5
// – Є масив

let coursesAndDurationArray = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4}
];

// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

const coursesList = document.getElementById("courses-list");

for (let course of coursesAndDurationArray) {
    const courseItem = document.createElement("div");
    courseItem.classList.add("course-item");
    const courseTitle = document.createElement("h2");
    const courseDuration = document.createElement("p");
    courseTitle.innerText = course.title;
    courseDuration.innerText = `course duration: ${course.monthDuration} month(s)`;
    courseItem.append(courseTitle, courseDuration);
    coursesList.append(courseItem);
}