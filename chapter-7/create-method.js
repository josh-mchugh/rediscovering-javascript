'use-strict';
//To define a method with the new JavaScript class, we place the function body within the {} of the class definition without the function keyword.
//A method may take zero, one, or more parameters, including default and rest paramters. Methods may access and modify any fields of the class and may perform actions.
//Unlike other languages, within methods in this class, we have to use 'this' to refer to other methods of the instance.
class Car {
    constructor(year) {
	this.year = year;
	this.miles = 0;
    }

    drive(distance) {
	this.miles += distance;
    }
}

const car = new Car(2023);
car.drive(123);

console.log(car);
