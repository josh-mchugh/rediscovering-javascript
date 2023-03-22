'use-strict';
//Creating a class defnes a no-paramter default constructor which appears to be empty bodied. If you want to execute some code in the objects construction then we need to explicit constructor.
class Car {}

console.log(Reflect.ownKeys(Car.prototype));
