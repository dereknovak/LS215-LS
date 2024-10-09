/* 

11:16 // 11:42

Create a method that takes an array of integers as an argument and returns the sum of the integers that appear an odd number of times.

PROBLEM
I: An array of integers
O: An integer, representing the sum of integers that appear an odd number of times

RULES
- An odd number of times?
    - Occurrences of number are odd
        - 1, 3, 5...
- Find sum of ALL those integers
- Will always receive an array as an arg
- If empty, return 0
- Elements will always just be numbers
- No sparse arrays
- Can mutate the array
- If no odd values, return 0
- Include number a single time for sum
- Could receive negative numbers

EXAMPLE
[7, 99, 7, 51, 99]
7: 2
99: 2
51: 1
sum => 51

DATA STRUCTURE
- An array for all odd occurrences
    - Find the sum of the array (reduce)
- An object to tally the number occurrences
    - Increment the count each time a number is found

[1, 1, 2, 4, 1, 1]
{1: 4, 2: 1, 4: 1}
oddOccurrences = [2, 4]
6

APPLICATION
[1, 1, -2, 4, 2, 1, 1]
{1: 4, -2: 1, 4: 1, 2: 1}
oddOccurrences = [-2, 4, 2]
sum = 4

ALGORITHM
1. Validate input
    - If array is empty, return 0
2. Create a tally of all the numbers in array
    - Use getTally HELPER (tally)
3. Capture the numbers with odd occurrences in the array
    - Use findOddOccurrences HELPER (oddOccurrences)
4. Return the sum of those numbers
    - Use reduce with sum HELPER

HELPERS
getTally(numbers)
- Initialize tally to {}
- Iterate through numbers (forEach)
    - If the current number is a property of tally
        - Increment the count by 1
    - Otherwise
        - Create a property for current number in tally
            - Key: The number, converted to a string
            - Value: 1
- Return the tally

findOddOccurrences(tally)
- Initialize oddOccurrences to []
- Iterate through tally (for in)
    - If the current value isOdd HELPER
        - Push the key, converted to a Number, to oddOccurrences
- Return oddOccurrences

isOdd(number)
- number % 2 is equal to 1
*/

function oddFellow(numbers) {
  if (!numbers.length) return 0;

  const tally = getTally(numbers);
  return findOddOccurrences(tally).reduce(sum, 0);
}

function findOddOccurrences(tally) {
  const oddOccurrences = [];
  for (let num in tally) {
    if (isOdd(tally[num])) {
      oddOccurrences.push(Number(num));
    }
  }

  return oddOccurrences;
}

function getTally(numbers) {
  const tally = {};
  numbers.forEach(num => {
    num = String(num);
    
    if (tally[num]) {
      tally[num] += 1;
    } else {
      tally[num] = 1;
    }
  });

  return tally;
}

const isOdd = num => num % 2 === 1;
const sum = (a, b) => a + b;

// TEST CASES

console.log(oddFellow([7, 99, 7, 51, 99]) === 51);
console.log(oddFellow([7, 99, 7, 51, 99, 51]) === 0);
console.log(oddFellow([1, 1, 2, 4, 1]) === 7);
console.log(oddFellow([1, 1, 2, 4, 1, 1]) === 6);
console.log(oddFellow([1, 1, -2, 4, 2, 1, 1]) === 4);
console.log(oddFellow([]) === 0);