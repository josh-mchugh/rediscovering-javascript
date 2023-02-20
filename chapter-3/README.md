# Chapter 3
This chapter we take a dive into JavaScript functions and improvements with the latest JavaScript versions. Look into spread parameters and arrows fuctions and how they improve readability and cleaner code.

## max.js
This example show how JavaScripts functions can be called with more parameters than declared and still operate and ignore the extra pameters. If fewer parameters are passed, it will declare those parameters as undeclared.

## arguments.js
This example shows how JavaScript used to rely on a type called Arguments. It still does becase of backwards compability. In this example it demonstrates a function can be declared with zero paramters but can be still passed many and worked upon because of this `arguments` object. It is recommended to use `rest parameter` going forward and not rely on `arguments`.

## restmax.js
This example shows the rest parameter and how it has a better method signature for expressing a variable with any number of arguments. The rest paramter allows of to do everything the arguments functionality did but with cleaner code and more functionality.

## functionalmax.js
This example shows how we can use the rest parameter in a functional way since it is of the type Array. This example uses the functional programming to calculate the max value of the rest parameter values in a single line of code.

Rest parameters have a few simple rules:
1. The rest parameter has to be the last formal parameter.
2. There can be at most one rest parameter in the method signature.
3. The rest parameter contains only values which have not been given an explicit name.

## greet.js
This example demonstrates the spread operator. The spread operator is the opposite of the rest paramter as it breaks a collection into discrete values. The spread operator also is used when calling a function.

## norest.js
This example demonstrates the spread operator with a function without the rest paramter. The spread operator is able to spread the array over the parameters of the function. Any extra parameters are ignored and if any are missing they become undfined.

## mixed.js
This example demotrates how the spread operator assigns the values to the function paramters. In this example it demonstrates how the spread operator will assign the values to the function paramters and any remain will be appied to a rest paramter or simply ignored.

## constructor.js
This example demonstrates the use of the spread operator on a constructor. We pass the parameters for the RegExp constructor with the spread operator.

## arrayspread.js
This example demonstrates how the spread operator can be used to copy, concatenate, and manipulate arrays.