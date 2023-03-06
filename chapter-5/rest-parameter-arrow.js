'use-strict';
//The arrow function can use the rest parameter within its parameter list.
const greet = (message, ...subjects) => console.log(message + ' ' + subjects.join(', '));

greet('Hi', 'Developers', 'Geeks');
