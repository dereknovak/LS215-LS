/* 

PROBLEM
I: A string
O: A boolean, representing if the word can be spelled with the blocks

- Each block has 2 letters and can only be used once
- Words are case-insensitive

QUESTIONS
- Can there be an empty string?
- Can there be special chars? (dash?)

EXAMPLE
BATCH
- B:O
- N:A
- G:T
- C:P
- H:U
true

BUTCH
- B:O
- H:U
- G:T
- C:T
- H:U <= again
false

DATA STRUCTURE
- An array of blocks (each block is a string of 2 letters

ALGORITHM
1. Create the array of blocks
2. Determine which blocks are used in the string
    - Declared blocksUsed to an empty array
    - forEach
    - Iterate through each block
        - If the character lowercased matches of one the letters (includes)
            - Push the index of the block to blocksUsed
3. If any blocks are used more than once, return false, otherwise true
    - Tally the counts (helper)
    - If any values are greater than 1, return false

HELPER tally(arr)
- Initialize an empty object
- Iterate through arr
    - If the objects keys includes it
        - increment the value
    - Otherwise
        - Add a new property to 1
- Return the object
*/

function isBlockWord(string) {
  const BLOCKS = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're',
                  'fs', 'jw', 'hu', 'vi', 'ly', 'zm'];
  const blocksUsed = [];

  [...string.toLowerCase()].forEach((letter) => {
    BLOCKS.forEach((block, blockNum) => {
      if (block.includes(letter)) blocksUsed.push(blockNum);
    });
  });

  return Object.values(tally(blocksUsed)).every(num => num < 2);
}

function tally(arr) {
  const result = {};
  arr.forEach(element => {
    if (Object.keys(result).includes(String(element))) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  });

  return result;
}

// TEST CASES

console.log(isBlockWord('BATCH') === true);
console.log(isBlockWord('BUTCH') === false);
console.log(isBlockWord('') === true);
