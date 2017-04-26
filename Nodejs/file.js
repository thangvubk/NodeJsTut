var fs = require('fs');
var readMe = fs.readFileSync('README.txt', 'utf8');
console.log(readMe);

fs.writeFileSync('WRITEME.txt', readMe);

fs.readFile('README.txt', 'utf8', function(err, data){
	console.log(data);
});
console.log('test');