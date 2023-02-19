'use strict';
//The spread operator looks similar to the rest paramter. It appears on the function calling side. The spread operator is the opposite of the rest parameter as it spreads and breaks down a collect into discrete values. The array tj uses the spread operator when it is used with the function greet.
const greet = function(...names) {
    console.log('hello ' + names.join(', '));
}

const jack = 'Jack';
const jill = 'Jill';
greet(jack, jill);

const tj = ['Tom', 'Jerry'];
greet(...tj);
