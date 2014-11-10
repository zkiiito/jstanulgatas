var express = require('express'),
    app = express();

app.use('/', express.static(__dirname + '/files'));

app.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');
