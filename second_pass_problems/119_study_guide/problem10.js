/* 

10:16 // 10:38

PROBLEM
I: A string of digits
O: A number, representing the total number of even substrings included in input

- Even substring
    - Consecutive digits within given string
    - 1 or more digits
    - When converted to a number, is even
- Always receive a string
- If empty, return 0
- Always just digits
- If multiple of the same number, count as multiple
- Zero is even 

EXAMPLE
1432
1 14 143 1432 4 43 432 3 32 2
   *.     *.  *      *.  *. *

DATA STRUCTURE
- An array for substrings
    - Transform the array from strings to numbers
    - Filter the array for only even numbers
    - Count the number of elements

1432
1 14 142 4 43...
[1 14 143 1432 4 43 432 3 32 2]
[14, 1432, 4, 432, 32, 2]
6

APPLICATION
1432
[1, 14, 143, 1432, 4, 43, 432, 3, 32, 2]
[14, 1432, 4, 432, 32, 2].length === 6

ALGORITHM
1. Validate input
    - If string is empty, return 0
2. Capture all of the substrings of given string
    - Use getSubstrings HELPER (substrings)
3. Transform the string elements to numbers
    - map with Number
4. Filter array for only the even numbers
    - Use isEven HELPER
5. Return the length of the array
    - Call the length property

HELPERS
getSubstrings(string)
- Initialize substrings to [];
- Use a for loop to track startIdx
    - Use a for loop to track endIdx
        - Slice the string from startIdx to endIdx
        - Push that slice to substrings
- Return substrings

isEven
- Return if number modulo 2 is equal to 0
*/

function evenSubstrings(string) {
  return getSubstrings(string).map(Number).filter(isEven).length;
}

function getSubstrings(string) {
  const substrings = [];
  for (let startIdx = 0; startIdx < string.length; startIdx++) {
    for (let endIdx = startIdx + 1; endIdx <= string.length; endIdx++) {
      substrings.push(string.slice(startIdx, endIdx));
    }
  }

  return substrings;
}

const isEven = num => num % 2 === 0;

// TEST CASES

console.log(evenSubstrings('1432') === 6);
console.log(evenSubstrings('2') === 1);
console.log(evenSubstrings('222') === 6);
console.log(evenSubstrings('20') === 3);

console.log(evenSubstrings('1') === 0);
console.log(evenSubstrings('') === 0);

// ADDITIONAL TEST CASES
console.log(evenSubstrings('3145926') === 16);
console.log(evenSubstrings('2718281') === 16);
console.log(evenSubstrings('13579') === 0);
console.log(evenSubstrings('143232') === 12);
