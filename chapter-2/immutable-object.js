//BROKEN CHANGE
//This example shows how to make use the Object.freeze function with const to make immutable objects where the object refernce and interal values are immutable. It is a shallow freeze and only effect thte first level.
'use strict';
const sam = Object.freeze({ first: 'Sam', age: 2 });

//sam = {};

sam.age = 3;

console.log(sam.age);
