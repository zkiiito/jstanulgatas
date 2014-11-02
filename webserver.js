var http = require('http'),
    fs = require('fs');
	
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	
	fs.readFile('test.html', function (err, data) {
		res.end(data);
	});
	
    
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');