'use strict';
//The rest parameter is an Array so it can be used in it in a more fluent and functional way. We can use functional programmer to calculate the max value from the rest paramter values in a sinle line of code.
const max = function(...values) {
    return values.reduce((large, e) => large > e ? large : e, values[0]);
}
console.log(max(2, 1, 7, 4));
