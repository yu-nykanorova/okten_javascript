console.group("Set-Map");

// Set collection

let set = new Set();
set.add(12);
set.add("Hi");
set.add("Jason");
set.delete(12);
console.log(set.size);
set.forEach(item => console.log(item));
let arr = Array.from(set);
console.log(arr);

// Map collection

let map = new Map();
let ball = {id: "ball"};
let cube = {id: "cube"};
let prism = {id: "prism"};
map.set(ball, {form: "sphere", color: "red"});
map.set(cube, {form: "cubic", color: "blue"});
map.set(prism, {form: "polyhedron", color: "yellow"});
map.get(prism);
//map.delete(cube);
//map.clear();
console.log(map.size);
//console.log(map.keys()); // object MapIterator
//console.log(map.values()); // object MapIterator
let arrMapKeys = Array.from(map.keys());
let arrMapValues = Array.from(map.values());
console.log(arrMapKeys);
console.log(arrMapValues);
console.groupEnd();
