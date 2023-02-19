'use strict';
//This example shows how the spread operator applies the variables. The first paramter is assigned. The spread operator, assigns the first value to the second and the remaining to the rest parameters.
const mixed = function(name1, name2, ...names) {
    console.log('name1: ' + name1);
    console.log('name2: ' + name2);
    console.log('names: ' + names);
}

mixed('Tom', ...['Jerry', 'Tyke', 'Spike']);
