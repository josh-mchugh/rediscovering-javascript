'use-strict';
//The arrow function in the outer function get the value of new.target value from the lexical scoping. 
const outer = function() {
    return () => console.log(new.target);
};
const arrow1 = new outer();
const arrow2 = outer();

arrow1();
arrow2();
