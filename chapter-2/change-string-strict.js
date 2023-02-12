//BROKEN CODE
//This code demonstrates how the 'use strict' fails loudly when trying to mutate  the value instead of silently ignoring it.
'use strict';

const greet = 'dude';
console.log(greet);

greet[0] = 'r';
console.log(greet);
