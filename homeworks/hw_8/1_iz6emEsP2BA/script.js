// #iz6emEsP2BA
// – є масив

let coursesAndDurationArray = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4}
];

// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції

const newCoursesAndDurationArray = coursesAndDurationArray.map((item, index) => ({id: index + 1, ...item}));
console.log(newCoursesAndDurationArray);
