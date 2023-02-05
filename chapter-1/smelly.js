'use strict';
const sample = function(number) {
    const factor = 4;

    if(number === 2) {
	return number * factor;
    }

    return number * 10;
};

console.log(sample(2));
