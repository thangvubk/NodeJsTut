var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('Request was made: ' + req.url);
	res.writeHead(200, {'Content-Type':'application/json'});
	var myObj = {
		'name': 'Ryu',
		'job': 'Ninja',
		'age': 29
	};
	res.end(JSON.stringify(myObj));
})

server.listen(8888, '127.0.0.1');
console.log('listening...');