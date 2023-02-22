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

## objectspread.js
This example demonstrates how the spread operator can be used on an object. It can be used to create copies, copies with modified and added attributes and values. It's an elegant and concise pattern.

## sort-books.js
This example demonstrates how to set a function parameter to have default value. Default parameters allows for paramters to be passed in when called when they match the default value for less code clutter and noise. Default parameters alllow for a function to evolve without breaking existing code. Default parameters compensate for the lack of function overloading.

## multiple-default-parameters.js
This example demonstrates how to use multiple default paramters. This feature allows for functions to be called missing some tailing parameters and have the default values be used. When in a situation when a paramter is not availble and is not a tailing paramter, undfined can be used to enable the default parameters.

## mixed-default-parameters.js
This example demonstrates how JavaScript will allow us to use mixed parameters within the function signature. It is recommended that default parameters be trailing parameters.

## expression-default.js
This example demonstrates the ability to use expressions as default parameters. In the example if the parameter for the date is not present a new default date object will be created and used.

## compute-default.js
This example demonstrates the ability to use default paramters to compute a value based off another paramter if it is not present. Note that paramters must be defined in order as it will throw a ReferenceError that the variable is not defined.

## default-and-rest.js
This example demonstrates that we can use default values with parameters and have a tailing rest parameter. The rest parameter will have a default value of an empty array if it is not passed in.

## rest-and-default.js
This example demonstrates that JavaScript does not allow for default values for rest paramters. Attempting to do so will cause a SyntaxError stating that rest paramters may not have a default initializer.