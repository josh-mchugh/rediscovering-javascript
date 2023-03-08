'use-strict';
//Arrow functions have lexical scope and 'new.target' is undefined.
const arrow = () => {
    console.log(new.target);
};

arrow();
