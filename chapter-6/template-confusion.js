'use-strict';
//Template literals are evaluated when the template literal is evaluated. In the example below the 'msg1' is evaluated with the valur 4. The print function is evaluated later when the function is executed and value had changed to 0.
let value = 4;

const msg1 = `The value is ${value}`;
const print = () => `The value is ${value}`;

value = 0;

console.log(msg1);
console.log(print());
