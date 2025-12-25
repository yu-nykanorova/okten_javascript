// – Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру за шаблоном

let listOfItems = ["html", "css", "javascript", "mysql", "mongodb", "react", "angular", "node.js"];

for (let item of listOfItems) {
    document.write(
        `<ul><li>${item}</li></ul>`
    )
}
