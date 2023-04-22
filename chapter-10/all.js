'use-strict';
//The 'all()' method on Promise takes an array of promises and passes an array of results. If any one of the promises is rejected, then the 'catch()' is used. The 'all()' function returns all the successful results as an array after they have completed asynchronously and concurrently.
const fs = require('fs-extra');
const request = require('request-promise');

const countPrimes = function(number) {
    if(isNaN(number)) {
        return Promise.reject(`'${number}' is not a number`);
    }
    return request(`http://localhost:8084?number=${number}`)
        .then(count => `Number of primes from 1 to ${number} is ${count}`);
};

const countPrimesForEachLine = function(pathToFile) {
    fs.readFile(pathToFile)
        .then(content => content.toString())
        .then(content => content.split('\n'))
        .then(lines => Promise.all(lines.map(countPrimes)))
        .then(counts => console.log(counts))
        .catch(error => console.log(error));
};

countPrimesForEachLine('numbers.txt');
countPrimesForEachLine('numbers-with-error.txt');
