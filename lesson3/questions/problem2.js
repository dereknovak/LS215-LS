/* 

1:14 / 1:44

PROBLEM
I: An array of integers
O: A number, representing either the 3rd largest number or the largest number

- Cannot use sort
- If the third largest number does not exist, return the largest number
- All numbers will be integers
- Cannot mutate array
- If multiple digits, account for multiple positions in sorting
    - If nums = 3, 3, 3
        - 1st, 2nd, and 3rd largest are 3
- May have negative numbers
- Cannot use ANY kind of sorting mechanism
- There will always be at least 1 num

EXAMPLE
3, 2, 1
3 1st largest
2 2nd largest
1 3rd largest <= return

DATA STRUCTURE
- Use the input array (copy)
    - Use splice to remove the max
    - If splice returns an empty array, there is no max

[3, 2, 1]
maxNumber = 4
maxIndex = 3
count = 0

ALGORITHM
1. Determine the 3rd max number
    - Copy the input array
    - Declare maxNumber
    - Initialize count to 3
    - Loop 3 times (while count > 0)
        - Reassign maxNumber to the max number in array
        - Initialize maxIndex to the index of the maxNumber
        - Splice out the number at the maxIndex position
2. Return the greatest number if the 3rd max number does not exist
    - If maxNumber does not exist (-Infinity)
        - Return the max number in array
3. Return maxNumber

*/

function thirdMax(numbers) {
  const nums = numbers.slice();
  let maxNumber;
  let count = 3;

  for (let count = 3; count > 0; count--) {
    maxNumber = Math.max(...nums);
    let maxIndex = nums.indexOf(maxNumber);
    nums.splice(maxIndex, 1);
  }
  
  return maxNumber === -Infinity ? Math.max(...numbers) : maxNumber;
}

// TEST CASES

console.log(thirdMax([3, 2, 1]) === 1);
console.log(thirdMax([3, 3, 3]) === 3);
console.log(thirdMax([-3, -2, 1]) === -3);
console.log(thirdMax([3, 2, 1, 5, 6, 4]) === 4);
console.log(thirdMax([2, 1]) === 2);
console.log(thirdMax([1]) === 1);
console.log(thirdMax([2, 1, -1]) === -1);

let arr = [3, 2, 1];
console.log(thirdMax(arr) === 1);
console.log(JSON.stringify(arr) === JSON.stringify([3, 2, 1]));