'use-strict';
//In this example, we look at how String and Array which both implement the same method but have different behaviors. When calling the 'concat()' they return different instance types. MyString with the String 'concat()' returned it's own type while MyArray with the Array 'concat()' return an instance of the same type.
class MyString extends String {}
class MyArray extends Array {}

const concString = new MyString().concat(new MyString());
const concArray = new MyArray().concat(new MyArray());

console.log(`instance0f MyString?: ${concString instanceof MyString}`);
console.log(`instanceof MyArray?: ${concArray instanceof MyArray}`);
