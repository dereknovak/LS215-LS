/* 

4:56 / 5:13

PROBLEM
I: A string
O: An array of numbers, representing which numbers in string are prime

- Prime number
    - Not divisible by anything
    - 2 is prime
    - An integer that is greater than 1
    - 2, 3, 5, 7, 11...
- Entire number is a single number
    - 13 is just 13, not 13, 1 and 3
- Just worry about digits
- No numbers, return an empty array

EXAMPLE
"a4bc2k13d"
4, 2, 13
[2, 13] <= prime

DATA STRUCTURE
- Use an array for return, order matters

ALGORITHM
1. Capture all of the numbers in string
    - Regex to match digits (1 or more)
    - If null, assign to an empty array
2. Convert numbers to a number
    - Map
        - convert to number
3. Filter to only prime numbers
    - Use isPrime HELPER
4. Return the list of numbers

HELPERS
isPRIME(num)
- num is greater than 1
- Loop through half of numbers before current (num / 2)
    - Return false if num modulo divisor === 0
- Return true
*/

function primeNumberPrinter(string) {
  const nums = string.match(/\d+/g) || [];
  return nums.map(Number).filter(isPrime);
}

function isPrime(num) {
  if (num < 2) return false;

  for (let divisor = 2; divisor <= num / 2; divisor++) {
    if (num % divisor === 0) return false;
  }

  return true;
}

// TEST CASES

console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
console.log(primeNumberPrinter("a4threec2k13d")); // [2, 13]
console.log(primeNumberPrinter("a4threec2k13d")); // [2, 13]
console.log(primeNumberPrinter("launchschool")); // []
console.log(primeNumberPrinter("la1un11ch2sch0oo3l")); // [11, 2, 3]
console.log(primeNumberPrinter("launch-3school")); // [3]
console.log(primeNumberPrinter("")); // []