'use strict';
//The rest parameter is an Array so it can be used in it in a more fluent and functional way. We can use functional programmer to calculate the max value from the rest paramter values in a sinle line of code.
// Rest parameters have a few simple rules:
// 1. The rest paramter must be the last formal paramter.
// 2. There can be at most one rest paramter.
// 3. The rest paramter must only contain values that have not been given an explicity name.
const max = function(...values) {
    return values.reduce((large, e) => large > e ? large : e, values[0]);
}
console.log(max(2, 1, 7, 4));
