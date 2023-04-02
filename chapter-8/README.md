# chapter 8
JavaScript implements prototypal inheritance. The synytax for inheritance is now much easier to use and understand.It brings an updated syntax for inheriting from an existing classes.

## examine-prototype.js
Delegation is better than inheritance. JavaScript takes that advice to heart. Prototype-based languages use an object chain to delegate calls. Instead of relying on a base class or super class, prototype inheritances relies on an object next in the chain to serve as its base. We demonstrate how two objects can be different instances but have the same prototype chain.