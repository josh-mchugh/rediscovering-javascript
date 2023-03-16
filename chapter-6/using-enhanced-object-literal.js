'use-strict';
//In this example we use the object literal to create the same object which we created in the previous example using the old way. With the object literal we are able to deconstruct the paramters to variables without using the colon as they have the same name. Adding functions is easier as we can drop the method in the return object with just a method declaration. Computed values are also now first class citizens and can be easily added with template literals.
const createPerson = function(name, age, sport, sportFn) {
    return {
	name,
	age,
	toString() {
	    return `${this.name} ${this.age}`;
	},
	[`play${sport}`]: sportFn;
    };
};

const sam = createPerson('Sam', 21, 'Soccer', function() { console.log(`${this.name}, kick, don't touch`); });
