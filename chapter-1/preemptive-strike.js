//BROKEN CODE
//Using 'use strict' enables strict mode. It can be placed at the top of a javascript file or at the top of a function
//This directive is designed to enforce syntax and code errors at run time
//This code which would have ran and output values in both console logs now throws an error about the variable 'haha' not being defined on the second console log
'use strict';

const oops = function() {
    haha = 2;
    console.log(haha);
}

oops();
console.log(haha);
