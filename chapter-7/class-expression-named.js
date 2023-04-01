'use-strict';
//A class expression may be given a name for situations when it is needed. A class is known only by the name to which the expression was assigned which is 'Movie'. The expression name is only known within in the class.
//Internal names are useful to call a static method of the class that is defined using class expression from within an instance method or another static method of the class.
const Movie = class Show {
    constructor() {
	console.log('creating instance...');
	console.log(Show);
    }
};

console.log('Movie is the class name');
console.log(Movie);

const classic = new Movie('Gone with the Wind');

try {
    console.log('however...');
    console.log(Show);
} catch (ex) {
    console.log(ex.message);
}
