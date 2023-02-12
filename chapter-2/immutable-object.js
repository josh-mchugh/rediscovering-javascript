//BROKEN CHANGE
//This example shows how to make use the Object.freeze function with const to make immutable objects where the object refernce and interal values are immutable. It is a shallow freeze and only effect thte first level.
//The code below fails when sam.age is assigned to 3. A runtime error occurs with the message 'TypeError: Cannot assign to read only property 'age' of object '#<Object>'
'use strict';
const sam = Object.freeze({ first: 'Sam', age: 2 });

//sam = {};

sam.age = 3;

console.log(sam.age);
