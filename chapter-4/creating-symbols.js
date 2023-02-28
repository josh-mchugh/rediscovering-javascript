'use-strict';
//The Symbol() creates a new unique Symbol. The argument passed in it has no signifiances to it's uniqueness. In this example all the Symbols are unique and none are equal to each other.
const name = 'Tom';
const tom = Symbol(name);
const jerry = Symbol('Jerry');
const anotherTom = Symbol(name);

console.log(tom);
console.log(typeof(tom));
console.log(tom === jerry);
console.log(tom === anotherTom);
