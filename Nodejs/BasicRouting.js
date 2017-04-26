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
	if(req.url == '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('index.html', 'utf8').pipe(res);
	} else if(req.url == '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('contact.html', 'utf8').pipe(res);
	} else if(req.url == '/api'){
		res.writeHead(200, {'Content-Type':'application/json'});
		var myObj = {
			'name': 'Ryu',
			'job': 'Ninja',
			'age': 29
		};
		res.end(JSON.stringify(myObj));
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream('404.html', 'utf8').pipe(res);
	}
});

server.listen(8888, '127.0.0.1');
console.log('listening to port 8888');