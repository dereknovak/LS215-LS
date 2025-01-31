/* 

PROBLEM
I: A string
O: A string, rep an acronym of the input string

- Separated by:
    - spaces
    - commas
    - dashes
    - colons

HYPOTHESIS
- Split by non-letter characters

ALGORITHM
acronym
- Split string into words
- Transform word to its first letter, uppercased
- Return the joined string

*/

function acronym(string) {
  return string.split(/[^a-z]+/i).map(word => word[0].toUpperCase()).join('');
}

console.log(acronym('Portable Network Graphics') === "PNG");
console.log(acronym('First In, First Out') === "FIFO");
console.log(acronym('PHP: HyperText Preprocessor') === "PHP");
console.log(acronym('Complementary metal-oxide semiconductor') === "CMOS");
console.log(acronym('Hyper-text Markup Language') === "HTML");