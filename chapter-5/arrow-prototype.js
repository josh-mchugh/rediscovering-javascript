'use-strict';
//JavaScript uses prototypal inheritance. Arrow functions do not have prototype property unline regular functions.
const aFunc = function() {};
const anArrow = () => {};

console.log(aFunc.prototype);
console.log(anArrow.prototype);
