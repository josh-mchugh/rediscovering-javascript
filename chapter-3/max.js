'use strict';
// This example code shows how JavaScript functions calls can take any number of parameters. If there are to many, they are simply ignored. If there are to few, they are set as undefined.
const max = function(a, b) {
    if(a > b) {
	return a;
    }
    return b;
}

console.log(max(1, 3));
console.log(max(4, 2));
console.log(max(2, 7, 1));
console.log(max(8));
console.log(max());
