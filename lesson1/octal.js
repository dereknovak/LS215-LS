/*

PROBLEM:
I: A string, rep an octal number
O: A number, rep the numeric version of the octal number

- Each value is 1-7, with 8 starting a new digit slot

EXAMPLE:
130:
0 * 1 === 0
3 * 8 === 24
1 * 64 === 64
= 88

DS:
- An array to keep track of products

ALGORITHM:
- Convert string number into an array of digits
    - split/map
- Reverse numbers so to start with the smallest digits first
    - reverse
- Convert each digit to its octal counterpart
    - map
- Sum all the numbers
    - reduce

*/

function octalToDecimal(numberString) {
  let digits = numberString.split('').map(char => Number(char)).reverse();

  return digits.reduce((sum, num, exponent) => {
    let octalNum = num * (8 ** exponent);
    return sum + octalNum;
  }, 0);
}

console.log(octalToDecimal('1') === 1);
console.log(octalToDecimal('10') === 8);
console.log(octalToDecimal('130') === 88);
console.log(octalToDecimal('17') === 15);
console.log(octalToDecimal('2047') === 1063);
console.log(octalToDecimal('011') === 9);