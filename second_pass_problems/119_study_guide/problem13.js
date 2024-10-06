/* 

10:43 // 11:17

PROBLEM
I: A string
I: A string
O: A boolean, representing if some portion of the chars in first string can be rearranged to match the characters in the second string

RULES
- Some portion of first string can be rearrange to create second string
    - Hello => he
- Could be upper/lower. However, case insensitive
    - Convert string to lowercase
- Can be whitespace
    - Just worry about letters
- Neither string can be empty
- Will always have 2 strings as arguments

EXAMPLE
'schloo', 'launchschool'
launchschool

DATA STRUCTURE
- An array for the second string letters
    - Delete a letter when its found
    - Empty the array is empty at the end, return true
- Use a for loop for going through the first string

'ansuc chloh lo', 'launch school'
firstString = 'ansuc chloh lo'
secondString = 'launch school'

firstArray = [a n s u c c h l o h l o]
secondArray = [ ], empty => true

'a', 'aaaa'
firstArray = [a]
secondArray = [ a a]

APPLICATION
'ansuc chloh lo', 'launch school'
string1 = 'ansuc chloh lo'
string2 = 'launch school'

arr1 = [a n s u c c h l o h l o]
arr2 = []
idx = 4
1, 3, 4, 1, 1, 2, 1, 0, 1, 0, 1, 0

ALGORITHM
1. Lowercase both strings
    - toLowerCase()
2. Capture letters for both strings
    - Use captureLetters HELPER
3. Iterate through firstArray and determine if all characters are uniquely present in secondArray
    - Use arelettersPresent HELPER
4. If secondArray is empty, return true

HELPERS
captureLetters(string)
- Regex match for a-z OR []

areLettersPresent(array1, array2)
- Iterate through array1 (forEach)
    - Determine index of character in array2 (indexOf) (idx)
    - If idx does not equal -1
        - Splice 1 character from array2 at idx for a count of 1
- Return whether array2 is empty
*/

function unscramble(string1, string2) {
  const arr1 = captureLetters(string1);
  const arr2 = captureLetters(string2);

  return areLettersPresent(arr1, arr2);
}

function areLettersPresent(arr1, arr2) {
  arr1.forEach(letter => {
    const idx = arr2.indexOf(letter);

    if (idx !== -1) arr2.splice(idx, 1);
  });

  return arr2.length === 0;
}

const captureLetters = string => string.toLowerCase().match(/[a-z]/g);

// TEST CASES

console.log(unscramble('ansucchlohlo', 'launchschool') === true);
console.log(unscramble('ansucclohlo', 'launchschool') === false);
console.log(unscramble('ansucchtolohlo', 'launchschool') === true);
console.log(unscramble('aaaaaaa', 'aaa') === true);
console.log(unscramble('aaaaaaa', 'aba') === false);
console.log(unscramble('ansuc Chloh lo', 'launch school') === true);
console.log(unscramble('ansUcchlOhlo', 'Launch School') === true);
console.log(unscramble('a', 'aaaa') === false);
console.log(unscramble('tansucchlohlo', 'launchschool') === true);

// ADDITIONAL TEST CASES
console.log(unscramble('phyarunstole', 'pythonrules') === true);
console.log(unscramble('phyarunstola', 'pythonrules') === false);
console.log(unscramble('boldface', 'coal') === true);