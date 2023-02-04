// BROKEN CODE
// Issues with semicolons as javascript will insert semi-colons if they are not present.
// The second return will have a return added after since the javascript automatically inser it.
const compute = function(number) {
  if(number > 5) {
    return number
      + 2;
  }

  if(number > 2) {
    return
      number + 2;
  }
};

// expected result is 8 since variable is on same line as return
console.log(compute(6));

// expected result is undefined since semi-colon is added after return
console.log(compute(3));

