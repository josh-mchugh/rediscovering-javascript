'use-strict';
//Dynamic access to JavaScript variables can be used via the dot notation similar to Java, C# or it can be accessed via '[]' operator. Fields and methods can be accessed via the '[]' operator in a dynamic sense. JavaScript considers objects to be like hashmaps with keys and values. When using the '[]' it is best to use variables to contain the names as Transpilation and uglification tools can shorten JavaScript code and may rename member names to shorter names. These tools could give different results which only appear in production
class Person {
    constructor(age) {
        this.age = age;
    }

    play() {
        console.log(`The ${this.age} year old is playing`);
    }

    get years() {
        return this.age;
    }
}

const sam = new Person(2);

console.log(sam.age);
sam.play();

const fieldName = 'age';
const methodName = 'play';

console.log(sam[fieldName]);
sam[methodName]();

console.log(`Members of sam: ${Object.keys(sam)}`);

for(const property in sam) {
    console.log(`Property: ${property}, Value: ${sam[property]}`);
}

console.log(Object.getOwnPropertyNames(Reflect.getPrototypeOf(sam)));
