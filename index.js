 var http = require('http')


 http.createServer(function(req,res){
    res.writeHead(200,{"content-type":'text/html'});
    res.end("Hello demo program Node.js.")
 }).listen(3000);
 console.log('server  is running on http://127.0.0.1:3000');