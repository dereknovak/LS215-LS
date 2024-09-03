function mysteriousMath(string) {
  return string.replace(/[\+\-\*\/]/g, '?');
}

let equation1 = '4 + 3 - 5 = 2';
let equation2 = '(4 * 3 + 2) / 7 - 1 = 1';

console.log(mysteriousMath(equation1));
// '4 ? 3 ? 5 = 2'
console.log(mysteriousMath(equation2));
// '(4 ? 3 ? 2) ? 7 ? 1 = 1'
console.log(equation1);
console.log(equation2);