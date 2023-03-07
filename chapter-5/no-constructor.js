'use-strict';
//Example of how arrow functions cannot be a constructor.
const Car = (year) => this.year = year;
const car1 = new Car(2018);
