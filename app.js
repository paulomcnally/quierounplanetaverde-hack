var http = require('http');

var querystring = require('querystring');

var data = querystring.stringify({
    proyecto_id: 1
});

var options = {
    hostname: 'quierounplanetaverde.com',
    port: 80,
    path: '/votar-proyecto',
    method: 'POST',headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();




/*


var request = require('request');

var url = 'http://quierounplanetaverde.com/votar-proyecto';




    request.post(url, {form:{"proyecto_id":2}},function (error, response, body) {

        if( error ){
            console.log( error );
        }
        else{
               console.log( body );
        }
    });


});
    */