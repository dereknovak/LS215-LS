/* 

9:45 // 10:04

PROBLEM
I: An array of numbers
O: A number, representing the number that is different than the rest

RULES
- There will always be at least 3 numbers
- There will be exactly 1 number that is different
- Can include floats
- Array cannot be sparse
- Can mutate array
- Could be strings
    - Integers/Floats
- If no arg, return null
- Strings should be converted to a number

EXAMPLE
[0, 1, 0] => 1
[7, 7, 7, 7.7, 7] => 7.7

DATA STRUCTURE
- Iterate through the array
    - Find the value that only appears once (indexOf)

[7, 7, 7, '7.7', '7']
[7, 7, 7, 7.7, 7]
7
    indexOf => 0, lastIndexOf => 4
7
    indexOf => 0, lastIndexOf => 4
7
    indexOf => 0, lastIndexOf => 4
7.7
    indexOf => 3, lastIndexOf => 3
    return

APPLICATION
[7, 7, 7, '7.7', '7']
[7, 7, 7, 7.7, 7]


ALGORITHM
1. Validate the input
    - If arg is undefined, return null
2. Covert all strings to numbers
    - Use map
        - If value is a string
            - Return value converted to a number
        - Otherwise
            - Return value
3. Find and return the number that only appears once
    - Use findSingleElement HELPER
    - Return value

HELPERS
findSingleElement(array)
- Use a for loop (i = 0, i < array length)
    - Initialize currentValue to array at i
    - Initialize leftIdx to indexOf currentValue
    - Initialize rightIdx to lastIndexOf currentValue

    - if leftIdx === rightIdx
        - Return currentValue
*/

function whatIsDifferent(numbers) {
  if (numbers === undefined) return null;

  numbers = numbers.map(Number);
  return findSingleElement(numbers);
}

function findSingleElement(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let currentValue = numbers[i];
    let leftIndex = numbers.indexOf(currentValue);
    let rightIndex = numbers.lastIndexOf(currentValue);

    if (leftIndex === rightIndex) return currentValue;
  }
}

// TEST CASES

console.log(whatIsDifferent([0, 1, 0]) === 1);
console.log(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
console.log(whatIsDifferent([7, 7, 7, '7.7', '7']) === 7.7);
console.log(whatIsDifferent([1, 2, 2, 2, 2]) === 1);
console.log(whatIsDifferent() === null);

// ADDITIONAL TEST CASES

console.log(whatIsDifferent([0, 1, 0]) === 1);
console.log(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
console.log(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
console.log(whatIsDifferent([3, 4, 4, 4]) === 3);
console.log(whatIsDifferent([4, 4, 4, 3]) === 3);