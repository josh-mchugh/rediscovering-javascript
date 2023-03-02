'use-strict';
//This example shows how we use the core Symbol.search function for our new class SuperHero. With this symbol we are able call search on the string and return the position of the super heros name from the string.
//This shows how a class can implement a known symbol and use it in a similar way tp Java and C# interfaces.
class SuperHero {
    constructor(name, realName) {
	this.name =  name;
	this.realName = realName;
    }

    toString() { return this.name; }

    [Symbol.search](value) {
	console.info('this: ' + this + ', value: ' + value);
	return value.search(this.realName);
    }
}

const superHeroes = [
    new SuperHero('Superman', 'Clark Kent'),
    new SuperHero('Batman',  'Bruce Wayne'),
    new SuperHero('Ironman', 'Tony Stark'),
    new SuperHero('Spiderman', 'Peter Parker')
];
const names = 'Peter Parker, Clark Kent, Bruce Wayne';
for(const superHero of superHeroes) {
    console.log(`Result of search: ${names.search(superHero)}`);
}
