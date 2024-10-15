## All Substrings

```js
function getSubstrings(string) {
  const substrings = [];
  for (let start = 0; start < string.length; start++) {
    for (let end = start + 1; end <= string.length; end++) {
      substrings.push(string.slice(start, end));
    }
  }

  return substrings;
}

let string = 'launch';
let substrings = getSubstrings(string);

console.log(substrings);
/*
[
  'l',    'la',    'lau',
  'laun', 'launc', 'launch',
  'a',    'au',    'aun',
  'aunc', 'aunch', 'u',
  'un',   'unc',   'unch',
  'n',    'nc',    'nch',
  'c',    'ch',    'h'
]
*/
```

- Also works for arrays, just change `string` to `array`.

## Consecutive groups

```js
function getDoubleSubstrings(word) {
  const substrings = [];
  for (let i = 0; i <= word.length - 2; i++) {
    substrings.push(word.slice(i, i + 2));
  }

  return substrings
}

let string = 'launch';
let substrings = getDoubleSubstrings(string);

console.log(substrings);
/*
[ 'la', 'au', 'un', 'nc', 'ch' ]
*/
```

- When selecting the length of the grouping, change `word.length -` and `i +` to the respective number.
    - Groups of 2 => `word.length - 2` / `i + 2`
    - Groups of 3 => `word.length - 3` / `i + 3`
- If length is outside the range of the string, an empty array will be returned.

## Pairs

```js
function getPairs(arr) {
  const pairs = [];
  for (let first = 0; first < arr.length - 1; first++) {
    for (let second = first + 1; second <= arr.length - 1; second++) {
      pairs.push([arr[first], arr[second]]);
    }
  }

  return pairs;
}

let numbers = [1, 2, 3, 4, 5];
let pairs = getPairs(numbers);

console.log(pairs);
/*
[
  [ 1, 2 ], [ 1, 3 ],
  [ 1, 4 ], [ 1, 5 ],
  [ 2, 3 ], [ 2, 4 ],
  [ 2, 5 ], [ 3, 4 ],
  [ 3, 5 ], [ 4, 5 ]
]
*/
```

- For groups of 3 or more, add another `for` loop layer incremented by 1 from previous layer.
    - `for (let third = second + 1...`
    - `for (let fourth = third + 1...`

## Tally

```js
function getTally(string) {
  const tally = {};
  [...string].forEach(char => {
    tally[char] = tally[char] + 1 || 1;
  });

  return tally;
}

let string = 'mississippi';
let tally = getTally(string);

console.log(tally);
// { m: 1, i: 4, s: 4, p: 2 }

```

## Matching Arrays

```js
function arraysMatch(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function arraysMatch2(arr1, arr2) {
  return arr1.every((_, idx) => arr1[idx] === arr2[idx]);
}

let arr1 = [1, "apple", null, undefined, 8.8, false];
let arr2 = [1, "apple", null, undefined, 8.8, false];
let arr3 = [1, "apple", null, undefined, 8.8, false, [1, 2, 3], { a: 1 }];
let arr4 = [1, "apple", null, undefined, 8.8, false, [1, 2, 3], {a: 1}];


console.log(arraysMatch(arr1, arr2) === true);   // true
console.log(arraysMatch(arr3, arr4) === true);   // true

console.log(arraysMatch2(arr1, arr2) === true);  // true
console.log(arraysMatch2(arr3, arr4) === true);  // false (cannot compare objects)
```

## Copy Array

```js
let array = ['a', 'b', 'c'];
let newArray = array.slice();

console.log(array);               // ['a', 'b', 'c']
console.log(newArray);            // ['a', 'b', 'c']

console.log(array === newArray);  // false
```

## Copy Object

```js
let obj = {start: 1, end: 5};
let newObj = Object.fromEntries(Object.entries(obj));

console.log(obj);             // { start: 1, end: 5 }
console.log(newObj);          // { start: 1, end: 5 }

console.log(obj === newObj);  // false
```