/* 

5:14 // 5:49

PROBLEM
I: An array of integers
O: A number, representing the number of pairs in the array

- Pair
    - Any set of 2 numbers that are the same
        - If 4 of one number, then there are 2 pairs
- If empty, return 0
- Array could have digits, convert these to numbers
- No floats, just integers
- Could have negatives, treat the same

EXAMPLE
[3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]
3: 2, 1: 1, 4: 1, 5: 3, 9: 2, 2: 1, 6: 1, 8: 1, 7: 1
3

DATA STRUCTURE
- Object
    - Count each number
- Store counts into a variable and increment for each pair

[3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]
{3: 2, 1: 1, 4: 1, 5: 3, 9: 2, 2: 1, 6: 1, 8: 1, 7: 1}
{3: 1, 1: 0, 4: 0, 5: 1, 9: 1, 2: 0, 6: 0, 8: 0, 7: 0}
totalPairs = 3

APPLICATION
[3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]
{3: 2, 1: 1, 4: 1, 5: 3, 9: 2, 2: 1, 6: 1, 8: 1, 7: 1}
{3: 1, 1: 0, 4: 0, 5: 1, 9: 1, 2: 0, 6: 0, 8: 0, 7: 0}
[1, 0, 0, 1, 1, 0, 0, 0, 0]
3

ALGORITHM
1. Validate the input
    - If array is less than 2, return 0
2. Sanitize input
    - Convert all string to numbers
    - Transform using map
        - If value is a string
            - return it converted to a number
        - Otherwise
            - return the number
3. Create a tally of each number in array
    - Use getTally HELPER (tally)
4. Divide each count of tally in half to create pairs
    - Use convertToPairs(tally) HELPER
5. Count the number of pairs throughout tally
    - Use countPairs(tally)
6. Return the count

HELPERS
getTally(arr)
- Initialize tally to {}
- Iterate through arr
    - If String(num) is a property of tally
        - Increment value by 1
    - Otherwise
        - Create a property for tally
            - Key: String(num)
            - Value: 1
- Return tally

convertToPairs(tally)
- Iterate through tally (for in)
    - Reassign value
        - Divide current value by 2
        - Floor result

countPairs(tally)
- Get values of tally
- Sum values using reduce
- Return sum
*/

function pairs(numbers) {
  if (numbers.length < 2) return 0;

  numbers = numbers.map(value => typeof value === 'string' ? value : String(value));
  const tally = getTally(numbers);
  convertToPairs(tally);

  return countPairs(tally);
}

function convertToPairs(tally) {
  for (let prop in tally) {
    tally[prop] = Math.floor(tally[prop] / 2);
  }
}

function getTally(numbers) {
  const tally = {};
  numbers.forEach(num => {
    if (tally[num]) {
      tally[num] += 1;
    } else {
      tally[num] = 1;
    }
  });

  return tally;
}

const countPairs = tally => Object.values(tally).reduce(sum);
const sum = (a, b) => a + b;

// TEST CASES

console.log(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
console.log(pairs([3, 1, 4, '5', 9, 2, '6', 5, 3, 5, 8, 9, 7]) === 3);
console.log(pairs([3, 1, 4, -5, 9, 2, 6, -5, 3, 5, -5, 8, 9, 7]) === 3);
console.log(pairs([7, 7, 7, 7, 7]) === 2);
console.log(pairs([5]) === 0);
console.log(pairs([]) === 0);

// Additional Test Cases

console.log(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
console.log(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
console.log(pairs([]) === 0);
console.log(pairs([23]) === 0);
console.log(pairs([997, 997]) === 1);
console.log(pairs([32, 32, 32]) === 1);
console.log(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);