/* 

PROBLEM
I: A string, text with parentheses
O: A boolean, rep if the text parentheses is balanced

- Each ( should have a matching )

HYPOTHESIS
- Keep track of parentheses count
    - Each time ( is encountered, +1
    - Each time ) is encountered, -1
    - If ever in negatives, return false

EXAMPLE
- ((What) (is this))?
  yy      y => true

- ((What)) (is this))?
  yy       y        n => false

ALGORITHM
- Create count variable
- Iterate thru text chars
    - if (
        - count + 1
    - if )
        - count -1
    return false if count < 0
- Return if count = 0
*/

function isBalanced(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '(') {
      count += 1;
    } else if (text[i] === ')') {
      count -= 1;
    }

    if (count < 0) return false;
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);