# Chapter 1
This chapter covers the common gotchas that occur within JavaScript. Not knowing about some of these pitfalls could lead to unexpected outcomes and unwanted bugs.

## unexpected.js and careful-with-semicolons.js
These files demonstrate that JavaScript may not require semicolons or may be optional, but these examples show that if not used carefully, it can cause some weird results.

## double-equals.js and triple-equals.js
These files show that using == and === can yield different results. When checking if two values are equal, it is recommended to use the triple equals. Double equals can check for null or undefined.

## no-declaration.js and global-mess.js
These examples demonstrate how global variables can cause issues. When a variable is not declared, it's defined as a var. A global variable can affect other variables within other methods with its global scope, causing unexpected and incorrect results.

## preemptive-strike.js & smelly.js
These files demonstrate how to use 'use strict'; and es-lint can help prevent unwanted bugs by enforcing correct syntax and correct formatting.
