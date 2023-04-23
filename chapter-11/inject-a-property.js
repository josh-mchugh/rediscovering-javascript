'use-strict';
//Injecting a property takes a bit more effort then injecting a field or a method. Properties are authored a lot like methods but get marked with 'get' and 'set' when we create the class. Usingingthe 'defineProperty()' we are able to inject the property with it's name and it's function.
const today = new Date();

Object.defineProperty(today, 'isInLeapYear', {
    get: function() {
        const year = this.getFullYear();
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
});

console.log(`${today.getFullYear()} is a leap year?: ${today.isInLeapYear}`);

Object.defineProperty(Date.prototype, 'isInLeapYear', {
    get: function() {
        const year = this.getFullYear();
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
});

for(const year of [2018, 2019, 2020, 2021]) {
    const yayOrNay = new Date(year, 1, 1).isInLeapYear ? '' : 'not ';
    console.log(`${year} is ${yayOrNay}a leap year`);
}
