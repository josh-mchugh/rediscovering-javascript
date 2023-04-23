# Chapter 11
Metaprogramming is a way to extend a program at runtime; it is the ability to write code that writes code. It is one of the most complex and new futures of JavaScript. Metaprogramming has two styles: member injection and member synthesis. Member injection is useful to add well-lknow methods to existing classes. Metaprogramming is quite powerful, but you have to be very careful when using it.

## dynamic-access.js
Dynamic access to JavaScript variables can be used via the dot notation similar to Java, C# or it can be accessed via '[]' operator. Fields and methods can be accessed via the '[]' operator in a dynamic sense. JavaScript considers objects to be like hashmaps with keys and values. When using the '[]' it is best to use variables to contain the names as Transpilation and uglification tools can shorten JavaScript code and may rename member names to shorter names. These tools could give different results which only appear in production

## inject-into-string-instance.js
Injecting a method into an instance is straightforward - create the function you desire and set it into a field for the method name you want. The function will run in the context of the instance.
