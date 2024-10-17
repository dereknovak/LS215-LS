/* 

11:39 // 12:26

PROBLEM
I: An object, containing opponents and their position
I: A number, representing your position
O: A number, representing the closest active opponent to your position

- Active opponent
    - Return the position that is closest to yours (2nd input)
- If there are 2 that are the same distance, return the higher position
- A position will either be a number or null
- Will always receive 2 args, object and number
- Will not be any other value aside from number/null
- Name of player doesn't matter
- Position will always be greater than 0
- If no opponents, return null
- Just opponent name/position in object
- Opponents cannot have duplicate positions
- Keys have no sorting

EXAMPLE
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15
Position = 10
O1 => 9
o2 => 5
o3 => 27

DATA STRUCTURE
- An array to house the values of the object
    - Remove any values that are null
    - Sort the values ascending
    - Transform the values into an object
        - Key: 'position'
        - Value: position
        - Key: distance
        - Value distance
    - Sort the array again by object distances (a - b)

{ "Opponent 1" : 1,
  "Opponent 2" : 2,
  "Opponent 3" : 3
}, 60))

values = [1, 2, 3]
distances = [1: 59, 2: 58, 3: 57]
[{position: 3, distance: 57}, {position: 2, distance: 58}, {position: 1, distance: 59}]

APPLICATION
  {"Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : null, "Opponent 1e" : null
}, 150
positions = [1, 5, 50, null, null]
positions = [1, 5, 50]
distances = [{position: 1, distance: 149}, {position: 5: distance: 145}, {position: 50, distance: 100}]
distances = [{position: 50, distance: 100}, {position: 5: distance: 145}, {position: 1, distance: 149}]

ALGORITHM
1. Validate the input
    - If object is empty, return null
2. Capture the values of the object
    - Object values
3. Remove all nulls from from values
    - Filter for anything but null
4. Sort values ascending
    - Sort (a - b)
5. Transform values to an object containing their distances
    - Use map
        - Use toPositionAndDistance HELPER
6. Sort the array of objects by their distance (a - b)
    - Use sort
        - Use byDistance HELPER
7. Check if the first 2 object contain the same distance
    - If element 0 distance === element 1 distance
        - Return the position of element 1
8. Return the position of the first object
    - Otherwise, return the position of element 0

HELPERS
toPositionAndDistance(playerPosition, opponentPosition)
- Initialize distance to absolute value of playerPosition - opponentPosition
- Return an object
    - Key: position
        - Value: position
    - Key: distance
        - Value: distance

byDistance(a, b)
- Return a.distance - b.distance
*/

function findClosestOpponent(opponents, playerPosition) {
  if (!Object.keys(opponents).length) return null;

  let positions = Object.values(opponents).filter(notNull).sort((a, b) => a - b);

  let distances = positions.map(opponentPosition => {
    return toPositionAndDistance(playerPosition, opponentPosition);
  }).sort(byDistance);

  return positionsEquidistant(distances) ? distances[1].position : distances[0].position;
}

function toPositionAndDistance(playerPosition, opponentPosition) {
  let distance = Math.abs(playerPosition - opponentPosition);
  return {position: opponentPosition, distance: distance};
}

const positionsEquidistant = distances => distances[0].distance === distances[1].distance;
const byDistance = (a, b) => a.distance - b.distance;
const notNull = value => value !== null;

// TEST CASES

// Happy Path
console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

// Player with null position
console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : null, "Opponent 1e" : null
}, 150)); // 50

// No sorting
console.log(findClosestOpponent({
  "Opponent 1" : 15,
  "Opponent 2" : 1,
  "Opponent 3" : 37
}, 10)); // 15

// Weird case
console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 2,
  "Opponent 3" : 3
}, 60)); // 3

// No players
console.log(findClosestOpponent({}, 45)); // null