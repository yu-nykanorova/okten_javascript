// #dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’

let stringsSmallLetter = ["hello world", "lorem ipsum", "javascript is cool"];

for (let str of stringsSmallLetter) {
    console.log(`Length of the string "${str}" is ${str.length}`);
}

// #8lld9HMxXWB
// – Перевести до великого регістру наступні стрінгові значення
// ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

for (let str of stringsSmallLetter) {
    console.log(`Transform "${str}" to upper case => ${str.toUpperCase()}`);
}

// – Перевести до нижнього регістру наступні стрінгові значення
// ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let stringsBigLetter = ["HELLO WORLD", "LOREM IPSUM", "JAVASCRIPT IS COOL"];

for (let str of stringsBigLetter) {
    console.log(`Transform "${str}" to lower case => ${str.toLowerCase()}`);
}

// #0b89BkYZwu
//– Є “брудна” стрінга let str = ‘ dirty string   ‘. Почистити її від зайвих пробілів.

let dirtyStr = " dirty string   ";
console.log(`Clear string "${dirtyStr}" from spaces => "${dirtyStr.trim()}"`);
