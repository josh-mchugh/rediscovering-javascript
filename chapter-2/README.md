# Chapter 2
This chapter dives into JavaScript's variables and constants. It explains the issues with JavaScript's `var`. The benefits of using `let` over `var` and the strengths of `const` instead of using `let`.

## redefine.js
This file demonstrates how JavaScript variables can be redefined. Being able to redefine a variable often leads to errors.

## no-block.js
This file demonstrates how JavaScript `var` type scopes can overspill over. In this example, the variable `message` is defined in the `for` loop but is `undefined` outside the loop.

## block.js
This file demonstrates how the new `let` type does not spill outside of the scope. We modified the previous example of `no-block.js` to use `let` to show how it does not overspill it's scope.