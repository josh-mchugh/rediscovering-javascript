'use-strict';
//Promises can have three states: Pending, Resolved, Rejected. If an asynchronous function has not completed it's task it is in a pending state. When a asynchronous function completes it's task it will be set to resolved and generatores or emits the results passed through it. If a promosies asynchronous finishes with an error, then it sets the promise into the rejected state and generates or emits the error passed through it. Promises can be chained together with 'then()' and 'catch()' functions. Successfully asynchronouse functions move on to the next 'then()' function until the chain is over. However, once an error occurs the 'catch()' functions are called until the chain is over.
const computeSqrtAsync = function(number) {
    if(number < 0) {
	return Promise.reject('no negative number, please');
    }
    if(number === 0) {
	return Promise.resolve(0);
    }
    return new Promise(function(resolve, reject) {
	setTimeout(() => resolve(Math.sqrt(number)), 1000);
    });
};

const forNegative1 = computeSqrtAsync(-1);
const forZero = computeSqrtAsync(0);
const forSixteen = computeSqrtAsync(16);

console.log(forNegative1);
console.log(forZero);
console.log(forSixteen);

//Calls to functions that return promises are noblocking, which will immediately flow to the next statement after the function call.
//Whether a promise rejects or resolves immediately or at a laeter time, the way to handle the response is just the same. Successful responses use the 'then()' function. Unsuccessful responses use the 'catch()' function.
//Since the calls are asynchronous, there is no guarantee of the order of the printed messages.
const reportOnPromise = function(promise) {
    promise.then(result => console.log(`result is ${result}.`))
	.catch(error => console.log(`ERROR: ${error}`));
};

reportOnPromise(forNegative1);
reportOnPromise(forZero);
reportOnPromise(forSixteen);
