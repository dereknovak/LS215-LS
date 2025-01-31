/*
Write a program that cleans up user-entered phone numbers so that they can be
sent as SMS messages. Other than digits, the number may also contain special
character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

- If the phone number is less than 10 digits, assume that it is a bad number.
- If the phone number is 10 digits, assume that it is good.
- If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
- If the phone number is 11 digits and the first number is not 1, then it is a bad number.
- If the phone number is more than 11 digits, assume that it is a bad number.
- For bad numbers, just a return a string of 10 0s.

PROBLEM
I: A string, containing digits that can be used as a phone number
O: A string of 10 digits, representing the cleaned up number

RULES
- Good numbers:
    - 10 digits
    - 11 digits, but first number is 1
        - trim the 1
- Bad numbers:
    - Less than 10 digits
    - More than 11 digits
    - 11 digits, but first number is not 1
- String may contain:
    - spaces
    - dash
    - dot
    - parentheses
- If bad input
    - Return 10 0s

QUESTIONS:
- Will inputs other than strings ever be passed in?
    - Number?
    - Array of numbers?
- What if the input has negative numbers?
    - Dashes would be removed
- Should the output be a string as well?

EXAMPLE
' 11 56#4f5?}6>-78:"_90' => 11564567890 => 1564567890


DS
- Will not need

ALGORITHM
1. Remove all of the non digits from number
    - Use replace
2. Check if digits length < 10 or > 11
    - Return '0000000000';
3. If 10, return digits
4. If first digit is 1, trim and return digits
    - Slice from index 1 to the end
5. Return '0000000000';
*/

function phoneNumberCleanup(phoneNum) {
  let digits = phoneNum.replace(/\D+/g, '');
  if (digits.length < 10 || digits.length > 11) return '0000000000';
  if (digits.length === 10) return digits;
  return digits[0] === '1' ? digits.slice(1) : '0000000000';
}

// Test cases

console.log(phoneNumberCleanup('1234567890') === '1234567890');
console.log(phoneNumberCleanup('11234567890') === '1234567890');
console.log(phoneNumberCleanup('123-456-7650') === '1234567650');
console.log(phoneNumberCleanup('(132)456-7890') === '1324567890');
console.log(phoneNumberCleanup('123/456/7890') === '1234567890');
console.log(phoneNumberCleanup(' 1 23#4f5?}6>-78:"_90') === '1234567890');
console.log(phoneNumberCleanup(' 11 56#4f5?}6>-78:"_90') === '1564567890');
console.log(phoneNumberCleanup('123456789') === '0000000000');
console.log(phoneNumberCleanup('91234567890') === '0000000000');
console.log(phoneNumberCleanup('123456789012') === '0000000000');
console.log(phoneNumberCleanup('1/2345(67)8-9012') === '0000000000');
console.log(phoneNumberCleanup('') === '0000000000');
console.log(phoneNumberCleanup('qwertyuiop12') === '0000000000');



