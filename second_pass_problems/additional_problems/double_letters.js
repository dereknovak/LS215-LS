// Create a function that determines how many words from a string contain double-letters.

/* 

10:12 // 10:53

PROBLEM
I: A string
O: A number, representing the amount of words with double letters

- Double Letter
    - Two consecutive letters that are the same
    - Must be consecutive
- A word is any set of characters separated by whitespace
- Will always receive a single argument as a string
- Could have an empty string
    - Return 0
- Case insensitive
- Could have special characters
    - 2 special chars in a row does not count
    - Same rules with numbers and whitespace
- 3 letters will still pass, as 2 letters are consecutive

EXAMPLE
'Books are good source of stuff'
Books ***
are
a
good ***
source
of
stuff ***
=> 3

'Little toy spaceship'
Little ***
toy
spaceship

DATA STRUCTURE
- An array to house words
    - Filter the words that have double letters
    - Determine the length of the array

'Litt"#le   t99oy spa@@ceship glasS.'
[Litt"#le t99oy spa@@ceship glasS]
lowercase/remove anything that is not a letter
[little, toy, spaceship, glass]
little
    [li it tt tl le]
        some => string[0] === string[1]
            t === t
toy
    [to oy]
spaceship
    [sp pa ac ce es sh hi ip]
glass
    [gl la as ss]
[little, glass] => 2

APPLICATION
'@@$ 442'
[@@S, 442]
['', '']
''
    []
''
    []
doubleLetterWords = [] => 0

'Litt"#le   t99oy spa@@ceship glasS.'
[Litt"#le t99oy spa@@ceship glasS]
[little toy spaceship glass]
doubleLetterWords = [little, glass]
little
    [li, it, tt, tl, le]


ALGORITHM
1. Validate input
    - If the string is empty, return 0
2. Capture all words from string
    - Use regex for anything except whitespace
3. Transform words to lowercase letters
    - Use map
        - Use toLowerCaseLetters HELPER
4. Determine which words contain double-letters (doubleLetterWords)
    - Use filter
        - Use getDoubleSubstrings HELPER (groupsOfTwo)
        - Check if some groupsOfTwo are double letters
            - Use some
                - Use isDoubleLetter HELPER
5. Return the count of double-lettered words
    - Return length of doubleLetterWords

HELPERS
toLowerCaseLetters(word)
- Lowercase the word
- Convert word to an array of characters
- Filter for characters that are letters
- Rejoin and return characters

getDoubleSubstrings(word)
- if word length is less than 2
    - Return []
- Initialize substrings to []
- Use a for loop (i = 0, i <= length - 2)
    - Slice word from i to i + 2
    - Push the slice to substrings
- Return substrings

isDoubleLetter(string)
- First char of string is the same as last char of string

*/

function doubleLetterCount(string) {
  if (!string.length) return 0;

  let words = string.match(/\S+/g);
  words = words.map(toLowerCaseLetters);

  const doubleWordLetters = words.filter(word => {
    const groupsOfTwo = getDoubleSubstrings(word);
    return groupsOfTwo.some(isDoubleLetter);
  });

  return doubleWordLetters.length;
}

function getDoubleSubstrings(word) {
  const substrings = [];
  for (let i = 0; i <= word.length - 2; i++) {
    substrings.push(word.slice(i, i + 2));
  }

  return substrings
}

function toLowerCaseLetters(word) {
  word = word.toLowerCase();
  return [...word].filter(char => /[a-z]/.test(char)).join('');
}

const isDoubleLetter = string => string[0] === string[1];

// TEST CASES

console.log(doubleLetterCount('Books are a good source of stuff') === 3);

console.log(doubleLetterCount('BoOks are a good source of stuff') === 3);
console.log(doubleLetterCount('Little toy spaceship') === 1);
console.log(doubleLetterCount('Litt"#le   t99oy spa@@ceship glasS.') === 2);
console.log(doubleLetterCount('sassy glassdoor') === 2);
console.log(doubleLetterCount('@@$ 442') === 0);
console.log(doubleLetterCount('a b') === 0);
console.log(doubleLetterCount('aa') === 1);
console.log(doubleLetterCount('aaaaaaaa') === 1);
console.log(doubleLetterCount('') === 0);
