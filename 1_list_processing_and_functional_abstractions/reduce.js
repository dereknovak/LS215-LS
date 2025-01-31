function myReduce(array, func, initial) {
  let arrayCopy = array.slice();
  let result = initial || arrayCopy.splice(0, 1)[0];
  
  arrayCopy.forEach(num => result = func(result, num));
  return result;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49