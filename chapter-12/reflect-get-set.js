'use-strict';
//With the new Reflect we can access the 'property' of a class dynamically instead of using the '[]' operator. Reflect works well with Proxy.
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

const propertyName = 'age';

Reflect.set(sam, propertyName, 3);
console.log(Reflect.get(sam, propertyName));

Reflect.apply(sam.play, sam, []);
Reflect.apply(Person.prototype.play, sam, []);
