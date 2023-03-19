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
// const { name, age: theAge } = sam;

//Example of extracting computed properties. To extract the computed properties, we use the [] notation.
const { [weight]: wt, [Symbol.for('favoriteColor')]: favColor } = sam;


// Street is a nested property is extracted. Use caution; this syntax defines only two variables: name and street. It does not define the address variable. We can access name and street but when we attempt to access address, we will result in an error 'variable not defined'
//const { name, address: { street } } = sam;
//console.log(address);

//To avoid name collisions, we provide different local variable names. We can keep the variable the same as the property for one of the properties and assign a different name for the other.
const { name, address: { street }, shipping: { street: shipStreet } } = sam;

// We can destruct an object into an existing variable by wrapping the expression with (). If we do not wrap the expression with (), we will get an error of 'Unexpected toke ='.
let theName = '--';
({ name: theName } = sam);
console.log(theName);
