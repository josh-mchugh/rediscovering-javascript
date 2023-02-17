'use strict';
//This example shows how a function can declare zero parameters as in JavaScript there is a type called arguments. It's not an instance of Array but an Array wannabe. Do not use `arguments`. Use `rest` parameter instead.
const max = function() {
    console.log(arguments instanceof Array);

    let large = arguments[0];

    for(let i = 0; i < arguments.length; i++) {
	if(arguments[i] > large) {
	    large = arguments[i];
	}
    }

    return large;
}

console.log(max(2, 1, 7, 4));
