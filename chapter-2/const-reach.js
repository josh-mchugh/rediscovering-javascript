//In this example we show how the JavaScript const is similar to the Java and C# version of final where it only protects the primitives and references. Const prevents us from chaning the reference but it does not prevent us from changing the internals of the object.

const max = 200;
const ok= true;
const nothing = undefined;
const nope = null;
const sam = { first: 'Sam', age: 2 };

//max = 200; Not Allowed
//ok = false; Not Allowed
//nothing = 'something'; Not Allowed
//nope = null; Not Allowed

//sam = { first: 'Sam', age: 3 }; Now Allowed

sam.age = 3;
