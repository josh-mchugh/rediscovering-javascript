//BROKEN CODE
//This code is broken when the variable 'i' does not use let for it's scoping.
//When the variable i uses no scoping or 'var' it will be global and the expected results can be misleading.
//When it is not scoped, it only prints 1...5 once since the variable 'i' will be a global scope for both functions.
//When we use 'let' the variable 'i' is scoped to the function and 1...5 is print 3 times in a row.
const outer = function() {
    for(let i = 1; i <= 3; i++) {
	inner();
    }
}

const inner = function() {
    for(let i = 1; i <= 5; i++) {
	console.log(i);
    }
}

outer();
