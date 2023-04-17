## Chapter 10

Modern JavaScript promises replace callbacks for asynchronous programming. Promises are nonblocking and will eventually return a result or an error to the caller through the promise. Promises are a lot easier to work with compared to calbacks. Their structure is a lot like functional style programming. With promises it is easier to propagate errors and recover from them as well.

## readfile.js
Any method that does not return instantaneously should be asynchronous. Traditional approach to designing asynchronous functions relied on callbacks. Callback functions are hard to resuse. Sometimes a callback requires a callback to recieve data and this leads to callback hell.