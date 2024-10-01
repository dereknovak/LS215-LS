/* 

11:30 // 11:56

PROBLEM
I: An array of numbers
O: A number, representing the minimum sum of 5 consecutive integers, or null

- Miniumum Sum
    - Lowest sum
    - Sum of 5 consecutive integers (subarrays)
- If fewer than 5 elements, return null
- Will be negatives
- Only integers, no floats or digits

EXAMPLE
[1, 2, 3, 4, 5, 6]
[1, 2, 3, 4, 5] => 15
[2, 3, 4, 5, 6] => 20
min = 15

[1, 2, 3, 4, 5, 6]
length = 6
groups = 2
index = 0
stop after 1

DATA STRUCTURE
- Subarrays
    - Find sum of each
- Array of all sums (converted from subarrays)
    - Find the min value of that array

[1, 2, 3, 4, 5, 6]
[[1, 2, 3, 4, 5], [2, 3, 4, 5, 6]]
[15, 20]
min = 15

APPLICATION
[1, 2, 3, 4, 5, 6]
[15, 20]

ALGORITHM
1. Validate input
    - If array length is less than 5, return null
2. Create subarrays of consecutive 5 numbers
    - Use getSubarrays HELPER
3. Transform the subarrays to their sum
    - Transform with map
        - reduce (sum HELPER)
4. Return the minimum sum in transformed array
    - Min (spread syntax)

HELPERS
getSubarrays(array)
- Initialize subarrays to []
- Use a for loop (index to 0, while index <= array length - 5)
    - Push slice from current index to index + 5 to subarrays
- Return subarrays

sum(a, b)
- a + b
*/

function minimumSum(numbers) {
  if (numbers.length < 5) return null;

  const subarrays = getSubarrays(numbers);
  const sums = subarrays.map(groupOfFive => {
    return groupOfFive.reduce(sum);
  });

  return Math.min(...sums);
}

function getSubarrays(array) {
  const subarrays = [];
  for (let i = 0; i <= array.length - 5; i++) {
    subarrays.push(array.slice(i, i + 5));
  }

  return subarrays;
}

const sum = (a, b) => a + b;

// TEST CASES

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([1, 2, 3, 4, 5, 6, 6]) === 15);
console.log(minimumSum([0, 1, 2, 3, 4, 5]) === 10);
console.log(minimumSum([0, 1, 2, 3, 4]) === 10);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);