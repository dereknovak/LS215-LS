/* 

PROBLEM
I: A string, text to analyze
O: Log to console (see example)

- positive/negative words are dictated
- If more positive, then positive
- If more negative, then negative
- Neutral if the same
- Words can appear multiple times

DS
- An array of all the words
- Arrays for both positive and negative words

ALGORITHM
- Convert string to array of words
- Filter twice
    - First for positive
    - Second for negative
    - To filter, determine whether the word is included in either arrays
- Output the respective info
- Determine which list is longer and output its info

*/

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let words = text.toLowerCase().match(/[a-z']+/g)
  let positives = words.filter(isPositive);
  let negatives = words.filter(isNegative);

  logCounts('positive', positives);
  logCounts('negative', negatives);

  let sum = positives.length - negatives.length;
  let result;
  if (sum > 0) {
    result = 'Positive';
  } else if (sum < 0) {
    result = 'Negative';
  } else {
    result = 'Neutral';
  }

  console.log(`The sentiment of the text is ${result}.`);
}

function logCounts(type, words) {
  let count = words.length;
  console.log(`There are ${count} ${type} words in the text.`);
  console.log(`${capitalize(type)} sentiments: ${words.join(', ')}\n`);
}

const capitalize = word => word[0].toUpperCase() + word.slice(1);
const isPositive = word => positiveWords.includes(word.toLowerCase());
const isNegative = word => negativeWords.includes(word.toLowerCase());

sentiment(textExcerpt);

/*

console output

There are 5 positive words in the text.
Positive sentiments: fortune, dream, respect, love, resolution

There are 6 negative words in the text.
Negative sentiments: die, heartache, die, death, weary, death

The sentiment of the text is Negative.

*/