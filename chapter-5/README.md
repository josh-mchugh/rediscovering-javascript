# Chapter 5
Anonymous functions have been in JavaScript from day one. Arrow functions are new and declutter the code and make the code more expressive. Arrow functions are NOT a direct replacement for anonymous functions. Arrow functions can promote functional style programming and its benefits.

## anonymous-to-arrow.js
In this example we take an anonymous function and convert it to an arrow function to demonstrate how the arrow function can make small anonymous functions more expressive and easier to read.

## single-parameter-arrow.js
This example demonstrates how an arrow function does not require the parentheses if the function has a single parameter. A arrow function with an empty parameter list or a parameter list with more than 1 parameter will require parameteses.

## rest-parameter-arrow.js
We demonstrate how the arrow function can use the rest parameter. In this example we take a message and subjects. It can take one more paramters to display the message.

## using-bind.js
Using bind() has some limitations as it's first parameter binds to 'this' and arrow functions use the lexical 'this'. When using arrow functions we cannot bind 'this' if bind() is called.

## named-anonymous.js
Arrow functions cannot be named. In this example we demonstrate how anonymous functions can be named and be used recursively.

## car.js
Example of using a function as a constructor to create an new instance. Arrow functions are not able to be used as a constructor.

## no-constructor.js
Example of an arrow function not being able to be used as a constructor. When the code is executed, it throws a runtime error stating that it is not a constructor.

## new-target.js
Regular functions can use 'new.target' to determine if the function was called as a constructor or a as a regular function.

## arrow-new-target.js
Arrow functions use lexical scope and do not have the property 'new.target' which will be undefined.

## embedded-arrow-new-target.js
An arrow function inside a function will bel able to get the 'new.target' from it's lexical scoping.

## arrow-prototype.js
Arrow functions do not have a prototype property, if your code make heavy use of the prototype property of a function the using regular functions might be a better candidate.

## When to Use Arrow Functions
- Do not use arrow functions to define methods of a class, in an object literal or through Object.prototype. The major hiccup here is the lexical scoping of 'this'. If the method were defined using an arrow function, when the method is called, 'this' will not refer to instance on which the method is called.
- Avoid multiline arrow functions as arguments to functions.
- Use arrow functions if the function is a short one-liner. The reduced noice of arrow functions shines here.
- When registering event handlers, do not use arrow functions if 'this' needs dynamic scoping instead of lexical scoping. But if you want lexical scoping instead of dynamic scoping for 'this', then arrow functions are a great choice.
- Use single-line arrow functions as arguments to functions. The readability of code is not lost, especially if we break the lines and indent on each argument.