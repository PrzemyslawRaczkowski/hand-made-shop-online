var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 5050;




app.use(express.static(path.join('C:/Repositories/hand-made-shop-online/public')));

app.get('/', function (request, response) {
    response.sendFile('C:/Repositories/hand-made-shop-online/public/index.html')
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log('running server on port ' + port);
});