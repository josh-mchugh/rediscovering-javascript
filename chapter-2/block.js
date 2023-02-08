'use strict';

//This examples shows how `let` does not spill outside of its scope and the JavaScript throws an exception when we uncomment out the console logs.

//console.log(message);

console.log('Entering loop');
for(let i = 0; i < 3; i++) {
    //console.log(message);
    let message = 'spill ' + i;
}

console.log('Exiting loop');

//console.log(message);

