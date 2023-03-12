'use-strict';
//Template literal tags are functions that recieve the contents of the provided template literals in two parts: the template object and the evaluated expressions.
//The template function String.raw is useful to get a raw form of a string from a template literal.
//A tag is useful to perform some special purpose some special processing on a template literial.
//A tag does not have to return a string; it may return a string, a number, an object, or nothing at all.
console.log(String.raw`some special characters: \ \n \b '`);
