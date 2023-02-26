'use-strict';
//Sybols are a new primitive type and intended for limited specialized use. Symbols can be used for three purposes.
//1. To define properties for objects in such a way they don't appear during normal iteratin - these properties are not private; they're just not easily discovered like other properties.
//2. To easily define a global registery or dictionary of objects.
//3. To define some special well-known methods in objects; this feature, which fills the void of interfaces, is arguably one of the most important purposes of Symbol.
const age = Symbol('ageValue');
const email = 'emailValue';

const sam = {
    first: 'Sam',
    [email]: 'sam@example.com',
    [age]: 2
};

console.log('iterating over properties');
for(const property in sam) {
    console.log(property + ' : ' + sam[property]);
}

console.log('list of property names:');
console.log(Object.getOwnPropertyNames(sam));

console.log('list of symbol properties');
console.log(Object.getOwnPropertySymbols(sam));

console.log('accessing a symbol property:');
console.log(sam[age]);

console.log('changing value...');
sam[age] = 3;
console.log(sam[age]);
