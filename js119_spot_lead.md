## Longest Palindrome

```js
/*
Given a string, write a method/function which returns the number of 
characters present in the largest palindrome substring. If no palindromes
are present, return -1.
*/

longestPalindrome('supertacocat') === 7;
longestPalindrome('MomAndDad') === 3;
longestPalindrome('Palindrome') === -1;
```
### Solution

```js
function longestPalindrome(string) {
  let palindromes = getSubstrings(string).filter(isPalindrome);
  if (!palindromes.length) return -1;
  return Math.max(...palindromes.map(string => string.length));
}

function getSubstrings(string) {
  const substrings = [];

  for (let start = 0; start < string.length; start++) {
    for (let end = start + 1; end <= string.length; end++) {
      substrings.push(string.slice(start, end));
    }
  }

  return substrings;
}

function isPalindrome(string) {
  string = string.toLowerCase();
  return [...string].reverse().join('') === string && string.length > 1;
}

const byLength = (a, b) => b.length - a.length;
```

## Expand Sequence

```js
/*
Given a string, multiply each letter by the most recent preceding number in
the string. Return a new string containing only the letters, multiplied by
their preceding number.
*/

multString('1a2b3c') === 'abbccc';

multString('3abc') === 'aaabbbccc';
multString('123abc') === 'aaabbbccc';
multString('2g4ab13t0gh') === 'ggaaaabbbbttt';
multString('a5b20hi3cw') === 'bbbbbcccwww';
```

### Solution

```js
function multString(sequence) {
  let multiplier = 0;
  let result = '';

  [...sequence].forEach(char => {
    if (/\d/.test(char)) {
      multiplier = Number(char);
    } else {
      result += char.repeat(multiplier);
    }
  });

  return result;
}
```