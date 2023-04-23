## Chapter 10

Modern JavaScript promises replace callbacks for asynchronous programming. Promises are nonblocking and will eventually return a result or an error to the caller through the promise. Promises are a lot easier to work with compared to calbacks. Their structure is a lot like functional style programming. With promises it is easier to propagate errors and recover from them as well.

## readfile.js
Any method that does not return instantaneously should be asynchronous. Traditional approach to designing asynchronous functions relied on callbacks. Callback functions are hard to resuse. Sometimes a callback requires a callback to recieve data and this leads to callback hell.

## create-promise.js
Promises can have three states: Pending, Resolved, Rejected. If an asynchronous function has not completed it's task it is in a pending state. When a asynchronous function completes it's task it will be set to resolved and generatores or emits the results passed through it. If a promosies asynchronous finishes with an error, then it sets the promise into the rejected state and generates or emits the error passed through it. Promises can be chained together with 'then()' and 'catch()' functions. Successfully asynchronouse functions move on to the next 'then()' function until the chain is over. However, once an error occurs the 'catch()' functions are called until the chain is over.

## readfile-with-promises.js
Promises have a nice feature which is they form a pipeline like in the functional composition like arrow functions. In our examples the calls to 'countLinesWithText()' are asynchronous and the order of the output is not predicatable.

## race.js
Promises can handle multiple asynchronous tasks at once. The 'race()' function takes multiple promises and returns the first one to resolve first. With the 'race()' function we do not have to wait for the additional promises to complete, the first one to finish is adequate.

## all.js & count-prime-service.js
The 'all()' method on Promise takes an array of promises and passes an array of results. If any one of the promises is rejected, then the 'catch()' is used. The 'all()' function returns all the successful results as an array after they have completed asynchronously and concurrently.

## async-await.js
To be able to use an asynchronous function as if it were a synchronouse function, optionally mark the promise returning asynchronous function with the keyword 'async'. To call asynchronous functions as if it were synchronous, place the 'await' keyword in front of the call. The 'await' keyword may be used only within functions marked 'async'.
