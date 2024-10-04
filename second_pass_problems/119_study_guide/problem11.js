/* 

9:41 // 10:14

PROBLEM
I: A string
O: An array containing the shortest possible substring and largest repeat count

RULES
- There will be no empty strings
- The substring times its repetions should equal the original string
- If no substring is possible, return the entire string and 1
- Always lowercase
- Could have numbers and special chars

EXAMPLE
'xyzxyzxyz'
xyz => 3

DATA STRUCTURE
- An array to house all possible repeating substrings
    - Return the substring with the highest repetition

'abababab'
'a' x
'ab' 4
STOP
'aba' x
'abab' 2

APPLICATION
'abababab'
substring = 'ab'
[a b a b a b a b]
currentChar = 'b'

count = 4
substring = ab



ALGORITHM
1. Find the shortest substring and its repetition
    - Initialize substring to ''
    - Iterate through each char of the string (for loop)
        - Initialize currentChar to current index in given string
        - Reassign substring to itself + current char
        - Check whether the substring is a repeating substring of given string (HELPER)
            - If it does, return its value
2. Return an array with that information

HELPERS
isRepeatingSubstring(substring, string)
- Initialize count to string length / substring length ceil
- If substring * count = string
    - Return [substring, count]
-Otherwise
    - Return null
*/

function repeatedSubstring(string) {
  let substring = '';
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    substring += currentChar;

    let result = isRepeatingSubstring(substring, string);
    if (result) return result;
  }
}

function isRepeatingSubstring(substring, string) {
  const count = Math.ceil(string.length / substring.length);
  return substring.repeat(count) === string ? [substring, count] : null;
}

// TEST CASES

console.log(repeatedSubstring('xyzxyzxyz')); // ['xyz', 3]
console.log(repeatedSubstring('xyxy')); // ['xy', 2]
console.log(repeatedSubstring('xy23xy23')); // ['xy23', 2]
console.log(repeatedSubstring('xy2@!xy2@!')); // ['xy@!', 2]
console.log(repeatedSubstring('a')); // ['a', 1]
console.log(repeatedSubstring('launch')); // ['launch', 1]
console.log(repeatedSubstring('abababab')); // ['ab', 4]
