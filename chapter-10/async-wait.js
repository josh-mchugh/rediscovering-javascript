'use-strict';
//To be able to use an asynchronous function as if it were a synchronouse function, optionally mark the promise returning asynchronous function with the keyword 'async'. To call asynchronous functions as if it were synchronous, place the 'await' keyword in front of the call. The 'await' keyword may be used only within functions marked 'async'.
//When deciding to use async-await consider:
//If the code is not an async function then you cannot use await. Use 'then/catch'.
//If you are converting legacy synchronous code to make it asynchronous. 'await' will preserve the code structure.
//It is often easier to prototype a synchronous version of a function and then convert it to the asynchronous version when needed.
//At times, use cuation - async-await maybe error prone if the function that we are waiting for completion modifies a shared state.
const computeSync = function(number) {
    if(number < 0) {
        throw new Error('no negative, please');
    }
    return number * 2;
};

const computeAsync = function(number) {
    if(number < 0) {
        return Promise.reject('no negative, please');
    }
    return Promise.resolve(number * 2);
};

//Example of calling a synchronous function
const callComputeSync = function(number) {
    try {
        const result = computeSync(number);
        console.log(`Result is ${result}`);
    } catch(ex) {
        console.log(ex.message);
    }
};

//Example of calling an asynchronous function with Promise
const callComputeAsync = function(number) {
    computeAsync(number)
        .then(result => console.log(`Result is ${result}`))
        .catch(err => console.log(err));
};

//Example of calling an asychronous function with a Promise as a synchronouse style
const callCompute = async function(number) {
    try {
        const result = await computeAsync(number);
        console.log(`Result is ${result}`);
    } catch(ex) {
        console.log(err);
    }
};

callComputeSync(2);
callComputeAsync(2);
callCompute(2);
