function myMap(array, func) {
  return array.reduce((newArray, element) => newArray.push(func(element)) && newArray, []);
}

let firstLetter = string => string[0];
let plusOne = n => n + 1;

let numbers = [1, 2, 3, 4];
console.log(myMap(numbers, plusOne));       // [ 2, 3, 4, 5 ]
console.log(numbers.map(plusOne));

let colors = ['red', 'blue', 'green'];
console.log(myMap(colors, firstLetter));
console.log(colors.map(firstLetter));