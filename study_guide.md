https://ryandej.medium.com/ls216-practice-problems-e68c3df04be4

# SPOT SESSION with Laren

Most important to know
    - Test/Match/Replace

To prevent off-by-one error
    - Test loop

Patterns
// Making all combinations of 2 or more elements:
// example of all possible groups of 3

for (let idx1 = 0; idx1 < array.length - 2; idx1 += 1) {
  for (let idx2 = idx1 + 1; idx2 < array.length - 1; idx2 += 1 {
    for (let idx3 = idx2 + 1; idx3 < array.length; idx3 += 1 {
      let group = [array[idx1], array[idx2], array[idx3]];
    }
  }
}

Questions to ask:
- 

/*
1. Validate data

2. Clean data
    - Validate again if necessary
3. Create proper data structure
4. Perform operation: Comparison, test, transformation
5. Return result of test (boolean or null)
*/

/*
1. Validate data
2. Clean data
3. Create proper data structure
    - Validate again if necessary
4. Perform operation: Comparison, test, transformation
5. Return result of test (boolean or null)
*/

/*
Arguments
- more than 1 arg,
- less than 1 arg (no arg)
- mutated or not
- what if i got a diff data type for this input

Array
- empty
- length matters or not
- sparse
- unexpected data types? mixed?
- duplicates 

Object
- empty
- expected values and keys
- values: mixed types, all one types
- key: should be a string ->

String:
- empty
- unexpected chars alphnum chars
- upperCase lowerCase => case sensitive or case insensitive
  1. all upperCase
  2. all lowerCase
  3. mixed case
- does the return case matter
- whitespace sensitive 

Numbers:
- Fractional/ Decimal/ Integer
   => round, to what place
- negatives
- special: NaN, infinity
- String version of Numbers
    => individual digits or not
- Range or min or max Numbers
- 0
*/

Have a list ready to ask

Data Structure
- Flesh out why your choice is correct