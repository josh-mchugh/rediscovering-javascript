'use-strict';
//Functions can have multiple default paramters. If a call those not use all the paramters then it will use the default paramters.
const fetchData = function(
    id,
    location = { host: 'localhost', port: 443 },
    uri = 'employees') {

    console.log('Fetching data from https://' + location.host + ':' + location.port + '/' + uri);
}

fetchData(1, { host: 'agiledeveloper', port: 404 }, 'books');
fetchData(1, { host: 'agiledeveloper', port: 404 });
fetchData(2);
//When a parameter is not present, you can pass undefined. It is not clean but the default values will be used. It is not possible to skip the parameter as it will cause a syntax error even without 'use-strict';. 
//fetchData(3,,'books'); -> SyntaxError: Unexpected token ','
fetchData(3, undefined, 'books');
