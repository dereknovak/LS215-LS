/*

PROBLEM
I: A string, rep a version number
I: A string, rep a version number
O: 1, -1, 0, or null, comparing the versions together

RULES
If version1 > version2 => 1
If version1 < version2 => -1
If version1 === version2 => 0
If either are not in the correct format, return null

- Each set of decimals is an entire set of numbers
    - .9 < .50 < .901
    - Therefore, each of these should be compared in its entirety


QUESTIONS
- Will the inputs always be in a string format? 1? 1.0?
- The problem says these are all legal versions, but is this just the format?
Could the decimals keep going? (1.1.1.1.1.1)

HYPOTHESIS
- Will need to split each version by the decimal points

EXAMPLE
'5.20.16', '5.18.16'
[5, 20, 16], [5, 18, 16]
5, 5 => same
20, 18 => > => 1
(Rest short circuits)

5.20.0.0, 5.20
5, 5 => good
20, 20 => good
0, undefined

DATA STRUCTURE
- Use an array for the groups of numbers
- Nest the array within the object, version1 and version2

ALGORITHM
1. Check whether inputs have non-digit/decimial characters
    - Use regex to check for non digits/decimial
        - If a match is found, return null
2. Transform the version into an array of numbers
    - Match with regex numbers to create an array
    - Iterate with map
        - Convert string to a number
3. Place versions within an object, version1 => version1, etc

4. Compare each number and return if an inequality exists
    - Determine the longest array, get its length
        - Sort by length, then save second index
    - Iterate using a for loop using length
        - Assign versions to variables
            - currentv1, currentv2
        - Check if either are === undefined
            - If so, reassign that version to 0
        - Compare the indexes
            - If version1 is greater, return 1
            - If version2 is greater, return -1
5. If no inequalities, return 0
*/

function compareVersions(version1, version2) {
  if (!([version1, version2].every(goodInput))) return null;
  version1 = version1.match(/\d+/g);
  version2 = version2.match(/\d+/g);
  const versions = { 1: version1.map(Number), 2: version2.map(Number) };
  let length = Object.values(versions).sort((a, b) => a.length - b.length)[1].length;

  for (let i = 0; i < length; i++) {
    let currentv1 = versions[1][i] || 0;
    let currentv2 = versions[2][i] || 0;

    if (currentv1 > currentv2) return 1
    if (currentv1 < currentv2) return -1
  }

  return 0;
}

function goodInput(version) {
  return /^\d+(\.\d+)*$/.test(version);
}




console.log(compareVersions('1', '2') === -1);
console.log(compareVersions('5', '2') === 1);
console.log(compareVersions('6', '6') === 0);
console.log(compareVersions('1', '4.2') === -1);
console.log(compareVersions('3.52', '3.1') === 1);
console.log(compareVersions('3', '3.0') === 0);
console.log(compareVersions('0.23', '1.13') === -1);
console.log(compareVersions('5.20.16', '5.18.16') === 1);
console.log(compareVersions('1.18.2', '13.37') === -1);
console.log(compareVersions('1.2', '1.2.0.0') === 0);
console.log(compareVersions('1..2', '1.2.0.0') === null);
console.log(compareVersions('.1', '1') === null);
console.log(compareVersions('w', '1.2') === null);
console.log(compareVersions('1.2.w', '2.1') === null);
console.log(compareVersions(' 1.2', '5.6') === null);
console.log(compareVersions('[]', '1.2') === null);
