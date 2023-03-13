'use-strict';
//In this example, printDetails() demostrates how this function can be used as a tag for template literals.
//It takes two arugements which are both arrays. The first argument is the text of the template literal and then second argument is the expressions.
const printDetails = function(texts, ...expressions) {
    console.log(texts);
    console.log(expressions);
};

const name = 'John';
printDetails`Hello ${name}, how are you?`;
