'use-strict';
//The Symbol.for() function takes in a key as an argument and creates a Symbol if one already does not exists for that key or returns an existing one from the global registery.
//We can call Symbol.keyFor() function at any time to retrieve a Symbol with a given key.
const masterWizard = Symbol.for('Dumbledore');
const topWizard = Symbol.for('Dumbledore');

console.log(typeof(masterWizard));
console.log(masterWizard);
console.log(masterWizard === topWizard);

console.log('Dumbledore' === Symbol.keyFor(topWizard));
