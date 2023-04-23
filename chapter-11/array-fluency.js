'use-strict';
//Multiple properties can be added at one time. In this example we add two properties to the Array class which is 'first' and 'last' and both have a 'get' and 'set' so values can be retrieved and set. It is also possible to inject static properties that are available on the class level of any instance.
const langs = ['JavaScript', 'Ruby', 'Python', 'Clojure'];

Object.defineProperties(Array.prototype, {
    first: {
        get: function() {
            return this[0];
        },
        set: function(value) {
            this[0] = value
        }
    },
    last: {
        get: function() {
            return this[this.length - 1];
        },
        set: function(value) {
            this[Math.max(this.length -1, 0)] = value
        }
    }
});

const firstElement = langs.first;
const lastElement = langs.last;

console.log(firstElement);
console.log(lastElement);

langs.first = 'Modern Javascript';
langs.last = 'ClojureScript';

console.log(langs);
