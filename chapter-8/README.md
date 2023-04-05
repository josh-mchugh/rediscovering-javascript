# chapter 8
JavaScript implements prototypal inheritance. The synytax for inheritance is now much easier to use and understand.It brings an updated syntax for inheriting from an existing classes.

## examine-prototype.js
Delegation is better than inheritance. JavaScript takes that advice to heart. Prototype-based languages use an object chain to delegate calls. Instead of relying on a base class or super class, prototype inheritances relies on an object next in the chain to serve as its base. We demonstrate how two objects can be different instances but have the same prototype chain.

## inheritance.js
JavaScript has an improved syntax for creating typal inheritance. It is much more clear and elegant way to override methods. The syntax is much like Java, however, it is prototypal inheritance and Java is class-based inheritance.

## inherit-from-function.js
For backwards compatibility, classes using the old syntax can be used as base classes and extends with the new 'extends' syntax.

## array-vs-string.js
In this example, we look at how String and Array which both implement the same method but have different behaviors. When calling the 'concat()' they return different instance types. MyString with the String 'concat()' returned it's own type while MyArray with the Array 'concat()' return an instance of the same type.