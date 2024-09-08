/* 

PROBLEM
I: A 2D array with 'w' and 'c' strings nested
O: A boolean, representing if every crop is properly hydrated

RULES
- Each water source hyradates 8 tiles around it
    - Similar to minesweeper
- w => water
- c => crop
- Array sizes may vary

QUESTIONS
- Will arrays always share the same size with others in the group?
- Will there always be an array input?

EXAMPLE
  [ "c", "c", "c*", "c*" ],
  [ "w", "c", "c*", "c*" ],
  [ "c", "c", "c", "c*" ],
  [ "c", "w", "c", "c*" ]
   (stars represent which cannot be watered)

Crop1 => row, column
- Check row - 1, column - 1, column, column + 1
- Check row, column - 1, column, column + 1
- Check row + 1, column - 1, column, column + 1
- Check 
    - If none are 'w', then it is not hydrated

DATA STRUCTURE
- A nested array for input

ALGORITHM
- Iterate through the field using index
    - Iterate through a row using index
        - If a value is 'c'
            - Declare a row variable
            - Declare a column variable
            - Check previous row
                - Delcare previousRow
                    - If undefined, skip
                - Slice out columns 1 less to 1 more
                - Check if includes 'w'
            - Check current row
                - Slice out columns 1 less to 1 more
                - Check if includes 'w'
            - Check next row
                - Declare nextRow
                    - If undefined, skip
                - Slice out columns 1 less to 1 more
                - Check if includes 'w'
            - If any ^^^^ return true, continue
            - Otherwise, return false
- Return true            
*/
const CROP = 'c';

function cropHydrated(field) {
  for (let row = 0; row < field.length; row += 1) {
    for (let col = 0; col < field[row].length; col += 1) {
      if (field[row][col] === CROP) {
        let previousRow = field[row - 1];
        let nextRow = field[row + 1];
        let currentRow = field[row]

        if (containsWater(waterableLand(previousRow, col)) ||
            containsWater(waterableLand(nextRow, col)) ||
            containsWater(waterableLand(currentRow, col))) {
              continue;
            }

        return false; 
      }
    }
  }

  return true;
}

function waterableLand(row, col) {
  let startIdx = col === 0 ? 0 : col - 1;
  let endIdx = col + 2;

  return row ? row.slice(startIdx, endIdx) : [];
}

function containsWater(arr) {
  return arr.includes('w');
}

// TEST CASES

console.log(cropHydrated([
              [ "c", "c", "c", "c" ],
              [ "w", "c", "c", "c" ],
              [ "c", "c", "c", "c" ],
              [ "c", "w", "c", "c" ]
            ]) === false);
console.log(cropHydrated([
              [ "w", "c" ],
              [ "w", "c" ],
              [ "c", "c" ]
            ]) === true);
console.log(cropHydrated([
              [ "c", "c", "c" ]
            ]) === false);
console.log(cropHydrated([
              [ "w", "w", "w" ]
            ]) === true);
console.log(cropHydrated([
              [ "w", "w", "w" ]
            ]) === true);
console.log(cropHydrated([
              [ "w", "c" ],
              [ "c", "c" ]
            ]) === true);
console.log(cropHydrated([
              [ "c", "w" ],
              [ "c", "c" ]
            ]) === true);
console.log(cropHydrated([
              [ "c", "c" ],
              [ "w", "c" ]
            ]) === true);
console.log(cropHydrated([
              [ "c", "c" ],
              [ "c", "w" ]
            ]) === true);
console.log(cropHydrated([
              [ "c", "c", "c", "c" ],
              [ "c", "w", "c", "c" ],
              [ "c", "c", "w", "c" ],
              [ "c", "c", "c", "c" ]
            ]) === false);
console.log(cropHydrated([
              [ "c", "c", "c", "c" ],
              [ "c", "w", "w", "c" ],
              [ "c", "w", "w", "c" ],
              [ "c", "c", "c", "c" ]
            ]) === true);