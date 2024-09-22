/* 

5:52 / 6:24

PROBLEM
I: A string
O: A string, with letters swapping with numbers

- Swap numbers and letters
    - When a set of numbers and letters are found
    - Swap their indexes
    - Loop n times

RULES
- If empty, return empty
- There may be other character. Leave them as is
- There may be upper/lower

QUESTIONS
- 1 arg?
- Empty?
- Just letters/numbers?
- Leave letter with no corresponding number?
- Case matter?
EXAMPLE
"1a2b3c" => "a1b2c3"
"abcd123" => "123dabc"

abcd123
123dabc

DATA STRUCTURE
- Array to keep track of order
    - Split into an array
- Letters array for all letters
- Numbers array for all numbers

APPLICATION
"a#1/b-"
[a # 1 / b -]
letters = [b]
numbers = []
[1 # a / b -]
"1#a/b-"


ALGORITHM
1. Split string into an array of characters
    - Initialize chars to array split
2. Extract letters from string
    - Use regex match to gather letters
3. Extract numbers from string
    - Use regex match to gather numbers
4. Swap characters based upon letter/number
    - Iterate through chars (map)
        - If char is a letter
            - Remove first character from numbers (shift)
                 - Assign to num
            - If num is undefined
                - return char
            - Otherwise
                - return num
        - If char is a number
            - Remove first character from letters (shift)
                 - Assign to letter
            - If letter is undefined
                - return char
            - Otherwise
                - return letter
5. Return rejoined string
*/

function swap(string) {
  if (!string.length) return '';

  const letters = string.match(/[a-z]/ig) || [];
  const numbers = string.match(/\d/g) || [];

  return [...string].map(char => {
    if (isLetter(char)) {
      let number = numbers.shift();
      if (number) {
        return number;
      } else {
        return char;
      }
    } else if (isNumber(char)) {
      let letter = letters.shift();
      if (letter) {
        return letter;
      } else {
        return char;
      }
    } else {
      return char;
    }
  }).join('')
}

const isLetter = char => /[a-z]/i.test(char);
const isNumber = char => /\d/.test(char);

// TEST CASES

console.log(swap("1a2b3c") === "a1b2c3");
console.log(swap("abcd123") === "123dabc");
console.log(swap("abc1234") === "123abc4");
console.log(swap("abcd1234") === "1234abcd");
console.log(swap("") === "");
console.log(swap("aBcD1234") === "1234aBcD");
console.log(swap("a#1/b-") === "1#a/b-");
console.log(swap("1234") === "1234");
console.log(swap("abcd") === "abcd");
console.log(swap("  abcd\n123 ") === "  123d\nabc ");

console.log('LS Test Cases');

console.log(swap("ab1CD23") === "12a3DbC"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true
