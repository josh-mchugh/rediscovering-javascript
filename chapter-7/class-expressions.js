'use-strict';
//Class expressions are useful to create dynamic classes at runtime. Class expressions can be used to create a class factory function that will create classes.
const createClass = function(...fields) {
    return class {
	constructor(...values) {
	    fields.forEach( (field, index) => this[field] = values[index]);
	}
    };
};

//The classes created from the class factory create anonymous classes which can be assigned a name.
const Book = createClass('title', 'subtitle', 'pages');
console.log(Book);
const Actor = createClass('firstName', 'lastName', 'yearStarted');
console.log(Actor);

//Once we obtained a reference to classes created using the class expressions, we can use them like classes defined using the class statement.
const fisher = new Actor('Carrie', 'Fisher', 1969);
console.log(fisher);
