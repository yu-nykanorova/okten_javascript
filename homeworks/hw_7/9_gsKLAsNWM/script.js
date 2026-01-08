// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

const arr = [{title: "banana", price: 1},{title: "tomato", price: 3},{title: "cucumber", price: 2},{title: "peach", price: 1}];

Array.prototype.specialFilter = function(callback) {
    const filteredArray = [];
    for (const item of this) {
        if (callback(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}

console.log(arr.specialFilter(item => item.price === 1));

Array.prototype.specialForEach = function(callback) {
    for (const item of this) {
        callback(item);
    }
}

arr.specialForEach((item, index) => console.log(item.title));
