'use-strict';
//Promises can handle multiple asynchronous tasks at once. The 'race()' function takes multiple promises and returns the first one to resolve first. With the 'race()' function we do not have to wait for the additional promises to complete, the first one to finish is adequate.
const createPromise = function(timeInMillis) {
    return new Promise(function(resolve, reject) {
	setTimeout(() => resolve(timeInMillis), timeInMillis);
    });
};

const createTimeout = function(timeInMillis) {
    return new Promise(function(resolve, reject) {
	setTimeout(() => reject(`timeout after ${timeInMillis} MS`), timeInMillis);
    });
};

Promise.race([createPromise(1000), createPromise(2000), createTimeout(3000)])
    .then(result => console.log(`completed after ${result} MS`))
    .catch(error => console.log(`ERROR: ${error}`));

Promise.race([createPromise(3500), createPromise(4000), createTimeout(2000)])
    .then(result => console.log(`completed after ${result} MS`))
    .catch(error => console.log(`ERROR: ${error}`));
