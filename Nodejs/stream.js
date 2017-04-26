var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/README.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/WRITEME.txt');

// myReadStream.on('data', function(chunk){
// 	console.log('new chunk received:', chunk);
// 	myWriteStream.write(chunk);
// });

//do the same thing
//myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res){
	console.log('request was made ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	var myReadStream = fs.createReadStream('index.html', 'utf8');
	myReadStream.pipe(res);
	//res.end();
});

server.listen(8888, '127.0.0.1');
console.log('listening to port 8888');