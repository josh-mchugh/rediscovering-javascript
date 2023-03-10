'use-strict';
//Template literals are strings with embedded expressions. The expressions may be a single variable, multiple variables with operations, a function call, or combinations of them.
const name1 = 'Jack';
const name2 = 'Jill';

console.log(`Hello ${name1} and ${name2}`);

const item = 'cake';
console.log(`The kid asked, "how's the ${item}?`);

const price = 1;
console.log(`The price of a { symbol is $${price * 0.01}.`);

console.log(`Shout out greeting: ${'hello'.toUpperCase()}`);
