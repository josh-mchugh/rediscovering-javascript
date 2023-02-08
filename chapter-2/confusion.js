'use strict';

//This example of code demostrates that even using let can cause issues. Using var has it's own handful of issues, but let has the issue of mutability. Since let is muteable can lease to bugs and confusion when handled without care.

let factor = 2;

let product = function(number) {
    return number * factor;
}

factor = 0;

console.log(product(4));
