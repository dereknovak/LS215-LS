/* 

10:26 // 11:09

PROBLEM
I: An array of numbers
O: A number, representing the index that splits the array into equal sums

RULES
- We are looking for the index that splits the sums
    - everything to left creates a sum
    - everything to right creates a sum
    - compare these 2 values
        - If the same, then a match
- The sum to the left of idx 0 and the right of last idx is 0
- If multiple answers, return the idx with largest answer
- Always will receive an array as an arg
- If array is empty, return null
- Can mutate array
- No spare arrays
- Always will contain integers
- Can have negative numbers
- If no index to make happen, return -1

EXAMPLE
[1, 2, 4, 4, 2, 3, 2]
0 17
1 15
3 11
7 7 ****
11 5
13 2
15 0

[0, 20, 10, -60, 5, 25]
0 0 ***
0 -20
20 -30
30 30 ***
-30 25
-25 0

DATA STRUCTURE
- Slice arrays from 0 => current idx
- Slice arrays from current idx + 1 => end of array + 1
- Push results that are equal to a separate array
    - An object
        - Key: the index
        - Value: the sum
    - Order objects in array by their sum
        - Return the largest sum index

[0, 20, 10, -60, 5, 25]
equalSums = [{0: 0}, {3: 30}]
[] = [20, 10, -60, 5, 25]
0 = 0
[0] = [10, -60, 5, 25]
0 = -20
[0, 20] = [-60, 5, 25]
20 = -30
[0, 20, 10] = [5, 25]
30 = 30
[0, 20, 10, -60] = [25]
-30 = 25
[0, 20, 10, -60, 5] = []
-25 = 0
equalSums = [{3: 30}, {0: 0}]
Return key of first element converted to a number

APPLICATION
[0, 20, 10, -60, 5, 25]
equalSums = [{0: 0}]
[] = [20, 10, -60, 5, 25]
leftSum = 0
rightSum = 0

[0, 20, 10] = [5, 25]
leftSum = 30
rightSum = 30

ALGORITHM
1. Validate the input
    - If the array is empty, return null
2. Find all indexes that have equal sums on left and right
    - Use findEqualSums HELPER (equalSums)
3. If equalSums is empty, return -1
4. Sort those index by their sum (b - a)
    - Sort using bySum HELPER
5. Return the index with the largest sum
    - Return the key of first element object, converted to a number

HELPERS
findEqualSums(array)
- Initialize equalSums to []
- Iterate through each element of array (forEach with index)
    - Capture left values
        - Slice from 0 => idx
    - Capture right values
        - Slice from idx + 1 => array length
    - Find sum of both left and right
        - Reduce sum HELPER (leftSum/rightSum) (starting value is 0)
    - If leftSum === rightSum
        - Push an object to equalSums
            - Key: index, converted to a string
            - Value: leftSum
- Return equalSums

sum(a, b)
- a + b

bySum(a, b)
- First value of b  - First value of a
    - Object keys, first element
*/

function equalSumIndex(numbers) {
  if (!numbers.length) return null;
  const equalSums = findEqualSums(numbers);
  if (!equalSums.length) return -1;
  equalSums.sort(bySum);
  return Number(Object.keys(equalSums[0])[0]);
}

function findEqualSums(numbers) {
  const equalSums = [];
  numbers.forEach((_, idx) => {
    const leftSum = numbers.slice(0, idx).reduce(sum, 0);
    const rightSum = numbers.slice(idx + 1, numbers.length).reduce(sum, 0);

    if (leftSum === rightSum) {
      equalSums.push({[String(idx)]: leftSum});
    }
  });

  return equalSums;
}

const bySum = (a, b) => Object.values(b)[0] - Object.values(a)[0];
const sum = (a, b) => a + b;

// TEST CASES

console.log(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
console.log(equalSumIndex([2, 3, 1, 2, 3]) === 2);
console.log(equalSumIndex([0, 20, 10, -60, 5, 25]) === 3);
console.log(equalSumIndex([2, 0]) === 0);
console.log(equalSumIndex([-2, 2, 5]) === 2);
console.log(equalSumIndex([]) === null);

// ADDITIONAL TEST CASES

console.log(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
console.log(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
console.log(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);