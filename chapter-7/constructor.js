'use-strict';
//A constructor may take zero, one, two or any number of parameters, including default and rest parameters. A constructor is called when an instance is created using the new keyword. Default constructor is sufficient when a constructor is not needed.
//Keep the constructor short and the execution fast - you do not want to slow down during creation of objects.
class Car {
    constructor(year) {
	this.year  = year;
    }
}

console.log(new Car(2018));
