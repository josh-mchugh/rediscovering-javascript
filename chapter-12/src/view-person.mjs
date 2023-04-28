//The '@ToString()' decorator injected to the 'toString()' instance method into the person class and can do to any class it decorates. The 'Person' class 'toString()' will print the keys and values of the class and exclude any that were properties in the metadata.
import Person from './person.mjs';

const peter = new Person('Peter', 'Parker', 23);

console.log(peter.toString());
