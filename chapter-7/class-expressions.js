'use-strict';
//
const createClass = function(...fields) {
    return class {
	constructor(...values) {
	    fields.forEach( (field, index) => this[field] = values[index]);
	}
    };
};

const Book = createClass('title', 'subtitle', 'pages');
console.log(Book);

const Actor = createClass('firstName', 'lastName', 'yearStarted');
console.log(Actor);

const fisher = new Actor('Carrie', 'Fisher', 1969);
console.log(fisher);
