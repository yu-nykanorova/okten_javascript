// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const coursesList = document.getElementById("courses-list");

for (const course of coursesArray) {
    const courseItem = document.createElement("div");
    courseItem.classList.add("course-item");
    const courseTitle = document.createElement("h2");
    const courseDuration = document.createElement("div");
    courseDuration.classList.add("course-duration");
    const monthDuration = document.createElement("p");
    const hourDuration = document.createElement("p");

    courseTitle.innerText = course.title;
    monthDuration.innerText = `${course.monthDuration} months`;
    hourDuration.innerText = `${course.hourDuration} hours`;
    courseDuration.append(monthDuration, hourDuration);

    const courseModules = document.createElement("ul");

    for (const module of course.modules) {
        const moduleItem = document.createElement("li");
        moduleItem.innerText = module;
        courseModules.append(moduleItem);
    }

    courseItem.append(courseTitle, courseDuration, courseModules);
    coursesList.append(courseItem);
}