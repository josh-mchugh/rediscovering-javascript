'use-strict';
//
const weight = 'WeightKG';

const sam = {
    name: 'Sam',
    age: 2,
    height: 110,
    address: { street: '404 Missing St.' },
    shipping: { street: '500 NoName St.' },
    [weight]: 15,
    [Symbol.for('favoriteColor')]: 'Orange',
};

// Example of extracting values from the object with the old technique
// const firstName = sam.name;
// const theAge = sam.age;

//Example of extracting the values of 'name' and 'age' into 'theAge' and 'firstName' variables.
//Instead of thinking extracting think of it as pattern matching.
// const { name: firstName, age: theAge } = sam;

//Example of extracting to variables with the same name
const { name, age: theAge } = sam;

//Example of extracting computed properties. To extract the computed properties, we use the [] notation.
const { [weight]: wt, [Symbol.for('favoriteColor')]: favColor } = sam;
