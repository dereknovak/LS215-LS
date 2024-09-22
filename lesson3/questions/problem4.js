/* 

5:16 / 5:45

PROBLEM
I: An 2D array of random elements
O: A flattened array with duplicates removed

- Duplicates
    - number can match string
        - 13 === '13'
    - Will include strings and numbers
- Data types
    - Strings
    - Numbers
    - Booleans
- Keep the element that comes first
    - If '1' comes before 1, just use '1'
- If array is empty, return an empty array
- No special characters, except negative
- Remove any whitespace that exists
- String can be empty, only 1 empty string should be returned
- String can have letters/numbers
    - In this case, its a unique string
- Pay attention to 0
- Sort in the order that they appear
- true === 'true'

EXAMPLE
[1, 2, 3, '3', 4, 5, 'a']
[1, 2, 3, 4, 5, 'a']

DATA STRUCTURE
- Use an object to keep track of first index
    - If, when converted to a string, it matches the key, do not create a property

['  13', true, -2, '-2', 'dxd32', ['true']]
{'  13': 0, 'true': 1, '-2': 2, 'dxd32': 4}

ALGORITHM
1. Flatten the array
    - flat()
    - assign to flatArr
2. Determine first index of all similar elements
    - Initialize firstOccurrences to getFirstOccurrences HELPER
3. Filter using index
    - Use filter (track index)
        - If the values of firstOccurrences includes index
            - return
4. Return the filtered array

HELPERS
getfirstOccurrences(arr)
- Initialize firstOccurrence object
- Iterate through flatArr (forEach, track index)
    - If stringified element does not exist in firstOccurrence
        - Add stringified element as a key
        - Value is the current index
- Return firstOccurrences
*/

function flattenAndUnique(arr) {
  const flatArr = arr.flat();
  const firstOccurrences = getFirstOccurrences(flatArr);
  return flatArr.filter((_, idx) => Object.values(firstOccurrences).includes(idx));
}

function getFirstOccurrences(arr) {
  const firstOccurrences = {};
  arr.forEach((element, idx) => {
    if (!firstOccurrences[String(element)]) {
      firstOccurrences[String(element)] = idx;
    }
  });

  return firstOccurrences;
}

// TEST CASES

console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, '2', 3], [2, '3', 4, 5, 'a']])); // [1, '2', 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, false, 3], [2, true, '3', 4, 5, false, 'a']])); // [1, false, 3, 2, true, 4, 5, 'a']
console.log(flattenAndUnique(['  13', true, -2, '-2', 'dxd32', ['true']])); // ['  13', true, -2, 'dxd32']