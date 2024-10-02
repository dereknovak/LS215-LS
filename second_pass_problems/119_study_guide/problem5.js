/* 
Changed slightly to fit 216 format

1:51 // 2:20

PROBLEM
I: A string of words
O: An array of strings, representing the most used character in each string

RULES
- Each word will have its own most used character
- Uppercase and lowercase are the same
    - Lowercase everything
- Could be special chars and numbers
- Words are separated by whitespace
- If empty string, return an empty array

EXAMPLE
'Hello World'
'l'
'w'
['h', 'w']

DATA STRUCTURE
- An object to keep track of character counts
    - Find the highest number used, and return that character

'Heollo World'
'heollo world'
['heollo', 'world']
'heollo'
    [h e o l l o]
    {h: 1, e: 1, o: 2, l: 2}
    [o, l, l, o, h, e]
'world'
    [w o r l d]
    {w: 1, o: 1, r: 1, l: 1, d: 1}
    [w o r l d]
[o, w]

APPLICATION
'Heollo World'
'heollo world'
['heollo', 'world']
mostUsedChars = [o, w]
'heollo'
    [h e o l l o]
    {h: 1, e: 1, o: 2, l: 2}
    [o, l, l, o, h, e]
'world'
    [w o r l d]
    {w: 1, o: 1, r: 1, l: 1, d: 1}
    [w o r l d]

ALGORITHM
1. Validate input
    - If empty, return []
2. Lowercase the string
3. Capture all words in the string
    - Use regex for everything except whitespace
4. Determine the most used character in each string
    - Initialize mostUsedChars to []
    - Iterate through each word (forEach)
        - Split string into characters (chars)
        - Initialize a character tally (HELPER)
        - Sort chars by their frequency (b - a)
        - Push the first element of chars to mostUsedChars
5. Return mostUsedChars

HELPER
characterTally(characters)
- Initialize tally to {}
- Iterate through chars
    - If character is a property of tally
        - Increment value by 1
    - Otherwise
        - Create a property for tally
            - Key: character
            - Value: 1
- Return the tally
*/

function mostCommonChars(sentence) {
  sentence = sentence.toLowerCase();

  const words = sentence.match(/\S+/g) || [];
  const mostUsedWords = [];

  words.forEach(word => {
    let chars = [...word];
    const tally = characterTally(chars);
    chars.sort((a, b) => tally[b] - tally[a]);
    mostUsedWords.push(chars[0]);
  });

  return mostUsedWords;
}

function characterTally(chars) {
  const tally = {};
  chars.forEach(char => {
    if (tally[char]) {
      tally[char] += 1;
    } else {
      tally[char] = 1;
    }
  });

  return tally;
}

// TEST CASES

console.log(mostCommonChars('Hello World')); // ['l', 'w']
console.log(mostCommonChars('HeLlo World')); // ['l', 'w']
console.log(mostCommonChars('Heollo World')); // ['o', 'w']
console.log(mostCommonChars('Mississippi')); // ['i']
console.log(mostCommonChars('')); // []
console.log(mostCommonChars('Hello World 424 ch@r$hs')); // ['l', 'w', '4', 'h']
console.log(mostCommonChars('  Hello  World\n')); // ['l', 'w']
console.log(mostCommonChars('Hello World 424 @ch@r$hs')); // ['l', 'w', '4', '@']