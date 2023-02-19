'use strict';
//The spread operator works with constructors as well. In this example we pass the pattern and flags to the constructor of RegExp via a spread opertator.
const patternAndFlags = ['r', 'i'];

const regExp = new RegExp(...patternAndFlags);

console.log(regExp.test('TesteR'));
