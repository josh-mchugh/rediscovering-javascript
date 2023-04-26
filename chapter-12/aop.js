'use-strict';
//Aspect-oriented programming (AOP) is a special case of metaprogramming where function calls may be intercepted with advices. An advice is a piece of code that is exercised in a particular context. Advices can run 'Before', 'After', and 'Around' beofre a function call.
const greet = function(message, name) {
    return `${message} ${name}!`;
};

const invokeGreet = function(func, name) {
    console.log(func('hi', name));
};

invokeGreet(greet, 'Bob');

const beforeAdvice = new Proxy(greet, {
    apply: function(target, thisArg, args) {
        const message = args[0];
        const msgInCaps = message[0].toUpperCase() + message.slice(1);

        return Reflect.apply(target, thisArg, [msgInCaps, ...args.slice(1)]);
    }
});

invokeGreet(beforeAdvice, 'Bob');

const beforeAndAfterAdvice = new Proxy(greet, {
    apply: function(target, thisArg, args) {
        const newArguments = ['Howdy', ...args.slice(1)];

        const result = Reflect.apply(target, thisArg, newArguments);

        return result.toUpperCase();
    }
});

invokeGreet(beforeAndAfterAdvice, 'Bob');

const aroundAdvice = new Proxy(greet, {
    apply: function(target, thisArg, args) {
        if(args[1] === 'Doc') {
            return "What's up, Doc?";
        }
        return Reflect.apply(target, thisArg, args);
    }
});

invokeGreet(aroundAdvice, 'Bob');
invokeGreet(aroundAdvice, 'Doc');
