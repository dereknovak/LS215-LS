/* 

12:17 // 12:48

PROBLEM
I: A string of words
O: A copy of the string of words, with 2nd char of every 3rd word converted to uppercase

RULES
- Change character to uppercase
    - Every 3rd word
    - Every odd index
- String should be a copy
- All other characters remain the same

QUESTIONS
- If empty, return empty
- If less than 3 words, return the same string
- Could have special chars
- Will always have 1 string as an argument
- No leading/trailing, always just one space
- May have numbers

EXAMPLE
'Lorem Ipsum is simply dummy text of the printing world'
'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world'

DATA STRUCTURE
- An array for the words
    - Allows us to transform the sentence
- An array for each character in words
    - Allows us to transform the word

"That's Launch School's code"
[That's, Launch, School's, code]
[That's, Launch, SChOoL'S, code]
"That's Launch SChOoL'S code"

School's
[S, c, h, o, o, l, ', s]
[S, C, h, O, o, L, ', S]

APPLICATION
"That's Launch School's code"
[That's, Launch, School's, code]

School's
[S, c, h, o, o, l, ', s]
[S, C, h, O, o, L, ', S]

ALGORITHM
1. Validate input
    - If empty, return empty
2. Capture the words in given string
    - Regex for anything except whitespace (words)
3. Transform every 3rd word to its new form
    - Transform with map with index
        - If index is a multiple of 3 (HELPER)
            - return transformed word to squiggleCase (HELPER)
        - Otherwise
            - return word
4. Rejoin words, and return string

HELPERS
multipleOfThree(idx)
- idx + 1 modulo 3 should equal 0

squiggleCase(string)
- Separate words into (chars)
- Transform chars with map
    - If index is odd (HELPER)
        - return character uppercased
    - otherwise
        - return the character
- Rejoin chars and return word

isOdd(idx)
- idx % 2 is equal to 1
*/

function toWeirdCase(sentence) {
  const words = sentence.match(/\S+/g) || [];
  return words.map((word, idx) => {
    return multipleOfThree(idx) ? squiggleCase(word) : word;
  }).join(' ');
}

function squiggleCase(word) {
  return [...word].map((char, idx) => {
    return isOdd(idx) ? char.toUpperCase() : char;
  }).join('');
}

const multipleOfThree = idx => (idx + 1) % 3 === 0;
const isOdd = idx => idx % 2 === 1;

// TEST CASES

let original = 'Lorem Ipsum is simply dummy text of the printing world'
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world'
console.log(toWeirdCase(original) === expected);

console.log(toWeirdCase('') === '');
console.log(toWeirdCase("That's Launch School's code") === "That's Launch SChOoL'S code");
console.log(toWeirdCase("That's Launch a code") === "That's Launch a code");
console.log(toWeirdCase("123 234 345 456") === "123 234 345 456");
console.log(toWeirdCase("Launch School") === "Launch School");

// Launch School's Test Cases

original = 'It is a long established fact that a reader will be distracted'
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
console.log(toWeirdCase(original) === expected);

original = 'aaA bB c';
expected = 'aaA bB c';
console.log(toWeirdCase(original) === expected);

original = "Mary Poppins' favorite word is supercalifragilisticexpialidocious"
expected = "Mary Poppins' fAvOrItE word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
console.log(toWeirdCase(original) === expected);

// If different kinds of whitespace is used

function toWeirdCase2(sentence) {
  let wordsAndSpaces = sentence.match(/(\s+|\S+)/g) || [];
  wordsAndSpaces = wordsAndSpaces.map((el, idx) => [el, idx]);

  const words = wordsAndSpaces.filter(subArr => /\S/.test(subArr[0]));
  const spaces = wordsAndSpaces.filter(subArr => /\s/.test(subArr[0]));

  const transformedWords = words.map((subArr, idx) => {
    let word = subArr[0];
    let originalIdx = subArr[1];
    word = multipleOfThree(idx) ? squiggleCase(word) : word;
    return [word, originalIdx];
  });
  
  const result = [];
  transformedWords.forEach(subArr => result.splice(subArr[1], 0, subArr[0]));
  spaces.forEach(subArr => result.splice(subArr[1], 0, subArr[0]));
  
  return result.join('');
}

console.log(toWeirdCase("  That's   Launch School's code ") === "  That's   Launch SChOoL'S code ");
console.log(toWeirdCase("\nThat's   Launch School's \tcode ") === "\nThat's   Launch SChOoL'S \tcode ");
