'use-strict';
//A WeakMap or WeakSet provides the ability to for the values or keys to be garbage collected if they are not neeed in the application. Objects within the WeakMap or WeakSet may go away at any time without notice. To avoid any suprises WeakSet and WeakMap have some restrictions on how we can access the elements.
//The values in WeakSet and keys for WeakMap are required to be objects, not primitives.
//The weak collections are not enumerable.
//The WeakSet provides only methods 'add()', 'delete()', 'has()' to work on the elements in the collection.
//The WeakMap provides the 'get()', 'delete()', 'set()', and 'has()' methods.
//We cannot query the size of either collection as there is no 'size' property.
const MAX = 10000000000;
const map = new WeakMap();

for(let i = 0; i <= MAX; i++) {
    const key = {index: i};
    map.set(key, i);
}

console.log('DONE');
