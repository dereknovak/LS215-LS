/* 

10:11 // 10:25

PROBLEM
I: A long string
I: A short string
O: A number, representing how many times the short string occurs in the long string

RULES
- Each letter can only be used once
    - babab, bab only has 1 instance
- 2nd arg will never be an empty string
- First arg could be an empty string
    - Return 0
- Case sensitive
- Could have special chars & numbers
- No whitespace

EXAMPLE
'babab', 'bab'
'ab'
1

DATA STRUCTURE
- Array using regex
    [bab]

[undefined, 'string', undefined, 'string', undefined, null, true, 'string', undefined, 'string', undefined] // [undefined, 'string', undefined]

APPLICATION
'babBab', 'bab'
regex = 'bab', 'g'
[bab]

APPLICATION2


ALGORITHM
1. Validate input
    - If first string is empty, return 0
2. Create a regex object using the second string
    - new RegExp
        - first arg: second string
        - second arg: g
3. Match the first string using the regex object
    - Use match
    - If no matches, assign to []
4. Return the length of the matches

ALGORITHM2


HELPERS
getSubstrings(string, length)
- Initialize substrings to []
- Use for loop (startIdx = 0, i + length <= string length, i increment by 1)
    - Initialize currentSet to []
    - Use for loop (i = startIdx, i + length <= string length, i increment by length)
        - Push a slice of string from i to i + length to currentSet
    - Push currentSet to substrings
- Return substrings
*/

function countSubarrays(array, subarray) {
  const stringArray = JSON.stringify(array);
  const stringSubarray = JSON.stringify(subarray)
                             .split('')
                             .filter(char => !/[\[\]]/.test(char))
                             .join('');

  const regex = new RegExp(stringSubarray, 'g');
  const matches = stringArray.match(regex) || [];
  
  return matches.length;
}


function countSubstrings(string, substring) {
  const regex = new RegExp(substring, 'g');
  const matches = string.match(regex) || [];

  return matches.length;
}


// TEST CASES

// console.log(countSubstrings('babab', 'bab') === 1);
// console.log(countSubstrings('babbab', 'bab') === 2);
// console.log(countSubstrings('babBab', 'bab') === 1);
// console.log(countSubstrings('12341232', '123') === 2);
// console.log(countSubstrings('121412121', '121') === 2);
// console.log(countSubstrings('@!?%@!?', '@!?') === 2);
// console.log(countSubstrings('', 'bab') === 0);
// console.log(countSubstrings('aaaaaaa', 'a') === 7);
// console.log(countSubstrings('babab', 'lol') === 0);


console.log(countSubarrays([undefined, 'string', undefined, 'string', undefined, null, true, 'string', undefined, 'string', undefined], [undefined, 'string', undefined]) === 2);
console.log(countSubarrays([undefined, 'string', undefined, 'string', undefined, 'string', undefined, null, true, 'string', undefined, 'string', undefined], [undefined, 'string', undefined]) === 3);