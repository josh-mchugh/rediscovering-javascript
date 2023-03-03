# Chapter 4
This chapter covers enchanced loops to improve interating over collections. The new primitive type 'Symbol' and how it acts as interfaces for JavaScript. Generators and how they can help create infinite sequences.

## traditional-for.js
This example demonstrates the classic for loop iteration within JavaScript and how it resembiles the widely used constructs in C-like languages.

## enchanced-for.js
This is an example of the for...of enchanced for loop. It is a simplier for loop iteration with concise and clean code. Implmenting the enchanced for...of loop can help create less error prone code.

## using-entries.js
This example demonstrates the use of entries from the enchanced for...of loop. The entries allows us to get the index and value of an object while in the for loop. The entry return two values, the index and the value at that index.

## enchanced-for-with-index.js
This is example to demonstrate how deconstructing the entry and create easy to access index and value properties within the enchanced for...of loop. This demonstrates a clean way to iterator over an Array without having to deal with upper and lower bounds but still access the index.

## symbol-property.js
This example demonstrates how the new Symbol types can hide properties on an object during iteration unless specifically looking for Symbol values. Symbol values can still be accessed and modified.

## examine-regex.js
This example explores the RegExp object and it's properties. We can tell that the RegExp has a handful of Symbol properties associated with it.

## creating-symbols.js
This code snippet showcases the Symbol() function and the creation of the Symbol objects. It compares Symbols and their equality.

## symbol-registry.js
This snippet of code demonstrates the `Symbol.for()` function. The `Symbol.for()` function creates a `Symbol` if one already does not exists for that key in the global registry, andreturn either a newly created instance or preexisting one. We can use `Symbol.keyFor()` function at any time to retrieve a pre-created `Symbol` for a given key.

## search.js
In this example, we show how to use a Symbol with a class in a similar way to Java and C#. We declare the Symbol method within the class. It demostrates how the Symbol method on our class is called for each time the function is called on the string variable.

## iterate.js
In this example we show how Array uses the [Symbol.iterate] and allows for us to use for...of to iterate over the values.