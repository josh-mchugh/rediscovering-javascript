//BROKEN CODE
//If we remove the 'let' from the variable 'haha' it will be assigned as a var type which is global
//When it is a var type, it the value is set can be printed in the console.log() outside the function oops()
//When changing it to a let type, it is scoped to the function and throws an exception that haha cannot be found
const oops = function() {
    let haha = 2;
    console.log(haha);
};

oops();
console.log(haha);
