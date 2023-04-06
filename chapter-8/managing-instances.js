'use-strict';
//In JavaScript we can manage the instance types the base methods create. When working with prototypal inheritance, classes can be good citizens and return created instances of the object type which called the method. Classes can even use [Symbol.species] to tell their base classes which type of instance they would like back.
class Names {
    constructor(...names) {
	this.names = names;
    }
    filter1(selector) {
	return new Names(...this.names.filter(selector));
    }
    filter2(selector) {
	const constructor = Reflect.getPrototypeOf(this).constructor;
	return new constructor(...this.names.filter(selector));
    }
    filter3(selector) {
	const constructor = Reflect.getPrototypeOf(this).constructor[Symbol.species] ||
	      Reflect.getPrototypeOf(this).constructor;
	return new constructor(...this.names.filter(selector));
    }
}

class SpecializedNames extends Names {
    static get [Symbol.species]() {
	return Names;
    }
}

const specializedNames = new SpecializedNames('Java', 'C#', 'JavaScript');

//Filter1 is a method that returns a new 'Names' instance with the filtered names. This example does not leverage the an logic to determin the type of instance to return.
console.log(specializedNames.filter1(name => name.startsWith('Java')));

//Filter2 is a method that returns the type of instance which called this method. It uses Reflection and the static constructor to create the instance type which called the method and return that instance type.
console.log(specializedNames.filter2(name => name.startsWith('Java')));

//Filter3 is a method that returns the [Symbol.species] of the instance which called the method if it is present. If the [Symbol.species] is not present or defined, it will use the constructor of the calling instance to determine the return instance type.
console.log(specializedNames.filter3(name => name.startsWith('Java')));
