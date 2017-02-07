var express = require('express');

var app = express();
var port = process.env.PORT || 5050;

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log('running server on port ' + port);
});