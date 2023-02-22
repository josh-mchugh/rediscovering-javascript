'use-strict';
//Default parameters are not only limited to literals. JavaScript allows for expressions to be used as default parameters.
//The expressions are evaluated  a the time of the function call. This gives the ability to compute the default value.
const fileTax = function(papers, dateOfFiling = new Date()) {
    console.log('dateOfFiling: ' + dateOfFiling.getFullYear());
};

fileTax('stuff', new Date('2016-12-31'));
fileTax('stuff');
