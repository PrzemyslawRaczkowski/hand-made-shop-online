var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 5050;


app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', function (request, response) {
    response.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log('running server on port ' + port);
});