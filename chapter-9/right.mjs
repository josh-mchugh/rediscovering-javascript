//JavaScript do not need to 'use-strict' as they are already using strict. JavaScript does not need 'module' keywords and there is no ceremony to create a module, just a simple file with imports and exports.
console.log('executing right module');

const message = 'right called';

export const right = function() {
       console.log(message);
};