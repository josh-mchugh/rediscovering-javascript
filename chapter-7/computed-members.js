'use-strict';
//To create a computed property, we place a variable contianing the name of the property as the value in []. It can be a string or a template literal within the [].
const NYD = `New Year's Day`;

class Holidays {
    constructor() {
	this[NYD] = 'January 1';
	this["Valentine's Day"] = 'February 14';
    }
    ['list holidays']() {
	return Object.keys(this);
    }
}

//In addition to defining computed field and methods within the class, we can add them to an instance.
const usHolidays = new Holidays();
usHolidays['4th of July'] = 'July 4';

//To access a computed field, place the computer name within [].
//For calling methods, we add () after the [] which tells JavaScript to invoke as a method instead of accessing the computed name as a field.
console.log(usHolidays[`Valentine's Day`]);
const methodName = 'list holidays';
console.log(usHolidays[methodName]());
