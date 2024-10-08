// Create a method that takes a string argument and computes the greatest product of four consecutive digits in the string. 

/* 

PROBLEM
I: A string of characters
O: A number, representing the greatest product of 4 consecutive digits

- Consecutive digit
    - Numbers from string that are in a row
        - 2a34%5 6 => 23456 => 2345 3456
- ANything can appear in string
    - Filter out the numbers
- If empty string, return 0
- If arg ommitted, return null
- If no set of 4, return 0

EXAMPLE
2a34%5 6
23456

23456
[2, 3, 4, 5] => 120
[3, 4, 5, 6] => 360

[2, 3, 4, 5, 6]
while i <= length - 4

DATA STRUCTURE
- Use subarrays to capture groups of 4
    - Reduce to the product
    - Return the largest product

'23a4$5 6'
numbers = [2, 3, 4, 5, 6]
[[2, 3, 4, 5], [3, 4, 5, 6]]
[120, 360]
max = 360

APPLICATION
'23a4$5 6'
numbers = [2, 3, 4, 5, 6]
subarrays = [[2, 3, 4, 5],[3, 4, 5, 6]]
products = [120,360]
max = 360

ALGORITHM
1. Validate input
    - If input is undefined, return null
2. Capture all of the numbers from string
    - Use regex to match all digits
3. Revalidate input
    - If array length is less than 4, return 0
4. Transform numbers to Number form
5. Create subarrays of groups of 4 consecutive numbers from numbers
    - Use getSubarrays HELPER (groupsOfFour)
6. Transform those subarrays to their product
    - Reduce to product HELPER
7. Return the highest product from products
    - Math max (spread)

HELPERS
getSubarrays(array)
- Initialize subarrays to [];
- Use a for loop (idx = 0, idx <= length - 4)
    - Slice array from current idx upto +4
    - Push slice to subarrays
- Return subarrays

*/

function greatestProduct(string) {
  if (string === undefined) return null;
  let numbers = string.match(/\d/g) || [];

  if (numbers.length < 4) return 0;

  numbers = numbers.map(Number);
  const subarrays = getSubarrays(numbers);
  const products = subarrays.map(group => group.reduce(product));
  
  return Math.max(...products);
}

function getSubarrays(array) {
  const subarrays = [];

  for (let idx = 0; idx <= array.length - 4; idx++) {
    subarrays.push(array.slice(idx, idx + 4));
  }

  return subarrays;
}

const product = (a, b) => a * b;

// TEST CASES

console.log(greatestProduct('23456') === 360);
console.log(greatestProduct('12345') === 120);
console.log(greatestProduct('23a4$5 6') === 360);
console.log(greatestProduct('2345') === 120);
console.log(greatestProduct('abcd5') === 0);
console.log(greatestProduct('abcde') === 0);
console.log(greatestProduct('') === 0);
console.log(greatestProduct('234') === 0);
console.log(greatestProduct() === null);
