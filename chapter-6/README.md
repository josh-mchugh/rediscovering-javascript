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