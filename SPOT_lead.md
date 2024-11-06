# Problems

## Strings

```js
// Given a string of words, find the highest scoring word in the sentence. Each letter of a word scores points according to its position in the alphabet:

// a = 1, b = 2, c = 3...

console.log(highestScoringWord('man i need a taxi up to ubud') === 'taxi');

console.log(highestScoringWord('man i n$eed a tax"i up to ubud') === 'tax"i');
console.log(highestScoringWord('Man i need A Taxi up to ubud') === 'Taxi');
console.log(highestScoringWord('a b z d') === 'z');
console.log(highestScoringWord('ab ba aa') === 'ab');
console.log(highestScoringWord('') === null);
console.log(highestScoringWord('what time are we climbing up the volcano') === 'volcano');
console.log(highestScoringWord('take me to semynak') === 'semynak');
console.log(highestScoringWord('aaa b') === 'aaa');

```

```js
// Create a function that determines how many words from a string contain double-letters.

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
```

## Arrays

```js
// Create a function that counts the amount of subarrays in a 2D array that contain the same elements as a given array.

console.log(sameElements([[1, 2, 3], [2, 3, 4], [3, 1, 2]], [1, 2, 3]) === 2);

console.log(sameElements([[1, 2, 3], [2, 3, 4], [3, 1, 2]], [1, 1, 2, 3]) === 0);
console.log(sameElements([[1, 2, 3, 1], [2, 3, 4], [3, 1, 2]], [1, 2, 3]) === 2);
console.log(sameElements([['1', 2, 3], [2, 3, 4], [3, 1, 2]], [1, 2, 3]) === 1);
console.log(sameElements([[null, false, true], ['string', true, true], [false, 29, null]], [null, false]) === 2);
console.log(sameElements([[1, 2, 3], [2, 3, 4], [3, 1, 2]], []) === 3);
console.log(sameElements([[]], [1, 2, 3]) === 0);
console.log(sameElements([], [1, 2, 3]) === null);
```

```js
// Given an array of strings, group all anagrams together.

function match(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(match(anagramGroup(["act", "pots", "tops", "cat", "stop", "hat"]), [["hat"],["act", "cat"],["pots", "tops", "stop"]]));

// Order subarrs by length
// Order subarr elements by appearance
// Case-insensitive
console.log(match(anagramGroup(["act", "pots", "tops", "cat", "stop", "hat", "fire", "water"]), [["hat"], ["fire"], ["water"], ["act", "cat"],["pots", "tops", "stop"]]));
console.log(match(anagramGroup(["", "act", "pots", "tops", "cat", "stop", ""]), [["", ""],["act", "cat"],["pots", "tops", "stop"]]));
console.log(match(anagramGroup([]), []));
console.log(match(anagramGroup(["listen", "silent", "enlist", "inlets", "google", "elgoog"]), [["google", "elgoog"], ["listen", "silent", "enlist", "inlets"]]));
console.log(match(anagramGroup(["apple", "banana", "carrot"]), [["apple"], ["banana"], ["carrot"]]));
console.log(match(anagramGroup(["race", "care", "acre", "dog", "god", "cat"]), [["cat"], ["dog", "god"], ["race", "care", "acre"]]));
console.log(match(anagramGroup(["loop", "loop", "polo", "pool"]), [["loop", "loop", "polo", "pool"]]));
console.log(match(anagramGroup(["Dormitory", "dirtyroom", "DirtyRoom", "Listen", "Silent", "Enlist"]), [["Dormitory", "dirtyroom", "DirtyRoom"], ["Listen", "Silent", "Enlist"]]));
console.log(match(anagramGroup(["hello"]), [["hello"]]));
console.log(match(anagramGroup(["abc", "bca", "cab", "acb", "bac", "cba"]), [["abc", "bca", "cab", "acb", "bac", "cba"]]));
console.log(match(anagramGroup(["a", "aa", "aaa", "a"]), [["aa"], ["aaa"], ["a", "a"]]));
console.log(match(anagramGroup(["123", "231", "312", "ab@", "@ab", "ba@"]), [["123", "231", "312"], ["ab@", "@ab", "ba@"]]));
```

```js
// Create a function that returns the count of almost palindromes from a list of words. An almost palidrome is a word whose letters can be rearranged to form a palindrome.

console.log(countAlmostPalindromes(['ana', 'break', 'raecacr']) === 2);

console.log(countAlmostPalindromes(['coattac', 'break', 'aaa']) === 2);
console.log(countAlmostPalindromes(['a', 'aa', 'aaa']) === 2);
console.log(countAlmostPalindromes(['a', 'break', 'Derek']) === 0);
console.log(countAlmostPalindromes(['Derek', 'Mom', 'Papa']) === 2);
console.log(countAlmostPalindromes(['@ana', 'break', 'carrace8']) === 2);
console.log(countAlmostPalindromes([]) === 0);
```
