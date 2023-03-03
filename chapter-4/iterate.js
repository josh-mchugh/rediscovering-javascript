'use-strict';
//This is an example of how the Array uses [Symbol.iterate] which allows us to use the for...of loop to iterate over the Array.
const names = ['Tom', 'Jerry', 'Tyke'];

for(const name of names) {
    console.log(name);
}
