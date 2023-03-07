'use-strict';
//Since bind() and the first argument binds to 'this', and arrow functions use the lexical 'this', we cannot bind 'this' if bind() is called on an arrow function.
const greet = function(message, name) {
    console.log(message + ' ' + name);
};

const sayHi = greet.bind(null, 'hi');
sayHi('Joe');
