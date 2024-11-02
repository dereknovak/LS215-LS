// Create a function that counts the amount of subarrays in a 2D array that contain the same elements as a given array.

function sameElements(arrays, testArray) {
  if (!arrays.length) return null;

  const matchingArrays = arrays.filter(subarr => {
    return hasSameElements(subarr, testArray);
  });

  return matchingArrays.length;
}

function hasSameElements(subarr, testArray) {
  const currentArr = subarr.slice();

  for (let i = 0; i < testArray.length; i++) {
    let currentElement = testArray[i];
    let foundElementIdx = currentArr.indexOf(currentElement);

    if (foundElementIdx === -1) return false;
    currentArr.splice(foundElementIdx, 1);
  }

  return true;
}

console.log(sameElements([[1, 2, 3], [2, 3, 4], [3, 1, 2]], [1, 2, 3]) === 2);

console.log(sameElements([[1, 2, 3], [2, 3, 4], [3, 1, 2]], [1, 1, 2, 3]) === 0);
console.log(sameElements([[1, 2, 3, 1], [2, 3, 4], [3, 1, 2]], [1, 2, 3]) === 2);
console.log(sameElements([['1', 2, 3], [2, 3, 4], [3, 1, 2]], [1, 2, 3]) === 1);
console.log(sameElements([[null, false, true], ['string', true, true], [false, 29, null]], [null, false]) === 2);
console.log(sameElements([[1, 2, 3], [2, 3, 4], [3, 1, 2]], []) === 3);
console.log(sameElements([[]], [1, 2, 3]) === 0);
console.log(sameElements([], [1, 2, 3]) === null);


