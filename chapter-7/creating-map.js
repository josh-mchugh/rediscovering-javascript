'use-strict';
//A Map is an associative collection of keys and values where the keys are distinct. Key and values may be any primitive or object. Maps can be initialized with values or values can be added to an empty map.
//Values can be added to a Map with the 'set()' which takes a key and value as the parameters.
const scores = new Map([['Sara', 12], ['Bob', 11], ['Jill', 15], ['Bruce', 14]]);
scores.set('Jake', 14);

console.log(scores.size);


//Iterating over the collection of keys and values, we use the 'entries()' method. Since it is an interable the values can be destructed in an enchanced 'for' loop.
for(const [name, score] of scores.entries()) {
    console.log(`${name} : ${score}`);
}

//An internal iterator with the 'forEach' can be used to iterate over the keys and values.
//There paremeters are a bit odd for the 'forEach' as the order is 'score' then 'name'. The value comes first and then the key. This allows for the 'forEach' to be able to only iterate over the values.
scores.forEach((score, name) => console.log(`${name} : ${score}`) );


//Example of the 'forEach' iterating over only the values of a Map
scores.forEach(score => console.log(score));
