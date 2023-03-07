'use-strict';
//Example below of how anonymous functions can be named as parameter and used ina recursive manner.
//Arrow functions cannot be named and used as such.
setTimeout(function repeat(count) {
    console.log('anonymous called...');
    if(count > 1)
	setTimeout(repeat.bind(null, count - 1), 1000);
}.bind(null, 5), 1000);
