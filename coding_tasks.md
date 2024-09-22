## Substrings

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
/*
```

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