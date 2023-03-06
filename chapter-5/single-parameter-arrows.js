'use-strict';
//Parentheses around the parameter list are required when an empty parameter list or takes more than one paramter. If the parameter list is only on parameter, then parenthese are optional.
const greet = subject => console.log('Hello ' + subject);
setTimeout(greet.bind(null, 'Earthling'), 2000);
