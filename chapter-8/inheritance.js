'use-strict';
//JavaScript has an improved syntax for creating typal inheritance. It is much more clear and elegant way to override methods. The syntax is much like Java, however, it is prototypal inheritance and Java is class-based inheritance.
//To inherit from another class we use the 'extends' keyword. Withing the constructor the 'super()' must be called before accessing 'this'. The call to 'super()' will invoke the constructor of the base class.
class Person {
    constructor(firstName, lastName) {
	console.log('initializaing Person fields');
	this.firstName = firstName;
	this.lastName = lastName;
    }

    toString() {
	return `Name: ${this.firstName} ${this.lastName}`;
    }

    get fullName() {
	return `${this.firstName} ${this.lastName}`;
    }

    get surname() {
	return this.lastName;
    }
}

//To override a method from the base class you write a method in the derived class with the same method name as the base class.
// You can override a property in the derived class by defining a property with the same name as in the base class.
class ReputablePerson extends Person {
    constructor(firstName, lastName, rating) {
	console.log('creating a ReputablePerson');
	super(firstName, lastName);
	this.rating = rating;
    }

    toString() {
	return `${super.toString()} Rating: ${this.rating}`;
    }

    get fullName() {
	return `Reputed ${this.surname}, ${super.fullName} `;
    }
}

const alan = new ReputablePerson('Alan', 'Turing', 5);
console.log(alan.toString());
console.log(alan.fullName);
