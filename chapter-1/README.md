# Chapter 1
This chapter covers the common gotchas which occur within Javascript. Not knowing about some of these pitfalls could lead to unexpected outcomes and unwanted bugs.

## unexpected.js and careful-with-semicolons.js
These file demostrates that Javascript may not require semicolons or some may say they are optional but these examples show that not used carefully it can cause some weird results.

## double-equals.js and triple-equals.js
These examples files show that using the == and === can yield different results. A == is good for simple null and undifined but every other instance should use a === equation.

## no-declaration.js and global-mess.js
These examples demostrate how global variables can cause issues. Forgetting to declare a variable can cause it to be a global var. A global var can effect other variables within other methods with it's global scope causing unexpected results and incorrect results.

## preemptive-strike.js & smelly.js
These files demostrate how to use 'use strict'; and es-lint can help prevent unwanted bugs by enforcing correct syntax and enforcing correct formatting.