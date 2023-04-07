///It is customary to place all the imports needed for a file at the top. Imports are not allowed in nested code and required to be at the top of the file.
//The middle module imports the right variable from the right module, prints information that the the module was loaded and executed.
import { right } from './right';

console.log('executing middle module');

export const middle = function() {
       console.log('middle called');
};