'use-strict';
//Delegation is better than inheritance. JavaScript takes that advice to heart. Prototype-based languages use an object chain to delegate calls. Instead of relying on a base class or super class, prototype inheritances relies on an object next in the chain to serve as its base.
//Class-based inheritance is rather inflexible - once you inhert your class from another class, it's stuck to the parent.
//Prototype-based languages, inheritance is dynamic; you may altr the object that serves s the base at runtime. That baseobject is called the object's prototype.

//The two Counter objects below are different instances but share the same prototypes.
class Counter {}

const counter1 = new Counter();
const counter2 = new Counter();

const counter1Prototype = Reflect.getPrototypeOf(counter1);
const counter2Prototype = Reflect.getPrototypeOf(counter2);

console.log(counter1 === counter2);
console.log(counter1Prototype === counter2Prototype);
