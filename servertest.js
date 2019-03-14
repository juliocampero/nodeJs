// load http module
var http = require('http');

// create http server
http.createServer(function (req, res) {

// content header
res.writeHead(200, {'content-type': 'text/plain'});

// write message and signal communication is complete
res.end("Hello, World with plain text!\n");
}).listen(8125);

console.log("runing server on port 8125...");