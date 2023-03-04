'use-strict';
//We use an anonymous generator function 'primesStartingFrom' which is indicated as a generator by the'*' after the function keyword.
// The infinite loop uses yield with the for...of loop so it returns a value and waits for a call back from the call which is the for...of loop. If the loop is broken the infinite loop stops since the yield is never returned.
const isPrime = function(number) {
    for(let i = 2; i < number; i++) {
	if(number % i === 0) return false;
    }

    return number > 1;
};

const primesStartingFrom = function*(start) {
    let index = start;

    while(true) {
	if(isPrime(index)) yield index;
	index++;
    }
};

for(const number of primesStartingFrom(10)) {
    process.stdout.write(number + ', ');
    if(number > 25) break;
}
