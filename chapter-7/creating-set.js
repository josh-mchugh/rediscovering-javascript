'use-strict';
//JavaScript now offers built-in classes for sets as first-class citizens in the language. A set is a unique collection of primitive and objects. Duplicates are not allowed.
//You can create an empty set and add objects to it, or initialize a set with the contents of an iterable.

//Example of a set with five values however one is not included as it is a duplicate.
const names = new Set(['Jack', 'Jill', 'Jake', 'Jack', 'Sara']);
console.log(names.size);

//Values can be added to a set. The 'add' function returns the current Set which allows for chaining functions together.
names.add('Mike');
names.add('Kate')
    .add('Kara');

//Set has 'entries()' which allows us to iterate over the Set with an enchanced 'for' loop or with a normal iterator with the 'forEach'
names.forEach(name => console.log(name));


//Sets do not allow for the use of 'filter()' or 'map()'. The work around is to use the spread operator to ceate an array and then use functional style methods on the array.
[...names].filter(name => name.startsWith('J'))
    .map(name => name.toUpperCase())
    .forEach(name => console.log(name));
