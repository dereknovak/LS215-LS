// 4

let language = 'JavaScript';
let idx = language.indexOf('S');

console.log(idx);

// 5

let charCode = language.charCodeAt(idx);
console.log(charCode);

// 6

console.log(String.fromCharCode(charCode));

// 7

console.log(language.lastIndexOf('a'));

// 8

let a = 'a';
let b = 'b';
console.log(a > b);

b = 'B';
console.log(a > b);

// 9

console.log(language.slice(1, 4));
console.log(language.slice(2, 4));

// 10

console.log(language.substring(1, 4));
console.log(language.substring(2, 4));

// 11

console.log(language.slice(1, -1));
console.log(language.slice(2, -1));

// 12

console.log(language.substring(1, -1));
console.log(language.substring(2, -1));