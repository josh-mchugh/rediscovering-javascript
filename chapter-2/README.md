# Chapter 2
This chapter dives into JavaScript's variables and constants. It explains the issues with JavaScript's `var`. The benefits of using `let` over `var` and the strengths of `const` instead of using `let`.

## redefine.js
This file demonstrates how JavaScript variables can be redefined. Being able to redefine a variable often leads to errors.

## no-block.js
This file demonstrates how JavaScript `var` type scopes can overspill over. In this example, the variable `message` is defined in the `for` loop but is `undefined` outside the loop.

## block.js
This file demonstrates how the new `let` type does not spill outside of the scope. We modified the previous example of `no-block.js` to use `let` to show how it does not overspill it's scope.

## confusion.js
This file demonstrates how `let` is very powerful in limiting scope of the variable but has mutability. Mutability can cause unwanted bugs and confusing code when not handled with care. It is bet to favor immutability when presented with an option too.

## letconst.js
This file demonstrates how `const` is immutable. `const` variables should not change. When an attempt to change the `const` value, we will get a runtime error.

## const-reach.js
This file demonstrates how `const` protects primitives and the references. It also demonstrates how it does not protect the internals of the refernced object.

## change-string.js
This file demonstrates how JavaScript will allow us to write code to modify the string array of a const but ignore the change and preserve the original string value.

## change-string-strict.js
This file demonstrates how using 'use strict' will prevent JavaScript from silently ignoring our attempt to make a change to the string array of a const variable.

## immutable-object.js
This file demonstrates how to use Object.feeze function with const variable types to make immutable objects.