function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return String(value).match(/[0-9]/) && typeof value == 'number';
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery(['a', 234, '1abc'], isAString)); // false
console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false