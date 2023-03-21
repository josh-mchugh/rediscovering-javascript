'use-strict';
//If the definition comes to if before the point of reference in the point of referece in the flow of execution, then it is all good.
const createCar = function() {
    return new Car();
};

class Car {}

console.log(createCar());
