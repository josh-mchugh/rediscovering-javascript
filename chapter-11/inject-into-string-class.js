'use-strict';
//Injecting a method into the class's prototype instead of the class itself is how we can inject a method into a classes and all instances will have it. If the instance method was already present in the prototype, the the injection will replace it for all instances. If we inject a method into only one instance, then the method is only replaced on that instance and the other instances will continue to use the original method.
const text = new String('live');
const anotherText = 'rats';
const primitiveText = 'part';

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

console.log(text.reverse());
console.log(anotherText.reverse());
console.log(primitiveText.reverse());
