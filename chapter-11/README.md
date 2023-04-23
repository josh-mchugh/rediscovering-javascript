# Chapter 11
Metaprogramming is a way to extend a program at runtime; it is the ability to write code that writes code. It is one of the most complex and new futures of JavaScript. Metaprogramming has two styles: member injection and member synthesis. Member injection is useful to add well-lknow methods to existing classes. Metaprogramming is quite powerful, but you have to be very careful when using it.

## dynamic-access.js
Dynamic access to JavaScript variables can be used via the dot notation similar to Java, C# or it can be accessed via '[]' operator. Fields and methods can be accessed via the '[]' operator in a dynamic sense. JavaScript considers objects to be like hashmaps with keys and values. When using the '[]' it is best to use variables to contain the names as Transpilation and uglification tools can shorten JavaScript code and may rename member names to shorter names. These tools could give different results which only appear in production

## inject-into-string-instance.js
Injecting a method into an instance is straightforward - create the function you desire and set it into a field for the method name you want. The function will run in the context of the instance.

## inject-into-string-class.js
Injecting a method into the class's prototype instead of the class itself is how we can inject a method into a classes and all instances will have it. If the instance method was already present in the prototype, the the injection will replace it for all instances. If we inject a method into only one instance, then the method is only replaced on that instance and the other instances will continue to use the original method.

## inject-a-property.js
Injecting a property takes a bit more effort then injecting a field or a method. Properties are authored a lot like methods but get marked with 'get' and 'set' when we create the class. Usingingthe 'defineProperty()' we are able to inject the property with it's name and it's function.
