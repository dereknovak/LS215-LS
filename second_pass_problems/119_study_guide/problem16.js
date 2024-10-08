//Create a method that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. You may assume that the input string contains only alphanumeric characters.
 20 mins
/* 

PROBLEM
I: A string of alpha chars and numbers
O: A number, representing how many chars appear more than once

RULES
- Only letters and numbers
- If empty string, return 0
- Case insenstive (A === a)
- May receive no args, return null if case
- Anything more than one counts as 1 set 

EXAMPLE
'xyz' => 0
xxyypzzr => 3

DATA STRUCTURE
- An object
    - Create a tally for counts
        - If a char has more than 1, increment our total number

'xxyypzzr'
{x: 2, y: 2, p: 1, z: 2, r: 1}
moreThanOne = 3

APPLICATION
'xxyypzzr'
tally = {x: 2, y: 2, p: 1, z: 2, r: 1}
moreThanOne = 3



ALGORITHM
1. Validate input
    - If arg is undefined, return null
    - If string is empty, return 0
2. Lowercase string
3. Create a tally of all character counts
    - Use getTally HELPER (tally)
4. Determine how many characters have more than 1 count
    - Initialize moreThanOne to 0
    - Iterate through the tally (for in)
        - If the current value is greater than 1
            - Increment moreThanOne by 1
5. Return the total count
    - Return moreThanOne

HELPERS
getTally(string)
- Initialize tally to {}
- Iterate through each char of string
    - If that char is a property of tally
        - Increment the value by 1
    - Otherwise
        - Create a property in tally for that char
            - Key: char
            - Value: 1
- Return tally
*/

function distinctMultiples(string) {
  if (string === undefined) return null;
  if (!string.length) return 0;

  string = string.toLowerCase();
  const tally = getTally(string);

  let moreThanOne = 0;
  for (let char in tally) {
    if (tally[char] > 1) {
      moreThanOne += 1;
    }
  }
  
  return moreThanOne;
}

function getTally(string) {
  const tally = {};
  [...string].forEach(char => {
    if (tally[char]) {
      tally[char] += 1;
    } else {
      tally[char] = 1;
    }
  });

  return tally;
}

// TEST CASES

console.log(distinctMultiples('xyz') === 0); 
console.log(distinctMultiples('xyz112233') === 3); 
console.log(distinctMultiples('xyzxyz') === 3); 
console.log(distinctMultiples('xyzxyzxyzxyz') === 3); 
console.log(distinctMultiples('XYZxyz') === 3); 
console.log(distinctMultiples('xxyypzzr') === 3);
console.log(distinctMultiples('') === 0);
console.log(distinctMultiples() === null);

console.log(distinctMultiples('xyz') === 0);
console.log(distinctMultiples('xxyypzzr') === 3);
console.log(distinctMultiples('xXyYpzZr') === 3);
console.log(distinctMultiples('unununium') === 2);
console.log(distinctMultiples('multiplicity') === 3)
console.log(distinctMultiples('7657') === 1);
console.log(distinctMultiples('3141592653589793') === 4);
console.log(distinctMultiples('2718281828459045') === 5);