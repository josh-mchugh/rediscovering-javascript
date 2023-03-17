'use-strict';
//Destructing is one of the most powerful features of modern JavaScript. It allows us extract data from arrays and object. It removes the excessive and repetitive use of indexing operators or dots to get data within arrays or objects.
//In the below example we are able to extract the first 3 variables in the array and assign them to variables and use them within a template literal.
const getPresidentName = function(number) {
    //implemented only for number 6
    return ['John', 'Quincy', 'Adams'];
};

const [firstName, middleName, lastName] = getPresidentName(6);

console.log(`${firstName} ${middleName} ${lastName}`);

//We can use destructing to swap two values and eliminates the need for temporary variables to store the values while we move them around.
let [a, b] = [1, 2];
console.log(`a=${a} b=${b}`);
[a, b] = [b, a];
console.log(`a=${a} b=${b}`);

//We can use Array Destructing to extract values in the parameter list from arguments passed to the function.
const printFirstAndLastOnly = function([first,, last]) {
    console.log(`first ${first} last ${last}`);
};

printFirstAndLastOnly(['John', 'Q', 'Adams']);
