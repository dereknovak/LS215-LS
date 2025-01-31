/*

PROBLEM
I: A string of digits and other chars
O: Boolean, whether it is valid per the Luhn formula

RULES
- Step 1
    - Double every 2nd digit from right to left
        - 1111 => 2121
    - If any digit exceeds 10, subract 9
        - 8763 => [7]7[3]3
- Step 2
    - Add numbers together
    - If sum does not end in 0, not valid

QUESTIONS
- Will the input always be a string?
- Will the input always have groups of 4 digits?
- IF there are no digits, should false be returned?

DATA STRUCTURE
- An array for all the digits
    - Digits will need to be transformed

EXAMPLE
1111 => 1121 => 2121
8763 -> 8733 => 7733

2 + 1 + 2 + 1 => 6 (does not end in zero - not valid)
7 + 7 + 3 + 3 => 20 (ends in zero - valid)

2323 2005 7766 3554
4343 4005 5736 6514
14 9 21 16 => 60

8763

ALGORITHM
1. Sanitize Input
    - Indidual digits should end up in an array
    - Replace non-digit chars, convert to array of nums
2. Transform the digits based on double rules
    - Initialize a transformedArray
    - Initialize a counter to keep track of current distance from right
        - => 0
    - Use a for loop to loop backwards (length determined by digits length
        - Assign digit to currentDigit
        - If even distance
            - Push digit to array
        - Otherwise
            - Reassign currentdigit to double
            - If currentDigit >= 10
                Push digit - 9 to array
            - Otherwise
                push digit to array
      - Incremenet distanceFromRight
3. Sum the digits
    - Reduce
4. Check whether the sum ends in zero
    - Return true if Sum % 10 === 0, false otherwise

HELPER
isEven
*/

function luhnCheck(string) {
  const digits = string.replace(/\D+/g, '').split('').map(Number);
  if (digits.length === 0) return false;
  
  const transformedDigits = [];
  let distanceFromRight = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    let currentDigit = digits[i];
    if (isEven(distanceFromRight)) {
      transformedDigits.push(currentDigit);
    } else {
      currentDigit *= 2;
      transformedDigits.push(currentDigit >= 10 ? currentDigit - 9 : currentDigit);
    }

    distanceFromRight += 1;
  }

  return transformedDigits.reduce((sum, num) => sum + num) % 10 === 0;
}

const isEven = num => num % 2 === 0;

// TEST CASES

console.log(luhnCheck('8763') === true);
console.log(luhnCheck('2323 2005 7766 3554') === true);
console.log(luhnCheck('23:"23 2dfs005 7sdfc/766 3554') === true);
console.log(luhnCheck('8klj763') === true);
console.log(luhnCheck('876:"{3') === true);
console.log(luhnCheck('  87 6 3   ') === true);
console.log(luhnCheck('42') === true);
console.log(luhnCheck('232') === true);
console.log(luhnCheck('1111') === false);
console.log(luhnCheck('') === false);
console.log(luhnCheck('1111 2005 7766 3554') === false);