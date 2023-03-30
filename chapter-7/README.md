# Chapter 7
It is now possible to create clean Object Oriented code with JavaScript. JavaScript now allows for a new way of creating classes, instances and static members. Within the new improvements we will be able to create clean and less error prone classes Object Orient programming with a ix of functional programming.

## define-class.js
JavaScript added the keyword 'class' which makes it obvious and unambiguous. The keyword is followed by an optional name of the class and any empty {} is the minimum syntax to define a class.

## no-hoisting.js
Class function calls cannot be called before the class definition. Calling the function before the definition will create a 'ReferenceError'.

## ok-use.js
When the definition of a class function call comes to life before the point of reference in the flow of execution, then it is okay. The new class syntax makes defining a class effortless, pleasant and removes the issues of incorrect use while keeping the same semantics of defining a class as before.

## default-constructor.js
Creating a class defnes a no-paramter default constructor which appears to be empty bodied. If you want to execute some code in the objects construction then we need to explicit constructor.

## constructor.js
A constructor may take zero, one, two or any number of parameters, including default and rest parameters. A constructor is called when an instance is created using the new keyword. Default constructor is sufficient when a constructor is not needed.

## create-method.js
To define a method with the new JavaScript class, we place the function body within the {} of the class definition without the function keyword.
A method may take zero, one, or more parameters, including default and rest paramters. Methods may access and modify any fields of the class and may perform actions.

## computed-members.js
Computed members can be dynamic names to fields, properties, and methods of a class. Computed memvers are defined with string or template literal directly within '[]'. Computed members can be added to an instance and computer methods can be called by adding '()'.