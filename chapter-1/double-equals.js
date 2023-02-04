//BROKEN CODE
//Using the double equals can lean to unexpected errors as it truthy and falsy.
//It is useful for doing null checks as it also includes undefined
const a = '1';
const b = 1;
const c = '1.0';

//a and b are consider equal since both values are 1
console.log(a == b);
//b and c are consider equal since both values are 1
console.log(b == c);
//a and c use a lexical comarision are not consider equals
console.log(a == c);
