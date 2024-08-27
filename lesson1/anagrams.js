/*
PROBLEM:
I: A string
I: An array of strings, potential anagrams
O: An array of the anagrams

- Case doesn't seem to matter

EXAMPLE:
listen:
- enlist ***
- google
- inlets ***
- banana

DS:
- An array for potential and returned anagrams

ALGORITHM:
- Sort word alphabetically
    - split/sort/join
- Find the anagrams within the `list` array
    - filter
    - sort word alphabetically
        - create a new variable
    - Check whether the word is the same as original
        - return a boolean
*/

function sortString(str) {
  return str.split('').sort().join('');
}

function isAnagram(str1, str2) {
  return sortString(str1) === sortString(str2);
}

function anagram(word, list) {
  return list.filter(testWord => (isAnagram(word, testWord)));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]