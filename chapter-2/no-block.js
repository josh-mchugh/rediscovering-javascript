'use strict';

console.log(message);

console.log('Entering loop');
for(var i = 0; i < 3; i++) {
    console.log(message);
    var message = 'spill' + i;
}
console.log('Exiting loop');

console.log(message);
