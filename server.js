var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2>Lookit that! ... Growlybear\'s on Nodejitsu!</h2>');
});

server.listen(process.env.PORT || 8080);
