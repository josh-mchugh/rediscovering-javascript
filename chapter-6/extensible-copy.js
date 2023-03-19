'use-strict';
//Using the spread operator with object destructing we are able to update, add and maintain the existing values of an object. Using this pattern is critical from the extensibility point of view and will minimize the need to track down bugs later one.
const addAge = function(person, theAge) {
    return {...person, last: person.last.toUpperCase(), age: theAge };
};

const parker = { first: 'Peter', last: 'Parker', email: 'spiderman@superheroes.com' };
console.log(addAge(parker, 15));
