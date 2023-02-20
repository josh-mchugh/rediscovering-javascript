'use strict';
//Default parameters can help assign a value for a missing argument. Here are some benefits from default parameters.
//1. We do not have to pass in a value for a parameter if the value we intend to send is the same as the sensible default. Less work and reduced noise and clutter in the code.
//2. The functions signature can evolve more freely. Ability to add a new parameter without breaking existing code.
//3. Can compensate for the lack of function overloading.
const sortByTitle = function(books, ascending = true) {
    const multiplier = ascending ? 1 : -1;
    const byTitle = function(book1, book2) {
	return book1.title.localeCompare(book2.title) * multiplier;
    };
    return books.slice().sort(byTitle);
};

const books = [
    { title: 'Who Moved My Cheese' },
    { title: 'Great Expectations' },
    { title: 'The Power of Positive Thinking' }
];

console.log(sortByTitle(books));
console.log(sortByTitle(books, false));
