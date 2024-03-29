# Literals and Destructing
In this chapter we look at new features within JavaScript to reduce noise and clutter within code. Template literals, multiline strings, object literals, and destructing are new ways to reduce the code clutter and improve readability and ease of coding.

## template-literals.js
Template literals are strings with embedded expressions. The expressions may be a single variable, multiple variables with operations, a function call, or combinations of them.

## template-confusion.js
Template literals are evaluated when the template literal is evaluate. This is something to keep in mind as it can lead to confusion and another reason we should honor immutability whenever possible.

## nested.js
Template literals can have nested template literals. If a nested template literal is hard to read the break the nested template literal into a seperate regular function or an arrow function.

## multiline.js
Template literals may be single or multiline. Multiline template literals preserve indentations and line breaks.

## using-raw.js
Template literal tags are functions that receive the contents of the provided template literal in two parts: the template object and the evaluated expressions. In this example we use the String.raw tag to get the raw form of the string from the template literal.

## print-template-literal.js
In this example, printDetails() demostrates how this function can be used as a tag for template literals. It takes two arugements which are both arrays. The first argument is the text of the template literal and then second argument is the expressions.

## mask.js
A tag may be used to perform transformations on given template literas. In the example below the tag masks the expressions. Since tags may transform template literals into representaions, the possiblities of its application is endless.

## without-enhanced-object-literals.js
Creating an object by assigning fields wih values from existing variables is a common operation. The code demonstrated in this file, showcases the noisy code that it took to create an object with a few fields and methods. Some functions are computed and not allowed in the object initialization list.

## using-enhanced-object-literals.js
This example demonstrates creating the same object variables in the previous example. We were able to use Object literals to reduce and simplify the code. Object literals allow us to directly return the object, destruct parameters into variables, drop method functions into method creation and add computed variables as first class citizens.

## multiple-returns.js
Destructing is one of the most powerful features of modern JavaScript. It allows us extract data from arrays and object. It removes the excessive and repetitive use of indexing operators or dots to get data within arrays or objects.

## object-destructuring.js
In this example we explore the ways to destruct an object. It provides an elegant way to extract data from objects into variables in local or lexical scope.

## extensible-copy.js
Using the spread operator with object destructing we are able to update, add and maintain the existing values of an object. Using this pattern is critical from the extensibility point of view and will minimize the need to track down bugs later one.