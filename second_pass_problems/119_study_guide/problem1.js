/* 

10:43 // 11:27

PROBLEM
I: An array of numbers
O: An array of numbers, representing the numbers in array that are smaller than it

RULES
- Only count unique values that are less than current num
    - If multiple 5s, only use 1 5
    - However, each number should have a corresponding count
- Input length should match output length
- Negative numbers
- May have a string as a digit
    - Convert to number
EXAMPLE
[8, 1, 2, 2, 3]
[3, 0, 1, 1, 2]

DATA STRUCTURE
- Use an array for the return
- Use an array for unique values
- Use an object to keep track of counts

[8, 1, 2, 2, 3]
uniqueValues = [8, 1, 2, 3]
{8: 3, 1: 0, 2: 1, 3: 2}
[3, 0, 1, 1, 2]

APPLICATION
[8, 1, '2', 2, 3]
[8, 1, 2, 2, 3]
uniqueNums = [8, 1, 2, 3]
lessThanTally = {8: 3, 1: 0...}
counts = [3, 0, 1, 1, 2]

ALGORITHM
1. Validate input
    - If array is empty, return []
2. Sanitize input
    - Convert string nums to regular nums
    - Transform elements to numbers (map)
        - Use digitToNum HELPER
3. Filter input array by unique values
    - Use getUnique HELPER
        - Assign to uniqueNums
4. Create a tally of all numbers less than each number
    - Use getLessThanTally HELPER
5. Create an array with all of the counts, in line with its respective number
    - use generateCounts HELPER
6. Return the counts array

HELPERS
digitToNum(value)
- If value is a number
    - Return value
- Otherwise
    - Return value converted to number (Number())

getUnique(numbers)
- Initial uniqueNums to []
- Iterate through numbers
    - If uniqueNums does not include num
        - Push num to uniqueNums
- Return uniqueNums

getLessThanTally(uniqueNums)
- Initialize count to {}
- Iterate through uniqueNums (num1)
    - Create property in count
        - Key is num1
        - Value is 0
    - Iterate through uniqueNums (num2)
        - If num2 < num1
            - Increment value by 1
- Return count

generateCounts(numbers, lessThanTally)
- Initialize counts to []
- Iterate through numbers
    - Push the value of currentNumber (converted to string) to counts
- Return counts
*/

function getLessThanTally(uniqueNums) {
  const count = {};
  uniqueNums.forEach(num1 => {
    count[String(num1)] = 0;

    uniqueNums.forEach(num2 => {
      if (num2 < num1) count[String(num1)] += 1;
    });
  });

  return count;
}

function generateCounts(numbers, lessThanTally) {
  const counts = [];
  numbers.forEach(num => {
    counts.push(lessThanTally[String(num)]);
  });

  return counts;
}

function smallerNumbersThanCurrent(numbers) {
  if (!numbers.length) return [];
  numbers = numbers.map(digitToNum);
  const uniqueNums = getUnique(numbers);
  const lessThanTally = getLessThanTally(uniqueNums);
  return generateCounts(numbers, lessThanTally);
}

function digitToNum(value) {
  if (typeof value === 'number') return value;
  return Number(value);
}

function getUnique(numbers) {
  const uniqueNums = [];
  numbers.forEach(num => {
    if (!uniqueNums.includes(num)) {
      uniqueNums.push(num); 
    }
  });

  return uniqueNums;
}

// TEST CASES

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0, 0, 0, 0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]
console.log(smallerNumbersThanCurrent([])); // []
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, -3])); // [3, 1, 2, 2, 0]
console.log(smallerNumbersThanCurrent([8, 1, '2', 2, 3])); // [3, 0, 1, 1, 2]

const myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
const result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
console.log(smallerNumbersThanCurrent(myArray));
