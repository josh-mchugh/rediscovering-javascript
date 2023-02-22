'use-strict';
//The rest parameter has a default value of an empty array. The first value is undefined.
const product = function(first, second = 1, ...moreValues) {
    console.log(first + ', ' + second + ', length:' + moreValues.length);
};

product();
