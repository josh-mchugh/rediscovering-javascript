'use-strict';
//JavaScript can use the parameters to compute vales. In this example, the localTax is calulated based on the stateTax.
//Parameters much used in order and defined otherwise it will throw a runtime error.
const computeTax = function(amount,
			    stateTax = 15,
			    localTax = stateTax * .1) {
    console.log('stateTax: ' + stateTax + ' localTax: ' + localTax);
};

computeTax(100, 10, 2);
computeTax(100, 10);
computeTax(100);
computeTax();
