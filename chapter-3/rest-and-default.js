'use-first';
//BROKEN CODE
//Trying to set a default value for the rest parameter causes a SyntaxError stating that the rest paramter may not have a default intializer.
const notAllowed = function(first, second, ...moreValues = [1, 2, 3]) {};
