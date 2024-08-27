/*
Algorithm:
- Select only the squares from rectangles
    - filter
- Transform rectangles into their areas
    - map
- Find total sum of all areas
    - reduce
*/

function area(rectangle) {
  let side1 = rectangle[0];
  let side2 = rectangle[1];

  return side1 * side2;
}

function add(num1, num2) {
  return num1 + num2;
}

function isASquare(rectangle) {
  let side1 = rectangle[0];
  let side2 = rectangle[1];

  return side1 === side2;
}

function totalArea(rectangles) {
  return rectangles.map(area).reduce(add);
}

function totalSquareArea(rectangles) {
  return rectangles.filter(isASquare).map(area).reduce(add);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));        // 141
console.log(totalSquareArea(rectangles));  // 121
