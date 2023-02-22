'use strict';
//JavaScript will not prevent us from mixing default parameters, but it leads to not clear code.  It is recommended to have default parameters be trailing parameters.
const badFetchData = function (
    location = { host: 'localhost', port: 443 },
    id,
    uri = 'employees') {

    console.log('Fetch data from http://' + location.host + ':' + location.port + '/' + uri);
};

badFetchData();
badFetchData(undefined, 4, 'magizines');
