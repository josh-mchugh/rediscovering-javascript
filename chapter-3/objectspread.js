'use strict';
//The spread operator on the object can copy a new object and allow for modifing and adding values to the object. This is a great pattern for immutability, and provides a elegant and concise pattern.
const sam = { name: 'Sam', age: 2 };

console.log(sam);
console.log({...sam, age: 3});
console.log({...sam, age: 4, height: 100});
console.log(sam);
