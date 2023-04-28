# Chapter 12
Method synthesis is the most powerful form of metaprogramming. It can alter the API and the behavior of objects based on the runtime context and state of the objects. Method synthese is a recent feature in JavaScript. It introduces two new classes Relfect and Proxy, which with method synthesis can help code become incredibly extensible.

## get-set-prototype.js
Reflect provides new and elegant ways to get and change the prototype of an object. Moding the prototype of an object is a risky buisness and should be sed judiciously and sparingly.

## reflect-get-set.js
With the new Reflect we can access the 'property' of a class dynamically instead of using the '[]' operator. Reflect has methods to iterate over the keys of an objet and to check if properties exist. Reflect works well with Proxy and serves as a conduit for default implmentation of methods in Proxy

## creating-proxy.js
The Proxy class stands in for another object or a function and can intercept or trap calls to fields, methods, and properties. Proxies can be used to synthesize behavior on a class. In this example we used the Proxy to inertecept the request for the 'age' property and forward all other read accesses on the properties. This is an example of the Control Proxy pattern to  restrict access to some members of a class.

## revocable.js
Revocable Proxy can restrict access to an object after some time after the condition is met. In this example, the counter is able to count for 100 miliseconds in 20 milisecond intervals before the proxy is revoked and the calls to increment no longer work.

## aop.js
Aspect-oriented programming (AOP) is a special case of metaprogramming where function calls may be intercepted with advices. An advice is a piece of code that is exercised in a particular context. Advices can run 'Before', 'After', and 'Around' beofre a function call.

## fluent-map.js
Member Synthesis allows us to use Proxy to trap calls for missing properties. In this example if a member does not exist on the target object, then we can synthesize the behavior.  

## map-synthesis.js
Leveraging JavaScripts prototype inheritence we can set a proxy with a 'get()' trap on 'Map' prototype. This new design compared to previous, we do not have to worry about existing members. The proxy now serves as the appointed prototye since we know when JavaScript calls a property on an object, it requests it from the object's prototype when it is not found and propagates up the objects prototye chain. The proxy will be called only for nonexistent members since it is at the root of the prototype chain.

## src/component.mjs && src/sample.component.mjs && src/inspect-component.mjs
A decorator is an intercepting function that is executed at runtime. Component() function receives properties as its parameter but immediately returns another function - the decorator function. The decorated class from the function apply the metadata to the target.  When JavaScript sees a decorator, it places a call to a function with the name of the decorator. The metadata from the decorator on 'SampleComponent' are able to be retreived from the metadata on the object via Reflect with the 'reflect-metadata' library.
