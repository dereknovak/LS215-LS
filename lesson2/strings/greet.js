let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');

if (name.indexOf('!') === -1) {
  console.log(`Hello ${name}.`);
} else {
  name = name.replace(/!/g, '');
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
}