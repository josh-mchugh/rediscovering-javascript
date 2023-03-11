'use-strict';
//Template literals may be nested as well. If a nested template literal is hard to understand, then brak the nested template literal into a seperate regular function or an arrow function.
const hours = 14;
const event = 'meeting';

console.log(`The ${event} will happen ${hours < 12 ? `in the morning` : `later in the day, in the ${hours < 20 ? `evening` : `night`}`}.`);
