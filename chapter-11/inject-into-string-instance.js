'use-strict';
//Injecting a method into an instance is straightforward - create the function you desire and set it into a field for the method name you want. The function will run in the context of the instance.
//In this example we use 'new String()' which creates an object instead of a primitive. We use this object instead of the primitive because we cannot inject proprties into the primitive string type.
const text = new String('live');
text.reverse = function() {
    return this.split('').reverse().join('');
}

console.log(text.reverse());

//Calling reverse on another instance will not have the 'reverse' method.
const anotherText = new String('rats');

try {
    console.log(anotherText.reverse());
} catch(ex) {
    console.log(ex.message);
}
