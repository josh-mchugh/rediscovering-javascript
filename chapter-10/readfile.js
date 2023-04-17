'use-strict';
//Any method that does not return instantaneously should be asynchronous. Traditional approach to designing asynchronous functions relied on callbacks. Callback functions are hard to resuse. Sometimes a callback requires a callback to recieve data and this leads to callback hell.
//Callback hell comes from the fact callbacks:
// - Don't compose easily for multiple levels of callbacks
// - Lead to code that is hard to extend
// - Have no consistency between ordered parameters
// - Have no consistent way to handle error.
const fs = require('fs');

const displayFileContent = function(pathToFile) {
    const handleFile = function(err, contents) {
	if(err) {
	    console.log(err.message);
	} else {
	    console.log(contents.toString());
	}
    };
    try {
	fs.readFile(pathToFile, handleFile);
    } catch(ex) {
	console.log(ex.message);
    }
};

console.log(displayFileContent('./README.md'));
