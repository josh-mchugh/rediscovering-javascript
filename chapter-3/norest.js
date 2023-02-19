'use strict';
//The spread operator can be used even when no rest paramter is declared on a function. The spread operator will spread the variables over the parameter. The extra paramters from the array will be ignored and any missing will become undfined.
const names1 = ['Laurel', 'Hardy', 'Todd'];
const names2 = ['Rock'];

const sayHello = function(name1, name2) {
    console.log('hello ' + name1 + ' and ' + name2);
};

sayHello(...names1);
sayHello(...names2);
