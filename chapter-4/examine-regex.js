'use-strict';
//This example explores the RegExp and it's implmentation Symbol and it's associated properties. We can tell from the logs that that RegExp has a handful of SymbolProperties.
const regex = /cool/;

process.stdout.write('regex is of type RegExp: ');
console.log(regex instanceof RegExp);

process.stdout.write('Properties of regex: ');
console.log(Object.getOwnPropertyNames(regex));

process.stdout.write('Symbol properties of regex: ');
console.log(Object.getOwnPropertySymbols(regex));

console.log("Symbol properties of regex's prototype: ");
console.log(Object.getOwnPropertySymbols(Object.getPrototypeOf(regex)));
