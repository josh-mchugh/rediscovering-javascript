'use-strict';
//Functions may be intended to serve as constructors and the callers may use them with the 'new' to create instances.
// Arrow functions cannot serve as constructors

//function Car(year) {
//or
const Car = function(year) {
    this.year = year;
};

const car1 = new Car(2018);

console.log(car1);
