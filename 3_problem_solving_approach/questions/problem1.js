/* 

10:57/11:23

PROBLEM
I: An array of strings
I: A number, representing which distinct string should be returned
O: A string, representing the nth distinct string in the array

- Distinct String
    - Present only once in the array
    - Case sensitive
- Number
    - Indicates which distinct string should be returned
    - Not 0 indexed
    - If fewer than k distinct strings, an empty string should be returned

QUESTIONS
- Always 2 args, an array and a number?
    - Yes
- Empty array?
    - Yes, return empty string
- Spare array?
    - No
- Mutate input array?
    - No
- Special Chars? Whitespace? Numbers?
    - No, just letters
- Number always a number?
    - Yes
- Float?
    - No
- Zero?
    - Empty string
- Less than 0?
    - No
EXAMPLE
"d","b","c","b","c","a"
d 1
b 2
c 2
a 1
distinct => d a
2 => a

DATA STRUCTURE
- An object to keep track of counts
    - Tally HELPER
- Filter array, using tally

APPLICATION
"d","b","c","b","c","a" / 2
{d: 1, b: 2, c: 2, a: 1}
[d, a]


ALGORITHM
1. If array is empty or number is 0, return empty string
2. Tally all of the strings in array
    - Use tally HELPER
3. Filter the original array with strings that are distinct
    - Iterate through input array
        - Use filter
        - Using tally, Return whether the string has a count of 1 
4. Return the string at index k - 1 OR empty string

HELPERS
tally(array)
- Initialize result to an empty object
- Iterate through array (forEach)
    - If object contains string as a key
        - Increment by 1
    - Otherwise
        - Create property to 1
- Return the result
*/

function distinctString(arr, k) {
  if (arr.length === 0 || k === 0) return '';

  const tally = stringTally(arr);
  const distinct = arr.filter(string => tally[string] === 1);
  return distinct[k - 1] || '';
}

function stringTally(arr) {
  const result = {};
  arr.forEach(string => {
    if (result[string]) {
      result[string] += 1;
    } else {
      result[string] = 1;
    }
  });

  return result;
}

// alternate

function distinctString1(arr, k) {
  return arr.filter(string => arr.indexOf(string) === arr.lastIndexOf(string))[k - 1] || '';
}

// TEST CASES

console.log(distinctString1(["d","b","c","b","c","a"], 2) === "a");
console.log(distinctString1(["d","b","c","f","c","a"], 2) === "b");
console.log(distinctString1(['hello', 'world', 'world', 'launch', 'school'], 3) === "school");
console.log(distinctString1(["d","b","c","B","c","a"], 2) === "b");

console.log(distinctString1(['hello', 'world', 'world', 'launch', 'school'], 4) === "");
console.log(distinctString1(['hello', 'world', 'world', 'hello', 'school', 'school'], 2) === "");
console.log(distinctString1(['hello', 'world', 'world', 'launch', 'school'], 0) === "");
console.log(distinctString1([], 2) === "");
