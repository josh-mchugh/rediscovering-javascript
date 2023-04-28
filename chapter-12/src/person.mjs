//Person class has three fields. The 'ToString' decorator is attached with the property exclude with the value 'age'.
import { ToString } from './decorators.mjs';

@ToString({exclude: ['age']})
export default class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
