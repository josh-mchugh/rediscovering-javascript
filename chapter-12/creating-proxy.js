'use-strict';
//The Proxy class stands in for another object or a function and can intercept or trap calls to fields, methods, and properties. Proxies can be used to synthesize behavior on a class. In this example we used the Proxy to inertecept the request for the 'age' property and forward all other read accesses on the properties. This is an example of the Control Proxy pattern to  restrict access to some members of a class.
class Employee {
    constructor(firstName, lastName, yearOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get age() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

const printInfo = function(employee) {
    console.log(`First name: ${employee.firstName}`);
    console.log(`Full name: ${employee.fullName}`);
    console.log(`Age: ${employee.age}`);
};

const john = new Employee('John', 'Doe', 2010);

const handler = {
    get: function(target, propertyName, receiver) {
        if(propertyName === 'age') {
            return `It's not polite to ask that question, dear`;
        }
        return Reflect.get(target, propertyName);
    }
};
const proxyDoe = new Proxy(john, handler);
printInfo(proxyDoe);
