'use-strict';
//Reflect provides new and elegant ways to get and change the prototype of an object. Moding the prototype of an object is a risky buisness and should be sed judiciously and sparingly.
const today = new Date();
console.log(Reflect.getPrototypeOf(today));

const myPrototype = {};
Reflect.setPrototypeOf(today, myPrototype);

console.log(Reflect.getPrototypeOf(today));
