'use-strict';
//A tag may be used to perform transformations on given template literas. In the example below the tag masks the expressions.
const mask = function(texts, ...expressions) {

    const createMask = (text) => '*'.repeat(text.length);

    const maskedText = expressions.map((expression, index) => {
	    return `${texts[index]}${createMask(expression.toString())}`
          })
	  .join('');

    const closingText = texts[texts.length - 1];

    return `${maskedText}${closingText}`;
};

const agent = `Bond`;
const organization = `MI6`;

console.log(mask`Hi, I'm ${agent}, with ${organization}.`);

