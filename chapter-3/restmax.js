'use strict';
//This code demonstrates the rest parameter. It uses the ellipsis to indicate that it is a rest parameter. It is of type array and can contain any number of arguments.
const max = function(...values) {
    console.log(values instanceof Array);

    let large = values[0];

    for(let i = 0; i < values.length; i++) {
	if(values[i] > large) {
	    large = values[i];
	}
    }

    return large;
}

console.log(max(2, 1, 5, 4));
