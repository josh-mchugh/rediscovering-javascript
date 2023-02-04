//This code will evaluate all of them to be false since b is a derent type than a and c.
//a and c are if different values so they are not equal even though they are the same type
const a = '1';
const b = 1;
const c = '1.0';

console.log(a === b);
console.log(b === c);
console.log(a === c);
